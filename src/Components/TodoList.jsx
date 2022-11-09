import React from 'react'

function TodoList(prop) {

   


  return (
   <>
   <div>
<h3>{prop.test}</h3>
<button onClick={()=>{
prop.onSelect(prop.id)
}}>-</button>


   </div>
   </>
  )
}

export default TodoList
