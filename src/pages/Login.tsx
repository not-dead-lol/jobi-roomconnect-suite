import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, ArrowRight, Building2, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", { email, password, rememberMe });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/30 flex items-center justify-center p-4">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />

      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-2xl">JR</span>
            </div>
            <div>
              <div className="font-display font-bold text-2xl">Jobi Rooms</div>
              <div className="text-primary font-semibold">Connect</div>
            </div>
          </div>
          <p className="text-muted-foreground">Channel Manager for Hotels & Homestays</p>
        </div>

        <Card className="shadow-2xl border-0 bg-background/95 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
            <CardDescription>
              Sign in to your channel manager dashboard
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Tabs defaultValue="hotel" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="hotel" className="flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  Hotel
                </TabsTrigger>
                <TabsTrigger value="homestay" className="flex items-center gap-2">
                  <Home className="w-4 h-4" />
                  Homestay
                </TabsTrigger>
              </TabsList>

              <TabsContent value="hotel">
                <form onSubmit={handleLogin} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="hotel@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="pl-10 pr-10"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <input
                        id="remember"
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="rounded border-border"
                      />
                      <Label htmlFor="remember" className="text-sm">
                        Remember me
                      </Label>
                    </div>
                    <a href="#" className="text-sm text-primary hover:underline">
                      Forgot password?
                    </a>
                  </div>

                  <Button type="submit" className="w-full gradient-primary text-primary-foreground h-12 text-base">
                    Sign In to Dashboard
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="homestay">
                <form onSubmit={handleLogin} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="email-homestay">Email Address</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                          id="email-homestay"
                          type="email"
                          placeholder="homestay@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="password-homestay">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                          id="password-homestay"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="pl-10 pr-10"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <input
                        id="remember-homestay"
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="rounded border-border"
                      />
                      <Label htmlFor="remember-homestay" className="text-sm">
                        Remember me
                      </Label>
                    </div>
                    <a href="#" className="text-sm text-primary hover:underline">
                      Forgot password?
                    </a>
                  </div>

                  <Button type="submit" className="w-full gradient-primary text-primary-foreground h-12 text-base">
                    Sign In to Dashboard
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{" "}
                <a href="/signup" className="text-primary hover:underline font-medium">
                  Create one here
                </a>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Trust Indicators */}
        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground mb-4">
            Trusted by 2,500+ properties across India
          </p>
          <div className="flex justify-center items-center space-x-6 opacity-60">
            <div className="text-sm font-semibold">MakeMyTrip</div>
            <div className="text-sm font-semibold">Booking.com</div>
            <div className="text-sm font-semibold">Airbnb</div>
            <div className="text-sm font-semibold">Expedia</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
