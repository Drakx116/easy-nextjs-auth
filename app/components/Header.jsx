import React from 'react';
import Link from "next/link";

const Header = () => {
    return(
        <div className="header">
            <Link href="/">
                <a> Home </a>
            </Link>
            <Link href="/login">
                <a> Login </a>
            </Link>
        </div>
    );
};

export default Header;