import logo from './logo.svg';
import './App.css';
import User from './User';
import { Component, useState, useEffect, useMemo } from 'react';
import React, { Fragment, PureComponent, createRef, useRef } from 'react';
import Student from './Student';
import Profile from './Profile';
import Login from './Login';
import Test from './Test';
import './style.css';
import style from './custom.module.css';
import { Button, Badge, Card, Table, Tab } from 'react-bootstrap'
import Cols from './Cols';
import Counter from './Counter';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home  from './Home';
import About from './About';
import Nav from './Nav';

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
{/* <h1>Hello World</h1> */ }
{/* <h1>{data}</h1> */ }
{/* <button onClick={()=>alert("Hello")}>Click Me</button> */ }
{/* <button onClick={Apple}>Click Me</button> */ }  //Click event and function in React JS
//<h1>{data}</h1>
//<button onClick={updateData}>Updata Data</button>
{/* <User/> */ }
{/* <User/>
      <User/> */}
{/* {Apple()} */ }
{/* <Apple/> */ }
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

//Bootstrap
// function App(){
//   return(
//     <div className="App">
//      <h1>Install Bootstrap</h1>
//      <Button onClick={()=>alert("Hello")}>Click Me</Button>
//      <h1>
//         Example heading <Badge bg="secondary">New</Badge>
//       </h1>
//       <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//     </div>
//   );
// }


//List of objects using map function
// function App(){
//   //const users=['test','bruce','peter','sam'];

//   // users.map((item)=>{
//   //   console.warn("My name is ",item);
//   // })

//   // for(let i=0; i<users.length; i++){
//   //   console.warn("for,,, My name is ",users[i]);
//   // }
//   const users=[
//     {name:'Anil', email: 'test@gmail.com', 'contact':'111'},
//     {name:'Bruce', email: 'test@gmail.com', 'contact':'222'},
//     {name:'Peter', email: 'test@gmail.com', 'contact':'333'},
//     {name:'Sam', email: 'test@gmail.com', 'contact':'444'},

//   ]
//   return(
//     <div className="App">
//      <h1>Handle Array with List</h1>
//      <table width="100%" border="1"> 
//       <tr>
//         <td>Name</td>
//         <td>Email</td>
//         <td>Contact</td>
//       </tr>
//      {
//       users.map((item)=>
//       <tr>
//         <td>{item.name}</td>
//         <td>{item.email}</td>
//         <td>{item.contact}</td>
//       </tr>
//       //<h1>{item.name}{item.email}</h1>
//       )
//     }
//   </table>
//     </div>
//   );
// }

//List with Bootstrap Table
// function App(){
//   const users=[
//     {name:'Anil', email: 'test@gmail.com', 'contact':'111'},
//     {name:'Bruce', email: 'test@gmail.com', 'contact':'222'},
//     {name:'Peter', email: 'test@gmail.com', 'contact':'111'},
//     {name:'Sam', email: 'test@gmail.com', 'contact':'777'},

//   ]
//   return(
//     <div className="App">
//      <h1>List with Bootstrap Table</h1>
//      <Table striped variant='light' bordered hover>
//      <tbody>
//       <tr>
//         <td>Name</td>
//         <td>Email</td>
//         <td>Contact</td>
//       </tr>
//      {
//       // users.map((item,i)=>
//       // <tr key={i}>
//       //   <td>{item.name}</td>
//       //   <td>{item.email}</td>
//       //   <td>{item.contact}</td>
//       // </tr>
//       // )
//       users.map((item,i)=>
//       item.contact==='111'?
//      <tr key={i}>
//       <td>{item.name}</td>
//        <td>{item.email}</td>
//          <td>{item.contact}</td>
//      </tr>:null
//       )
//     }
//     </tbody>
//   </Table>
//   </div>
//   );
// }

