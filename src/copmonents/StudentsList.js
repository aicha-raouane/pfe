import React, { useState } from 'react';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  const handleAddStudent = () => {
    const newStudent = {
      id: students.length + 1,
      name: "New Student"
    };
    setStudents([...students, newStudent]);
  };

  return (
    <div>
      <h1>Student List</h1>
      <button onClick={handleAddStudent}>Add Student</button>
      <ul>
        {students.map((student) => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
