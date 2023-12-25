import React, { useState } from 'react';

const AddTeacher = () => {
  const [teachers, setTeachers] = useState([]);
  const [teacherName, setTeacherName] = useState('');

  const handleAddTeacher = () => {
    if (teacherName.trim() !== '') {
      const newTeacher = {
        id: teachers.length + 1,
        name: teacherName
      };
      setTeachers([...teachers, newTeacher]);
      setTeacherName('');
    }
  };

  return (
    <div>
      <h1>Add Teacher</h1>
      <input
        type="text"
        value={teacherName}
        onChange={(e) => setTeacherName(e.target.value)}
        placeholder="Teacher Name"
      />
      <button onClick={handleAddTeacher}>Add Teacher</button>
      <h2>Teacher List</h2>
      <ul>
        {teachers.map((teacher) => (
          <li key={teacher.id}>{teacher.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AddTeacher;
