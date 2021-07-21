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
    [mark].push(mark);
  }
  return this.marks;
}

Student.prototype.addMarks = function (...marks) {
  this.marks = [mark];
  for (let mark of marks) {
    [mark].push(mark);
  }
  return this.marks;
}

Student.prototype.getAverage = function () {
  let sum = 0;
  for (let mark of this.marks) {
    sum += mark;
  }
  return sum / this.marks.length;
}

Student.prototype.exlude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.exluded = "Low grades";
}

// const student1 = new Student ("Daria", "female", 18);
// const student2 = new Student ("Maria", "female", 40);


// ваш код для остальных методов