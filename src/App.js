import AppRoutes from "./routes";
import { ToastContainer } from "react-toastify";

function App() {

  return (
    <div className="App">
      <AppRoutes />
      <ToastContainer autoClose={2000} />
    </div>
  );
}

export default App;
