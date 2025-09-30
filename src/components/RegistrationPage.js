import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Card, Button, FormGroup, FormLabel } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function RegistrationPage() {
  const navigate = useNavigate();

  // State to toggle visibility of password fields
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Handlers to toggle password visibility
  const togglePassword = () => setShowPassword((prev) => !prev);
  const toggleConfirmPassword = () => setShowConfirmPassword((prev) => !prev);

  // Custom validation function for form input
  const validateRegistration = (values) => {
    const errors = {};

    // First name validation
    if (!values.firstName) {
      errors.firstName = "First Name is required";
    } else if (values.firstName.length > 15) {
      errors.firstName = "First Name must not exceed 15 characters";
    }

    // Surname validation
    if (!values.surname) {
      errors.surname = "Surname is required";
    } else if (values.surname.length > 20) {
      errors.surname = "Surname must not exceed 20 characters";
    }

    // Email validation using regex
    if (!values.email) {
      errors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    // Password validation: length, upper/lowercase, number, special char
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    } else if (!/[a-z]/.test(values.password)) {
      errors.password = "Password must contain at least one lowercase letter";
    } else if (!/[A-Z]/.test(values.password)) {
      errors.password = "Password must contain at least one uppercase letter";
    } else if (!/[0-9]/.test(values.password)) {
      errors.password = "Password must contain at least one number";
    } else if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(values.password)) {
      errors.password = "Password must contain at least one special character";
    }

    // Confirm password validation
    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };

  // Handle form submission
  const handleSubmit = (values, { setSubmitting }) => {
    // Simulate API call
    setTimeout(() => {
      alert("Registration successful! You can now log in.");
      setSubmitting(false);
      navigate("/login"); // Redirect to login page after successful registration
    }, 1500);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <Card
        className="p-4 shadow-lg"
        style={{ maxWidth: "500px", width: "100%" }}
      >
        <h2 className="text-center mb-4">Register for Shelflife</h2>

        {/* Formik wrapper */}
        <Formik
          initialValues={{
            firstName: "",
            surname: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validate={validateRegistration}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              {/* First Name Field */}
              <FormGroup className="mb-3">
                <FormLabel htmlFor="firstName">First Name</FormLabel>
                <Field
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="form-control"
                  placeholder="Enter first name"
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="text-danger small"
                />
              </FormGroup>

              {/* Surname Field */}
              <FormGroup className="mb-3">
                <FormLabel htmlFor="surname">Surname</FormLabel>
                <Field
                  type="text"
                  id="surname"
                  name="surname"
                  className="form-control"
                  placeholder="Enter surname"
                />
                <ErrorMessage
                  name="surname"
                  component="div"
                  className="text-danger small"
                />
              </FormGroup>

              {/* Email Field */}
              <FormGroup className="mb-3">
                <FormLabel htmlFor="email">Email address</FormLabel>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-danger small"
                />
              </FormGroup>

              {/* Password Field with toggle */}
              <FormGroup className="mb-3 position-relative">
                <FormLabel htmlFor="password">Password</FormLabel>
                <div className="d-flex align-items-center">
                  <Field
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                  />
                  {/* Toggle eye icon */}
                  <span
                    className="ms-2"
                    onClick={togglePassword}
                    style={{ cursor: "pointer" }}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-danger small"
                />
              </FormGroup>

              {/* Confirm Password Field with toggle */}
              <FormGroup className="mb-4 position-relative">
                <FormLabel htmlFor="confirmPassword">
                  Confirm Password
                </FormLabel>
                <div className="d-flex align-items-center">
                  <Field
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    className="form-control"
                    placeholder="Confirm password"
                  />
                  {/* Toggle eye icon */}
                  <span
                    className="ms-2"
                    onClick={toggleConfirmPassword}
                    style={{ cursor: "pointer" }}
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-danger small"
                />
              </FormGroup>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="success"
                className="w-100"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Registering..." : "Register"}
              </Button>
            </Form>
          )}
        </Formik>

        {/* Navigation Link */}
        <p className="text-center mt-3">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </Card>
    </div>
  );
}

export default RegistrationPage;
