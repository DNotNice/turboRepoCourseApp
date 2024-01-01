import { Signup } from "ui";
import axios from 'axios';

export default function SignupPage(){
    return (
        <div>
            <Signup onClick = { async (name ,username , password)=> {
                const response = await axios.post('/api/signup' , {
                    name ,
                    username , 
                    password
                }).then((response)=>{
                    console.log(response.data);
                    localStorage.setItem("token" ,response.data.token)
                })
               
               
             } }/>
        </div>
    )
}