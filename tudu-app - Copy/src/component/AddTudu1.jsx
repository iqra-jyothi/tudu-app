// import './container/App.css'
import { MdAutoDelete } from "react-icons/md";

function AddTudu1({todoname,tododate,ondeleteclick}){
    return(
<div>
<div className="container text-center mt-3">
  <div className="row">
    <div style={{textAlign:'left'}} className="col">
    {todoname}
    </div>
    <div style={{textAlign:'left'}} className="col">
   {tododate}
    </div>
    <div className="col">
    <button type="button" onClick={()=>ondeleteclick(todoname)} className="btn btn-danger"><MdAutoDelete />
    </button>
    </div>
  </div>
</div>
</div>
    );
}
export default AddTudu1