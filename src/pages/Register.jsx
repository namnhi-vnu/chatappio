const Register = () => {
    return (
        <div className="relative flex items-center justify-center p-8 ">
            <div className="p-4 rounded-lg shadow-lg shadow-slate-600 w-[350px]">
                <div>
                    <h2 className="text-xl text-center">Register</h2>
                </div>
                <div className="">
                    <form>
                        <div>
                            <div className="">
                                <p>UserName</p>
                                <input
                                    type="text"
                                    className="w-full text-black"
                                />
                            </div>
                            <div className="">
                                <p>UserName</p>
                                <input
                                    type="email"
                                    className="w-full text-black"
                                />
                            </div>
                            <div className="">
                                <p>UserName</p>
                                <input
                                    type="password"
                                    className="w-full text-black"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
