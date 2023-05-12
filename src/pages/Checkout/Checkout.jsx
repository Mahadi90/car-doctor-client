import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const Checkout = () => {
  const service = useLoaderData();
//   console.log(service);
  const {_id, title, price, service_id, img } = service;

  const { user } = useContext(AuthContext)

  const handleBookService = e => {
    e.preventDefault()

    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;
    
    const booking = {
        customerName : name,
        date,
        email,
        service : title,
        service_id : _id,
        img,
        price : price
    }
    console.log(booking)

      
    fetch('http://localhost:5000/bookings', {
        method: 'POST',
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.insertedId){
            Swal.fire({
                icon: 'success',
                title: 'Successfull',
                text: 'Your booking is added',
              })
        }
    })
  }

  return (
    <div>
      <h2 className="text-2xl text-purple-600">Book Service : {title}</h2>
      <form onSubmit={handleBookService}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered"
            name="name"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input
            type="date"
            placeholder="date"
            className="input input-bordered"
            name="date"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="email"
            defaultValue={user?.email}
            className="input input-bordered"
            name="email"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Due Amount</span>
          </label>
          <input
            type="text"
            className="input input-bordered"
            name="price"
            defaultValue={'$'+ price}
          />
        </div>
      </div>
      <input className="btn btn-primary btn-block my-4" type="submit" value='Order Confirm' />
      </form>
    </div>
  );
};

export default Checkout;
