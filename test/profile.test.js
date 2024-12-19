import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import ProfilePage from '../src/js/Profile';
import { auth, db, doc, getDoc, updateDoc, storage, ref, deleteObject, uploadBytes, getDownloadURL } from '../src/js/FirebaseConfig';
import toastr from 'toastr';

// Mock Firebase functions
jest.mock('../src/js/FirebaseConfig', () => ({
  auth: {
    onAuthStateChanged: jest.fn(),
  },
  db: {
    doc: jest.fn(),
    getDoc: jest.fn(),
    updateDoc: jest.fn(),
  },
  storage: {
    ref: jest.fn(),
    uploadBytes: jest.fn(),
    getDownloadURL: jest.fn(),
    deleteObject: jest.fn(),
  },
}));

// Mock toastr
jest.mock('toastr', () => ({
  success: jest.fn(),
  warning: jest.fn(),
  error: jest.fn(),
  options: {
    positionClass: 'toast-bottom-right',
  },
}));

describe('ProfilePage', () => {
  const mockUserId = 'mockUserId';
  const mockUserData = {
    fullName: 'John Doe',
    studentID: '12345',
    email: 'john.doe@example.com',
    department: 'Engineering',
    phone: '123-456-7890',
    profileImageURL: 'mockOldImageUrl',
    attendance: {
      totalClassesAttended: 30,
      absences: 5,
      medicalCertificateSubmitted: 3,
      upcomingClasses: 10,
    },
    medicalCertificates: [],
  };

  beforeEach(() => {
    // Mock Firebase authentication
    auth.onAuthStateChanged.mockImplementation((callback) => callback({ uid: mockUserId }));

    // Mock Firestore getDoc to return the mock user data
    getDoc.mockResolvedValue({
      exists: () => true,
      data: () => mockUserData,
    });

    // Mock Firebase updateDoc to resolve successfully
    updateDoc.mockResolvedValue({});

    // Mock Firebase uploadBytes to resolve successfully
    uploadBytes.mockResolvedValue({});

    // Mock getDownloadURL to return a new image URL
    getDownloadURL.mockResolvedValue('mockNewImageUrl');

    // Mock deleteObject to resolve successfully
    deleteObject.mockResolvedValue({});
  });

  it('should render profile data and allow updating profile image', async () => {
    render(<ProfilePage />);

    // Wait for the file input element to be in the document
    const fileInput = await screen.findByRole('input', { name: /file/i });

    // Check if profile data is displayed correctly
    expect(screen.getByText(mockUserData.fullName)).toBeInTheDocument();
    expect(screen.getByText(mockUserData.studentID)).toBeInTheDocument();
    expect(screen.getByText(mockUserData.email)).toBeInTheDocument();
    expect(screen.getByText(mockUserData.department)).toBeInTheDocument();
    expect(screen.getByText(mockUserData.phone)).toBeInTheDocument();

    // Simulate file upload
    const file = new Blob(['mock file'], { type: 'image/jpeg' });
    fireEvent.change(fileInput, { target: { files: [file] } });

    // Wait for the upload and profile update
    await waitFor(() => {
      expect(uploadBytes).toHaveBeenCalled();
      expect(getDownloadURL).toHaveBeenCalled();
      expect(updateDoc).toHaveBeenCalledWith(
        expect.anything(), // This is the doc reference
        { profileImageURL: 'mockNewImageUrl' }
      );
      expect(toastr.success).toHaveBeenCalledWith('Information successfully updated!');
    });

    // Profile image should now be updated
    const profileImg = screen.getByAltText('Profile');
    expect(profileImg).toHaveAttribute('src', 'mockNewImageUrl');
  });

  it('should display a warning when uploading an image larger than the size limit', async () => {
    const largeFile = new Blob(['mock file'], { type: 'image/jpeg' });
    Object.defineProperty(largeFile, 'size', { value: 3 * 1024 * 1024 }); // 3MB, larger than the limit

    render(<ProfilePage />);

    // Wait for the file input element to be in the document
    const fileInput = await screen.findByRole('input', { name: /file/i });

    fireEvent.change(fileInput, { target: { files: [largeFile] } });

    // Check that toastr warning is called
    await waitFor(() => {
      expect(toastr.warning).toHaveBeenCalledWith('Please upload an image smaller than 2 MB.');
    });
  });
});
