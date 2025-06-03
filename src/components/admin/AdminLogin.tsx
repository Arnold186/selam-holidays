
import React, { useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Lock, Mail } from "lucide-react";

interface AdminLoginProps {
  onLoginSuccess?: () => void;
}

const AdminLogin = ({ onLoginSuccess }: AdminLoginProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log('Attempting login with email:', email);
      
      // Try to sign in with the provided credentials
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error('Login error:', error);
        
        // If it's the admin email and credentials are invalid, try to sign up
        if (email === "eloimuvunyi@gmail.com" && error.message.includes("Invalid login credentials")) {
          console.log('Admin email detected, attempting signup...');
          
          const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
            email,
            password,
          });

          if (signUpError) {
            console.error('Signup error:', signUpError);
            throw signUpError;
          }

          if (signUpData.user) {
            console.log('Signup successful, creating admin record...');
            
            // Ensure admin user record exists
            const { error: adminError } = await supabase
              .from('admin_users')
              .upsert([
                {
                  user_id: signUpData.user.id,
                  email: email
                }
              ], { onConflict: 'user_id' });

            if (adminError) {
              console.error("Error creating admin record:", adminError);
            }

            toast({
              title: "Admin account created",
              description: "Please check your email to verify your account, then try logging in again.",
            });
          }
        } else {
          throw error;
        }
      } else if (data.user) {
        console.log('Login successful for user:', data.user.id);
        
        // For the admin email, ensure admin record exists
        if (email === "eloimuvunyi@gmail.com") {
          console.log('Admin email detected, ensuring admin record exists...');
          
          const { error: adminError } = await supabase
            .from('admin_users')
            .upsert([
              {
                user_id: data.user.id,
                email: email
              }
            ], { onConflict: 'user_id' });

          if (adminError) {
            console.error("Error ensuring admin record:", adminError);
          } else {
            console.log('Admin record ensured for user:', data.user.id);
          }
        }

        toast({
          title: "Login successful",
          description: "Welcome to the admin dashboard",
        });
        
        // Call the success callback to trigger admin status refetch
        if (onLoginSuccess) {
          console.log('Calling onLoginSuccess callback...');
          onLoginSuccess();
        }
      }
    } catch (error: any) {
      console.error('Login process error:', error);
      toast({
        title: "Login failed",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-700 to-primary flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
              <Lock size={32} className="text-primary" />
            </div>
            <CardTitle className="text-2xl font-bold">Admin Login</CardTitle>
            <p className="text-sm text-gray-600 mt-2">
              Use: eloimuvunyi@gmail.com / Umuhire@123
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail size={16} />
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="admin@example.com"
                />
              </div>
              <div>
                <Label htmlFor="password" className="flex items-center gap-2">
                  <Lock size={16} />
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your password"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90"
                disabled={loading}
              >
                {loading ? "Signing in..." : "Sign In"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
