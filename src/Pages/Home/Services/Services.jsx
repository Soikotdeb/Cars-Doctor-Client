import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices]=useState([]);

useEffect(()=>{
fetch('https://car-doctor-server-neon-six.vercel.app/services')
.then(res=>res.json())
.then(data=>setServices(data))
},[])

    return (
        <div className='mt-4'>
            <div className='text-center'>
                <h3 className="text-orange-600 text-2xl"> Services</h3>
                <h1 className=' mb-4 text-5xl font-bold'>Our Service Area</h1>
                <p className='mb-10 text-center'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which dont look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
               {
                services.map(service=> <ServiceCard
                key={service._id}
                service={service}
                ></ServiceCard>)
               } 
            </div>

            
        </div>
    );
};

export default Services;