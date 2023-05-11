import React from "react";
import { Link } from "react-router-dom";

function NavBarTop() {
    return (
        <nav className="navbar" style={{ background: "#e3f2fd" }}>
            <div className="brand-logo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfjhdTaizYj8LLFQdlsstJ9ciQKQea6a3Zwg&usqp=CAU"
                    alt="Logo_Branding" style={{ width: '45px' }} className="logo-icon mx-2"
                />
                Tickets Now
            </div>
            <div id="navigation" className="navbar-links">
                <ul id="nav-myid">
                    <li className="list">
                        <Link to={"/home"}>Home</Link>
                    </li>
                    <li className="list">
                        <Link to={"/"}>Movies</Link>
                    </li>
                    <li className="list">
                        <Link to={"/"}>Theatre</Link>
                    </li>
                    <li className="list">
                        <Link to={"/"}>Events</Link>
                    </li>
                </ul>
            </div>
            <form className="d-flex">
                <input
                    className="me-2 form-control"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                />
                <button className="btn btn-outline-secondary my-2 my-sm-0" type="button">
                    Search
                </button>
            </form>
            <div className="navbar-links" id="accounts">
                <ul id="myid">
                    <li className="list">
                        <Link to={"/my-tickets"}> My Tickets</Link>
                    </li>
                    <li className="list">
                        <Link to={"/"}>Signout</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBarTop;
