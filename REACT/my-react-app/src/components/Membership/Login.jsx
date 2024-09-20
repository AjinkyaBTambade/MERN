import { useState } from "react";
import AuthService from "../../services/authservice";
 
function Login() {
    //Define state for login
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
 
    //change state based on text change event of text box (input)
    const onChangeEmail=(event)=>{
      setEmail(event.target.value);   //state is always changed using setter method defined in state
    }
 
    const onChangePassword=(event)=>{
      setPassword(event.target.value);
    }
 
    const onLogin=(event)=>{
      console.log("on login method is getting invoked");
        try{
          let status=false;
          console.log(email, password);
          status=AuthService.validate(email, password);
          if(status ===true){    
            console.log("login successful");
          }
          else{  
            console.log("login failed");
          }
        }
        catch(error){
          console.log(error);
        }
    }
 
  return (
    <>
      <div>
       
        <table>
        <tr>
          <th>Label</th>
          <th>Data</th>
     
        </tr>
          <tr>
            <td>Email</td>
            <td><input type="email" value={email} onChange={ onChangeEmail}/></td>
          </tr>
          <tr>
            <td>Pasword</td>
            <td><input type="password" value={password} onChange={ onChangePassword}/></td>
          </tr>
          <tr>
            <td> </td>
            <td><button  onClick={onLogin}>Login</button></td>
          </tr>
        </table>
       <hr/>
        </div>
    </>
  )
}
export default Login;