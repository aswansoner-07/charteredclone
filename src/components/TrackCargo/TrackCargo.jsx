import React from "react";

const TrackCargo = () => {
  return (
    <div className="flex  items-center justify-around bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg text-center">
        <label htmlFor="track" className="block text-lg font-semibold text-gray-700 mb-2">
          Track your shipment
        </label>
        <input
          type="text"
          placeholder="Your tracking number"
          id="track"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
          Search
        </button>
      </div>

      <div className="mt-6">
        <img
          src="https://www.charteredbus.in/track-6aeec193d0cf86ae2f563e9f97be3925f361c1d7ad38eba064e578afe3dc9e02.jpg"
          className="w-48 h-48 md:w-64 md:h-64 object-cover"
          alt="Tracking"
        />
      </div>
    </div>
  );
};

export default TrackCargo;
