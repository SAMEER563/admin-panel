import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-row h-screen">
      {/* Sidebar - Full height */}
      <Sidebar />
      
      {/* Content Area */}
      <div className="flex flex-col flex-grow">
        <Header />
        <div className="flex-1 p-6">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