//Nested Array
// function App(){
//   const users=[
//     {name:'Anil', email: 'test@gmail.com', address:[
//       {Hn:"10", city:"Noida", country:"India"},
//       {Hn:"34", city:"Gurgoan", country:"India"},
//       {Hn:"45", city:"Delhi", country:"India"}
//     ]},
//     {name:'Bruce', email: 'test@gmail.com', address:[
//       {Hn:"10", city:"Noida", country:"India"},
//       {Hn:"34", city:"Gurgoan", country:"India"},
//       {Hn:"45", city:"Delhi", country:"India"}
//     ]},
//     {name:'Peter', email: 'test@gmail.com', address:[
//       {Hn:"10", city:"Noida", country:"India"},
//       {Hn:"34", city:"Gurgoan", country:"India"},
//       {Hn:"45", city:"Delhi", country:"India"}
//     ]},
//     {name:'Sam', email: 'test@gmail.com', address:[
//       {Hn:"10", city:"Noida", country:"India"},
//       {Hn:"34", city:"Gurgoan", country:"India"},
//       {Hn:"45", city:"Delhi", country:"India"}
//     ]}
//   ]
//   return(
//     <div className="App">
//      <h1>List with Bootstrap Table</h1>
//      <Table variant='light' striped>
//      <tbody>
//       <tr>
//       <td>S.No</td>
//         <td>Name</td>
//         <td>Email</td>
//         <td>Address</td>
//       </tr>
//      {
//       users.map((item,i)=>
//      <tr key={i}>
//       <td>{i+1}</td>
//       <td>{item.name}</td>
//        <td>{item.email}</td>
//          <td>
//          <Table variant='light' striped>
//           <tbody>{
//           item.address.map((data,i)=>
//             <tr key={i}>
//               <td>{data.Hn}</td>
//               <td>{data.city}</td>
//               <td>{data.country}</td>
//             </tr>
//           )}
//           </tbody>
//           </Table>
//           </td>
//      </tr>
//       )
//     }
//     </tbody>
//   </Table>
//   </div>
//   );
// }

//Reuse Component

// function App(){
//   const users=[
//     {name:'Anil', email: 'test@gmail.com', 'contact':'111'},
//     {name:'Bruce', email: 'test@gmail.com', 'contact':'222'},
//     {name:'Peter', email: 'test@gmail.com', 'contact':'333'},
//     {name:'Sam', email: 'test@gmail.com', 'contact':'444'},
//   ]
//   return(
//     <div className="App">
//      <h1>Reuse Component with List</h1>
//      {
//       users.map((item)=>
//       //<h1>Hello {item.name}</h1>
//       <h1><User data={item}/></h1>
//       )
//      }
//     </div>
//   );
// }

//React Fragment

// function App(){
//   return(
//     // <div>
//     <div>
//       <h1>React Fragment</h1>
//       <table>
//         <tbody>
//           <tr>
//             <Cols/>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//     // </div>
//   );
// }

//Send Data from child component to the Parent Component or Lifting State up

// function App(){
//   //const name="test sample";
//   function getName(name){
//     //alert("Hello User");
//     alert(name);
//   }
//   return(
//     <div>
//       <h1>Lifting State Up</h1>
//       {/* <User data={name}/> */}
//       <User getData={getName}/>

//     </div>
//   );
// }

//Pure Component
// class App extends PureComponent {
//   constructor(){
//     super();
//     this.state = {
//       count:1
//     }
//   }
//   render(){
//     console.warn("rerender");
//     return (
//       <div>
//         <Counter count={this.state.count}/>
//         {/* <h1>Pure Component {this.state.count}</h1> */}
//         <button onClick={()=>{this.setState({count:this.state.count+1})}}>Update Count</button>
//       </div>
//     )
//   }
// }

//Use Memo
// function App(){
//   const[count, setCount]=useState(0);
//   const[item, setItem]=useState(5);
//   const multiMemo=useMemo(
//     function MultiCount(){
//       console.warn("Multi Count");
//       return count*2;
//     },[count]
//   )
//   return(
//     <div className='App'>
//       <h1>useMemo Hook in react</h1>
//       <h2>count:{multiMemo}</h2>
//       <h2>item:{item}</h2>
//       <button onClick={()=>setCount(count+1)}>Update Count</button>
//       <button onClick={()=>setItem(item+1)}>Update Item</button>
//     </div>
//   )
// }

//Ref
// class App extends Component {
//   constructor(){
//     super();
//    this.inputRef=createRef();
//   }
//   componentDidMount(){
//     //console.warn(this.inputRef.current.value="1000");
//   }
//   getVal(){
//     console.warn(this.inputRef.current.value);
//     this.inputRef.current.style.color="red";
//     this.inputRef.current.style.backgroundColor="black";
//   }
//   render(){
//     console.warn("rerender");
//     return (
//       <div className='App'>
//         <h1>Ref in React</h1>
//         <input type='text' ref={this.inputRef}/>
//         <button onClick={()=>this.getVal()}>Check Ref</button>
//       </div>
//     )
//   }
// }

