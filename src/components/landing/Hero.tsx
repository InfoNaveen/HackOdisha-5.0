import { Button } from "@/components/ui/button";
import { Shield, Zap, Eye, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-cybersecurity.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/80"></div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-primary/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-accent/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo/Brand */}
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <Shield className="w-16 h-16 text-primary mr-4" />
              <Eye className="w-8 h-8 text-accent absolute -top-1 -right-1" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              PhishEye
            </h1>
          </div>

          {/* Hero headline */}
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            AI-Powered <span className="text-primary">Phishing Detection</span>
            <br />
            & Cybersecurity Platform
          </h2>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Protect yourself and your organization with advanced machine learning algorithms that detect phishing attempts in real-time. Get instant risk assessments, detailed explanations, and personalized cybersecurity training.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="group">
              <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Scan URL Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              View Demo
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="glass-card p-6 rounded-lg">
              <Shield className="w-8 h-8 text-safe mb-4 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Real-Time Detection</h3>
              <p className="text-muted-foreground">Instant AI-powered analysis of URLs, emails, and files</p>
            </div>
            <div className="glass-card p-6 rounded-lg">
              <Zap className="w-8 h-8 text-primary mb-4 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Risk Scoring</h3>
              <p className="text-muted-foreground">Clear 0-100% risk probability with detailed explanations</p>
            </div>
            <div className="glass-card p-6 rounded-lg">
              <Eye className="w-8 h-8 text-accent mb-4 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Learning Hub</h3>
              <p className="text-muted-foreground">Interactive quizzes and cybersecurity awareness training</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;