export type NewUser = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
};

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getUsers() {
    const res = await fetch(`${API_URL}/user`)
    const data = await res.json()
    return data
}

export async function getUserById(userId: number) {
    try {
        const res = await fetch(`${API_URL}/user/${userId}`, {
            method: "GET",
            credentials: "include",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch user");
        }

        const data = await res.json();

        return data
    } catch (error) {
        console.error("getUserById error:", error);
        throw error;
    }
}


export async function newUser(user: NewUser) {
    const res = await fetch(`${API_URL}/user/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });

    if (!res.ok) {
        const errorData = await res.json();
        console.error("Signup failed:", errorData);
        throw new Error("Failed to create user");
    }

    const data = await res.json();
    return data;
}


export async function logInUser(email: string, password: string) {
    const res = await fetch(`${API_URL}/user/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        credentials: "include"
    });

    if (!res.ok) {
        throw new Error("Login failed");
    }

    const data = await res.json();
    return data;
}

export async function logOutUser() {
    const res = await fetch(`${API_URL}/user/logout`, {
        method: "GET",
        credentials: "include",
    });
    if (!res.ok) throw new Error("Logout failed");
    const data = await res.json();
    return data;
}

export async function checkCookie() {
    const res = await fetch(`${API_URL}/user/check-cookie`, {
        credentials: "include",
    });
    const data = await res.json();
    return data;
}

