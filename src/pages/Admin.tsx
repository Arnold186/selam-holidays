
import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import AdminLogin from "@/components/admin/AdminLogin";
import AdminDashboard from "@/components/admin/AdminDashboard";

const Admin = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const { data: isAdmin, isLoading: adminCheckLoading, refetch: refetchAdminStatus } = useQuery({
    queryKey: ['admin-check', user?.id],
    queryFn: async () => {
      if (!user) {
        console.log('No user found for admin check');
        return false;
      }
      
      console.log('Checking admin status for user:', user.id);
      
      const { data, error } = await supabase
        .from('admin_users')
        .select('id, email')
        .eq('user_id', user.id)
        .single();
      
      if (error) {
        console.error('Admin check error:', error);
        return false;
      }
      
      console.log('Admin check result:', !!data, 'Admin data:', data);
      return !!data;
    },
    enabled: !!user,
    retry: 1,
    refetchOnWindowFocus: false
  });

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        console.log('Initializing auth...');
        const { data: { session } } = await supabase.auth.getSession();
        console.log('Initial session:', session);
        setUser(session?.user ?? null);
      } catch (error) {
        console.error('Error getting session:', error);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      console.log('Auth state changed:', _event, session?.user?.id);
      setUser(session?.user ?? null);
      setLoading(false);
      
      // If user signed out or signed in, refetch admin status
      if (_event === 'SIGNED_OUT') {
        console.log('User signed out, clearing admin status');
      } else if (_event === 'SIGNED_IN' && session?.user) {
        console.log('User signed in, will refetch admin status...');
        setTimeout(() => {
          console.log('Refetching admin status...');
          refetchAdminStatus();
        }, 500);
      }
    });

    return () => subscription.unsubscribe();
  }, [refetchAdminStatus]);

  // Enhanced logging for debugging
  console.log('Admin page state:', {
    user: user?.id,
    isAdmin,
    loading,
    adminCheckLoading
  });

  if (loading || adminCheckLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-tertiary">
            {loading ? 'Loading...' : 'Verifying admin access...'}
          </p>
        </div>
      </div>
    );
  }

  // Show login form if no user or user is not an admin
  if (!user || !isAdmin) {
    console.log('Showing login form - User:', !!user, 'IsAdmin:', isAdmin);
    return <AdminLogin onLoginSuccess={() => {
      console.log('Login success callback triggered');
      refetchAdminStatus();
    }} />;
  }

  console.log('Showing admin dashboard');
  return <AdminDashboard />;
};

export default Admin;
