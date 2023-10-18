import logo from './logo.svg';
import './App.css';
import User from './User';
import { Component, useState, useEffect } from 'react';
import React from 'react';
import Student from './Student';
import Profile from './Profile';
import Login from './Login';
import Test from './Test';
import './style.css';
import style from './custom.module.css';
import {Button, Badge, Card} from 'react-bootstrap'

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
// function App(){
//   return(
//     <div className="App">
//       <Login/>
//     </div>
//   )
// }

//Pass functions as props
// function App(){
//   function getData(){
//     alert("Hello from app component");
//   }
//   return(
//     <div className="App">
//       <User data={getData}/>
//       <Student data={getData}/>
//       {/* <User data={getData}/>
//       <User data={getData}/> */}
//     </div>
//   )
// }

//Life cycle method
// function App(){
//   return(
//     <div className="App">
//       <h1>Life cycle method</h1>
//       <button>Load product</button>  Mounting <br></br><br></br>
//       <button>Update product</button> //Updating <br></br><br></br>
//       <button>Remove product</button> //Unmounting
//       {/* <App/> */}
//     </div>
//   )
// }

//First life cycle method

// class App extends Component{
//   constructor(){
//     super();
//     this.state={
//       name:'test'
//     }
//     console.warn("constructor");
//   }
//   render(){
//     console.warn("constructor");
//     return(
//           <div className="App">
//             <h1>First Life cycle method {this.state.name}</h1>
//           </div>
//         )
//       }
// }

//Render Life cycle method

// function App(){
//   const[name, setName]=useState("test")
//     return(
//           <div className="App">
//             <User name={name}/>
//             <button onClick={()=>setName("abc")}>Update name</button>
//           </div>
//         )
// }


//Component Did mount Life cycle
// class App extends Component{
//   constructor(){
//     super();
//     console.warn("constructor");
//     this.state={name:"test"}
//   }
//   componentDidMount(){
//     console.warn("constructor");
//     //console.warn(this.setState({name:"abc"}));
//   }
//   render(){
//     console.warn("constructor");
//     return(
//           <div className="App">
//             <h1>Component Did Mount {this.state.name}</h1>
//             <button onClick={()=>this.setState({name:"abc"})}>Update</button>
//           </div>
//         )
//       }
// }

//Component did update Life cycle
// class App extends Component{
//   constructor(){
//     super();
//     console.warn("constructor");
//     this.state={
//       name:"test",
//       count:0
//     }
//   }
//   componentDidUpdate(prevProps, prevState, snapshot){
//     console.warn("componentDidUpdate", prevState);
//     // if(this.state.count<10){
//     //   this.setState({count:this.state.count+1});
//     // }
//   }
//   render(){
//     console.warn("render");
//     return(
//           <div className="App">
//             <h1>Component Did Update {this.state.name}{this.state.count}</h1>
//             {/* <button onClick={()=>{this.setState({name:"abc"})}}>Update Name</button> */}
//             <button onClick={()=>{this.setState({count:this.state.count+1})}}>Update Name</button>
//           </div>
//         )
//       }
// }

//should component update life cycle

// class App extends Component{
//   constructor(){
//     super();
//     console.warn("constructor");
//     this.state={
//       count:0
//     }
//   }
//   shouldComponentUpdate(){
//     console.warn("shouldComponentUpdate", this.state.count);
//     // return true;
//     if (this.state.count<5){
//       return true;
//     }
//   }
//   render(){
//     console.warn("render");
//     return(
//           <div className="App">
//             <h1>should Component Update {this.state.count}</h1>
//             <button onClick={()=>{this.setState({count:this.state.count+1})}}>Update Name</button>
//           </div>
//         )
//       }
// }

//component will unmount life cycle method

// class App extends Component{
//   constructor(){
//     super();
//     this.state={
//       show:true
//     }
//   }
//   render(){
//     return(
//           <div className="App">
//             {
//               this.state.show?<Test/>
//               :<h4>Component is removed</h4>
//             }
//             <h1>component will unmount</h1>
//             <button onClick={()=>this.setState({show:false})}>Toggle Test Component</button>
//           </div>
//         )
//       }
// }

//Hooks

// function App(){
//   const [data,setData]=useState("test");
//   return(
//     <div className="App">
//       <h1>Hooks in React {data}</h1>
//       <button onClick={()=>setData('peter')}>Update State</button>
//     </div>
//   );
// }

//useEffect

// function App(){
//   const [count,setCount]=useState(0);
//   useEffect(()=>{
//     console.log("use effect 1");
//   });
//   return(
//     <div className="App">
//       <h1>use Effect in React {count}</h1>
//       <button onClick={()=>setCount(count+1)}>Update Counter</button>
//     </div>
//   );
// }

// function App(){
//   let[count,setCount]=useState(0);
//   return(
//     <div className="App">
//       <User countProps={count}/>
//       <button onClick={()=>setCount(count+1)}>Update Counter</button>
//     </div>
//   );
// }

// function App(){
//   const styleItem={color: 'red', backgroundColor:'black'}
//   return(
//     <div className="App">
//       <h1 className='primary'>Style type 1 in React js</h1>
//       <h1 style={styleItem}>Style type 2 in React js</h1>
//       <h1 className={style.success}>Style type 3 in React js</h1>
//     </div>
//   );
// }

function App(){
  return(
    <div className="App">
     <h1>Install Bootstrap</h1>
     <Button onClick={()=>alert("Hello")}>Click Me</Button>
     <h1>
        Example heading <Badge bg="secondary">New</Badge>
      </h1>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  );
}


export default App;
