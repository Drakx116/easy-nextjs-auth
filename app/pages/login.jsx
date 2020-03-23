import React from "react";
import Header from "../components/Header";
import Login from "../components/Forms/Login";

const login = () => {
    return(
        <div className="container">
            <div className="page">
                <Header />
                <h1 className={"page-title"}> Login </h1>
                <Login />
            </div>
        </div>
    );
};

export default login;
