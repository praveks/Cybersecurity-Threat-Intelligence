import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate()
  const handlelogin = async (e) => {
    e.preventDefault();
    try {
     const response= await axios.post(`${import.meta.env.VITE_API_URL}/auth/register`, {
        email,
        password,
      });
      console.log(response.data)
      navigate("/");
    } catch (err) {
      console.error(
        "Login failed:",
        err.response?.data?.message || err.message
      );
      alert("signin failed: Invalid credentials");
    }
  };    

  return (
    <>
      <div className="container">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary" onClick={handlelogin}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Signin;
