//import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(){
    super()
    this.state ={
      user:[],
      searchItem:''
    }
  }
   componentDidMount(){
    fetch('https://63fef55a571200b7b7d2b413.mockapi.io/api/todo/albums')
    .then((res)=>res.json())
    .then(res=>
      this.setState({user:res})
      )
  }
  searchFunction = (e)=>{
    this.setState({searchItem: e.target.value})
  }
  render()
  {
    const filteredUser = this.state.user.filter((user)=>
     user.name.toLowerCase().includes(this.state.searchItem.toLowerCase()) 
    );
      
    return(
    <div className='App'>
    <input type='text' onChange={this.searchFunction}/>
    
    {
      filteredUser.map(user =>{
        return (
          <div key={user.id}>
           <h1>{user.name}</h1>
           <p>{user.artist}</p>
          </div>
        )
      })
    }
    
   
  </div>
  )
    
  }
}

      
      
      
      
   
  
    
export default App;
