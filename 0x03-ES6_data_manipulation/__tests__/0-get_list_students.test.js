import getListStudents from '../0-get_list_students';

describe('getListStudents function', () => {
  test('should return an array of students', () => {
    expect.assertions(1);
    const students = getListStudents();
    expect(students).toHaveLength(3);
  });

  test('should have correct student data', () => {
    expect.assertions(3);
    const students = getListStudents();
    expect(students[0]).toEqual({ id: 1, firstName: 'Guillaume', location: 'San Francisco' });
    expect(students[1]).toEqual({ id: 2, firstName: 'James', location: 'Columbia' });
    expect(students[2]).toEqual({ id: 5, firstName: 'Serena', location: 'San Francisco' });
  });
});
