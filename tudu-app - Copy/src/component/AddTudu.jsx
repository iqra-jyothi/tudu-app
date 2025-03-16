// import './container/App.css'
import { MdOutlineAddTask } from "react-icons/md";
import { useState } from "react";
function AddTudu({onnewitem}){
 
  const [task, setTask] = useState(""); // State for task input
  const [date, setDate] = useState(""); // State for date input

  const hanlename=(e)=>{
    setTask(e.target.value)
   
  }
  const hanledate=(e)=>{
    setDate(e.target.value)
    
  }
  const handlebutton=()=>{
    onnewitem(task, date);
    setDate("")
    setTask("")
  }

    return (
        <div>
             <div className="container text-center ">
  <div className="row kg-row">
    <div className="col">
      <input    onChange={hanlename}   type="text" id="task" name="task" placeholder="Enter todo here"></input>
    </div>
    <div className="col">
      <input onChange={hanledate} type="date" />
    </div>
    <div className="col">
    <button onClick={handlebutton}  type="button" className="btn btn-success kg-button"><MdOutlineAddTask /></button>
    </div>
  </div>
</div>
        </div>
    );
}
export default AddTudu;