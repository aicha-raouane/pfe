import React, { useState } from 'react';

const TeacherList = () => {
  const [teachers, setTeachers] = useState([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
  ]);

  const handleDelete = (id) => {
    const updatedTeachers = teachers.filter((teacher) => teacher.id !== id);
    setTeachers(updatedTeachers);
  };

  return (
    <div>
      <h1>Teacher List</h1>
      <ul>
        {teachers.map((teacher) => (
          <li key={teacher.id}>
            {teacher.name}
            <button onClick={() => handleDelete(teacher.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeacherList;
