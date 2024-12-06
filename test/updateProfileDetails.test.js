import { updateProfileDetails } from '../src/js/ProfileFunctions';
import { updateDoc, doc } from "firebase/firestore";

jest.mock("firebase/firestore", () => ({
    updateDoc: jest.fn(),
    doc: jest.fn(),
}));

describe("updateProfileDetails", () => {
    const mockFirestoreDocRef = {};
    const mockUID = "testUserId";

    beforeEach(() => {
        doc.mockReturnValue(mockFirestoreDocRef);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should update the profile details successfully", async () => {
        const mockData = {
            fullName: "John Doe",
            email: "john.doe@example.com",
        };

        await updateProfileDetails(mockUID, mockData);

        expect(updateDoc).toHaveBeenCalledWith(mockFirestoreDocRef, mockData);
    });
});
