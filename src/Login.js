import { useState } from "react";

function Login(){
    const[user,setUser]=useState("");
    const[userErr,setUserErr]=useState(false);
    const[password,setPassword]=useState("");
    const[passwordErr,setPasswordErr]=useState(false);


    function loginHandler(e){
        if(user.length<4 || password.length<4){
            alert("Invalid Data");
        }
        else{
            alert("All good!");
        }
        e.preventDefault();
    }

    function userHandler(e){
        //console.warn(e.target.value);
        let item=e.target.value;
        if(item.length<4){
            setUserErr(true);
        }
        else{
            setUserErr(false);
        }
        setUser(item);
    }

    function passwordHandler(e){
        let item=e.target.value;
        if(item.length<4){
            setPasswordErr(true);
        }
        else{
            setPasswordErr(false);
        }
        setPassword(item);
    }
    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={loginHandler}> 
                <input type="text" placeholder="enter user id" onChange={userHandler}/>
                {userErr?<span>Invalid Data</span>:null}<br></br><br></br>
                <input type="text" placeholder="enter password" onChange={passwordHandler}/>
                {passwordErr?<span>Invalid Data</span>:null}<br></br><br></br>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Login;