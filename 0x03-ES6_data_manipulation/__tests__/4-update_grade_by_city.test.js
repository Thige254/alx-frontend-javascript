import updateStudentGradeByCity from './4-update_grade_by_city.js';
import getListStudents from './0-get_list_students.js';

describe('updateStudentGradeByCity', () => {
  const students = getListStudents();

  it('should return students with updated grades for those in the specified city', () => {
    const newGrades = [
      { studentId: 5, grade: 97 },
      { studentId: 1, grade: 86 },
    ];

    const result = updateStudentGradeByCity(students, 'San Francisco', newGrades);

    expect(result).toEqual([
      { id: 1, firstName: 'Guillaume', location: 'San Francisco', grade: 86 },
      { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97 },
    ]);
  });

  it('should return students with N/A grade if they do not have a new grade', () => {
    const newGrades = [{ studentId: 5, grade: 97 }];

    const result = updateStudentGradeByCity(students, 'San Francisco', newGrades);

    expect(result).toEqual([
      { id: 1, firstName: 'Guillaume', location: 'San Francisco', grade: 'N/A' },
      { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97 },
    ]);
  });

  it('should return an empty array if no students are in the specified city', () => {
    const newGrades = [{ studentId: 5, grade: 97 }];

    const result = updateStudentGradeByCity(students, 'New York', newGrades);

    expect(result).toEqual([]);
  });
});
