import Header from "./components/Header";
import Tasks from "./components/Tasks";

import { useState } from 'react'


function App() {

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Do Homework 1',
        day: 'January 10th',
        reminder: true,
    },
    {
        id: 2,
        text: 'Lawnmowing',
        day: 'Jun 12th',
        reminder: false,
    },
    {
        id: 3,
        text: 'Tank gas',
        day: 'January',
        reminder: true,
    },

])



  return (
    <div className="container">   
      <Header title='React TaskMan' />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
