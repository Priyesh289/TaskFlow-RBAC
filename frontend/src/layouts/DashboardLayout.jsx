import { useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

const DashboardLayout = ({ children }) => {
  const [isOpen, setIsOpen] =
    useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      <div className="lg:ml-64">
        <Navbar setIsOpen={setIsOpen} />

        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;