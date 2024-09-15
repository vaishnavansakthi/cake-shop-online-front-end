/* eslint-disable react/display-name */
"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const withAuth = (WrappedComponent, allowedRoles = []) => {
  return (props) => {
    const router = useRouter();
    useEffect(() => {
      // Check if the token exists (you can also check it in localStorage)
      const token = localStorage.getItem("access_token");
      console.log(token);

      if (!token) {
        // Redirect to login if no token
        router.push("/login");
        return;
      }

      try {
        const decodedToken = jwtDecode(token);
        const userRole = decodedToken?.role;

        // Check if user role is in allowedRoles
        if (allowedRoles.length && !allowedRoles.includes(userRole)) {
          // Redirect to unauthorized page if role doesn't match
          router.push("/unauthorized");
        }
      } catch (error) {
        console.error("Invalid token", error);
        router.push("/login");
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
