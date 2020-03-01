import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

export default () => {

    const [message, setMessage] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            await new Promise((resolve) => setTimeout(resolve, 3000));
            setMessage({ message: "abc" });
        }
        fetchData();
    }, []);

    return (
        <div>
            <Helmet>
                <title>My Title</title>
                <meta name="description" content="abcdefg"></meta>
            </Helmet>

            <div>{message.message}</div>
            <button onClick={() => {
                setMessage("AAAAAAAAAAAAAAAAAa");
            }}>Click</button>
            <Link to="/about">About</Link>
        </div>
    )
}
