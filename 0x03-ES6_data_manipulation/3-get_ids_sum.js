function getStudentIdsSum(students) {
    const IdsSum = students.reduce((accumulator, student) => accumulator + student.id, 0);
    return IdsSum;
}

export default getStudentIdsSum;