import { Button, Grid, Box, CircularProgressProps, CircularProgress, Typography } from "@material-ui/core/";
import {
    StyledIconBlock,
    StyledBackgroundImage,
    StyledRightGrid
} from "./WhyOrthodontist.styled";
import { Paragraph } from "components/paragraph/Paragraph";
import { IconLabeled } from "components/iconLabeled/IconLabeled";
import { FC } from "react";


export const WhyOrthodontist = () => {

    const CircularProgressWithLabel = (props: CircularProgressProps & { value: number }) => {
        return (
          <Box position="relative" display="inline-flex">
            <CircularProgress variant="static" {...props} />
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
                    <Typography variant="caption" component="div" color="textSecondary">
                        <h3>{ props.value }</h3>
                        <p>YEARS OF TRAINING</p>
                    </Typography>
                </Box>
          </Box>
        );
      }
      





    return (
        <>
            <Box
                component="div"
                
            >
                <Grid container
                    justify="center"
                >
                    <Grid item xs={12} sm md lg xl>
                        <Paragraph 
                            title="Why do we use orthodontists, not general dentists?" 
                            text="Because only orthodontists are trained in the diagnosis, 
                                prevention and correction of irregular alignments of the teeth and jaws." 
                        />
                    </Grid>
                    <Grid item xs={6} sm md lg xl>
                        <CircularProgressWithLabel variant="static" value={4} />
                    </Grid>
                    <Grid item xs={6} sm md lg xl>
                        <CircularProgressWithLabel variant="static" value={7} />
                    </Grid>
                </Grid>
            </Box>

        </>
    );
};


export default WhyOrthodontist;