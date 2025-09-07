import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Shield, Eye, Mail, Lock, Chrome } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
      // Redirect to dashboard
      window.location.href = "/dashboard";
    }, 1500);
  };

  return (
    <div className="min-h-screen gradient-hero flex items-center justify-center p-4">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-primary/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-accent/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Shield className="w-12 h-12 text-primary mr-3" />
            <Eye className="w-6 h-6 text-accent absolute ml-8 -mt-2" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            PhishEye
          </h1>
          <p className="text-muted-foreground mt-2">
            Secure your digital world
          </p>
        </div>

        <Card className="glass-card">
          <CardHeader className="text-center">
            <CardTitle>Welcome Back</CardTitle>
            <p className="text-sm text-muted-foreground">
              Sign in to your PhishEye account
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Google Sign In */}
            <Button variant="outline" className="w-full" size="lg">
              <Chrome className="w-5 h-5 mr-2" />
              Continue with Google
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">
                  Or continue with email
                </span>
              </div>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm text-muted-foreground">Remember me</span>
                </label>
                <Button variant="link" className="p-0 h-auto text-sm">
                  Forgot password?
                </Button>
              </div>

              <Button 
                type="submit" 
                className="w-full gradient-primary glow-primary" 
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </form>

            <div className="text-center text-sm">
              <span className="text-muted-foreground">Don't have an account? </span>
              <Button variant="link" className="p-0 h-auto" asChild>
                <a href="/signup">Sign up</a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Demo Access */}
        <Card className="glass-card mt-6">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-3">
                Want to try before signing up?
              </p>
              <Button variant="outline" className="w-full" asChild>
                <a href="/dashboard">
                  Try Demo Dashboard
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;