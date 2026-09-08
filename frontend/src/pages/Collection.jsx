import TopNavBar from "../components/common/TopNavBar.jsx";
import BottomBar from "../components/common/BottomBar.jsx";
import SideDrawer from "../components/common/SideDrawer.jsx";
import { useState } from "react";


export default function HomePage() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cocoa font-court">
      <div className="relative">
        <TopNavBar onMenuClick={() => setDrawerOpen(true)} />
       
      </div>

      <BottomBar />
      <SideDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </div>
  );
}