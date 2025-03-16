
import './App.css'
import AddTudu from './component/AddTudu'
import AppName from './component/AppName'
import TodoItems from './component/TodoItems'
import { useState } from 'react'
import Error from './component/Error'

function App()
{
const intailtodoItems=[
  {
  name:'By milk',
  duedate:'4/12/2023'
  },
  {
    name:'Go to college ',
    duedate:'4/12/2023'
    }
]




const [todoItems,setitem]=useState(intailtodoItems);

  const handlenewitem=(itemname,itemdate)=>{
console.log(`new item added ${itemname} ${itemdate}`)
// setitem([...todoItems,{name:itemname,duedate:itemdate}])
const newitem=[...todoItems,{name:itemname,duedate:itemdate}

];
setitem(newitem)

  }
  const handledelete=(itemname)=>{

const newdelete=todoItems.filter(it=>
  it.name!==itemname
);
console.log(`item delete${itemname}`)
setitem(newdelete)
  }
    
  
  return (
    
   <center >
  <AppName></AppName>
  
   <AddTudu onnewitem={handlenewitem}></AddTudu>
   <Error item={todoItems}></Error>
   <TodoItems todoItems={todoItems} ondelete={handledelete}></TodoItems>

   </center>
  )
}

export default App
