function transformStudents(students) {
  return students
    
    .filter(student => student.score > 70)

 
    .map(student => {
      let grade;

      if (student.score >= 90) {
        grade = "A";
      } else if (student.score >= 80) {
        grade = "B";
      } else {
        grade = "C";
      }

      return {
        name: student.name,
        score: student.score,
        grade: grade
      };
    })

  
    .sort((a, b) => b.score - a.score);
}
const students = [
  { name: "Amit", score: 85 },
  { name: "Neha", score: 92 },
  { name: "Rahul", score: 65 },
  { name: "Priya", score: 78 }
];

console.log(transformStudents(students));