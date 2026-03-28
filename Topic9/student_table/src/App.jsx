import React, { useState } from "react";
import StudentTable from "./components/student_table";

function App() {
  const initialStudents = [
    { roll: 1, name: "Ali", math: 80, science: 75, english: 70 },
    { roll: 2, name: "Sara", math: 65, science: 85, english: 90 },
    { roll: 3, name: "Ahmed", math: 40, science: 50, english: 60 },
    { roll: 4, name: "Zara", math: 90, science: 95, english: 100 },
  ];

  const [students, setStudents] = useState(initialStudents);

  // Add total dynamically
  const studentsWithTotal = students.map(s => ({ ...s, total: s.math + s.science + s.english }));

  // Delete student
  const deleteStudent = roll => {
    setStudents(students.filter(s => s.roll !== roll));
  };

  return (
    <div style={{ maxWidth: "700px", margin: "20px auto", padding: "20px", background: "#3032c0", borderRadius: "8px" }}>
      <h1 style={{ textAlign: "center" }}>Student Marks Table</h1>
      <StudentTable students={studentsWithTotal} deleteStudent={deleteStudent} />
    </div>
  );
}

export default App;