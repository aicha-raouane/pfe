import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import TeacherList from './components/TeacherList';
import AddTeacher from './components/AddTeacher';
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/teachers">Teachers</Link>
            </li>
            <li>
              <Link to="/students">Students</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/teachers" exact component={TeacherList} />
          <Route path="/teachers/add" component={AddTeacher} />
          <Route path="/students" exact component={StudentList} />
          <Route path="/students/add" component={AddStudent} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
