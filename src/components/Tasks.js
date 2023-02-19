import { useState } from 'react'
const Tasks = () => {

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
   <>
   
   {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}
   
   
   </>
  )
}

export default Tasks