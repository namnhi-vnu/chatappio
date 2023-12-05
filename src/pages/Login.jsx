const Login = () => {
    return (
        <div className="relative flex items-center justify-center p-8 ">
            <div className="p-4 rounded-lg shadow-lg shadow-slate-600 w-[350px]">
                <div>
                    <h2 className="text-xl text-center">Login</h2>
                </div>
                <div className="">
                    <form>
                        <div>
                            <div className="pt-4">
                                <p className="pb-1">Email</p>
                                <input
                                    type="email"
                                    className="w-full text-white bg-transparent border-[1px] border-[#363636] outline-none p-1 rounded-lg"
                                />
                            </div>
                            <div className="pt-4">
                                <p className="pb-1">Password</p>
                                <input
                                    type="password"
                                    className="w-full text-white bg-transparent border-[1px] border-[#363636] outline-none p-1 rounded-lg"
                                />
                            </div>
                            <div className="pt-4">
                                <button className="bg-blue-500 w-full p-1 uppercase rounded-lg">
                                    Login
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
