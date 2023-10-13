import logo from './logo.svg';
import './App.css';
import User from './User';
import { Component, useState } from 'react';
import React from 'react';
import Student from './Student';
import Profile from './Profile';
import Login from './Login';

/*Sample Program */
//function App() { //functional component
  //let data="test";
  // function Apple(){
  //   return <h1>Apple</h1>;
  // }
  //let data='abc';
  //function Apple(){
    // alert("Hello from Apple");
    //data="Hi"
    //alert(data);
  //}

  //const [data,setData]=useState("abc")
  //const [data,setData]=useState(0);

  //function updateData(){  //States Functional Component
    // data="peter";
    // alert(data);
    //setData("peter");
    //setData(data+1);
    //console.warn("_______");
  //}
  //return (
    //<div className="App">
      {/* <h1>Hello World</h1> */}
      {/* <h1>{data}</h1> */}
      {/* <button onClick={()=>alert("Hello")}>Click Me</button> */}
      {/* <button onClick={Apple}>Click Me</button> */}  //Click event and function in React JS
      //<h1>{data}</h1>
      //<button onClick={updateData}>Updata Data</button>
      {/* <User/> */}
      {/* <User/>
      <User/> */}
      {/* {Apple()} */}
      {/* <Apple/> */}
    //</div>
  //);
//}

// function User(){
//   return(
//     <div>
//       <h1>User same file</h1>
//       <h2>Hello from h2</h2>
//     </div>
//   )
// }

//Propes(Functional Component)
// function App(){
//   const[name,setName]=useState("peter")
//   return(
//     <div className='App'>
//     <h1>Hello</h1>
//     <Student name={name} email="test@gmail.com" other={{address: "delhi", mobile:"000"}}/>
//     <button onClick={()=>setName("Sidhu")}>Update Name</button>
//   </div>
//   );
// }

//*********************************************************************************************
//States(Class Component)
// class App extends Component{
//   constructor(){
//     super();
//     this.state={
//       //data:"test"
//       data:1
//     }
//   }

//   updateData(){
//     //alert("Hello");
//     //this.setState({data:"peter"});
//     this.setState({data:this.state.data+1})
//   }
//   render()
//   {
//     return(
//     <div className='App'>
//     <h1>{this.state.data}</h1>
//     <button onClick={()=>this.updateData()}>updateData</button>
//   </div>
//     );
//   }
// }



//Propes(Class Component)
// class App extends Component{
//   constructor(){
//     super();
//     this.state={
//       name:"anil"
//     }
// }
//   render(){
//     return(
//      <div style={{backgroundColor:"skyblue", margin:20}}>
//       <h1>Hello</h1>
//       <Student name={this.state.name} email={"peter@test.com"}/>
//       {/* <Student name="John" email={"john@test.com"}/> */}
//       <button onClick={()=>this.setState({name:"harry"})}>Update Name</button>
//      </div>
//     );
//   }
// }

//Get Input Box Value
// function App(){
//   const[data,setData]=useState(null);
//   const[print,setPrint]=useState(false);
//   function getData(val){
//     setData(val.target.value)
//     setPrint(false);
//     //console.warn(val.target.value);
//   }
//   return(
//     <div className="App">
//     {
//     print?
//     <h1>{data}</h1>
//     :null
// }
//     <input type='text' onChange={getData}/>
//     <button onClick={()=>setPrint(true)}>Print Value</button>
//   </div>
//   )
// }

//Hide, Show and Toggle

// function App(){
//   const[show,setShow]=useState(true);
//   return(
//     <div className="App">
//       {
//         show?<h1>Hello World!</h1>:null
//       }
//       {/* <button onClick={()=>setShow(true)}>Show</button>
//       <button onClick={()=>setShow(false)}>Hide</button> */}
//       <button onClick={()=>setShow(!show)}>Toggle</button>
//     </div>
//   )
// }

//Handling Form
// function App(){
//   const[name,setName]=useState("");
//   const[interest,setInterest]=useState("");
//   const[TnC,setTnC]=useState(false);

//  function handleData(e){
//   e.preventDefault();
//   console.warn("all data", name,interest,TnC);
//   }
//   return(
//     <div className="App">
//         <h1>Hello World!</h1>
//         <form onSubmit={handleData}>
//           <input type="text" placeholder='enter name' onChange={(e)=>setName(e.target.value)}/><br></br><br></br>
//           <select onChange={(e)=>setInterest(e.target.value)}>
//             <option>Marvel</option>
//             <option>DC</option>
//           </select>
//           <br></br><br></br>
//           <input type='checkbox' onChange={(e)=>setTnC(e.target.checked)}/><span>Agree with terms and conditions</span><br></br><br></br>
//           <button type='submit'>Submit</button>
//         </form>
//     </div>
//   )
// }

//conditional rendering
// function App(){
//   return(
//     <div className="App">
//       <Profile/>
//     </div>
//   )
// }

//Basic form validation
function App(){
  return(
    <div className="App">
      <Login/>
    </div>
  )
}

export default App;
