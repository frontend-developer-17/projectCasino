import Home from "./pages/Home";
import Authorisation from "./pages/Authorisation";
import Login from "./components/Auth/login";
import Register from "./components/Auth/register";
import { Routes, Route } from "react-router";



function App() {
  return (
    <div className="App">
      <span>Hello </span>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Authorisation />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
