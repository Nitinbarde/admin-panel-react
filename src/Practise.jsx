import axios from 'axios'
import React, { Component } from 'react'

export default class Practise extends Component {

state={
  post:[]
}


componentDidMount(){
  axios.get('https://dummyjson.com/users')
  // .then((res)=>{this.setState({post:res})})
  .then((res)=>this.setState({post:res.data.users}))
  
  .catch((err)=>console.log(err))
}

  render() {
    return (
      <div>
        
        <h1>Api Call</h1>

{
  this.state.post.map((item)=><div> <tr><td>{item.id}</td> <td>{item.firstName}</td> </tr> 
  <img src={item.image}/>
   </div>)
}

      </div>
    )
  }
}
