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


// Delete task function

  const deleteTask = (id) => {
    // console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id))               //filtruj vsetky tasky ktore nemaju id na ktore sme klikli
  }
   


  return (
    <div className="container">   
      <Header title='React TaskMan' />

      { tasks.length > 0 ?                                  // ak neexistuje task zobraz hlasku
        <Tasks tasks={tasks} onDelete={deleteTask} />
        : <p className="task">No available tasks to do</p>
      }
    </div>
  );
}

export default App;
