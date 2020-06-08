import {useState} from 'react';
import { Toolbar, AppBar, Typography, Button, Paper, Container, Link, Grid, Icon, Slide } from '@material-ui/core/';
import { StyledAppBar, StyledLink, StyledRoundedButton } from './navbar.styled';
import CandidIcon from 'assets/images/CandidIcon';
import NavbarMenu from 'components/navbarMenu/NavbarMenu';
import styled from 'styled-components';
import { StylesProvider } from '@material-ui/core/styles';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';




export default function Navbar() {
    const [mouseOver, setMouseOver] = useState(false);

    const handleMouseOverring = () => {
        setMouseOver(true);
    };

    const handleMouseLeaving = () => {
        setMouseOver(false);
    };

    

    return (
        <>
            <StylesProvider injectFirst>
                {
                    <StyledAppBar elevation={0}  >
                        <Paper elevation={0} square>

                            <Toolbar >
                                <Grid container>
                                    <Grid item xs>
                                        <nav>
                                            <StyledLink href="/">
                                                <CandidIcon />
                                            </StyledLink>

                                            <StyledLink variant="button" color="textPrimary" href="#" noWrap>
                                                Why Candid?
                                            </StyledLink>
                                            <StyledLink variant="button" color="textPrimary" href="#" noWrap>
                                                Results
                                            </StyledLink>
                                            <StyledLink variant="button" color="textPrimary" href="#" noWrap>
                                                Pricing
                                            </StyledLink>
                                            <StyledLink variant="button" color="textPrimary" href="#" noWrap>
                                                Products
                                            </StyledLink>
                                            <StyledLink variant="button" color="textPrimary" href="#" noWrap>
                                                Locations
                                            </StyledLink>
                                            <StyledLink variant="button" color="textPrimary" href="#" noWrap>
                                                Articles
                                            </StyledLink>
                                        </nav>
                                    </Grid>


                                    <Grid item xs >
                                        <nav>
                                            <StyledLink variant="button" color="textPrimary" href="#" noWrap>
                                                Log in
                                            </StyledLink>
                                            <StyledRoundedButton
                                                variant="contained"
                                                onMouseOver={handleMouseOverring}
                                                onMouseOut={handleMouseLeaving}
                                                size="large"
                                                color="secondary"
                                                disableElevation
                                            >
                                                Am I a candidate?
                                                <Slide direction="right" in={mouseOver} mountOnEnter unmountOnExit>
                                                    <ArrowForwardRoundedIcon />
                                                </Slide>
                                            </StyledRoundedButton>
                                        </nav>
                                    </Grid>
                                </Grid>
                            </Toolbar>
                        </Paper>

                    </StyledAppBar>
                }
            </StylesProvider>
        </>
    )
}
