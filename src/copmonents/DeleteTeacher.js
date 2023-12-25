import React, { useState } from 'react';

const DeleteTeacher = () => {
  const [teachers, setTeachers] = useState([]);

  const handleDeleteTeacher = (id) => {
    const updatedTeachers = teachers.filter((teacher) => teacher.id !== id);
    setTeachers(updatedTeachers);
  };

  return (
    <div>
      <h1>Delete Teacher</h1>
      <h2>Teacher List</h2>
      <ul>
        {teachers.map((teacher) => (
          <li key={teacher.id}>
            {teacher.name}
            <button onClick={() => handleDeleteTeacher(teacher.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeleteTeacher;
