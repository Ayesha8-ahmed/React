function StudentList({ students }) {
  return (
    <ul>
      {students.map((s, index) => (
        <li key={index}>
          {s.name} - {s.age}
        </li>
      ))}
    </ul>
  )
}

export default StudentList