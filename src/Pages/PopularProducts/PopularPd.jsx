import React, { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const PopularPd = () => {
  const [populars, setPopular] = useState([]);

  useEffect(() => {
    fetch("Popular.json")
      .then((res) => res.json())
      .then((data) => setPopular(data));
  }, []);

  return (
    <div>
      <div className="text-center">
        <p className="mb-5 mt-14 text-orange-600">Popular Products</p>
        <h1 className="text-4xl font-bold mb-3">Browse Our Products</h1>
        <p className="mb-10">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which dont look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {populars.map((popular) => (
          <div key={popular.id} className="card w-96 bg-base-100 shadow-xl ">
            <figure className="px-10 pt-10">
              <img className="rounded" src={popular.img} />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">
                {" "}
                <Rating
                readonly
                  placeholderRating={popular.rating}
                  emptySymbol={
                    <FaRegStar></FaRegStar>
                  }
                  placeholderSymbol={
                    <FaStar className="text-orange-600"></FaStar>
                  }
                  fullSymbol={
                    <FaStar></FaStar>
                  }
                />{" "}
              </h2>
              <p className="text-2xl font-bold">{popular.name}</p>
              <div className="card-actions">
                <h3 className="text-orange-600">${popular.price}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="btn btn-outline btn-secondary  mb-10 mx-auto flex">More Products</button>
    </div>
  );
};

export default PopularPd;
