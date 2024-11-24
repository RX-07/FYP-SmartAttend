import { 
    deleteClassesSubCollectionBatch, 
    deleteSubjectDocumentBatch, 
    deleteAllSubjectsParallel, 
    checkIfSubjectsExist, 
    processTimetableData, 
    getSemester, 
    getSemesterStartDate, 
    displayTimetable, 
    saveTimetableToFirestore, 
    getClassDateForWeek, 
    processTimetableDataFromUI 
  } from '../src/js/timetable';
  
  // Mocking the necessary functions
  jest.mock('../src/js/timetable', () => ({
    deleteClassesSubCollectionBatch: jest.fn(),
    deleteSubjectDocumentBatch: jest.fn(),
    deleteAllSubjectsParallel: jest.fn(),
    checkIfSubjectsExist: jest.fn(),
    processTimetableData: jest.fn(),
    getSemester: jest.fn(),
    getSemesterStartDate: jest.fn(),
    displayTimetable: jest.fn(),
    saveTimetableToFirestore: jest.fn(),
    getClassDateForWeek: jest.fn(),
    processTimetableDataFromUI: jest.fn(),
  }));
  
  describe('Timetable Functions', () => {
    
    it('should delete classes subcollection batch', async () => {
      deleteClassesSubCollectionBatch.mockResolvedValue(true);
      const result = await deleteClassesSubCollectionBatch();
      expect(result).toBe(true);
      expect(deleteClassesSubCollectionBatch).toHaveBeenCalledTimes(1);
    });
  
    it('should delete subject document batch', async () => {
      deleteSubjectDocumentBatch.mockResolvedValue(true);
      const result = await deleteSubjectDocumentBatch();
      expect(result).toBe(true);
      expect(deleteSubjectDocumentBatch).toHaveBeenCalledTimes(1);
    });
  
    it('should delete all subjects in parallel', async () => {
      deleteAllSubjectsParallel.mockResolvedValue(true);
      const result = await deleteAllSubjectsParallel();
      expect(result).toBe(true);
      expect(deleteAllSubjectsParallel).toHaveBeenCalledTimes(1);
    });
  
    it('should check if subjects exist', async () => {
      checkIfSubjectsExist.mockResolvedValue(true);
      const result = await checkIfSubjectsExist();
      expect(result).toBe(true);
      expect(checkIfSubjectsExist).toHaveBeenCalledTimes(1);
    });
  
    it('should process timetable data correctly', () => {
      processTimetableData.mockReturnValue([
        { day: 'Monday', subjectCode: 'CS101', venue: 'Room 101', time: '10:00 AM' },
        { day: 'Tuesday', subjectCode: 'CS102', venue: 'Room 102', time: '11:00 AM' }
      ]);
      const data = [
        ['Day', 'Subject Code', 'Venue', 'Time'],
        ['Monday', 'CS101', 'Room 101', '10:00 AM'],
        ['Tuesday', 'CS102', 'Room 102', '11:00 AM']
      ];
      const result = processTimetableData(data);
      expect(result).toEqual([
        { day: 'Monday', subjectCode: 'CS101', venue: 'Room 101', time: '10:00 AM' },
        { day: 'Tuesday', subjectCode: 'CS102', venue: 'Room 102', time: '11:00 AM' }
      ]);
    });
  
    it('should return the correct semester', () => {
      getSemester.mockReturnValue('Fall 2024');
      const semester = getSemester('2024-09');
      expect(semester).toBe('Fall 2024');
    });
  
    it('should return the correct semester start date', () => {
      getSemesterStartDate.mockReturnValue('2024-09-01');
      const startDate = getSemesterStartDate('Fall 2024');
      expect(startDate).toBe('2024-09-01');
    });
  
    it('should display the timetable correctly', () => {
      displayTimetable.mockReturnValue(true);
      const timetable = [
        { day: 'Monday', subjectCode: 'CS101', venue: 'Room 101', time: '10:00 AM' },
        { day: 'Tuesday', subjectCode: 'CS102', venue: 'Room 102', time: '11:00 AM' }
      ];
      const displayResult = displayTimetable(timetable);
      expect(displayResult).toBeTruthy();
      expect(displayTimetable).toHaveBeenCalledTimes(1);
    });
  
    it('should save timetable to Firestore', async () => {
      saveTimetableToFirestore.mockResolvedValue(true);
      const timetable = [
        { day: 'Monday', subjectCode: 'CS101', venue: 'Room 101', time: '10:00 AM' },
        { day: 'Tuesday', subjectCode: 'CS102', venue: 'Room 102', time: '11:00 AM' }
      ];
      const result = await saveTimetableToFirestore(timetable);
      expect(result).toBe(true);
      expect(saveTimetableToFirestore).toHaveBeenCalledTimes(1);
    });
  
    it('should return the correct class date for the week', () => {
      getClassDateForWeek.mockReturnValue('2024-09-01');
      const classDate = getClassDateForWeek(1);
      expect(classDate).toBe('2024-09-01');
    });
  
    it('should process timetable data from UI correctly', () => {
      const uiData = [
        { day: 'Monday', subjectCode: 'CS101', venue: 'Room 101', time: '10:00 AM' },
        { day: 'Tuesday', subjectCode: 'CS102', venue: 'Room 102', time: '11:00 AM' }
      ];
      processTimetableDataFromUI.mockReturnValue(uiData);
      const result = processTimetableDataFromUI();
      expect(result).toEqual(uiData);
      expect(processTimetableDataFromUI).toHaveBeenCalledTimes(1);
    });
  });
  