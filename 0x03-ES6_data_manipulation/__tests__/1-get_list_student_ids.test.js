/* eslint-disable no-undef */
import getListStudentIds from '../1-get_list_student_ids';

// Example test cases
test('getListStudentIds returns an array of student IDs', () => {
    const students = [
      { id: 1, name: 'Guillaume', location: 'San Francisco' },
      { id: 2, name: 'James', location: 'Columbia' },
      { id: 5, name: 'Serena', location: 'San Francisco' },
    ];
  
    const studentIds = getListStudentIds(students);
    expect(studentIds).toEqual([1, 2, 5]);
  });

  test('getListStudentIds returns an empty array for non-array input', () => {
    const studentIds = getListStudentIds('not an array');
    expect(studentIds).toEqual([]);
  });
