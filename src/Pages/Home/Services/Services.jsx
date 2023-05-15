import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { FaCalendar, FaLocationArrow, FaPhone } from "react-icons/fa";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://car-doctor-server-neon-six.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="mt-4">
        <div className="text-center">
          <h3 className="text-orange-600 text-2xl"> Services</h3>
          <h1 className=" mb-4 text-5xl font-bold">Our Service Area</h1>
          <p className="mb-10 text-center">
            the majority have suffered alteration in some form, by injected
            humour, or randomised <br /> words which dont look even slightly
            believable.{" "}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
      </div>

      <button className="mb-4 mt-10 flex mx-auto btn btn-outline btn-secondary">
        More Services
      </button>
      <span className="footer p-16  bg-neutral text-neutral-content mt-5 mb-5 h-45  rounded">
        <div className="column flex mx-auto">
          <div className="flex items-center gap-4">
            <FaCalendar></FaCalendar>
            <div>
              <p>We are open Monday-Friday</p>
              <h1>7:00 am - 9:00 pm</h1>
            </div>
          </div>
        </div>
        <div className="column flex mx-auto">
          <div className="flex items-center gap-4">
            <FaPhone></FaPhone>
            <div>
              <p>Have a question?</p>
              <h1>+2546 251 2658</h1>
            </div>
          </div>
        </div>

        <div className="column flex mx-auto">
          <div className="flex items-center gap-4">
            <FaLocationArrow></FaLocationArrow>
            <div>
              <p>Need a repair? Our address</p>
              <h1>Liza Street, New York</h1>
            </div>
          </div>
        </div>

      </span>
    </div>
  );
};

export default Services;
