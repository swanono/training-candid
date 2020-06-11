import {Button, Grid } from '@material-ui/core/';
import  { StyledDiv, StyledH2, StyledImg, StyledFragment} from './GoogleReview.styled';



export const GoogleReview = ({mark, nbReview}: {mark: number, nbReview: number}) => {
    const starsAndReview = () => {

        let stars = [];
        for(let i = 0; i < Math.ceil(mark); i++) {
            stars.push(<StyledImg src="/assets/images/reviews/star.svg" />)
        }
        return (
            <StyledDiv>
                {stars}
                <p>{nbReview}</p> 
            </StyledDiv>
        );
    }

    return (
        <StyledFragment>
            <StyledH2>
                {mark}
            </StyledH2>
            {starsAndReview()}
            <StyledImg src="/assets/images/reviews/google.svg" />
        </StyledFragment>
    )
}