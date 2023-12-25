import React, { useState } from 'react';

const DeleteStudent = () => {
  const [students, setStudents] = useState([]);

  const handleDeleteStudent = (id) => {
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
  };

  return (
    <div>
      <h1>Delete Student</h1>
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name}
            <button onClick={() => handleDeleteStudent(student.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeleteStudent;
