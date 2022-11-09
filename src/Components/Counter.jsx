import React, { useState } from 'react'

function Counter() {
    const [count,setCount] = useState(0)


    const counterControl = (x)=>{
        
        return () => {

            if (count > 0  &&  x < 0 ){
                setCount(count+x)
            }else if(x > 0 ) {
                setCount(count+x)
            }
            
        }

    }
  return (
    <div>

    
      

<h4>you have to call only one event handler 
so it should be increment and decrement</h4>

      <h2>{count}</h2>
      <button onClick={counterControl(1)}>Increment</button>
      <button onClick={counterControl(-1)}>Decrement</button>
    </div>
  )
}

export default Counter
