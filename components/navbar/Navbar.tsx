import {useState} from 'react';
import { Toolbar, AppBar, Typography, Button, Paper,  Grid, Slide } from '@material-ui/core/';
import { StyledAppBar, StyledLink, StyledRoundedButton, StyledGridItem } from './navbar.styled';
import CandidIcon from 'public/assets/images/CandidIcon';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import NoSsr from '@material-ui/core/NoSsr';



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
           <NoSsr>
                    <StyledAppBar elevation={0}  >
                        <Paper elevation={0} square>

                            <Toolbar >
                                <Grid container>
                                    <StyledGridItem item xs>
                                            <StyledLink href="/">
                                                <CandidIcon />
                                            </StyledLink>
                                    </StyledGridItem>
                                    <StyledGridItem item xs>
                                            <StyledLink variant="button" color="textPrimary" href="#" noWrap>
                                                Why Candid?
                                            </StyledLink>
                                    </StyledGridItem>
                                    <StyledGridItem item xs>
                                            <StyledLink variant="button" color="textPrimary" href="#" noWrap>
                                                Results
                                            </StyledLink>
                                    </StyledGridItem>
                                    <StyledGridItem item xs>
                                            <StyledLink variant="button" color="textPrimary" href="#" noWrap>
                                                Pricing
                                            </StyledLink>
                                    </StyledGridItem>
                                    <StyledGridItem item xs>
                                            <StyledLink variant="button" color="textPrimary" href="#" noWrap>
                                                Products
                                            </StyledLink>
                                    </StyledGridItem>
                                    <StyledGridItem item xs>
                                            <StyledLink variant="button" color="textPrimary" href="#" noWrap>
                                                Locations
                                            </StyledLink>
                                    </StyledGridItem>
                                    <StyledGridItem item xs>
                                            <StyledLink variant="button" color="textPrimary" href="#" noWrap>
                                                Articles
                                            </StyledLink>
                                    </StyledGridItem>


                                    <StyledGridItem item xs >
                                            <StyledLink variant="button" color="textPrimary" href="#" noWrap>
                                                Log in
                                            </StyledLink>
                                    </StyledGridItem>
                                    <StyledGridItem item xs>
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
                                    </StyledGridItem>
                                </Grid>
                            </Toolbar>
                        </Paper>

                    </StyledAppBar>
                    </NoSsr>
        </>
    )
}
