const AddTask = () => {
  return (
    <form className="add-form">
        <div className="form-control">
            <label> Task </label>
            <input type='text' placeholder="Enter New Task"></input>
        </div>
        <div className="form-control">
            <label> Day and Time </label>
            <input type='text' placeholder="Enter Day and Time"></input>
        </div>
        <div className="form-control form-control-check"> 
            <label> Reminder? </label>
            <input type='checkbox'></input>
        </div>

        <input className="btn btn-block" type='submit' value='Save Task' />

    </form>
  )
}

export default AddTask