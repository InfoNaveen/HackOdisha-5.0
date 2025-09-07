import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Shield,
  ScanLine,
  TrendingUp,
  AlertTriangle,
  Clock,
  CheckCircle,
  BarChart3,
  Users,
  Globe,
} from "lucide-react";

const Dashboard = () => {
  const recentScans = [
    {
      url: "https://secure-bank.com",
      result: "Safe",
      score: 5,
      time: "2 minutes ago",
      status: "safe",
    },
    {
      url: "https://suspicious-site.temp",
      result: "Suspicious",
      score: 65,
      time: "15 minutes ago",
      status: "warning",
    },
    {
      url: "https://phishing-attempt.fake",
      result: "Dangerous",
      score: 92,
      time: "1 hour ago",
      status: "danger",
    },
    {
      url: "https://google.com",
      result: "Safe",
      score: 2,
      time: "3 hours ago",
      status: "safe",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "safe":
        return <CheckCircle className="w-5 h-5 text-safe" />;
      case "warning":
        return <AlertTriangle className="w-5 h-5 text-warning" />;
      case "danger":
        return <AlertTriangle className="w-5 h-5 text-danger" />;
      default:
        return <Shield className="w-5 h-5 text-muted-foreground" />;
    }
  };

  return (
    <DashboardLayout currentPage="Dashboard">
      <div className="space-y-6">
        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Button className="h-24 flex-col gradient-primary glow-primary">
            <ScanLine className="w-8 h-8 mb-2" />
            <span>Quick Scan</span>
          </Button>
          <Button variant="outline" className="h-24 flex-col">
            <BarChart3 className="w-8 h-8 mb-2" />
            <span>View Analytics</span>
          </Button>
          <Button variant="outline" className="h-24 flex-col">
            <Shield className="w-8 h-8 mb-2" />
            <span>Security Quiz</span>
          </Button>
          <Button variant="outline" className="h-24 flex-col">
            <Users className="w-8 h-8 mb-2" />
            <span>Team Settings</span>
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Today's Scans</p>
                  <p className="text-3xl font-bold text-primary">47</p>
                  <p className="text-sm text-safe flex items-center mt-1">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    +23% from yesterday
                  </p>
                </div>
                <ScanLine className="w-12 h-12 text-primary/20" />
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Threats Blocked</p>
                  <p className="text-3xl font-bold text-danger">3</p>
                  <p className="text-sm text-safe flex items-center mt-1">
                    <Shield className="w-4 h-4 mr-1" />
                    100% blocked
                  </p>
                </div>
                <AlertTriangle className="w-12 h-12 text-danger/20" />
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Security Score</p>
                  <p className="text-3xl font-bold text-safe">94%</p>
                  <p className="text-sm text-safe flex items-center mt-1">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Excellent
                  </p>
                </div>
                <Shield className="w-12 h-12 text-safe/20" />
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Response Time</p>
                  <p className="text-3xl font-bold text-accent">0.6s</p>
                  <p className="text-sm text-safe flex items-center mt-1">
                    <Clock className="w-4 h-4 mr-1" />
                    Optimal
                  </p>
                </div>
                <Clock className="w-12 h-12 text-accent/20" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Recent Scans */}
          <div className="lg:col-span-2">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Recent Scans</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentScans.map((scan, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 glass-card rounded-lg"
                    >
                      <div className="flex items-center space-x-4 min-w-0 flex-1">
                        {getStatusIcon(scan.status)}
                        <div className="min-w-0 flex-1">
                          <div className="font-mono text-sm truncate">
                            {scan.url}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {scan.time}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">{scan.result}</div>
                        <div className="text-sm text-muted-foreground">
                          {scan.score}% risk
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Security Tips */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Security Tips
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 glass-card rounded-lg">
                <div className="font-semibold mb-2">🔐 Strong Passwords</div>
                <p className="text-sm text-muted-foreground">
                  Use unique passwords with 12+ characters, numbers, and symbols.
                </p>
              </div>
              <div className="p-4 glass-card rounded-lg">
                <div className="font-semibold mb-2">📧 Email Verification</div>
                <p className="text-sm text-muted-foreground">
                  Always verify sender identity before clicking links or attachments.
                </p>
              </div>
              <div className="p-4 glass-card rounded-lg">
                <div className="font-semibold mb-2">🌐 URL Inspection</div>
                <p className="text-sm text-muted-foreground">
                  Check URLs carefully - look for misspellings and suspicious domains.
                </p>
              </div>
              <Button variant="outline" className="w-full">
                View All Tips
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;