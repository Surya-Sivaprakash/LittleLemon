import React, { useState } from "react";

const ReservationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [numOfPeople, setNumOfPeople] = useState(1);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your booking reservation logic here

    // Reset form fields
    setName(name);
    setEmail(email);
    setDate(date);
    setTime(time);
    setNumOfPeople(numOfPeople);
    // Show the popup
    setShowPopup(true);
  };

  const ReservationDetails = ({
    name,
    email,
    date,
    time,
    numOfPeople,
    closePopup,
  }) => (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
      <div className="bg-white shadow-md rounded-md p-8 max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-6">Reservation Details</h2>
        <p>
          <span className="font-semibold">Name:</span> {name}
        </p>
        <p>
          <span className="font-semibold">Email:</span> {email}
        </p>
        <p>
          <span className="font-semibold">Date:</span> {date}
        </p>
        <p>
          <span className="font-semibold">Time:</span> {time}
        </p>
        <p>
          <span className="font-semibold">Number of People:</span> {numOfPeople}
        </p>
        <button
          onClick={closePopup}
          className="mt-8 py-2 px-4 bg-[#F4CE14] text-white font-semibold rounded-md hover:shadow-2xl"
        >
          Close
        </button>
      </div>
    </div>
  );

  const closePopup = () => {
    setShowPopup(false);
    setName("");
    setEmail("");
    setDate("");
    setTime("");
    setNumOfPeople("");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-emerald-950 shadow-md rounded-md p-8 max-w-md w-full"
      >
        <h2 className="text-2xl text-white  font-semibold mb-6">
          Table Booking Reservation
        </h2>
        <div className="mb-6">
          <label htmlFor="name" className="block text-white  font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-field bg-white rounded-lg h-10 w-96"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-white  font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field rounded-lg h-10 w-96"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="date" className="block text-white font-medium mb-2">
            Date
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="input-field rounded-lg h-10 w-96"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="time" className="block text-white font-medium mb-2">
            Time
          </label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="input-field rounded-lg h-10 w-96"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="numOfPeople"
            className="block text-white font-medium mb-2 "
          >
            Number of People
          </label>
          <input
            type="number"
            id="numOfPeople"
            value={numOfPeople}
            onChange={(e) => setNumOfPeople(parseInt(e.target.value))}
            min={1}
            className="input-field rounded-lg h-10 w-96"
            required
          />
        </div>
        <button
          type="submit"
          className="w-40 py-2 px-4 bg-[#F4CE14] text-white font-extrabold rounded-md hover:shadow-slate-50 ml-[5.5vw]"
        >
          Book Table
        </button>
      </form>

      {showPopup && (
        <ReservationDetails
          name={name}
          email={email}
          date={date}
          time={time}
          numOfPeople={numOfPeople}
          closePopup={closePopup}
        />
      )}
    </div>
  );
};

export default ReservationForm;
