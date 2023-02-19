import { useState } from 'react'

const AddTask = ({onAdd}) => {

    //Hooks 
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()                // nesubmitne na stranku

        //Valiadacia

        if(!text) {
            alert('Please fill in task name')
            return
        }

        onAdd({text, day, reminder})    // vkladam udaje z formulara  

        // vyprazdnit polia
        setText('')
        setDay('')
        setReminder(false)



    }


  return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label> Task </label>
            <input type='text' placeholder="Enter New Task" value={text} onChange={(e) => setText(e.target.value)}></input>
        </div>
        <div className="form-control">
            <label> Day and Time </label>
            <input type='text' placeholder="Enter Day and Time" value={day} onChange={(e) => setDay(e.target.value)}></input>
        </div>
        <div className="form-control form-control-check"> 
            <label> Reminder? </label>
            <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}></input>
        </div>

        <input className="btn btn-block" type='submit' value='Save Task' />

    </form>
  )
}

export default AddTask