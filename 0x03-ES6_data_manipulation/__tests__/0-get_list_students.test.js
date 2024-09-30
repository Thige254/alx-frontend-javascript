// tests/0-get_list_students.test.js
import getListStudents from '../0-get_list_students.js';

describe('getListStudents', () => {
  it('should return an array of students with id, firstName, and location', () => {
    const students = getListStudents();
    
    expect(students).toEqual([
      { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
      { id: 2, firstName: 'James', location: 'Columbia' },
      { id: 5, firstName: 'Serena', location: 'San Francisco' }
    ]);
  });

  it('should return an array of length 3', () => {
    const students = getListStudents();
    
    expect(students.length).toBe(3);
  });
});
