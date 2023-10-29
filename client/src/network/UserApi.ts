import { ConflictError, UnauthorizedError } from "../errors/http_errors";
import { User } from "../models/User";

async function fetchData(input: RequestInfo, init?: RequestInit) {
    const response = await fetch(input, init);
    if (response.ok) {
        return response;
    } else {
        const errorBody = await response.json();
        const errorMessage = errorBody.error;
        if (response.status === 401) {
            throw new UnauthorizedError(errorMessage);
        } else if (response.status === 409) {
            throw new ConflictError(errorMessage);
        } else {
            throw Error("Request failed with status: " + response.status + " message: " + errorMessage);
        }
    }
}

//Get the logged in user
export async function getLoggedInUser(): Promise<User> {
    const response = await fetchData("/api/users", { method: "GET" });
    return response.json();
}

export interface SignUpCredentials {
    username: string,
    email: string,
    password: string,
}

//Add a new user to db
export async function signUp(credentials: SignUpCredentials): Promise<User> {
    const response = await fetchData("/api/users/signup",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        });
    return response.json();
}

export interface LoginCredentials {
    email: string,
    password: string,
}

//Login into existing account
export async function login(credentials: LoginCredentials): Promise<User> {
    const response = await fetchData("/api/users/login",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        });
    return response.json();
}

//logout from account
export async function logout() {
    await fetchData("/api/users/logout", { method: "POST" });
}