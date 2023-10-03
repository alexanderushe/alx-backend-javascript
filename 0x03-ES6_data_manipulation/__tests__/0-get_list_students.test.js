/* eslint-disable no-undef */
import getListStudents from '../0-get_list_students'; // Import the function to be tested

test('getListStudents returns an array of students', () => {
  const students = getListStudents();

  expect(Array.isArray(students)).toBe(true);
  expect(students).toHaveLength(3);

  expect(students[0]).toEqual({ id: 1, name: 'Guillaume', location: 'San Fransisco' });
  expect(students[1]).toEqual({ id: 2, firstName: 'James', location: 'Columbia' });
  expect(students[2]).toEqual({ id: 5, firstName: 'Serena', location: 'San Francisco' });
});
