import { MENU_API } from "./constants";
import { useState , useEffect} from "react";

const useResturantMenu = (resId) =>{
    const [resInfo , setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API+resId);
        const res = await data.json();
        setResInfo(res?.data)
    }

    return( resInfo );
}
export default useResturantMenu ; 