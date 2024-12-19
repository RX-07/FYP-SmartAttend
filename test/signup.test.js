import { handleSignUp, createUserInFirestore } from '../src/js/SignupConfig';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getDocs, query, where, collection, doc, setDoc } from "firebase/firestore";
import { db } from '../src/js/FirebaseConfig';

// Mock Firebase Auth and Firestore
jest.mock("firebase/auth", () => ({
    getAuth: jest.fn(),
    createUserWithEmailAndPassword: jest.fn(),
}));

jest.mock("firebase/firestore", () => ({
    collection: jest.fn(),
    query: jest.fn(),
    where: jest.fn(),
    getDocs: jest.fn(),
    doc: jest.fn(),
    setDoc: jest.fn(),
}));

// Mock SignupConfig and include handleSignUp
jest.mock("../src/js/SignupConfig", () => ({
    handleSignUp: jest.fn(),
    createUserInFirestore: jest.fn(),
}));

jest.mock("../src/js/FirebaseConfig", () => ({
    db: {} // Mocking the database instance
}));

describe("handleSignUp", () => {
    let mockAuth;

    const validEmail = "student@helplive.edu.my";
    const password = "password123";
    const fullName = "John Doe";
    const department = "IT";
    const studentId = "123456";
    const phone = "0123456789";
    const imageURL = "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp";

    beforeEach(() => {
        // Initialize the mockAuth object to simulate Firebase Auth state
        mockAuth = { currentUser: { uid: "12345", email: "test@helplive.edu.my" } };
        getAuth.mockReturnValue(mockAuth); // Mock getAuth to return mockAuth object
    });

    afterEach(() => {
        jest.clearAllMocks(); // Clear mocks after each test
    });

    it("should successfully sign up with valid details", async () => {
        const mockCollection = { id: "mockCollection" };
        const mockDoc = { id: "mockDoc" };
    
        // Mock Firestore functions
        collection.mockReturnValue(mockCollection);
        doc.mockReturnValue(mockDoc);
        setDoc.mockResolvedValueOnce(true); // Mock successful Firestore document creation
    
        // Mock query and getDocs for checking unique studentId
        query.mockImplementation(() => "mockQuery");
        getDocs.mockResolvedValueOnce({ empty: true });
    
        // Mock Auth functions
        createUserWithEmailAndPassword.mockResolvedValueOnce({
            user: { uid: "12345", email: "test@helplive.edu.my" },
        });
    
        // Run the sign-up function
        const result = await handleSignUp(
            validEmail,
            password,
            fullName,
            department,
            studentId,
            phone,
            imageURL
        );
    
        // Assertions
        expect(collection).toHaveBeenCalled();
        expect(collection).toHaveBeenCalledWith(expect.anything(), "Students"); // Check correct args
        expect(doc).toHaveBeenCalledWith(mockCollection, "12345"); // Check doc creation
        expect(setDoc).toHaveBeenCalledWith(mockDoc, expect.objectContaining({
            fullName: fullName,
            studentID: studentId,
            email: validEmail,
            phone: phone,
            profileImageURL: imageURL,
            department,
            attendance: expect.anything(),
        }));
    
        expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(mockAuth, validEmail, password);
        expect(result).toBe(true);
    });
    

    it("should fail if email is not a valid @helplive.edu.my email", async () => {
        // Mock console.error
        const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

        // Run the function with an invalid email
        const result = await handleSignUp(
            "invalid@example.com", // Invalid email for testing
            "password123",
            "Test User",
            "IT",
            "12345",
            "+60123456789",
            "http://example.com/image.jpg"
        );

        // Assertions
        expect(result).toBe(false);  // Check that the result is false when email is invalid
        expect(consoleErrorSpy).toHaveBeenCalledWith("Registration failed: Email must be a @helplive.edu.my address.");
        expect(createUserWithEmailAndPassword).not.toHaveBeenCalled();
        expect(createUserInFirestore).not.toHaveBeenCalled();

        // Restore console.error
        consoleErrorSpy.mockRestore();
    });

    it("should fail if studentId is not unique", async () => {
        // Mock Firestore functions
        const mockCollection = { id: "mockCollection" };
        const mockDoc = { id: "mockDoc" };

        // Mock the `collection` and `getDocs` Firestore functions
        collection.mockReturnValue(mockCollection);  // Mock collection to return a mock object
        getDocs.mockResolvedValueOnce({ empty: false }); // Simulating that studentId is already taken

        // Run the sign-up function
        const result = await handleSignUp(
            validEmail,
            password,
            fullName,
            department,
            studentId,
            phone,
            imageURL
        );

        // Assertions
        expect(result).toBe(false);  // Expect the result to be false since the studentId is not unique
        expect(createUserWithEmailAndPassword).not.toHaveBeenCalled(); // Ensure Firebase auth is not called
    });

    it("should throw an error if Firebase fails during signup", async () => {
        const mockError = new Error("Firebase signup failed");
        createUserWithEmailAndPassword.mockRejectedValueOnce(mockError);
        getDocs.mockResolvedValueOnce({ empty: true }); // Mock studentId uniqueness

        await expect(
            handleSignUp(validEmail, password, fullName, department, studentId, phone, imageURL)
        ).rejects.toThrow("Firebase signup failed");

        expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(mockAuth, validEmail, password);
        expect(createUserInFirestore).not.toHaveBeenCalled();
    });

    it("should throw an error if Firestore fails when creating user document", async () => {
        createUserWithEmailAndPassword.mockResolvedValueOnce({
            user: { uid: "12345", email: validEmail },
        });
        getDocs.mockResolvedValueOnce({ empty: true }); // Mock studentId uniqueness
        createUserInFirestore.mockRejectedValueOnce(new Error("Firestore document creation failed"));

        await expect(
            handleSignUp(validEmail, password, fullName, department, studentId, phone, imageURL)
        ).rejects.toThrow("Firestore document creation failed");

        expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(mockAuth, validEmail, password);
        expect(createUserInFirestore).toHaveBeenCalled();
    });
});
