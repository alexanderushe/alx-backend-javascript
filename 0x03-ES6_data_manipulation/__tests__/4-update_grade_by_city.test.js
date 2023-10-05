/* eslint-disable no-undef */
// Import the function to be tested and any other necessary modules.
import updateStudentGradeByCity from '../4-update_grade_by_city'; // Adjust the import path based on your project structure.

describe('updateStudentGradeByCity', () => {
  const students = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 3, firstName: 'Alice', location: 'San Francisco' },
  ];

  const newGrades = [
    { studentId: 1, grade: 95 },
    { studentId: 3, grade: 88 },
  ];

  it('should update grades for students in the specified city', () => {
    const city = 'San Francisco';
    const updatedStudents = updateStudentGradeByCity(students, city, newGrades);

    // Assert that the updatedStudents array contains the expected students with grades.
    expect(updatedStudents).toEqual([
      { id: 1, firstName: 'Guillaume', location: 'San Francisco', grade: 95 },
      { id: 2, firstName: 'James', location: 'Columbia' },
      { id: 3, firstName: 'Alice', location: 'San Francisco', grade: 88 },
    ]);
  });

  it('should set grade to "N/A" for students without grades in newGrades', () => {
    const city = 'Columbia'; // A city where no students have new grades.
    const updatedStudents = updateStudentGradeByCity(students, city, newGrades);

    // Assert that students in the city without new grades have "N/A" as their grade.
    expect(updatedStudents).toEqual([
      { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
      { id: 2, firstName: 'James', location: 'Columbia', grade: 'N/A' },
      { id: 3, firstName: 'Alice', location: 'San Francisco', grade: 88 },
    ]);
  });
});
