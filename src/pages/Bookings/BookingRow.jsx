import React from "react";


const BookingRow = ({ booking, handleDeleteBooking , handleBookingConfirm}) => {

  const { _id, customerName, date, email, service, price, img , status} = booking;


  return (
    <tr>
      <th>
        <button
          onClick={() => handleDeleteBooking(_id)}
          className="btn btn-sm btn-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="avatar">
          <div className="rounded w-16 h-16">
            <img src={img} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td>{service}</td>
      <td>{date}</td>
      <td>${price}</td>
      <th>
       {
        status === 'confirm' ? <span className="font-bold text-primary">Confirmed</span> : 
        <button onClick={() => handleBookingConfirm(_id)} className="btn btn-info text-white btn-sm">Confirm Please</button>
       }
      </th>
    </tr>
  );
};

export default BookingRow;
