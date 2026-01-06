
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import AdminDashboard from "@/components/admin/AdminDashboard";

const Admin = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = () => {
      const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
      if (!isAuthenticated) {
        console.log("No authenticated user, redirecting to auth page");
        navigate("/auth");
      } else {
        console.log("User authenticated, showing dashboard");
        const storedUser = localStorage.getItem("user");
        setUser(storedUser ? JSON.parse(storedUser) : { email: "admin@example.com" });
      }
      setLoading(false);
    };

    checkAuth();
  }, [navigate]);


  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-tertiary">Loading...</p>
        </div>
      </div>
    );
  }

  // If no user, the useEffect will redirect to /auth
  if (!user) {
    return null;
  }

  console.log('Rendering admin dashboard for user:', user.id);
  return <AdminDashboard />;
};

export default Admin;
