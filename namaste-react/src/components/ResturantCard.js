import { useEffect, useState } from "react";
import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { GreenStar } from "../utils/svg";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, deliveryTime, sla, areaName } = resData?.info;

  // console.log(resData.info.name  , resData.info.aggregatedDiscountInfoV3)
  return (
    <div className=" hover:shadow-2xl m-4 w-80  h-5/5 rounded-xl ease-in-out duration-300 shadow-lg " style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className=" rounded-t-xl" style={{ height: "207px", width: "100%" }}
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

// HOC

export const withDiscount = (RestaurantCard) => {

  return (props) => {
    console.log(props);
    return (
      <div>
        <label className="ml-2 px-3 absolute bottom-0.3 font-[900] bg-lime-500 text-white shadow-xl rounded-sm ">{props.discount.header}{props.discount.subHeader}</label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}

export default RestaurantCard;