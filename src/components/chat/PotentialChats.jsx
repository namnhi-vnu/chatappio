import { useContext } from "react";
import ChatContext from "../../context/ChatContext";
import AuthContext from "../../context/AuthContext";

const PotentialChats = () => {
    const { user } = useContext(AuthContext);
    const { potentialChats, createChats } = useContext(ChatContext);
    return (
        <div>
            <div className="flex gap-4 py-4">
                {potentialChats &&
                    potentialChats.map((userItem, index) => {
                        return (
                            <div
                                key={index}
                                role="button"
                                onClick={() =>
                                    createChats(user._id, userItem._id)
                                }
                            >
                                <div>
                                    <div className="relative">
                                        <img
                                            src="https://i.pravatar.cc/150?img=25"
                                            alt=""
                                            className="rounded-full w-10 h-10"
                                        />
                                        <div className="online absolute right-0 -bottom-1">
                                            <p className="w-3 h-3 rounded-full bg-[#15D516]"></p>
                                        </div>
                                    </div>
                                    <div className="names">
                                        <h2>{userItem.name}</h2>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default PotentialChats;
