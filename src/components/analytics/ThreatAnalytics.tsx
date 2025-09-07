import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  TrendingUp,
  Shield,
  AlertTriangle,
  Globe,
  Clock,
  Target,
} from "lucide-react";

const ThreatAnalytics = () => {
  // Mock data for demonstrations
  const weeklyDetections = [
    { day: "Mon", phishing: 12, safe: 45, suspicious: 8 },
    { day: "Tue", phishing: 8, safe: 52, suspicious: 12 },
    { day: "Wed", phishing: 15, safe: 38, suspicious: 15 },
    { day: "Thu", phishing: 6, safe: 48, suspicious: 9 },
    { day: "Fri", phishing: 18, safe: 35, suspicious: 18 },
    { day: "Sat", phishing: 4, safe: 25, suspicious: 6 },
    { day: "Sun", phishing: 7, safe: 28, suspicious: 8 },
  ];

  const monthlyTrends = [
    { month: "Jan", threats: 245, blocked: 238 },
    { month: "Feb", threats: 198, blocked: 195 },
    { month: "Mar", threats: 312, blocked: 305 },
    { month: "Apr", threats: 267, blocked: 260 },
    { month: "May", threats: 389, blocked: 382 },
    { month: "Jun", threats: 423, blocked: 418 },
  ];

  const threatTypes = [
    { name: "Phishing URLs", value: 45, color: "#ef4444" },
    { name: "Malicious Emails", value: 30, color: "#f97316" },
    { name: "Fake Downloads", value: 15, color: "#eab308" },
    { name: "Social Engineering", value: 10, color: "#22c55e" },
  ];

  const topDomains = [
    { domain: "suspicious-bank.fake", attempts: 23, risk: "High" },
    { domain: "temp-service.com", attempts: 18, risk: "Medium" },
    { domain: "phish-mail.org", attempts: 15, risk: "High" },
    { domain: "fake-update.net", attempts: 12, risk: "High" },
    { domain: "scam-alert.info", attempts: 8, risk: "Medium" },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Scans</p>
                <p className="text-3xl font-bold text-primary">1,247</p>
                <p className="text-sm text-safe flex items-center mt-1">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  +12% from last week
                </p>
              </div>
              <Shield className="w-12 h-12 text-primary/20" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Threats Blocked</p>
                <p className="text-3xl font-bold text-danger">78</p>
                <p className="text-sm text-safe flex items-center mt-1">
                  <Shield className="w-4 h-4 mr-1" />
                  99.2% success rate
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
                <p className="text-sm text-muted-foreground">Avg Response Time</p>
                <p className="text-3xl font-bold text-accent">0.8s</p>
                <p className="text-sm text-safe flex items-center mt-1">
                  <Clock className="w-4 h-4 mr-1" />
                  -0.2s improvement
                </p>
              </div>
              <Clock className="w-12 h-12 text-accent/20" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Risk Score Avg</p>
                <p className="text-3xl font-bold text-warning">23%</p>
                <p className="text-sm text-safe flex items-center mt-1">
                  <Target className="w-4 h-4 mr-1" />
                  Low risk profile
                </p>
              </div>
              <Target className="w-12 h-12 text-warning/20" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Weekly Detection Trends */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Weekly Detection Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={weeklyDetections}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="day" 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "6px",
                  }}
                />
                <Bar dataKey="safe" fill="hsl(var(--safe))" name="Safe" />
                <Bar dataKey="suspicious" fill="hsl(var(--warning))" name="Suspicious" />
                <Bar dataKey="phishing" fill="hsl(var(--danger))" name="Phishing" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Threat Types Distribution */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Threat Types Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={threatTypes}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {threatTypes.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "6px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Trends & Top Threats */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Monthly Trends */}
        <div className="lg:col-span-2">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>6-Month Threat Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={monthlyTrends}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="month" 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "6px",
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="threats" 
                    stroke="hsl(var(--danger))" 
                    strokeWidth={2}
                    name="Threats Detected"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="blocked" 
                    stroke="hsl(var(--safe))" 
                    strokeWidth={2}
                    name="Threats Blocked"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Top Malicious Domains */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Globe className="w-5 h-5 mr-2" />
              Top Threat Domains
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topDomains.map((domain, index) => (
                <div key={index} className="flex items-center justify-between p-3 glass-card rounded-lg">
                  <div className="min-w-0 flex-1">
                    <div className="font-mono text-sm truncate">{domain.domain}</div>
                    <div className="text-xs text-muted-foreground">
                      {domain.attempts} attempts
                    </div>
                  </div>
                  <Badge 
                    variant={domain.risk === "High" ? "destructive" : "secondary"}
                    className="ml-2"
                  >
                    {domain.risk}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ThreatAnalytics;