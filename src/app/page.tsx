import { EnhancedHomePage } from "@/components/enhanced-home-page";
import { HomePage } from "@/components/home-page";
import { ModernHomePage } from "@/components/modern-home-page";

export default function Home() {
  return (
    <main className="no-scrollbar">
      {/* <HomePage /> */}
      {/* <ModernHomePage /> */}
      <EnhancedHomePage />
    </main>
  );
}
