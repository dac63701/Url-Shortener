import { useState, useEffect } from 'react'

import Cookies from 'universal-cookie'
const cookies = new Cookies()

export const UrlList = () => {

    const [data, setData] = useState();

    useEffect( () => {
        async function fetchData() {
        console.log(cookies.get("auth-token"));
        await fetch("/api/getLinks", {
            method: "GET",
            headers: new Headers({
            "Authorization": "Bearer " + cookies.get("auth-token"),
            "Content-Type": "application/json"
            })
        })
            .then((res) => res.json())
            .then((data) => setData(data.links));
        }
        fetchData();
    }, []);

    return (<div className="url-list">
        <h1>There is something There</h1>
        {data}
    </div>)
}