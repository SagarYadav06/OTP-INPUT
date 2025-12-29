import React, { useState, useRef } from "react";

const Otp = () => {
  const [otp, setOtp] = useState(["", "", ""]);
  const inputRefs = useRef([]);

  const handleChange = (value, index) => {
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const verifyOtp = () => {
    alert(`Your OTP is: ${otp.join("")}`);
  };

  return (
    <div className="container">
      <h1>OTP Fields</h1>

      {otp.map((digit, index) => (
        <input
          key={index}
          type="text"
          value={digit}
          maxLength="1"
          onChange={(e) => handleChange(e.target.value, index)}
          ref={(el) => (inputRefs.current[index] = el)}
        />
      ))}

      <br />
      <button onClick={verifyOtp}>Verify OTP</button>
    </div>
  );
};

export default Otp;
