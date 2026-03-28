// src/components/StudentTable.jsx
import React from "react";

function StudentTable({ students, deleteStudent }) {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr style={{ background: "#cc3a3a" }}>
          <th>Roll</th>
          <th>Name</th>
          <th>Math</th>
          <th>Science</th>
          <th>English</th>
          <th>Total</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {students.map(s => (
          <tr key={s.roll}>
            <td>{s.roll}</td>
            <td>{s.name}</td>
            <td>{s.math}</td>
            <td>{s.science}</td>
            <td>{s.english}</td>
            <td>{s.total}</td>
            <td>
              <button onClick={() => deleteStudent(s.roll)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentTable;