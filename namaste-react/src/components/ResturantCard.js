import { useEffect, useState } from "react";
import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { GreenStar } from "../utils/svg";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, deliveryTime, sla,areaName} = resData?.info;

  // console.log(resData.info)
  return (
    <div className=" hover:shadow-2xl m-4 w-80  h-5/5 rounded-xl ease-in-out duration-300 shadow-lg relative" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className=" rounded-t-xl ease-in-out duration-300" style={   { height: "207px" ,  width: "100%"}}
        alt="res-logo"
        src={
          CDN_URL +
          cloudinaryImageId
        }
      />
      <div className="px-5 py-4">
        <h4 className="text-lg font-medium text-wrap">{name}</h4>
        <h2 className="text-slate-500 text-sm text-wrap">{cuisines.join(", ")}</h2>
        <h4 className="text-slate-800 text-sm flex ">{GreenStar} {avgRating} </h4>
        <h4 className="text-slate-800 text-sm font-bold">{sla.slaString}</h4>
        <h4 className="text-slate-800 text-sm ">{areaName}</h4>
        <h4 className="text-slate-800 text-sm"> {costForTwo}</h4>
      </div>
    </div>
  );
};
export default RestaurantCard;