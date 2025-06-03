
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import AdminDashboard from "@/components/admin/AdminDashboard";

const Admin = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        console.log('Checking authentication status...');
        const { data: { session } } = await supabase.auth.getSession();
        console.log('Current session:', session);
        
        if (session?.user) {
          console.log('User is authenticated:', session.user.id);
          setUser(session.user);
        } else {
          console.log('No authenticated user, redirecting to auth page');
          navigate('/auth');
        }
      } catch (error) {
        console.error('Error checking authentication:', error);
        navigate('/auth');
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log('Auth state changed:', event, session?.user?.id);
      
      if (session?.user) {
        console.log('User authenticated, showing dashboard');
        setUser(session.user);
      } else {
        console.log('User signed out, redirecting to auth');
        setUser(null);
        navigate('/auth');
      }
      setLoading(false);
    });

    return () => subscription.unsubscribe();
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
