import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Chat from "./pages/Chat";
import Navbar from "./components/Navbar";
import { useContext } from "react";
import AuthContext from "./context/AuthContext";
import ChatProvider from "./context/ChatProvider";
function App() {
    const { user } = useContext(AuthContext);
    return (
        <ChatProvider user={user}>
            <Navbar />
            <div className="container mx-auto text-white pt-4">
                <Routes>
                    <Route
                        path="/login"
                        element={user ? <Chat /> : <Login />}
                    />
                    <Route
                        path="/register"
                        element={user ? <Chat /> : <Register />}
                    />
                    <Route path="/" element={user ? <Chat /> : <Login />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </ChatProvider>
    );
}

export default App;
