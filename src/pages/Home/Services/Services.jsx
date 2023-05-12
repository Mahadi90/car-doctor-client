import React, { useEffect, useState } from 'react';
import SerrviceCard from './SerrviceCard';

const Services = () => {

  const [services, setServices] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/services')
    .then(res => res.json())
  .then(data => setServices(data))
  },[])
  

    return (
        <div>
            <div className='text-center my-4'>
                <h2 className='text-2xl text-red-500 font-bold'>Service</h2>
                <h3 className='text-4xl font-bold'>Our Service Area</h3>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4'>
              {
                services.map(service => <SerrviceCard
                key={service._id}
                service={service}
                ></SerrviceCard>)
              }
            </div>
        </div>
    );
};

export default Services;