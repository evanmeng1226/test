import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

export default () => {

    const [message, setMessage] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            await new Promise((resolve) => setTimeout(resolve, 3000));
            setMessage("abc");
        }
        fetchData();
    }, []);

    return (
        <div>
            <Helmet>
                <title>My Title</title>
                <meta name="description" content="abcdefg"></meta>
            </Helmet>

            <div>{message}</div>
            <button onClick={() => {
                setMessage("AAAAAAAAAAAAAAAAAA");
            }}>Click</button>
            <Link to="/about">About</Link>
        </div>
    )
}