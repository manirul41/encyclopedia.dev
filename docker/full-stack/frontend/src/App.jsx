import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="flex justify-item-center w-full p-6">
      <Navbar />
      <Outlet />
    </div>
  );
};
export default App;