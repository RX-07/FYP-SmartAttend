import { handleLogin } from '../src/js/FirebaseConfig';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Mock Firebase Auth
jest.mock("firebase/auth", () => ({
    getAuth: jest.fn(),
    signInWithEmailAndPassword: jest.fn(),
}));

describe("handleLogin", () => {
    const mockAuth = {};
    beforeEach(() => {
        getAuth.mockReturnValue(mockAuth); // Mock the getAuth function to return a dummy object
    });

    afterEach(() => {
        jest.clearAllMocks(); // Reset mocks after each test
    });

    it("should log in successfully with valid credentials", async () => {
        const mockUser = { uid: "12345", email: "test@example.com" };
        signInWithEmailAndPassword.mockResolvedValueOnce({ user: mockUser });

        const result = await handleLogin("test@example.com", "password123");

        expect(signInWithEmailAndPassword).toHaveBeenCalledWith(mockAuth, "test@example.com", "password123");
        expect(result).toEqual(mockUser);
    });

    it("should throw an error for invalid credentials", async () => {
        const mockError = new Error("Invalid credentials");
        signInWithEmailAndPassword.mockRejectedValueOnce(mockError);

        await expect(handleLogin("invalid@example.com", "wrongpassword")).rejects.toThrow("Invalid credentials");

        expect(signInWithEmailAndPassword).toHaveBeenCalledWith(mockAuth, "invalid@example.com", "wrongpassword");
    });
});