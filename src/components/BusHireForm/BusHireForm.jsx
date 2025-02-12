import React from "react";

const BusHireForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-gray-800">Bus Hire</h2>

        <h3 className="mt-4 text-lg font-semibold text-blue-900">Contact Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
          <input type="text" placeholder="Enter Your Name *" className="border p-2 rounded-md w-full" />
          <input type="email" placeholder="E-mail *" className="border p-2 rounded-md w-full" />
          <input type="text" placeholder="Phone No. *" className="border p-2 rounded-md w-full" />
        </div>

        <h3 className="mt-4 text-lg font-semibold text-blue-900">Travel Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
          <select className="border p-2 rounded-md w-full">
            <option>Bus Hire</option>
          </select>
          <input type="text" placeholder="From *" className="border p-2 rounded-md w-full" />
          <input type="text" placeholder="To *" className="border p-2 rounded-md w-full" />
        </div>

        <h3 className="mt-4 text-lg font-semibold text-blue-900">Bus Type</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <select className="border p-2 rounded-md w-full">
            <option>AC</option>
            <option>Non-AC</option>
          </select>
          <input type="number" placeholder="No. of Seats *" className="border p-2 rounded-md w-full" />
        </div>

        <h3 className="mt-4 text-lg font-semibold text-blue-900">Remarks</h3>
        <textarea placeholder="Enter Your Message *" className="border p-2 rounded-md w-full h-24"></textarea>

        <button className="mt-4 w-full bg-blue-700 text-white py-2 rounded-md font-semibold hover:bg-blue-800 transition">
          Submit
        </button>
      </div>
    </div>
  );
};

export default BusHireForm;
