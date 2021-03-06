import { Grid, GridList, GridListTile } from '@material-ui/core/';
import { FC } from "react";
import { Paragraph } from 'components/paragraph/Paragraph';
import {StyledGrid, StyledImg, StyledDiv} from './Reviews.styled';
import {GoogleReview} from 'components/googleReview/GoogleReview'

const Reviews : FC = () => {


    return (
        <>
            
            <StyledGrid 
                container 
                spacing={0}
                alignItems="center"
                justify="center"
            >
                <StyledDiv>
                    <StyledImg src="/assets/images/reviews/cnbc.svg" />
                </StyledDiv>
                <StyledDiv>
                    <StyledImg src="/assets/images/reviews/buzzfeed.svg" />
                </StyledDiv>
                <StyledDiv>
                    <StyledImg src="/assets/images/reviews/usa-today.svg" />
                </StyledDiv>

                <StyledDiv>
                    <StyledImg src="/assets/images/reviews/left-cub.svg" />
                </StyledDiv>
                <div>
                    <GoogleReview mark={4.8} nbReview={2114} />
                </div>
                <StyledDiv>
                    <StyledImg src="/assets/images/reviews/right-cub.svg" />
                </StyledDiv>

                <StyledDiv>
                    <StyledImg src="/assets/images/reviews/wired.svg" />
                </StyledDiv>
                <StyledDiv>
                    <StyledImg src="/assets/images/reviews/the-knot.svg" />
                </StyledDiv>
                <StyledDiv>
                    <StyledImg src="/assets/images/reviews/abc-7.svg" />
                </StyledDiv>
            </StyledGrid>

        </>
    );
};

export default Reviews;