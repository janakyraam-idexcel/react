// function Student(props){
//     console.log(props.name);
//     return(
//         <div style={{backgroundColor:"skyblue", margin:"20"}}>
//             <h1>Hello {props.name}</h1>
//             <h2>Email: {props.email}</h2>
//             <h2>location: {props.other.address}</h2>
//         </div>
//     )
// }

import React, { Component } from "react";
export default class Student extends Component{
    render(){
        console.warn(this.props.name)
        return(
            <div>
                <h1>Hello {this.props.name}</h1>
                <h2>Email: {this.props.email}</h2>
            </div>
    )
    }
}

//export default Student;