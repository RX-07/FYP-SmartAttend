import { updateProfileImage } from '../src/js/Profile';
import { ref, uploadBytes, getDownloadURL, deleteObject } from "../src/js/FirebaseConfig";
import { updateDoc, doc } from "../src/js/FirebaseConfig";

jest.mock("../src/js/FirebaseConfig", () => ({
    ref: jest.fn(),
    uploadBytes: jest.fn(),
    getDownloadURL: jest.fn(),
    deleteObject: jest.fn(),
}));

jest.mock("../src/js/FirebaseConfig", () => ({
    updateDoc: jest.fn(),
    doc: jest.fn(),
}));

describe("updateProfileImage", () => {
    const mockStorageRef = {};
    const mockFirestoreDocRef = {};
    const mockUID = "testUserId";

    beforeEach(() => {
        ref.mockReturnValue(mockStorageRef);
        doc.mockReturnValue(mockFirestoreDocRef);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should upload and update the profile image successfully", async () => {
        const mockFile = new Blob(["mock file"]);
        uploadBytes.mockResolvedValueOnce({});
        getDownloadURL.mockResolvedValueOnce("newImageUrl");

        await updateProfileImage(mockUID, mockFile);

        expect(uploadBytes).toHaveBeenCalledWith(mockStorageRef, mockFile);
        expect(getDownloadURL).toHaveBeenCalledWith(mockStorageRef);
        expect(updateDoc).toHaveBeenCalledWith(mockFirestoreDocRef, { profileImageURL: "newImageUrl" });
    });

    it("should delete the old image if one exists", async () => {
        const mockFile = new Blob(["mock file"]);
        const mockOldImageRef = {};
        const mockOldImageUrl = "oldImageUrl";

        ref.mockReturnValueOnce(mockOldImageRef);
        deleteObject.mockResolvedValueOnce({});
        getDownloadURL.mockResolvedValueOnce("newImageUrl");

        await updateProfileImage(mockUID, mockFile, mockOldImageUrl);

        expect(deleteObject).toHaveBeenCalledWith(mockOldImageRef);
        expect(uploadBytes).toHaveBeenCalled();
    });
});
