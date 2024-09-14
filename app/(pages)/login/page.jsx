"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-700">
          Log In
        </h2>

        <form onSubmit={formik.handleSubmit} className="mt-4 space-y-4">
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

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm ${
                formik.touched.password && formik.errors.password
                  ? "border-red-500"
                  : "border-gray-300"
              } focus:ring-pink-500 focus:border-pink-500`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <p className="text-red-500 text-xs mt-1">
                {formik.errors.password}
              </p>
            ) : null}
          </div>

          {/* Forgot Password Link */}
          <div className="flex justify-end">
            <a
              href="/forgot-password"
              className="text-sm text-pink-500 hover:text-pink-600 focus:outline-none hover:underline"
            >
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
            >
              Log In
            </button>
          </div>
        </form>

        {/* Sign Up Link */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Don't have an account?{" "}
            <a
              href="/signup"
              className="text-pink-500 hover:text-pink-600 focus:outline-none hover:underline"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
