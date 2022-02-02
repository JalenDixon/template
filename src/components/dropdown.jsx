import React, { useState } from "react";

const Flights = {
  Alpha: "A",
  Bravo: "B",
  Charlie: "C",
  Delta: "D",
};

const dropDownstyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  select: {
    padding: 5,
    width: 200,
  },
  result: {
    marginTop: 30,
  },
};

const FlightsBox = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const selectChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);
  };

  return (
    <>
      Hello world again
      <div style={dropDownstyles.container}>
        <select onChange={selectChange} style={dropDownstyles.select}>
          <option selected disabled>
            Choose Your Flight
          </option>
          <option value={Flights.Alpha}>Alpha</option>
          <option value={Flights.Bravo}>Bravo</option>
          <option value={Flights.Charlie}>Charlie</option>
          <option value={Flights.Delta}>Delta</option>
        </select>
      </div>
      {selectedOption && <div>{`Hello, youve chosen ${selectedOption}`}</div>}
    </>
  );
};
export { FlightsBox };
