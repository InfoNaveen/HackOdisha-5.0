import DashboardLayout from "@/components/dashboard/DashboardLayout";
import ThreatAnalytics from "@/components/analytics/ThreatAnalytics";

const Analytics = () => {
  return (
    <DashboardLayout currentPage="Analytics">
      <ThreatAnalytics />
    </DashboardLayout>
  );
};

export default Analytics;