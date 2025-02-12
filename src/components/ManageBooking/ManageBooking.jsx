import React from "react";
import busImage from "./bus.jpg"; // Replace with actual image path

const ManageBooking = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-around bg-gray-100 p-10 min-h-screen">
      {/* Left Side - Form */}
      <div className="w-full md:w-1/2 max-w-md">
        <h2 className="text-2xl font-bold mb-4">Manage Booking</h2>
        <input
          type="text"
          placeholder="Ticket Number"
          className="w-full p-3 border border-gray-300 rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Email or Phone Number"
          className="w-full p-3 border border-gray-300 rounded-md mb-4"
        />
        <button className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition">
          Submit
        </button>
        <p className="text-gray-600 mt-3 text-sm">
          Please enter the details for Print, Update, Cancel and Pre/Postpone Ticket.
        </p>
      </div>
      
      {/* Right Side - Image */}
      <div className="hidden md:block md:w-1/2">
        <img src={busImage} alt="Bus" className="w-full mix-blend-multiply object-contain" />
      </div>
    </div>
  );
};

export default ManageBooking;
