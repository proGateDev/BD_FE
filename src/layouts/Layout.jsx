import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <div style={{padding: "5px", }} className="flex min-h-screen w-screen bg-[#ece6e6]"> 
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="p-6 overflow-y-auto bg-[#ffffff] flex justify-center items-start">
          <div className="w-full max-w-7xl  p-6 rounded-2xl shadow-lg">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
