import { useState } from 'react'

import Cookies from 'universal-cookie'
const cookies = new Cookies()

export const CreateShortLink = () => {

    const [fullUrl, setFullUrl] = useState("");
    const [data, setData] = useState();

    async function createLink() {
        console.log()
        await fetch("/api/createLink", {
            method: "POST",
            headers: new Headers({
            "Authorization": "Bearer " + cookies.get("auth-token"),
            "Content-Type": "application/json"
            }),
            body: JSON.stringify({fullUrl: fullUrl})
        })
            .then((res) => res.json())
            .then((data) => setData(data));
        }

    return (
        <div className="create-short-link">
            <form onSubmit={createLink} className="create-short-link-form">
                <input 
                    className="create-short-link-input"
                    placeholder="Type your link here..."
                    onChange={(e) => setFullUrl(e.target.value)}
                    value={fullUrl}
                />
                <button type="submit" className="submit-button"> 
                    Submit 
                </button>
            </form>
        </div>
    );
}