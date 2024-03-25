import { useState } from "react";
import Register from "./Register";
import Login from "./Login";

const Landing = () => {
  const [showRegister, setShowRegister] = useState(true);

  const handleRegisterClick = () => {
    setShowRegister(true);
  };

  const handleLoginClick = () => {
    setShowRegister(false);
  };

  return (
    <header className="header">
      <h1 className="header-title">Campsite Delight</h1>
      <section className="header-buttons">
        <div
          className="header-btn header-btn-register"
          onClick={handleRegisterClick}
        >
          Register
        </div>
        <div className="header-btn header-btn-login" onClick={handleLoginClick}>
          Login
        </div>
      </section>
      {showRegister ? <Register /> : <Login />}
    </header>
  );
};

export default Landing;
