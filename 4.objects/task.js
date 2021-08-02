function Student (name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;  // Ваш код

}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName//ваш код
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
    }
 }

Student.prototype.addMarks = function (...marks) {
  this.marks = [...marks];
  for (let mark of marks) {
    this.marks.push(mark);
  }
}

Student.prototype.getAverage = function () {
  let sum = 0;
  for (let mark of this.marks) {
    sum += mark;
  }
  return sum / this.marks.length;
}

Student.prototype.exсlude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}

// const student1 = new Student ("Daria", "female", 18);
// const student2 = new Student ("Maria", "female", 40);


// ваш код для остальных методов