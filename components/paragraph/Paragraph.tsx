import { useState } from 'react';
import {Button, Slide } from '@material-ui/core/';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import NoSsr from '@material-ui/core/NoSsr';
import {StyledH2, StyledH1, StyledP } from './Paragraph.styled'


export const Paragraph = ({title, subtitle, text, button}) => {
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
                <StyledH2>{subtitle}</StyledH2>
                <StyledH1>{title}</StyledH1>
                <StyledP>{text}</StyledP>
                <Button
                    onMouseOver={handleMouseOverring}
                    onMouseOut={handleMouseLeaving}
                    size="large"
                    disableElevation
                >
                    {button}
                    <Slide direction="right" in={mouseOver} mountOnEnter unmountOnExit>
                            <ArrowForwardRoundedIcon />
                    </Slide>
                </Button>

            </NoSsr>
        </>
    )
}