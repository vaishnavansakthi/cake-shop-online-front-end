"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup"; // Importing useRouter from next/navigation

const ForgotPassword = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2)); // Handle the password reset submission
    },
  });

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-700">
          Forgot Password
        </h2>

        <p className="text-sm text-gray-600 text-center mt-2">
          Enter your email address and we will send you a OTP to reset your
          password.
        </p>

        <form onSubmit={formik.handleSubmit} className="mt-6 space-y-4">
          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm ${
                formik.touched.email && formik.errors.email
                  ? "border-red-500"
                  : "border-gray-300"
              } focus:ring-pink-500 focus:border-pink-500`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
            ) : null}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
            >
              Reset Password
            </button>
          </div>
        </form>

        {/* Back to Login Link */}
        <div className="mt-4 text-center">
          <a
            href="/login"
            className="text-sm text-pink-500 hover:text-pink-600 focus:outline-none hover:underline"
          >
            Back to Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