//useRef Hook
// function App() {
//   let inputRef=useRef(null);
//   function controlInput(){
//     //inputRef.current.value="abc";
//     //inputRef.current.style.color="red";
//     //inputRef.current.style.display="none";
//     inputRef.current.focus();
//   }
//   return(
//     <div className="App">
//       <h1>useRef Hook in React</h1>
//       <input type="text" ref={inputRef}/>
//       <button onClick={controlInput}>Handle Input</button>
//     </div>
//   )
// }

// Forward Ref
// function App() {
//   let inputRef=useRef(null);
//   function updateInput() {
//     inputRef.current.value="1000";
//     inputRef.current.style.color="red";
//     inputRef.current.focus();
//   }
//   return(
//     <div className="App">
//     <h1>Forward Ref in React</h1>
//     <User ref={inputRef}/>
//     <button onClick={updateInput}>Update Input Box</button>
//     </div>
//   )
// }

// function App() {
//   const [val, setVal]=useState("");
//   const [item, setItem]=useState("");
//   return(
//     <div className="App">
//     <h1>Controlled Component</h1>
//     <input type="text" value={val} onChange={(e) =>setVal(e.target.value)}></input>
//     <h1>{val}</h1>
//     </div>
//   )
// }

// function App() {
//   let nameRef=useRef(null);
//   let passwordRef=useRef(null);
//   function submitForm(e){
//     e.preventDefault();
//     console.warn("input 1 value is:",nameRef.current.value);
//     console.warn("input 2 value is:",nameRef.current.value);
//     let email=document.getElementById("email").value;
//     console.warn("input 3 value is:",nameRef.current.value);
//   }
//   return(
//     <div className="App">
//     <h1>UnControlled Component</h1>
//     <form onSubmit={submitForm}>
//       <input ref={nameRef} type="text"/> <br/> <br/>
//       <input ref={passwordRef} type="text"/> <br/> <br/>
//       <input id="email" type="text"/> <br/> <br/>
//       <button>Submit</button>
//     </form>
//     </div>
//   )
// }

// function App() {

//   return(
//     <div className="App">
//     <h1>HOC</h1>
//     <HOCRed cmp={Counter1}/>
//     <HOCGreen cmp={Counter1}/>
//     <HOCBlue cmp={Counter1}/>
//     </div>
//   )
// }

// function HOCRed(props){
//   // return <h1><props.cmp/></h1>
//   return <h1 style={{backgroundColor:'red', width: 100}}>Red<props.cmp/></h1>
// }

// function HOCGreen(props){
//   return <h1 style={{backgroundColor:'green', width: 100}}>Red<props.cmp/></h1>
// }

// function HOCBlue(props){
//   return <h1 style={{backgroundColor:'blue', width: 100}}>Red<props.cmp/></h1>
// }

// function Counter1() {
// const [count, setCount]=useState(0);
//   return(
//     <div className="App">
//     <h3>{count}</h3>
//     <button onClick={() => setCount(count+1)}>Update</button>
//     </div>
//   )
// }


// function App() {

//   return (
//     <div className="App">
//       <h1>Routing Setup</h1>
//      <Router>
//         <Link to="/home">Home</Link><br/>
//         <Link to="/about">About</Link><br/>
//         <Link to="/login">Login</Link><br/>
//         <Routes>
//         <Route path="/" exact element={<Home1 />}/>
//         <Route path="/about" element={<About1 />}/>
//         <Route path="/*" element={<PageNotFound />}/>
//         </Routes>
//      </Router>
//     </div>
//   )
// }

// function Home1() {
//   return (
//     <div>
//       <h1>Home Page</h1>
//       <p>This is my Home Page</p>
//     </div>
//   )
// }

// function About1() {
//   return (
//     <div>
//       <h1>About Page</h1>
//       <p>This is my About Page</p>
//     </div>
//   )
// }

// function PageNotFound() {
//   return (
//     <div>
//       <h1>404</h1>
//       <p>This page is not found</p>
//     </div>
//   )
// }

function App(){
  let user=[
    {name: 'John', id: 1},
    {name: 'Peter', id: 2},
    {name: 'Bruce', id: 3},
    {name: 'Tony', id: 4}
  ]
  return(
    <div className="App">
      <Router>
      <h1>React Dynamic Routing</h1>
      {
        user.map((item)=>
          <div><Link to={"/user/"+item.id+"/"+item.name}>{item.name}</Link></div>
        )
      }
      <Route path="/user/:id/:name"><User/></Route>
      </Router>
    </div>
  )
}

export default App;

