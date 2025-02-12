import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import bg from './bg.jpg'


const BusBooking = () => {
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  return (
    <div className="relative w-full min-h-screen bg-cover bg-center" style={{
      backgroundImage: `url(${bg})`
    }}>
      <div className="absolute inset-0  bg-opacity-40"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 py-10">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
            <div className="md:col-span-1">
              <label className="block text-gray-700 font-semibold">From</label>
              <select className="w-full p-2 border rounded-md">
                <option>From</option>
                <option>indore</option>
                <option>bhopal</option>
              </select>
            </div>
            <div className="md:col-span-1">
              <label className="block text-gray-700 font-semibold">To</label>
              <select className="w-full p-2 border rounded-md">
                <option>To</option>
                <option>City C</option>
                <option>City D</option>
              </select>
            </div>
            <div className="md:col-span-1">
              <label className="block text-gray-700 font-semibold">Departure Date</label>
              <div className="relative">
                <input 
                  type="date" 
                  className="w-full p-2 border rounded-md"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                />
              </div>
            </div>
            <div className="md:col-span-1">
              <label className="block text-gray-700 font-semibold">Return Booking</label>
              <div className="relative">
                <input 
                  type="date" 
                  className="w-full p-2 border rounded-md"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  disabled={!departureDate} 
                />
              </div>
            </div>
            <div className="md:col-span-1">
              <button className="w-full bg-yellow-500 text-white py-2 rounded-md font-semibold hover:bg-yellow-600 transition">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusBooking;