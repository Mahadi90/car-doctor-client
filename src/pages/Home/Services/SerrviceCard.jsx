import React from 'react';
import { Link } from 'react-router-dom';

const SerrviceCard = ({service}) => {

    const {_id, img, title, price} = service;

    return (
        <div className="card  bg-base-100 shadow-xl">
        <figure className="px-4 pt-10">
          <img src={img} alt="service" className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className='text-red-500'>Price: ${price}</p>
          <Link to={`/checkout/${_id}`}><button  className='btn btn-primary btn-block'>Book Now</button></Link>
        </div>
      </div>
    );
};

export default SerrviceCard;