import React, { useState } from 'react';

const Reservation = () => {
  const reservations = JSON.parse(localStorage.getItem('reservations')) || [];
  console.log(reservations);

  const [item, setItem] = useState(reservations);

  const removeItem = (index) => {
    const newList = [...item];
    newList.splice(index, 1);
    setItem(newList);
    localStorage.setItem('reservations', JSON.stringify(newList));
  };

  return (
    <>
      <div className="container">
        <div className='col-md-12 col-12'>
            <h1 className='text-muted text-center my-5'>Booking Tables</h1>
        </div>
        <div className="col-md-12 col-12 table-responsive">
        <table className='table table-bordered table-striped my-2'>
          <thead>
            <tr className='text-center'>
              <th>Sr.No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Quantity</th>
              <th>Date</th>
              <th>Time</th>
              <th>Message</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {item.map((val, index) => (
              <tr key={index} className='text-center'>
                <td>{index + 1}</td>
                <td>{val.name}</td>
                <td>{val.email}</td>
                <td>{val.quantity}</td>
                <td>{val.date}</td>
                <td>{val.time}</td>
                <td>{val.msg}</td>
                <td><button className='bg-danger p-2 rounded' onClick={() => removeItem(index)}><i className='fa fa-trash'></i></button></td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </>
  );
};

export default Reservation;
