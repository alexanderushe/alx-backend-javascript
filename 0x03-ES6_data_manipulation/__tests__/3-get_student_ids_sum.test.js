/* eslint-disable no-undef */
// Import the function to be tested
import  getStudentIdsSum  from '../3-get_ids_sum';

// Test cases
test('getStudentIdsSum calculates the sum of student IDs correctly', () => {
  const students = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];

  // Calculate the expected sum
  const expectedSum = 1 + 2 + 5;

  // Call the function and expect the result to be equal to the expected sum
  expect(getStudentIdsSum(students)).toBe(expectedSum);
});

test('getStudentIdsSum returns 0 for an empty list of students', () => {
  const students = [];

  // Call the function and expect the result to be 0 for an empty list
  expect(getStudentIdsSum(students)).toBe(0);
});
