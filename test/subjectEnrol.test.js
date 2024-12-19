import { fetchEnrolledSubjects, submitEnrollment, filterSubjects } from '../src/js/subjectEnrol';
import { getFirestore, doc, updateDoc, onSnapshot, getDoc } from 'firebase/firestore';
import toastr from 'toastr';

// Mock Firestore functions
jest.mock('firebase/firestore', () => ({
    getFirestore: jest.fn(() => ({})),
    doc: jest.fn(() => ({})),
    updateDoc: jest.fn(),
    getDoc: jest.fn(),
    onSnapshot: jest.fn(),
}));

// Mock toastr for notifications
jest.mock('toastr', () => ({
    options: { positionClass: 'toast-bottom-right' },
    success: jest.fn(),
    error: jest.fn(),
    warning: jest.fn(),
    info: jest.fn(),
}));

// Mock Firebase Auth functions
jest.mock('firebase/auth', () => ({
    getAuth: jest.fn(() => ({
        currentUser: { uid: 'mock-uid' },
        onAuthStateChanged: jest.fn((callback) => callback({ uid: 'mock-uid' })),
    })),
    onAuthStateChanged: jest.fn(),
}));

describe('filterSubjects', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <select id="department">
                <option value="BIT">BIT</option>
                <option value="BDA">BDA</option>
                <option value="BCS">BCS</option>
            </select>
            <select id="year">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <select id="subject"></select>
        `;
    });

    it('should populate the subject dropdown based on selected department and year', () => {
        const departmentSelect = document.getElementById('department');
        const yearSelect = document.getElementById('year');
        const subjectSelect = document.getElementById('subject');

        departmentSelect.value = 'BIT';
        yearSelect.value = '1';

        filterSubjects();

        expect(subjectSelect.innerHTML).toContain('BIT101');
        expect(subjectSelect.innerHTML).toContain('BIT102');
        expect(subjectSelect.innerHTML).not.toContain('BDA100');
    });

    it('should disable the subject dropdown if no department is selected', () => {
        const subjectSelect = document.getElementById('subject');
        const yearSelect = document.getElementById('year');

        document.getElementById('department').value = '';
        filterSubjects();

        expect(subjectSelect.disabled).toBe(true);
        expect(yearSelect.disabled).toBe(true);
    });

    it('should clear the subject dropdown if department or year is not selected', () => {
        const departmentSelect = document.getElementById('department');
        const yearSelect = document.getElementById('year');
        const subjectSelect = document.getElementById('subject');

        departmentSelect.value = 'BIT';
        yearSelect.value = '1';
        filterSubjects();

        yearSelect.value = '';
        filterSubjects();

        expect(subjectSelect.innerHTML).toBe('<option value="">Select Subject</option>');
    });
});

describe('subjectEnrol', () => {
    const mockFirestore = {};
    const mockDocRef = {};

    beforeEach(() => {
        getFirestore.mockReturnValue(mockFirestore);
        doc.mockReturnValue(mockDocRef);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('fetchEnrolledSubjects', () => {
        it('should populate the enrollment table with enrolled subjects', () => {
            onSnapshot.mockImplementation((docRef, callback) => {
                callback({
                    exists: () => true,
                    data: () => ({
                        enrolledSubjects: {
                            BIT101: { name: 'Computer Architecture and Organisation', status: 'Submitted for approval' },
                        },
                    }),
                });
            });

            document.body.innerHTML = `
                <table class="enrollment-table">
                    <tbody></tbody>
                </table>
            `;

            fetchEnrolledSubjects();

            const tableRows = document.querySelectorAll('.enrollment-table tbody tr');
            expect(tableRows.length).toBe(1);
            expect(tableRows[0].textContent).toContain('BIT101');
            expect(tableRows[0].textContent).toContain('Computer Architecture and Organisation');
            expect(tableRows[0].textContent).toContain('Submitted for approval');
        });

        it('should handle the absence of a student document gracefully', () => {
            onSnapshot.mockImplementation((docRef, callback) => {
                callback({
                    exists: () => false,
                });
            });

            document.body.innerHTML = `
                <table class="enrollment-table">
                    <tbody></tbody>
                </table>
            `;

            fetchEnrolledSubjects();

            const tableRows = document.querySelectorAll('.enrollment-table tbody tr');
            expect(tableRows.length).toBe(0);
        });
    });

    describe('submitEnrollment', () => {

        it('should submit enrollment successfully', async () => {
            document.body.innerHTML = `
                <form id="enrollment-form">
                    <select id="department"><option value="BIT">BIT</option></select>
                    <select id="year"><option value="1">1</option></select>
                    <select id="subject"><option value="BIT101">BIT101 - Computer Architecture and Organisation</option></select>
                </form>
            `;

            updateDoc.mockResolvedValueOnce();
            getDoc.mockResolvedValueOnce({
                exists: () => true,
                data: () => ({ enrolledSubjects: {} }),
            });

            const event = new Event('submit');
            jest.spyOn(event, 'preventDefault');

            await submitEnrollment(event);

            expect(event.preventDefault).toHaveBeenCalled();
            expect(updateDoc).toHaveBeenCalledWith(mockDocRef, {
                'enrolledSubjects.BIT101': {
                    name: 'Computer Architecture and Organisation',
                    status: 'Submitted for approval',
                },
            });
            expect(toastr.success).toHaveBeenCalledWith('Enrollment submitted for approval!');
        });

        it('should show a warning if fields are incomplete', async () => {
            document.body.innerHTML = `
                <form id="enrollment-form">
                    <select id="department"></select>
                    <select id="year"></select>
                    <select id="subject"></select>
                </form>
            `;

            const event = new Event('submit');
            jest.spyOn(event, 'preventDefault');

            await submitEnrollment(event);

            expect(event.preventDefault).toHaveBeenCalled();
            expect(toastr.warning).toHaveBeenCalledWith('Please fill in all fields before submitting.');
            expect(updateDoc).not.toHaveBeenCalled();
        });
    });
});
