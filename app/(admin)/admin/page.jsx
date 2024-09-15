"use client";
import withAuth from "@/hoc/withAuth";

export const Admin = () => {
  return (
    <>
      <h1>Admin Page</h1>
    </>
  );
};

export default withAuth(Admin, ["admin"]);
