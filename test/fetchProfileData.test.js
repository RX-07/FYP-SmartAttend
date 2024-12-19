import { fetchProfileData } from '../src/js/ProfileFunctions';
import { getDoc, doc } from "firebase/firestore";

jest.mock("firebase/firestore", () => ({
    getDoc: jest.fn(),
    doc: jest.fn(),
}));

describe("fetchProfileData", () => {
    const mockFirestoreDocRef = {};
    const mockUID = "testUserId";

    beforeEach(() => {
        doc.mockReturnValue(mockFirestoreDocRef);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should fetch profile data successfully", async () => {
        const mockData = {
            fullName: "John Doe",
            email: "john.doe@example.com",
        };

        getDoc.mockResolvedValueOnce({
            exists: () => true,
            data: () => mockData,
        });

        const result = await fetchProfileData(mockUID);

        expect(getDoc).toHaveBeenCalledWith(mockFirestoreDocRef);
        expect(result).toEqual(mockData);
    });

    it("should return null if no data exists", async () => {
        getDoc.mockResolvedValueOnce({ exists: () => false });

        const result = await fetchProfileData(mockUID);

        expect(result).toBeNull();
    });
});
