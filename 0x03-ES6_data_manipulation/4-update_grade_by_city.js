function updateStudentGradeByCity(students, city, newGrades){
    const grade = students.filter((student) => student.location === city)
    .map((students) =>{
        const gradeObject = newGrades.find((grade) => grade.studentId === students.id)
        return {
            ...students,
            grade: gradeObject ? gradeObject.grade : 'N/A',
        };
    });
    return grade;
}
export default updateStudentGradeByCity;