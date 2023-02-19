import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

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


// Delete task function

  const deleteTask = (id) => {
    // console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id))               //filtruj vsetky tasky ktore nemaju id na ktore sme klikli
  }
   
// Show/Hide reminder

const toggleReminder = (id) => {
  // console.log(id)
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder} : task ))
}


  return (
    <div className="container">   
      <Header title='React TaskMan' />
      <AddTask />

      { tasks.length > 0 ?                                  // ak neexistuje task zobraz hlasku
        <Tasks tasks={tasks} 
        onDelete={deleteTask} 
        onToggle={toggleReminder}
        />
        : <p className="task">No available tasks to do</p>
      }

      

    </div>
  );
}

export default App;
