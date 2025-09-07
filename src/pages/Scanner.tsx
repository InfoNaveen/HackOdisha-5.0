import DashboardLayout from "@/components/dashboard/DashboardLayout";
import URLScanner from "@/components/scanner/URLScanner";

const Scanner = () => {
  return (
    <DashboardLayout currentPage="Scan URL/Email">
      <URLScanner />
    </DashboardLayout>
  );
};

export default Scanner;