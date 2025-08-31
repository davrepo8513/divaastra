import Sidebar from "@shieldspire/components/drawer/Sidebar";
import Footer from "@shieldspire/components/footer/Footer";
import Navbar from "@shieldspire/components/navbar/Navbar";
import { LayoutProps } from "@shieldspire/types/layout/layout.type";
import { useNavigate } from "react-router-dom";

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();

  const sidebarItems = [
    {
      label: "Dashboard",
      icon: <span className="material-icons">dashboard</span>,
      onClick: () => navigate("/dashboard"),
    },
    {
      label: "Profile",
      icon: <span className="material-icons">person</span>,
      onClick: () => navigate("/profile"),
    },
  ];

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar items={sidebarItems} />
        <main className="flex-1 p-4 overflow-y-auto">{children}</main>
      </div>
      <Footer />
    </div>
  );
};
