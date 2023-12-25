import React, { useState } from 'react';

const AddStudent = () => {
  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState([]);

  const handleInputChange = (event) => {
    setStudentName(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    
    if (studentName.trim() === '') {
      return;
    }
    
    const newStudent = {
      id: Math.floor(Math.random() * 1000),
      name: studentName.trim(),
    };

    setStudents([...students, newStudent]);
    setStudentName('');
  };

  return (
    <div>
      <h1>Add Student</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={studentName}
          onChange={handleInputChange}
          placeholder="Enter student name"
        />
        <button type="submit">Add</button>
      </form>
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AddStudent;
