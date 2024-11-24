import { fetchSubmittedSubjects, handleApprove, handleReject } from '../src/js/subjectApprove';
import { getFirestore, doc, updateDoc, onSnapshot, collection } from 'firebase/firestore';
import toastr from 'toastr';

// Mock Firestore functions
jest.mock('firebase/firestore', () => ({
    getFirestore: jest.fn(() => ({})),
    doc: jest.fn((db, collection, id) => ({ db, collection, id })),
    updateDoc: jest.fn(),
    onSnapshot: jest.fn(),
    collection: jest.fn(() => ({})), // Mock collection
}));

// Mock toastr for notifications
jest.mock('toastr', () => ({
    options: { positionClass: 'toast-bottom-right' },
    success: jest.fn(),
    error: jest.fn(),
    warning: jest.fn(),
}));

describe('subjectApprove', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        document.body.innerHTML = `
            <table class="approval-table">
                <tbody></tbody>
            </table>
        `;
    });

    describe('fetchSubmittedSubjects', () => {
        it('should populate the table with subjects submitted for approval', () => {
            // Mock Firestore snapshot
            const mockSnapshot = {
                forEach: jest.fn((callback) => {
                    callback({
                        id: 'student1',
                        data: () => ({
                            enrolledSubjects: {
                                BIT101: { name: 'Computer Architecture', status: 'Submitted for approval' },
                                BIT102: { name: 'Web Development', status: 'Enrolled' },
                            },
                        }),
                    });
                }),
            };

            // Mock onSnapshot
            onSnapshot.mockImplementation((collectionRef, onSuccess) => {
                onSuccess(mockSnapshot);
            });

            fetchSubmittedSubjects();

            const rows = document.querySelectorAll('.approval-table tbody tr');
            expect(rows).toHaveLength(1);
            expect(rows[0].innerHTML).toContain('student1');
            expect(rows[0].innerHTML).toContain('BIT101');
            expect(rows[0].innerHTML).toContain('Computer Architecture');
        });

        it('should log an error if onSnapshot fails', () => {
            const errorMessage = 'Error fetching snapshot';
            onSnapshot.mockImplementation((_, __, onError) => {
                onError(errorMessage);
            });

            console.error = jest.fn();

            fetchSubmittedSubjects();

            expect(console.error).toHaveBeenCalledWith('Error listening to changes:', errorMessage);
        });
    });

    describe('handleApprove', () => {
        it('should update the subject status to "Enrolled" in Firestore', async () => {
            const mockEvent = {
                target: {
                    getAttribute: jest.fn((attr) => {
                        if (attr === 'data-student-id') return 'student1';
                        if (attr === 'data-subject-code') return 'BIT101';
                    }),
                },
            };

            await handleApprove(mockEvent);

            expect(doc).toHaveBeenCalledWith(expect.any(Object), 'Students', 'student1');
            expect(updateDoc).toHaveBeenCalledWith(
                { db: {}, collection: 'Students', id: 'student1' },
                { 'enrolledSubjects.BIT101.status': 'Enrolled' }
            );
            expect(toastr.success).toHaveBeenCalled();
        });

        it('should display a warning if the update fails', async () => {
            updateDoc.mockRejectedValueOnce(new Error('Update failed'));

            const mockEvent = {
                target: {
                    getAttribute: jest.fn((attr) => {
                        if (attr === 'data-student-id') return 'student1';
                        if (attr === 'data-subject-code') return 'BIT101';
                    }),
                },
            };

            await handleApprove(mockEvent);

            expect(toastr.warning).toHaveBeenCalledWith('Failed to approve enrollment. Please try again.');
        });
    });

    describe('handleReject', () => {
        it('should update the subject status to "Rejected" in Firestore', async () => {
            const mockEvent = {
                target: {
                    getAttribute: jest.fn((attr) => {
                        if (attr === 'data-student-id') return 'student1';
                        if (attr === 'data-subject-code') return 'BIT101';
                    }),
                },
            };

            await handleReject(mockEvent);

            expect(doc).toHaveBeenCalledWith(expect.any(Object), 'Students', 'student1');
            expect(updateDoc).toHaveBeenCalledWith(
                { db: {}, collection: 'Students', id: 'student1' },
                { 'enrolledSubjects.BIT101.status': 'Rejected' }
            );
            expect(toastr.success).toHaveBeenCalled();
        });

        it('should display a warning if the update fails', async () => {
            updateDoc.mockRejectedValueOnce(new Error('Update failed'));

            const mockEvent = {
                target: {
                    getAttribute: jest.fn((attr) => {
                        if (attr === 'data-student-id') return 'student1';
                        if (attr === 'data-subject-code') return 'BIT101';
                    }),
                },
            };

            await handleReject(mockEvent);

            expect(toastr.warning).toHaveBeenCalledWith('Failed to reject enrollment. Please try again.');
        });
    });
});
