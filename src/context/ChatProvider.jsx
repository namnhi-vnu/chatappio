import { useCallback, useEffect, useState } from "react";
import ChatContext from "./ChatContext";
import { BASE_URL, getRequest, postRequest } from "../utils/services";

const ChatProvider = ({ children, user }) => {
    const [userChats, setUserChats] = useState(null);
    const [isUserChatsLoading, setIsUserChatsLoading] = useState(false);
    const [userChatsError, setUserChatsError] = useState(null);
    const [potentialChats, setPotentialChats] = useState([]);
    const [currentChat, steCurrentChat] = useState(null);
    const [messages, setMessages] = useState(null);
    const [isMessagesLoading, setIsMessagesLoading] = useState(false);
    const [messagesError, setMessagesError] = useState(null);
    const [sendTextMessageError, setSendTextMessageError] = useState(null);
    const [newMessage, setNewMessage] = useState(null);

    useEffect(() => {
        const getUser = async () => {
            const response = await getRequest(`${BASE_URL}/users`);

            if (response.error) {
                return console.log("Error Fectch user", response);
            }
            const pChats = response.user.filter((u) => {
                let isChatCreated = false;

                if (user._id === u._id) return false;

                if (userChats) {
                    isChatCreated = userChats?.some((chat) => {
                        return (
                            chat.members[0] === u._id ||
                            chat.members[1] === u._id
                        );
                    });
                }
                return !isChatCreated;
            });
            setPotentialChats(pChats);
        };
        getUser();
    }, [userChats]);

    // get user chat

    useEffect(() => {
        const getUserChats = async () => {
            if (user?._id) {
                setIsUserChatsLoading(true);
                setUserChatsError(null);

                const response = await getRequest(
                    `${BASE_URL}/chat/${user?._id}`
                );
                setIsUserChatsLoading(false);
                if (response.error) {
                    return setUserChatsError(response);
                }
                setUserChats(response);
            }
        };
        getUserChats();
    }, [user]);

    // get message chat
    useEffect(() => {
        const getMessages = async () => {
            setIsMessagesLoading(true);
            setMessagesError(null);

            const response = await getRequest(
                `${BASE_URL}/messages/${currentChat?._id}`
            );
            setIsMessagesLoading(false);
            if (response.error) {
                return setMessagesError(response);
            }
            setMessages(response);
        };
        getMessages();
    }, [currentChat]);

    // send message chat
    const sendTextMessage = useCallback(
        async (textMessages, sender, currentChatId, setTextMessage) => {
            if (!textMessages)
                return console.log("You must provide a text message");
            const response = await postRequest(
                `${BASE_URL}/messages`,
                JSON.stringify({
                    chatId: currentChatId,
                    senderId: sender._id,
                    text: textMessages,
                })
            );
            if (response.error) {
                return setSendTextMessageError(response);
            }
            setNewMessage(response);
            setMessages((prev) => [...prev, response]);
            setTextMessage("");
        },
        []
    );

    // currentChat
    const updateCurrentChat = useCallback((chat) => {
        steCurrentChat(chat);
    }, []);

    // create chat

    const createChats = useCallback(async (firstId, secondId) => {
        const response = await postRequest(
            `${BASE_URL}/chat`,
            JSON.stringify({
                firstId,
                secondId,
            })
        );

        if (response.error) return console.log("Error Create Chat", response);

        setUserChats((prev) => [...prev, response]);
    }, []);

    return (
        <ChatContext.Provider
            value={{
                userChats,
                isUserChatsLoading,
                userChatsError,
                potentialChats,
                createChats,
                updateCurrentChat,
                currentChat,
                messages,
                isMessagesLoading,
                messagesError,
                sendTextMessage,
            }}
        >
            {children}
        </ChatContext.Provider>
    );
};

export default ChatProvider;
