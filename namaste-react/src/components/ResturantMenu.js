import Shimmer from "../Shimmer/Shimmer";
import { useParams } from 'react-router-dom';
import useResturantMenu from '../utils/useResturantMenu';
import { ArrowLeftIcon, ArrowRightIcon, Food, GreenStar } from "../utils/svg";
import { CDN_URL } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
const ResturantMenu = () => {

    const { resId } = useParams();
    const [toggle , setToggle] = useState(false);
    const [counter , setCounter] = useState(1);

    const resInfo = useResturantMenu(resId);

    if (resInfo === null) return <Shimmer />
    const { name, cuisines, avgRatingString, costForTwoMessage, cloudinaryImageId, totalRatingsString, areaName, sla } = resInfo?.cards[2]?.card?.card?.info;
    const menuLen = resInfo.cards.length;
    const resturantMenu = resInfo;
    const cardAccess = resInfo?.cards[menuLen - 1].groupedCard?.cardGroupMap?.REGULAR.cards.find((item) => {
        return (item.card.card.title == "Recommended") ? item : item[2];
    });
    console.log(resturantMenu , "resturant menu");
    const { itemCards } = cardAccess?.card?.card;

    const handleAdd = () =>{
        setToggle(true);
    }
    const handleIncrement = () =>{
        setCounter(counter+1);
    }
    const handleDecrement = () =>{
        if(counter > 1) { 
            setCounter(counter-1)
            
        } 
        else if (counter == 0){ 
            setToggle(false)
        } 
        
    }
    // console.log(counter)
    // console.log(cardAccess?.card?.card.itemCards ,menuLen)
    return (
        <div className=" my-12 grid justify-items-center">
            <div className=" p-3 w-1/2 ">
                <div className="rounded-2xl p-5 bg-gradient-to-t from-slate-200 to-white ">
                    <div className="">
                        <h1 className="font-bold  resMenuhead ">{name} </h1>
                    </div>
                    <div className="rounded-2xl p-5 border border-inherit bg-slate-50">
                        <h2 className="text-base flex font-bold from-neutral-800">  {GreenStar} {avgRatingString} ({totalRatingsString}) * {costForTwoMessage} </h2>
                        <p className="text-red-500 text-sm font-extrabold underline underline-offset-2">{cuisines.join(" , ")}  </p>

                        <div className="outlet-info-container ">
                            <div className="timeline">
                                <span className="circle"></span>
                                <span className="line"></span>
                                <span className="circle"></span>
                            </div>
                            <div className="info">
                                <p className="font-bold text-sm outlet">outlet <span className=" location text-gray-600 font-normal">{areaName} </span> </p>
                                <p className="font-bold text-sm ">{sla.slaString} </p>
                            </div>
                        </div>

                    </div>
                </div>

                <h3 className="flex justify-center my-5"> {ArrowLeftIcon}  Menu  {ArrowRightIcon}   </h3>
                <div className=" p-3">
                    <ul>
                        {itemCards.map((item) => (
                            <li key={item.card.info.id}>
                                <div className="border-b-2 border-grey-500 px-3 py-3 my-4 flex justify-between shadow-md">
                                    <div className="w-4/5">
                                        <h1 className="font-bold text-lg flex"> {Food} {item.card.info.name}</h1>
                                        <p>{"Rs."} {(item.card.info.defaultPrice || item.card.info.price) / 100}</p>
                                        <p className="text-wrap text-base text-slate-500"> {item.card.info.description}</p>
                                    </div>
                                    <div className="relative h-36">
                                        <img className="rounded-xl h-32 w-36" src={CDN_URL + item.card.info.imageId} alt="" />
                                        {toggle ? 
                                        <div className="flex justify-between w-32 px-8 py-2 h-10 absolute bottom-0.5 left-2 text-white font-extrabold border bg-green-600 rounded-xl ">
                                            <button className=" " onClick={handleDecrement}>-</button>
                                            <span>{counter}</span>
                                            <button className=" " onClick={handleIncrement}>+</button>

                                        </div> : 
                                        <button className="w-32 px-8 py-2 h-10 absolute bottom-0.5 left-2 text-green-700 font-extrabold border bg-slate-100 rounded-xl " onClick={handleAdd}>ADD</button>
                                         } 
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>
    )
}
export default ResturantMenu; 