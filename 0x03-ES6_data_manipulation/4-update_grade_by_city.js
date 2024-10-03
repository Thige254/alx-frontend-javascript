export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)  // Filter students by city
    .map((student) => {
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);  // Find the grade for the student
      return {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A',  // Assign grade or 'N/A' if no grade found
      };
    });
}
