import { useEffect, useRef, useState } from "react";

const Otp = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const refs = useRef([]);

  const handleInput = (e, index) => {
    const value = e.target.value;

    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      refs.current[index + 1].focus();
    }
  };

  const handleKey = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);

      if (index > 0) {
        refs.current[index - 1].focus();
      }
    }
  };

  useEffect(() => {
    refs.current[0].focus();
  }, []);

  return (
    <div className="container">
      <h1>OTP Fields</h1>

      {otp.map((_, index) => (
        <input
          key={index}
          maxLength="1"
          ref={(el) => (refs.current[index] = el)}
          value={otp[index]}
          onChange={(e) => handleInput(e, index)}
          onKeyDown={(e) => handleKey(e, index)}
        />
      ))}

      <br />
      <button>Verify OTP</button>
    </div>
  );
};

export default Otp;
