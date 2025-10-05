import { useState } from "react";
import { 
  Bell, 
  Search, 
  Settings, 
  LogOut, 
  TrendingUp, 
  Calendar, 
  Users, 
  DollarSign,
  Building2,
  Home,
  RefreshCw,
  CheckCircle,
  AlertCircle,
  Clock,
  BarChart3,
  PieChart,
  Download,
  Filter,
  Plus,
  Eye,
  Edit,
  Trash2,
  MoreHorizontal
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [propertyType] = useState("hotel"); // This would come from user context

  // Mock data
  const stats = [
    { title: "Today's Bookings", value: "12", change: "+18%", icon: TrendingUp, color: "text-success" },
    { title: "Revenue", value: "₹45.6K", change: "+12%", icon: DollarSign, color: "text-success" },
    { title: "Occupancy", value: "87%", change: "+5%", icon: Users, color: "text-success" },
    { title: "Avg Rate", value: "₹3,800", change: "+8%", icon: BarChart3, color: "text-success" }
  ];

  const recentBookings = [
    { id: 1, guest: "Rajesh Kumar", room: "Deluxe Suite", platform: "MakeMyTrip", amount: "₹4,500", status: "confirmed", checkIn: "2025-01-15", checkOut: "2025-01-17" },
    { id: 2, guest: "Sarah Johnson", room: "Standard Room", platform: "Booking.com", amount: "₹3,200", status: "confirmed", checkIn: "2025-01-16", checkOut: "2025-01-18" },
    { id: 3, guest: "Priya Sharma", room: "Premium Villa", platform: "Airbnb", amount: "₹8,000", status: "pending", checkIn: "2025-01-18", checkOut: "2025-01-20" },
    { id: 4, guest: "Michael Chen", room: "Executive Suite", platform: "Jobi Rooms", amount: "₹6,500", status: "confirmed", checkIn: "2025-01-19", checkOut: "2025-01-21" }
  ];

  const syncStatus = [
    { platform: "MakeMyTrip", status: "synced", lastSync: "2 min ago", bookings: 45 },
    { platform: "Booking.com", status: "synced", lastSync: "1 min ago", bookings: 32 },
    { platform: "Airbnb", status: "syncing", lastSync: "Syncing...", bookings: 18 },
    { platform: "Expedia", status: "error", lastSync: "Failed", bookings: 0 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "synced": return "text-success";
      case "syncing": return "text-warning";
      case "error": return "text-error";
      default: return "text-muted-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "synced": return <CheckCircle className="w-4 h-4" />;
      case "syncing": return <RefreshCw className="w-4 h-4 animate-spin" />;
      case "error": return <AlertCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">JR</span>
                </div>
                <div>
                  <div className="font-display font-bold text-xl">Jobi Rooms</div>
                  <div className="text-primary font-semibold text-sm">Connect</div>
                </div>
              </div>
            </div>

            {/* Search */}
            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search bookings, guests, rooms..."
                  className="pl-10"
                />
              </div>
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-error rounded-full text-xs text-error-foreground flex items-center justify-center">3</span>
              </Button>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-2">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="/placeholder-avatar.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <span className="hidden sm:block">John Doe</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">
                Welcome back, John! 👋
              </h1>
              <p className="text-muted-foreground mt-2">
                Here's what's happening with your {propertyType === "hotel" ? "hotel" : "homestay"} today
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
              <Button size="sm" className="gradient-primary text-primary-foreground">
                <Plus className="w-4 h-4 mr-2" />
                New Booking
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className={`text-sm ${stat.color} flex items-center mt-1`}>
                      <TrendingUp className="w-3 h-3 mr-1" />
                      {stat.change}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="bookings">Bookings</TabsTrigger>
            <TabsTrigger value="calendar">Calendar</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Recent Bookings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Recent Bookings
                    <Button variant="ghost" size="sm">
                      View All
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentBookings.map((booking) => (
                      <div key={booking.id} className="flex items-center justify-between p-4 bg-accent/30 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <Avatar className="w-10 h-10">
                            <AvatarFallback>{booking.guest.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{booking.guest}</div>
                            <div className="text-sm text-muted-foreground">{booking.room}</div>
                            <div className="text-xs text-muted-foreground">
                              {booking.checkIn} - {booking.checkOut}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">{booking.amount}</div>
                          <div className="text-sm text-muted-foreground">{booking.platform}</div>
                          <Badge variant={booking.status === "confirmed" ? "default" : "secondary"} className="mt-1">
                            {booking.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Sync Status */}
              <Card>
                <CardHeader>
                  <CardTitle>Platform Sync Status</CardTitle>
                  <CardDescription>Real-time synchronization across all channels</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {syncStatus.map((platform, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-accent/30 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                            <span className="text-sm font-semibold">{platform.platform[0]}</span>
                          </div>
                          <div>
                            <div className="font-medium">{platform.platform}</div>
                            <div className="text-sm text-muted-foreground">{platform.bookings} bookings</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`flex items-center space-x-2 ${getStatusColor(platform.status)}`}>
                            {getStatusIcon(platform.status)}
                            <span className="text-sm">{platform.lastSync}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="bookings" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>All Bookings</CardTitle>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Export
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 font-semibold">Guest</th>
                        <th className="text-left py-3 px-4 font-semibold">Room</th>
                        <th className="text-left py-3 px-4 font-semibold">Platform</th>
                        <th className="text-left py-3 px-4 font-semibold">Amount</th>
                        <th className="text-left py-3 px-4 font-semibold">Status</th>
                        <th className="text-left py-3 px-4 font-semibold">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentBookings.map((booking) => (
                        <tr key={booking.id} className="border-b border-border hover:bg-accent/30">
                          <td className="py-4 px-4">
                            <div className="flex items-center space-x-3">
                              <Avatar className="w-8 h-8">
                                <AvatarFallback>{booking.guest.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-medium">{booking.guest}</div>
                                <div className="text-sm text-muted-foreground">
                                  {booking.checkIn} - {booking.checkOut}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-4 font-medium">{booking.room}</td>
                          <td className="py-4 px-4">
                            <Badge variant="outline">{booking.platform}</Badge>
                          </td>
                          <td className="py-4 px-4 font-semibold">{booking.amount}</td>
                          <td className="py-4 px-4">
                            <Badge variant={booking.status === "confirmed" ? "default" : "secondary"}>
                              {booking.status}
                            </Badge>
                          </td>
                          <td className="py-4 px-4">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm">
                                  <MoreHorizontal className="w-4 h-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                  <Eye className="w-4 h-4 mr-2" />
                                  View
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Edit className="w-4 h-4 mr-2" />
                                  Edit
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-error">
                                  <Trash2 className="w-4 h-4 mr-2" />
                                  Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="calendar" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Booking Calendar</CardTitle>
                <CardDescription>Manage your availability and bookings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Calendar View</h3>
                  <p className="text-muted-foreground mb-4">
                    Interactive calendar will be implemented here
                  </p>
                  <Button variant="outline">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Block Dates
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Revenue Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <PieChart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Revenue Chart</h3>
                    <p className="text-muted-foreground">
                      Detailed analytics and charts will be implemented here
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Channel Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {syncStatus.map((platform, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                            <span className="text-sm font-semibold">{platform.platform[0]}</span>
                          </div>
                          <span className="font-medium">{platform.platform}</span>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">{platform.bookings} bookings</div>
                          <div className="text-sm text-muted-foreground">
                            {Math.round((platform.bookings / 95) * 100)}% of total
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
