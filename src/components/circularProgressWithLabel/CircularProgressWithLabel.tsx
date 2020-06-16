import { Button, Grid, Box, CircularProgressProps, CircularProgress, Typography, Color } from "@material-ui/core/";
import { StyledH3, StyledP, StyledCircularProgress, StyledBox, StyledH2 } from "./CircularProgressWithLabel.styled";


export const CircularProgressWithLabel = (props: { value: number, roundColor?: any, title?: string }) => {

    const titleElement = () => {
        if (props.title)
            return (
                    <div>
                        <StyledH2>{props.title}</StyledH2>
                    </div>
                    )
    }

    return (
    <StyledBox>
        {titleElement()}
      <StyledBox position="relative" display="inline-block">
        
        <StyledCircularProgress variant="static" size="160px" thickness={1} value={props.value * 100 / 7} color={props.roundColor}  />
            <Box
            top={0}
            left={0}
            bottom={0}
            right={0}
            position="absolute"
            display="flex"
            alignItems="center"
            justifyContent="center"
            
            >
                <Typography variant="caption" component="div" color="textSecondary" align="center">
                    <StyledH3>{ props.value }</StyledH3>
                    <StyledP>YEARS OF TRAINING</StyledP>
                </Typography>
            </Box>
      </StyledBox>
    </StyledBox>
    );
  }

  export default CircularProgressWithLabel;