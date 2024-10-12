
import {useState} from "react"

const User = ({name , component})=>{

    const [count] = useState(0);
    const [count2] = useState(1);

    return(
        <div className="user-card">
            <h1>Count : { count}</h1>
            <h1>Count2 : { count2}</h1>
            <h2>Name : {name}</h2>
            <h3>Location: Gwalior</h3>
            <h3>Software Developer</h3> 
            <p>{component}</p>
        </div>
    )
}

export default User;