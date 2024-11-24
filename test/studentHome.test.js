import { 
    fetchApprovedSubjects, 
    fetchClassSchedules, 
    isClassAvailable, 
    renderSubjectsAsCards, 
    displayStudentGreeting,
    handleCheckIn
} from '../src/js/studentHome';
import { getFirestore, doc, updateDoc, getDoc, collection, getDocs, setDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import toastr from 'toastr';

jest.mock('firebase/firestore', () => ({
    getFirestore: jest.fn(() => ({})),
    doc: jest.fn((db, collection, id) => ({ db, collection, id })),
    getDoc: jest.fn().mockResolvedValue({
        exists: jest.fn(() => true),  // This mock ensures exists is a function that returns true.
        data: jest.fn(() => ({
            fullName: 'John Doe',  // Simulate some student data
            enrolledSubjects: {
                'BIT101': { name: 'Computer Science', status: 'Enrolled' },
            }
        })),
    }),
    updateDoc: jest.fn(),
    setDoc: jest.fn(),
    getDocs: jest.fn(),
    collection: jest.fn(() => ({})),
    currentUser: { uid: 'mock-uid' },
}));

jest.mock('toastr', () => ({
    options: { positionClass: 'toast-bottom-right' },
    success: jest.fn(),
    error: jest.fn(),
    warning: jest.fn(),
    info: jest.fn(),
}));

jest.mock('firebase/auth', () => ({
    getAuth: jest.fn(() => ({
        currentUser: { uid: 'mock-uid' },
        onAuthStateChanged: jest.fn((callback) => callback({ uid: 'mock-uid' })),
    })),
    onAuthStateChanged: jest.fn(),
}));

describe('Student Home Functions', () => {
    const mockUid = 'mock-uid';
    const mockStudentData = {
        fullName: 'John Doe',
        enrolledSubjects: {
            'BIT101': { name: 'Computer Science', status: 'Enrolled' },
            'BIT102': { name: 'Math 101', status: 'Submitted for approval' },
        }
    };

    beforeEach(() => {
        // Reset mocks before each test
        jest.clearAllMocks();
    });

    it('should fetch approved subjects successfully', async () => {
        // Mock Firestore data
        getDoc.mockResolvedValueOnce({
            exists: () => true,
            data: () => mockStudentData,
        });

        const approvedSubjects = await fetchApprovedSubjects(mockUid);

        expect(getDoc).toHaveBeenCalledWith(doc({}, 'Students', mockUid));
        expect(approvedSubjects).toEqual([
            { id: 'BIT101', name: 'Computer Science', status: 'Enrolled' },
        ]);
        expect(toastr.error).not.toHaveBeenCalled();
    });

    it('should handle error fetching approved subjects when document not found', async () => {
        getDoc.mockResolvedValueOnce({
            exists: () => false,
            data: () => null,
        });

        const approvedSubjects = await fetchApprovedSubjects(mockUid);

        expect(toastr.error).toHaveBeenCalledWith('Student document not found');
        expect(approvedSubjects).toEqual([]);
    });

    it('should fetch class schedules successfully', async () => {
        const mockClassData = [
            { id: 'class1', timeSlot: 'Monday_9AM-12PM' },
            { id: 'class2', timeSlot: 'Tuesday_1PM-4PM' },
        ];
        getDocs.mockResolvedValueOnce({
            docs: mockClassData.map(data => ({ id: data.id, data: () => data })),
        });

        const classSchedules = await fetchClassSchedules('BIT101');

        expect(getDocs).toHaveBeenCalledWith(collection({}, 'Subjects', 'BIT101', 'Classes'));
        expect(classSchedules).toEqual(mockClassData);
    });

    it('should handle error fetching class schedules', async () => {
        getDocs.mockRejectedValueOnce(new Error('Firestore error'));

        const classSchedules = await fetchClassSchedules('BIT101');

        expect(toastr.error).toHaveBeenCalledWith('Error fetching classes for subject BIT101:', expect.any(Error));
        expect(classSchedules).toEqual([]);
    });

    it('should check if class is available at current time', () => {
        const now = new Date();
        const schedule = { timeSlot: 'Monday_9AM-12PM' };

        // Mocking current day as Monday and time between 9AM and 12PM
        jest.spyOn(Date.prototype, 'toLocaleString').mockReturnValueOnce('Monday');
        jest.spyOn(Date.prototype, 'getHours').mockReturnValueOnce(10);

        const result = isClassAvailable(schedule, now);

        expect(result).toBe(true);
    });

    it('should render subjects as cards successfully', async () => {
        const mockSubjects = [
            { id: 'BIT101', name: 'Computer Science' },
            { id: 'BIT102', name: 'Math 101' }
        ];
    
        // Mocking the behavior of fetching class schedules
        getDocs.mockResolvedValueOnce({
            docs: [
                { id: 'class1', data: () => ({ timeSlot: 'Monday_9AM-12PM' }) },
            ],
        });
    
        // Set up a container in the DOM for rendering
        const container = document.createElement('div');
        container.id = 'subjects-container';
        document.body.appendChild(container);  // Append the container to the document body
    
        // Calling the render function with the mock subjects
        await renderSubjectsAsCards(mockSubjects);
    
        // Check if the rendered HTML contains the subject ID
        expect(container.innerHTML).toContain('BIT101');
    });

    it('should display student greeting successfully', async () => {
        const container = document.createElement('div');
        container.id = 'subjects-container';
        getDoc.mockResolvedValueOnce({
            exists: () => true,
            data: () => ({ fullName: 'John Doe' }),
        });

        // Set up the student-greeting element in the DOM
        const greetingElement = document.createElement('div');
        greetingElement.id = 'student-greeting';
        document.body.appendChild(greetingElement);

        await displayStudentGreeting(mockUid);

        expect(toastr.error).not.toHaveBeenCalled();
        expect(document.getElementById('student-greeting').textContent).toBe('Hello, John Doe 😊!');
    });
});
