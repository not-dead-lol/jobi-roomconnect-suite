import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User, Building2, Home, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    propertyName: "",
    propertyType: "hotel",
    rooms: "",
    acceptTerms: false,
    acceptMarketing: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log("Signup attempt:", formData);
  };

  const features = [
    "Real-time sync across all platforms",
    "Unified booking dashboard",
    "Dynamic pricing engine",
    "Advanced analytics & reports",
    "24/7 customer support",
    "Mobile app access"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/30 flex items-center justify-center p-4">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />

      <div className="w-full max-w-4xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Benefits */}
          <div className="hidden lg:block space-y-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-2xl">JR</span>
                </div>
                <div>
                  <div className="font-display font-bold text-2xl">Jobi Rooms</div>
                  <div className="text-primary font-semibold">Connect</div>
                </div>
              </div>
              <h1 className="text-3xl font-bold mb-4">Start Managing Your Bookings Like a Pro</h1>
              <p className="text-muted-foreground text-lg">
                Join thousands of properties already using Jobi Connect to streamline their operations and increase revenue.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">What you'll get:</h3>
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-accent/50 rounded-xl p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <div className="font-semibold">14-Day Free Trial</div>
                  <div className="text-sm text-muted-foreground">No credit card required</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Experience the full power of Jobi Connect with no commitment. Cancel anytime during your trial.
              </p>
            </div>
          </div>

          {/* Right Side - Signup Form */}
          <div className="w-full">
            <Card className="shadow-2xl border-0 bg-background/95 backdrop-blur-sm">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold">Create Your Account</CardTitle>
                <CardDescription>
                  Start your free trial and transform your property management
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
                    <form onSubmit={handleSignup} className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name</Label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                            <Input
                              id="firstName"
                              type="text"
                              placeholder="John"
                              value={formData.firstName}
                              onChange={(e) => handleInputChange("firstName", e.target.value)}
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            type="text"
                            placeholder="Doe"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange("lastName", e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                          <Input
                            id="email"
                            type="email"
                            placeholder="hotel@example.com"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="propertyName">Hotel Name</Label>
                        <Input
                          id="propertyName"
                          type="text"
                          placeholder="Grand Palace Hotel"
                          value={formData.propertyName}
                          onChange={(e) => handleInputChange("propertyName", e.target.value)}
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="rooms">Number of Rooms</Label>
                        <Input
                          id="rooms"
                          type="number"
                          placeholder="50"
                          value={formData.rooms}
                          onChange={(e) => handleInputChange("rooms", e.target.value)}
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="password">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                          <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Create a strong password"
                            value={formData.password}
                            onChange={(e) => handleInputChange("password", e.target.value)}
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

                      <div>
                        <Label htmlFor="confirmPassword">Confirm Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                          <Input
                            id="confirmPassword"
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm your password"
                            value={formData.confirmPassword}
                            onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                            className="pl-10 pr-10"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                          >
                            {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-start space-x-2">
                          <Checkbox
                            id="terms"
                            checked={formData.acceptTerms}
                            onCheckedChange={(checked) => handleInputChange("acceptTerms", checked as boolean)}
                            required
                          />
                          <Label htmlFor="terms" className="text-sm leading-relaxed">
                            I agree to the{" "}
                            <a href="#" className="text-primary hover:underline">
                              Terms of Service
                            </a>{" "}
                            and{" "}
                            <a href="#" className="text-primary hover:underline">
                              Privacy Policy
                            </a>
                          </Label>
                        </div>

                        <div className="flex items-start space-x-2">
                          <Checkbox
                            id="marketing"
                            checked={formData.acceptMarketing}
                            onCheckedChange={(checked) => handleInputChange("acceptMarketing", checked as boolean)}
                          />
                          <Label htmlFor="marketing" className="text-sm text-muted-foreground">
                            Send me updates about new features and tips
                          </Label>
                        </div>
                      </div>

                      <Button type="submit" className="w-full gradient-primary text-primary-foreground h-12 text-base">
                        Start Free Trial
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </form>
                  </TabsContent>

                  <TabsContent value="homestay">
                    <form onSubmit={handleSignup} className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName-homestay">First Name</Label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                            <Input
                              id="firstName-homestay"
                              type="text"
                              placeholder="Priya"
                              value={formData.firstName}
                              onChange={(e) => handleInputChange("firstName", e.target.value)}
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="lastName-homestay">Last Name</Label>
                          <Input
                            id="lastName-homestay"
                            type="text"
                            placeholder="Sharma"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange("lastName", e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="email-homestay">Email Address</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                          <Input
                            id="email-homestay"
                            type="email"
                            placeholder="homestay@example.com"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="propertyName-homestay">Property Name</Label>
                        <Input
                          id="propertyName-homestay"
                          type="text"
                          placeholder="Sharma's Heritage Homestay"
                          value={formData.propertyName}
                          onChange={(e) => handleInputChange("propertyName", e.target.value)}
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="rooms-homestay">Number of Rooms</Label>
                        <Input
                          id="rooms-homestay"
                          type="number"
                          placeholder="5"
                          value={formData.rooms}
                          onChange={(e) => handleInputChange("rooms", e.target.value)}
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="password-homestay">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                          <Input
                            id="password-homestay"
                            type={showPassword ? "text" : "password"}
                            placeholder="Create a strong password"
                            value={formData.password}
                            onChange={(e) => handleInputChange("password", e.target.value)}
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

                      <div>
                        <Label htmlFor="confirmPassword-homestay">Confirm Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                          <Input
                            id="confirmPassword-homestay"
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm your password"
                            value={formData.confirmPassword}
                            onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                            className="pl-10 pr-10"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                          >
                            {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-start space-x-2">
                          <Checkbox
                            id="terms-homestay"
                            checked={formData.acceptTerms}
                            onCheckedChange={(checked) => handleInputChange("acceptTerms", checked as boolean)}
                            required
                          />
                          <Label htmlFor="terms-homestay" className="text-sm leading-relaxed">
                            I agree to the{" "}
                            <a href="#" className="text-primary hover:underline">
                              Terms of Service
                            </a>{" "}
                            and{" "}
                            <a href="#" className="text-primary hover:underline">
                              Privacy Policy
                            </a>
                          </Label>
                        </div>

                        <div className="flex items-start space-x-2">
                          <Checkbox
                            id="marketing-homestay"
                            checked={formData.acceptMarketing}
                            onCheckedChange={(checked) => handleInputChange("acceptMarketing", checked as boolean)}
                          />
                          <Label htmlFor="marketing-homestay" className="text-sm text-muted-foreground">
                            Send me updates about new features and tips
                          </Label>
                        </div>
                      </div>

                      <Button type="submit" className="w-full gradient-primary text-primary-foreground h-12 text-base">
                        Start Free Trial
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>

                <div className="mt-6 text-center">
                  <p className="text-sm text-muted-foreground">
                    Already have an account?{" "}
                    <a href="/login" className="text-primary hover:underline font-medium">
                      Sign in here
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
