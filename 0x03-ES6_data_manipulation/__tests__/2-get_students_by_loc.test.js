/* eslint-disable no-undef */
import getStudentsByLocation  from '../2-get_students_by_loc';

test('getStudentsByLocation returns students in the specified city', () => {
  const students = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];

  const city = 'San Francisco';

  const studentsInCity = getStudentsByLocation(students, city);

  expect(studentsInCity).toEqual([
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ]);
});

test('getStudentsByLocation returns an empty array for non-matching city', () => {
  const students = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];

  const city = 'New York'; // A city that doesn't match any students

  const studentsInCity = getStudentsByLocation(students, city);

  expect(studentsInCity).toEqual([]);
});
