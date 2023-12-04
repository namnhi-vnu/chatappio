import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Chat from "./pages/Chat";
import Navbar from "./components/Navbar";
function App() {
    return (
        <>
            <Navbar />
            <div className="container mx-auto text-white">
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/" element={<Chat />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
