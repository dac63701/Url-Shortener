import { useState, useEffect } from 'react'

import Cookies from 'universal-cookie'
const cookies = new Cookies()

export const UrlList = () => {

    const [jsonData, setJsonData] = useState();

    useEffect( () => {
        async function fetchData() {
            await fetch("/api/getLinks", {
                method: "GET",
                headers: new Headers({
                    "Authorization": "Bearer " + cookies.get("auth-token"),
                    "Content-Type": "application/json"
                })
        })
            .then((res) => setJsonData(res.json));
        }
        fetchData();
    }, [jsonData]);

    var listItems = jsonData.map(jsonData => 
        <li>{jsonData}</li>
    );

    return (
    <div className="url-list">
        <ul>{listItems}</ul>
    </div>
    );
}