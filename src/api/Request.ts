import React from "react";

async function request(endpoint: string) {
    const response = await fetch(endpoint);
    if (!response.ok) {
        throw new Error(`Failed to fetch data from ${endpoint}`);
    }

    return response.json();
}

export default request;