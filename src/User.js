import React,{forwardRef} from 'react';
// function User() { //functional component
//     return (
//       <div className="App">
//         <h1>Hello User</h1>
//       </div>
//     );
//   }

//import React from "react";

// export function User(){
//   return(
//       <h1>User</h1>
//   )
// }
  
//export default User;

// import React,{Component} from "react";

// class User extends Component{   //Class Component
//     render()
//     {
//         return(
//             <div>
//             <h1>Hello User!</h1>
//             </div>
//         )
//     }
// }

// export default User;

//function User(){
    // return (<div>{30*30}</div>);
    // return React.createElement("h1",null,"Hello");
    //return (<div>Hello</div>);
//}

//export default User;

// function User(props) {
//     return(
//         <div className="User">
//             <h1>User Component</h1>
//             <button onClick={props.data}>Call Function</button>
//         </div>
//     )
    
// }

// import React from "react";

// class User extends React.Component {
//     constructor(){
//         super();
//         this.state={email:"test@gmail.com"};
//     }
//     render() {
//         console.warn("render", this.state.email);
//         return(
//             <div>
//                 <h1>User Component</h1>
//                 <button onClick={()=>this.setState({email:"abc@gnmail.com"})}>update Email</button>
//             </div>
//         )
//     }
// }
//import React,{useState, useEffect} from "react";

// function User(props){
// // let[count,setCount]=useState(0);
//   useEffect(()=>{
//     console.warn("use effect 1 is called");
//   },[])
// //   useEffect(()=>{
// //     console.warn("use effect 2 is called");
// //   })
//     return(
//       <div className="App">
//         {/* <h1>User Component {count}</h1> */}
//         <h1>User Component {props.countProps}</h1>
//         {/* <button onClick={()=>setCount(count+1)}>Update Counter</button> */}
//       </div>
//     );
//   }

// function User(props){
//     // alertFunction(){

//     // }
//     return(
//         <div>
//             <span>{props.data.name}</span>
//             <span>{props.data.email}</span>
//             <span>{props.data.contact}</span>
//         </div>
//     )

// }

// function User(props){
//     const name="test sample";
//     return(
//         <div>
//             {/* <h1>User Name is {props.data}</h1> */}
//             <h1>User Name is:</h1>
//             <button onClick={()=>props.getData(name)}>Click Me</button>
//         </div>

//     );
// }

function User(props, ref){
    return(
        <div>
            <input ref={ref} type="text"/>
        </div>
    )

}

// export default forwardRef(User);

export default User;