import getListStudents from "../0-get_list_students.js";
import getStudentIdsSum from "../3-get_ids_sum.js";

describe('getStudentIdsSum', () => {
  test('should return the correct sum of student ids', () => {
    const students = getListStudents();
    const result = getStudentIdsSum(students);
    expect(result).toBe(8); // The sum of IDs from getListStudents() should be 8
  });

  test('should return 0 for an empty array', () => {
    const result = getStudentIdsSum([]);
    expect(result).toBe(0);
  });

  test('should return correct sum with only one student', () => {
    const students = [{ id: 1, firstName: 'John', location: 'New York' }];
    const result = getStudentIdsSum(students);
    expect(result).toBe(1); // The sum of a single student's ID should be their ID
  });
});
