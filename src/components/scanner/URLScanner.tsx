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

  const handleScan = async () => {
    if (!url) return;

    setIsScanning(true);
    
    // Simulate API call
    setTimeout(() => {
      // Mock result based on URL content
      const isDangerous = url.toLowerCase().includes('phish') || url.toLowerCase().includes('scam');
      const isSuspicious = url.toLowerCase().includes('suspicious') || url.toLowerCase().includes('temp');
      
      const result: ScanResult = {
        url,
        riskScore: isDangerous ? 85 : isSuspicious ? 65 : 15,
        status: isDangerous ? "danger" : isSuspicious ? "warning" : "safe",
        reasons: isDangerous 
          ? ["Suspicious domain patterns", "No HTTPS encryption", "Recent domain registration"]
          : isSuspicious
          ? ["New domain registration", "Limited online presence"]
          : ["Established domain", "Valid SSL certificate", "Good reputation"],
        scanTime: new Date().toLocaleTimeString(),
        details: {
          domainAge: isDangerous ? "2 days" : isSuspicious ? "15 days" : "3 years",
          sslStatus: isDangerous ? "Invalid" : "Valid",
          reputation: isDangerous ? "Poor" : isSuspicious ? "Unknown" : "Excellent",
          contentAnalysis: isDangerous ? "Suspicious patterns detected" : "Clean content"
        }
      };

      setScanResult(result);
      setIsScanning(false);
    }, 2000);
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