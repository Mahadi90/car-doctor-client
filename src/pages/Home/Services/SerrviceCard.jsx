import React from 'react';

const SerrviceCard = ({service}) => {

    const {img, title, price} = service;

    return (
        <div className="card  bg-base-100 shadow-xl">
        <figure className="px-4 pt-10">
          <img src={img} alt="service" className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className='text-red-500'>Price: ${price}</p>
        </div>
      </div>
    );
};

export default SerrviceCard;