import React from 'react';
import {Link} from 'gatsby';
import Header from '../components/Header';
import { Helmet } from 'react-helmet';

export default ()=>(
    <div>
                <Helmet>
            <meta charSet="utf-8" />
            <title>My Title</title>
            <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <Header></Header>
        <div>About</div>
        <Link to="/">Index</Link>
    </div>
)
