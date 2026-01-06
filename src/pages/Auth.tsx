
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Lock, Mail, User, Plane } from "lucide-react";
import { useNavigate } from "react-router-dom";


const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
    if (isAuthenticated) {
      navigate("/admin");
    }
  }, [navigate]);


  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simple local storage auth
    setTimeout(() => {
      localStorage.setItem("isAuthenticated", "true");
      // Store a dummy user object for Admin component to use if needed, 
      // though Admin.tsx will also be updated to just check local storage.
      localStorage.setItem("user", JSON.stringify({ email: email || "admin@example.com" }));

      toast({
        title: isLogin ? "Login successful" : "Account created",
        description: "Welcome back! Redirecting to admin dashboard...",
      });
      navigate("/admin");
      setLoading(false);
    }, 1000);
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
              <Plane size={32} className="text-primary" />
            </div>
            <CardTitle className="text-2xl font-bold">
              {isLogin ? 'Sign In' : 'Create Account'}
            </CardTitle>
            <p className="text-sm text-gray-600 mt-2">
              {isLogin
                ? 'Access the flight management dashboard'
                : 'Create an account to manage flights'
              }
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAuth} className="space-y-4">
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
                  placeholder="your@email.com"
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
                  minLength={6}
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90"
                disabled={loading}
              >
                {loading
                  ? (isLogin ? "Signing in..." : "Creating account...")
                  : (isLogin ? "Sign In" : "Create Account")
                }
              </Button>
            </form>

            <div className="mt-4 text-center">
              <Button
                variant="link"
                onClick={() => setIsLogin(!isLogin)}
                className="text-sm"
              >
                {isLogin
                  ? "Don't have an account? Sign up"
                  : "Already have an account? Sign in"
                }
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Auth;
