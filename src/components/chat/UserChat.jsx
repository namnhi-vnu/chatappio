import { useFetchRecipientUser } from "../../hooks/useFetch";

const UserChat = ({ chat, user }) => {
    const { recipientUser } = useFetchRecipientUser(chat, user);

    return (
        <div className="border-b-[1px] border-item-border py-1">
            <div>
                <div className="flex items-center gap-2 " role="button">
                    {/* image */}
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
                    <div className="flex-1 flex ">
                        <div className="flex-1">
                            <div className="names">
                                <h2 className="text-xl">
                                    {recipientUser?.user.name}
                                </h2>
                            </div>
                            <div className="text">
                                <p className="text-text-chat">Text</p>
                            </div>
                        </div>
                        <div className="w-auto flex justify-end relative pt-2">
                            <div className="date">
                                <p className="text-[10px]">05/12/2023</p>
                            </div>
                            <div className="notification absolute top-1/2">
                                <p className="w-4 h-4 rounded-full flex items-center justify-center bg-[#1d6d1d] text-[11px]">
                                    2
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserChat;
