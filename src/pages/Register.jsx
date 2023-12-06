import { useContext } from "react";
import AuthContext from "../context/AuthContext";
const Register = () => {
    const {
        registerInfo,
        setRegisterInfo,
        updateRegisterInfo,
        registerUser,
        registerError,
        isRegisterLoading,
    } = useContext(AuthContext);

    const handlerOnRegister = (e) => {
        e.preventDefault();
        registerUser();
        // setRegisterInfo({
        //     name: "",
        //     email: "",
        //     password: "",
        // });
    };
    console.log(registerInfo.name, registerInfo.email, registerInfo.password);
    return (
        <div className="relative flex items-center justify-center p-8 ">
            <div className="p-4 rounded-lg shadow-lg shadow-slate-600 w-[350px]">
                <div>
                    <h2 className="text-xl text-center">Register</h2>
                </div>
                <div className="">
                    <form>
                        <div>
                            <div className="pt-4">
                                <p className="pb-1">UserName</p>
                                <input
                                    type="text"
                                    className="w-full text-white bg-transparent border-[1px] border-[#363636] outline-none p-1 rounded-lg"
                                    value={registerInfo.name}
                                    onChange={(e) =>
                                        updateRegisterInfo({
                                            ...registerInfo,
                                            name: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="pt-4">
                                <p className="pb-1">Email</p>
                                <input
                                    type="email"
                                    className="w-full text-white bg-transparent border-[1px] border-[#363636] outline-none p-1 rounded-lg"
                                    value={registerInfo.email}
                                    onChange={(e) =>
                                        updateRegisterInfo({
                                            ...registerInfo,
                                            email: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="pt-4">
                                <p className="pb-1">Password</p>
                                <input
                                    type="password"
                                    className="w-full text-white bg-transparent border-[1px] border-[#363636] outline-none p-1 rounded-lg"
                                    value={registerInfo.password}
                                    onChange={(e) =>
                                        updateRegisterInfo({
                                            ...registerInfo,
                                            password: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="pt-4">
                                <button
                                    className="bg-blue-500 w-full p-1 uppercase rounded-lg"
                                    onClick={handlerOnRegister}
                                >
                                    {isRegisterLoading
                                        ? "Loading..."
                                        : "Register"}
                                </button>
                            </div>
                            {registerError?.error && (
                                <div className="py-4">
                                    <p className="bg-red-100 text-red-600 py-2 rounded-lg text-center">
                                        {registerError.message}
                                    </p>
                                </div>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
