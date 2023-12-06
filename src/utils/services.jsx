export const BASE_URL = "http://localhost:5000/api";

export const postRequest = async (url, body) => {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body,
    });

    const data = await response.json();

    if (!response.ok) {
        let message;

        if (data?.success) {
            message = data.message;
        } else {
            message = data.message;
        }
        return { error: true, message };
    }

    return data;
};

export const getRequest = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok) {
            let message = "Có lỗi sảy ra";
            if (data?.message) {
                message = data.message;
            }
            return { error: true, message };
        }
        return data;
    } catch (error) {
        console.log(error);
    }
};
