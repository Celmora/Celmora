import { useState } from "react";
import TopNavBar from "../components/common/TopNavBar.jsx";
import Hero from "../components/home/Hero.jsx";
import HighlightCards from "../components/home/HighlightCards.jsx";
import BottomBar from "../components/common/BottomBar.jsx";
import SideDrawer from "../components/common/SideDrawer.jsx";

export default function HomePage() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cocoa font-court">
      <div className="relative">
        <TopNavBar onMenuClick={() => setDrawerOpen(true)} />
        <Hero />
      </div>
      <HighlightCards />
      <BottomBar />
      <SideDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </div>
  );
}