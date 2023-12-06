import { useCallback, useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { BASE_URL, postRequest } from "../utils/services";
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: "Nam Nhi",
    });
    const [registerError, setRegisterError] = useState(null);
    const [isRegisterLoading, setIsRegisterLoading] = useState(false);
    const [loginError, setLoginError] = useState(null);
    const [isLoginLoading, setIsLoginLoading] = useState(false);
    const [registerInfo, setRegisterInfo] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: "",
    });

    // load user localStorage
    useEffect(() => {
        const user = localStorage.getItem("User");
        setUser(JSON.parse(user));
    }, []);

    // update form
    const updateRegisterInfo = useCallback((info) => {
        setRegisterInfo(info);
    }, []);
    const updateLoginInfo = useCallback((info) => {
        setLoginInfo(info);
    }, []);
    //  đăng ký người dùng
    const registerUser = useCallback(async () => {
        setIsRegisterLoading(true);
        setRegisterError(null);
        const response = await postRequest(
            `${BASE_URL}/users/register`,
            JSON.stringify(registerInfo)
        );
        setIsRegisterLoading(false);
        if (response.error) {
            return setRegisterError(response);
        }
        localStorage.setItem("User", JSON.stringify(response));
        setUser(response);
    }, [registerInfo]);

    const loginUser = useCallback(async () => {
        setIsLoginLoading(true);
        setLoginError(null);
        const response = await postRequest(
            `${BASE_URL}/users/login`,
            JSON.stringify(loginInfo)
        );
        setIsLoginLoading(false);
        if (response.error) {
            return setLoginError(response);
        }
        localStorage.setItem("User", JSON.stringify(response));
        setUser(response);
    }, [loginInfo]);

    // Logout
    const logoutUser = useCallback(() => {
        localStorage.removeItem("User");
        setUser(null);
    }, []);
    return (
        <AuthContext.Provider
            value={{
                user,
                registerInfo,
                setRegisterInfo,
                updateRegisterInfo,
                registerUser,
                registerError,
                isRegisterLoading,
                updateLoginInfo,
                loginError,
                isLoginLoading,
                loginInfo,
                setLoginInfo,
                logoutUser,
                loginUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
export default AuthProvider;
