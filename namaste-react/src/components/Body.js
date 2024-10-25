import { useEffect, useState } from "react";
import RestaurantCard from "./ResturantCard";
import Shimmer from "../Shimmer/Shimmer";
import { RES_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Isearch } from "../utils/svg";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([])
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fectData();
  }, []);

  const fectData = async () => {
    const data = await fetch(RES_URL);
    const json = await data.json();
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilterRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  const topRatedHandeler = () => {
    const topRatedResturant = listOfRestaurants.filter((res) => { return res.info.avgRating > 4 })
    setFilterRestaurant(topRatedResturant);
  }

  const internetStatus = useOnlineStatus();
  if (internetStatus === false) return <h1>UR offline</h1>;

  return listOfRestaurants.length === 0 ? (<Shimmer />) : (
    <div className="mx-40">
      <div className="my-4 justify-between mx-10 mr-12 flex ">

        <button
          className="bg-slate-200 rounded w-64 bg-gradient-to-t from-violet-200 to-fuchsia-200 h-10 m-4 "
          onClick={topRatedHandeler}
        >
          Top rated Restaurants
        </button>

        <div className=" m-4" >
          <input type="search" className="border h-10 p-2 rounded " value={searchText} placeholder="search" onChange={(e) => { setSearchText(e.target.value) }} />
          <button className="bg-gradient-to-r from-violet-200 to-fuchsia-200 align-middle text-center rounded w-40  h-10  mx-3 " onClick={() => {
            const filteredList = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
            setFilterRestaurant(filteredList);
          }}> Search</button>
        </div>


      </div>
      <div className="flex justify-between flex-wrap px-14  ">
        {filterRestaurant?.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/resturants/" + restaurant.info.id}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body; 