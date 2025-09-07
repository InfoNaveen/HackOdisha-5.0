import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Home,
  ScanLine,
  BarChart3,
  GraduationCap,
  User,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
  currentPage: string;
}

const DashboardLayout = ({ children, currentPage }: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    { name: "Scan URL/Email", href: "/scanner", icon: ScanLine },
    { name: "Analytics", href: "/analytics", icon: BarChart3 },
    { name: "Learning Hub", href: "/learning", icon: GraduationCap },
    { name: "Profile", href: "/profile", icon: User },
    { name: "Settings", href: "/settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 glass-card border-r transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center">
            <Shield className="w-8 h-8 text-primary mr-3" />
            <span className="text-xl font-bold">PhishEye</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        <nav className="p-4 flex-1">
          <ul className="space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.name;
              return (
                <li key={item.name}>
                  <Button
                    variant={isActive ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    asChild
                  >
                    <a href={item.href}>
                      <Icon className="w-5 h-5 mr-3" />
                      {item.name}
                    </a>
                  </Button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-4 border-t border-border">
          <Button variant="outline" className="w-full justify-start">
            <LogOut className="w-5 h-5 mr-3" />
            Sign Out
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <header className="glass-card border-b border-border p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden mr-3"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="w-5 h-5" />
              </Button>
              <h1 className="text-2xl font-bold">{currentPage}</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center px-3 py-1 rounded-full bg-safe/20 text-safe text-sm font-medium">
                <div className="w-2 h-2 bg-safe rounded-full mr-2 animate-pulse"></div>
                System Status: Operational
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;