/**
 * A function that creates a classroom with the specified number of students.
 *
 * @param {number} numberOfStudents - The number of students in the classroom.
 * @return {Array<function>} - An array of functions representing the student seats,
 *                             where each function returns the corresponding student number.
 */
function createClassRoom(numberOfStudents) {
  console.log(numberOfStudents);
  /**
   * A function that creates a student seat.
   *
   * @param {number} studentNumber - The student number for the seat
   * @return {function} - A function that returns the student number
   */
  function createStudentSeat(studentNumber) {
    console.log(studentNumber);
    return function getStudentSeat() {
      return studentNumber;
    };
  }

  const students = [];

  for (let studentIndex = 1; studentIndex <= numberOfStudents; studentIndex++) {
    students.push(createStudentSeat(studentIndex));
  }

  return students;
}
const classRoom = createClassRoom(10);

console.log(classRoom[0]());
console.log(classRoom[3]());
console.log(classRoom[9]());
