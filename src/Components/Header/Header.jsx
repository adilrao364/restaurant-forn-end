import React, { useContext } from 'react'
import { Contextvalues } from '../../App.js';

import { Paper, Typography } from '@material-ui/core';
import { IconButton } from "@chakra-ui/core";
import { NavLink } from 'react-router-dom';

function Header() {
    const context = useContext(Contextvalues)
    const headerArray = [
        { id: 1, name: "Home", toRout: "/" },
        { id: 2, name: "About Us", toRout: "/about" },
        { id: 3, name: "Contact Us", toRout: "/contact" },
    ]
    return (
        <>
            <Paper
                elevation={0}
                style={{ height: 'auto', marginBottom: 0 }}
            >
                <nav
                    className={context.colorMode === "light" ?
                        "navbar navbar-expand-lg navbar-light bg-light" :
                        "navbar navbar-expand-lg navbar-dark bg-dark"}
                    style={{
                        paddingBottom: 20, paddingTop: 10, paddingLeft: 30, paddingRight: 30
                    }}>
                    <NavLink className="navbar-brand" to=""><b style={{ fontSize: 25, color: "rgb(42, 165, 93)" }}>Fight Foods</b></NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto"
                        >
                            {
                                headerArray.map(headerItems => {
                                    return (
                                        <li
                                            className="nav-item active" key={headerItems.id}
                                        >
                                            <NavLink
                                                exact
                                                activeClassName="active_class"
                                                className="nav-link liPadding"
                                                to={headerItems.toRout}
                                            >
                                                {headerItems.name}
                                            </NavLink>
                                        </li>
                                    )
                                })
                            }

                            <li
                                className="nav-item dropdown dropdown-center mr-4"
                            >
                                <Typography className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    Menu
                                        </Typography>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <NavLink className="dropdown-item" exact to="/menu/burger">Burgur</NavLink>
                                </div>
                            </li>
                            <li>
                                <IconButton aria-label="Search database" className="nav-item liPadding"
                                    icon={context.colorMode === "light" ? "moon" : "sun"}
                                    borderRadius="50%"
                                    border="1px solid rgb(42, 165, 93)"
                                    size="sm"
                                    mt="1"
                                    color="rgb(42, 165, 93)"
                                    outline="none"
                                    fontWeight="bold"
                                    onClick={context.toggleColorMode}
                                />
                            </li>
                        </ul>
                    </div>
                </nav>
            </Paper>
        </>
    )
}

export default Header
