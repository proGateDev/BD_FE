import Forms from "./components/Forms";
import Layout from "./layouts/Layout";

const App = () => {
  return (
    // <div style={{ boxShadow: "3px 4px 5px 5px rgba(0, 0, 0, 0.5)" }} className="bg-[#e4b6c6]">

    <Layout>
      <h2 className="text-2xl text-blue-600">Welcome to the Dashboard</h2>
      {/* < p className="text-blue-600" > Manage your business efficiently!</p > */}
      <Forms />
    </Layout >
    // </div >
  );
};

export default App;
