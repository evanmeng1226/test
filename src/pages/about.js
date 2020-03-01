import React from 'react';
import {Link} from 'gatsby';
import Header from '../components/Header';

export default ()=>(
    <div>
        <Header></Header>
        <div>About</div>
        <Link to="/">Index</Link>
    </div>
)
