function getListStudentIds(studentList) {
  if (!Array.isArray(studentList)) {
    return [];
  }
  const id = studentList.map(student => student.id);
  return id;
}
export default getListStudentIds;