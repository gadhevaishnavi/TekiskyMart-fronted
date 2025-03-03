import React, { useState } from "react";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons
import "../assets/styles/Login.css";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility

  const validate = () => {
    let tempErrors = {};
    if (!isLogin && formData.name.trim() === "")
      tempErrors.name = "Name is required.";

    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      tempErrors.email = "Invalid email format.";

    if (!isLogin && !/^\d{10}$/.test(formData.mobile))
      tempErrors.mobile = "Mobile must be a 10-digit number.";

    if (formData.password.length < 8)
      tempErrors.password = "Password must be at least 8 characters.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const url = isLogin
      ? "https://tekisky-mart-backend-one.vercel.app/user/login"
      : "https://tekisky-mart-backend-one.vercel.app/user/register";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: isLogin ? "Login Successful!" : "Registration Successful!",
          text: isLogin ? "Welcome back!" : "You can now login.",
        });

        if (isLogin) {
          localStorage.setItem("token", data.token);
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: data.message || "Something went wrong",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to connect to server. Please try again.",
      });
    }
  };

  return (
    <div style={styles.container}>
      <h2>{isLogin ? "Login" : "Register"}</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        {!isLogin && (
          <>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <p style={styles.error}>{errors.name}</p>}

            <label>Mobile:</label>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
            {errors.mobile && <p style={styles.error}>{errors.mobile}</p>}
          </>
        )}

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <p style={styles.error}>{errors.email}</p>}

        <label>Password:</label>
        <div style={styles.passwordContainer}>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={styles.passwordInput}
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            style={styles.eyeIcon}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        {errors.password && <p style={styles.error}>{errors.password}</p>}

        <button type="submit" style={styles.button}>
          {isLogin ? "Login" : "Register"}
        </button>
      </form>

      <p onClick={() => setIsLogin(!isLogin)} style={styles.toggleText}>
        {isLogin
          ? "Don't have an account? Register"
          : "Already have an account? Login"}
      </p>
    </div>
  );
};

const styles = {
  container: {
    width: "300px",
    margin: "auto",
    padding: "20px",
    textAlign: "center",
    border: "1px solid #ccc",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  passwordContainer: {
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  passwordInput: {
    flex: 1,
    padding: "8px",
    paddingRight: "30px", // Ensure space for the eye icon
  },
  eyeIcon: {
    position: "absolute",
    right: "10px",
    cursor: "pointer",
  },
  button: {
    marginTop: "10px",
    padding: "10px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  toggleText: {
    marginTop: "10px",
    color: "#007BFF",
    cursor: "pointer",
    textDecoration: "underline",
  },
  error: {
    color: "red",
    fontSize: "12px",
    marginBottom: "5px",
  },
};

export default LoginPage;
