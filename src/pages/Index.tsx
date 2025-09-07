import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Shield,
  Zap,
  Eye,
  BarChart3,
  Users,
  Globe,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Phishing Protection
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced AI algorithms combined with real-time threat intelligence to keep you secure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="glass-card p-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Real-Time Scanning</h3>
                <p className="text-muted-foreground">
                  Instantly analyze URLs, emails, and files with our advanced machine learning models for immediate threat detection.
                </p>
              </div>
            </Card>

            <Card className="glass-card p-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
                  <BarChart3 className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Threat Analytics</h3>
                <p className="text-muted-foreground">
                  Comprehensive dashboards showing threat trends, risk patterns, and detailed security insights for informed decision-making.
                </p>
              </div>
            </Card>

            <Card className="glass-card p-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-safe/10 flex items-center justify-center">
                  <Users className="w-8 h-8 text-safe" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Team Protection</h3>
                <p className="text-muted-foreground">
                  Organization-wide security monitoring with role-based access controls and collaborative threat response capabilities.
                </p>
              </div>
            </Card>

            <Card className="glass-card p-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-warning/10 flex items-center justify-center">
                  <Eye className="w-8 h-8 text-warning" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Learning Hub</h3>
                <p className="text-muted-foreground">
                  Interactive cybersecurity training with personalized learning paths and gamified security awareness programs.
                </p>
              </div>
            </Card>

            <Card className="glass-card p-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-danger/10 flex items-center justify-center">
                  <Globe className="w-8 h-8 text-danger" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Global Threat Intel</h3>
                <p className="text-muted-foreground">
                  Access to worldwide threat intelligence feeds and real-time updates on emerging phishing campaigns and attack vectors.
                </p>
              </div>
            </Card>

            <Card className="glass-card p-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">API Integration</h3>
                <p className="text-muted-foreground">
                  Seamless integration with existing security tools and workflows through our comprehensive REST API and webhooks.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 gradient-card">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How PhishEye Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to advanced phishing protection
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-2xl">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4">Submit for Analysis</h3>
              <p className="text-muted-foreground">
                Paste any URL, upload an email, or drag and drop suspicious files into our secure scanning interface.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-2xl">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4">AI Analysis</h3>
              <p className="text-muted-foreground">
                Our machine learning models analyze patterns, domain reputation, content structure, and behavioral indicators.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-2xl">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4">Get Results</h3>
              <p className="text-muted-foreground">
                Receive instant risk scores with detailed explanations and actionable recommendations for protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Protect Your Organization?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of security professionals using PhishEye to defend against phishing attacks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-primary glow-primary" asChild>
                <a href="/login">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/login">
                  Try Demo
                </a>
              </Button>
            </div>
            <div className="flex items-center justify-center mt-8 space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-safe" />
                Free 30-day trial
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-safe" />
                No credit card required
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-safe" />
                Cancel anytime
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
