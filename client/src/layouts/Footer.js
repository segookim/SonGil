import React from 'react';
import { Container, AppBar, Typography, Button, Grow, Grid } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const Footer = () => {
    return (
        <footer>
            <Container>
                <div style={{
                    // position: "absolute",
                    marginTop: "10%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    left: 0,
                    right: 0,
                    textAlign: "center",
                    }}>
                    &copy; 2021 Songil All Rights Reserved.
                </div>
            </Container>
        </footer>
    )
}

export default Footer