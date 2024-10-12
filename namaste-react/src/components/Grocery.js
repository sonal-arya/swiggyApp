import { useState , useRef} from "react";

const Grocery = () => {
    const [cart , setCart] = useState(0);
    const countRef = useRef(0);
    const handleRef = () =>{
        countRef.current++ ;
        console.log(countRef , countRef.current ,"we")
    }

    return(
        <div>
            <h1>Grocery store </h1>
            <ol>
                <li >Pulse</li>
                <li>Rice</li>
                <li>Wheat</li>
            </ol>
            <button onClick={handleRef}>Add cart</button>
            <h3>Your cart  =  {cart} , {countRef.current}</h3>
        </div>
    )
}
export default Grocery ; 