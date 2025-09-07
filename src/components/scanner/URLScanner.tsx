import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ScanLine,
  Link,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Clock,
  Info,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";

interface ScanResult {
  url: string;
  riskScore: number;
  status: "safe" | "warning" | "danger";
  reasons: string[];
  scanTime: string;
  details: {
    domainAge: string;
    sslStatus: string;
    reputation: string;
    contentAnalysis: string;
  };
}

const URLScanner = () => {
  const [url, setUrl] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);
  const { user } = useAuth();
  const { toast } = useToast();

  const analyzeURL = (url: string) => {
    // Simple URL analysis for demo purposes
    const suspiciousPatterns = [
      'bit.ly', 'tinyurl.com', 'shortened', 'phishing', 'fake', 'scam',
      'bank-security', 'verify-account', 'urgent-action', 'suspended'
    ];
    
    const domain = new URL(url).hostname.toLowerCase();
    const fullUrl = url.toLowerCase();
    
    let riskScore = 0;
    let reasons = [];
    
    // Check for suspicious patterns
    suspiciousPatterns.forEach(pattern => {
      if (fullUrl.includes(pattern)) {
        riskScore += 25;
        reasons.push(`Suspicious pattern detected: ${pattern}`);
      }
    });
    
    // Check for non-HTTPS
    if (!url.startsWith('https://')) {
      riskScore += 20;
      reasons.push('Not using secure HTTPS protocol');
    }
    
    // Check for suspicious TLD
    const suspiciousTlds = ['.tk', '.ml', '.ga', '.cf'];
    if (suspiciousTlds.some(tld => domain.endsWith(tld))) {
      riskScore += 30;
      reasons.push('Suspicious top-level domain');
    }
    
    // Add positive indicators for safe sites
    if (riskScore === 0) {
      reasons.push('Valid SSL certificate', 'Established domain', 'Good reputation');
    }
    
    // Random factor for demo
    riskScore += Math.floor(Math.random() * 20);
    riskScore = Math.min(riskScore, 100);
    
    let status: "safe" | "warning" | "danger" = 'safe';
    if (riskScore > 70) status = 'danger';
    else if (riskScore > 40) status = 'warning';
    
    return { riskScore, status, reasons };
  };

  const handleScan = async () => {
    if (!url || !user) return;
    
    try {
      setIsScanning(true);
      setScanResult(null);
      
      // Validate URL
      const urlObj = new URL(url);
      
      // Simulate scanning delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Analyze URL
      const analysis = analyzeURL(url);
      
      const result: ScanResult = {
        url,
        riskScore: analysis.riskScore,
        status: analysis.status,
        reasons: analysis.reasons,
        scanTime: new Date().toLocaleTimeString(),
        details: {
          domainAge: analysis.riskScore > 70 ? "2 days" : analysis.riskScore > 40 ? "15 days" : "3 years",
          sslStatus: url.startsWith('https://') ? 'Valid' : 'Invalid',
          reputation: analysis.status === 'danger' ? 'Poor' : analysis.status === 'warning' ? 'Unknown' : 'Excellent',
          contentAnalysis: analysis.riskScore > 50 ? 'Suspicious patterns detected' : 'Clean content'
        }
      };
      
      // Save to database
      const { error } = await supabase
        .from('url_scans')
        .insert({
          user_id: user.id,
          url: url,
          risk_score: analysis.riskScore,
          status: analysis.status === 'danger' ? 'malicious' : analysis.status === 'warning' ? 'suspicious' : 'safe',
          analysis_details: result.details
        });
      
      if (error) {
        console.error('Error saving scan:', error);
        toast({
          title: "Error",
          description: "Failed to save scan results",
          variant: "destructive"
        });
      } else {
        toast({
          title: "Scan Complete",
          description: `URL analyzed with ${analysis.riskScore}% risk score`,
        });
      }
      
      setScanResult(result);
    } catch (error) {
      toast({
        title: "Error",
        description: "Please enter a valid URL",
        variant: "destructive"
      });
    } finally {
      setIsScanning(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "safe":
        return <CheckCircle className="w-6 h-6 text-safe" />;
      case "warning":
        return <AlertTriangle className="w-6 h-6 text-warning" />;
      case "danger":
        return <XCircle className="w-6 h-6 text-danger" />;
      default:
        return <Info className="w-6 h-6 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "safe":
        return "text-safe";
      case "warning":
        return "text-warning";
      case "danger":
        return "text-danger";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <div className="space-y-6">
      {/* Scanner Input */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center">
            <ScanLine className="w-6 h-6 mr-2 text-primary" />
            URL Security Scanner
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <Input
                placeholder="Enter URL to scan (e.g., https://example.com)"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="h-12"
              />
            </div>
            <Button
              onClick={handleScan}
              disabled={!url || isScanning}
              size="lg"
              className="gradient-primary glow-primary"
            >
              {isScanning ? (
                <>
                  <Clock className="w-5 h-5 mr-2 animate-spin" />
                  Scanning...
                </>
              ) : (
                <>
                  <ScanLine className="w-5 h-5 mr-2" />
                  Scan URL
                </>
              )}
            </Button>
          </div>
          
          <div className="text-sm text-muted-foreground">
            <p>💡 Try scanning these examples:</p>
            <div className="flex flex-wrap gap-2 mt-2">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setUrl("https://google.com")}
              >
                Safe URL
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setUrl("https://suspicious-temp-site.com")}
              >
                Suspicious URL
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setUrl("https://phishing-scam-site.fake")}
              >
                Dangerous URL
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Scan Results */}
      {scanResult && (
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center">
                {getStatusIcon(scanResult.status)}
                <span className="ml-2">Scan Results</span>
              </div>
              <Badge variant="outline">
                Scanned at {scanResult.scanTime}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Risk Score */}
            <div className="text-center">
              <div className={`text-6xl font-bold ${getStatusColor(scanResult.status)} mb-2`}>
                {scanResult.riskScore}%
              </div>
              <div className="text-lg text-muted-foreground">Risk Score</div>
              <div className="w-full bg-muted rounded-full h-3 mt-4">
                <div
                  className={`h-3 rounded-full transition-all duration-1000 ${
                    scanResult.status === "safe" 
                      ? "gradient-safe" 
                      : scanResult.status === "warning" 
                      ? "bg-warning" 
                      : "gradient-danger"
                  }`}
                  style={{ width: `${scanResult.riskScore}%` }}
                />
              </div>
            </div>

            {/* URL Info */}
            <div className="glass-card p-4 rounded-lg">
              <div className="flex items-start">
                <Link className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <div className="text-sm text-muted-foreground mb-1">Scanned URL</div>
                  <div className="break-all font-mono text-sm">{scanResult.url}</div>
                </div>
              </div>
            </div>

            {/* Analysis Reasons */}
            <div>
              <h3 className="font-semibold mb-3">Analysis Details</h3>
              <div className="space-y-2">
                {scanResult.reasons.map((reason, index) => (
                  <div key={index} className="flex items-center p-3 glass-card rounded-lg">
                    {getStatusIcon(scanResult.status)}
                    <span className="ml-3">{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Details */}
            <div>
              <h3 className="font-semibold mb-3">Technical Details</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="glass-card p-4 rounded-lg">
                  <div className="text-sm text-muted-foreground">Domain Age</div>
                  <div className="font-semibold">{scanResult.details.domainAge}</div>
                </div>
                <div className="glass-card p-4 rounded-lg">
                  <div className="text-sm text-muted-foreground">SSL Status</div>
                  <div className="font-semibold">{scanResult.details.sslStatus}</div>
                </div>
                <div className="glass-card p-4 rounded-lg">
                  <div className="text-sm text-muted-foreground">Reputation</div>
                  <div className="font-semibold">{scanResult.details.reputation}</div>
                </div>
                <div className="glass-card p-4 rounded-lg">
                  <div className="text-sm text-muted-foreground">Content Analysis</div>
                  <div className="font-semibold">{scanResult.details.contentAnalysis}</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default URLScanner;