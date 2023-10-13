import React, { useState } from "react";
function Profile(){
    const[loggedin,setLoggedIn]=useState(5);
    return(
        <div>
            {
                loggedin==1?<h1>Welcome User1</h1>
                :loggedin==2?<h1>Welcome User2</h1>
                :<h1>Welcome Guest</h1>
            }
        </div>
    )
}
export default Profile;