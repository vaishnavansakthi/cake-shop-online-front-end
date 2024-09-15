"use client";
import Loader from "@/components/atoms/Loader/Loader";
import React, { Suspense, useState, useEffect } from "react"; // Adjust the path if needed

export default function Layout({ children }) {
  return (
    <>
      <h1>Admin</h1>
      {children}
    </>
  );
}
