// import './contain/App.css'
import AddTudu1 from './AddTudu1'

// let [foodtime,setfooditem]=useState(["salad ","veg ","fruits ","rice "])

//   // let text="food itm enterd by user"
//    const handle=(e)=>{
//     if(e.key==='Enter')
//     {
//       let newfooditem=e.target.value;
//       e.target.value="";
//       let newitem=[...foodtime,newfooditem]
//       setfooditem(newitem);
//       console.log("new food item ",newfooditem)
//     }
//     // console.log(e)
//     //     console.log(e.target.value)
//     //     textstatemethode(e.target.value);
    

const todoItems=({todoItems,ondelete})=>{
    return (
        <div className='item-container'>
            {todoItems.map(item=>  <AddTudu1 key={item.name}todoname={item.name}tododate={item.duedate}ondeleteclick={ondelete}></AddTudu1>)}
   </div>
    );
}
export default todoItems;