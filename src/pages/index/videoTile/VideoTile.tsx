import { Button, Grid, Box } from "@material-ui/core/";
import {
    StyledH2,
    StyledH1,
    StyledBackgroundImage,
    StyledRightGrid
} from "./VideoTile.styled";
import { Paragraph } from "components/paragraph/Paragraph";


export const VideoTile = () => {
    return (
        <>
            <Box
                component="div"
                display={{
                    xs: "none",
                    sm: "block",
                    md: "block",
                    lg: "block",
                    xl: "block",
                }}
            >
                <Grid container
                    justify="flex-start"
                >
                    <StyledBackgroundImage item sm={6} />
                    <StyledRightGrid item sm={6} >
                        <Paragraph 
                            subtitle="The Candid Difference"
                            title="We only work with orthodontist."
                            text="Unlike at other companies, our doctors are all orthodontists:
                                specialists in tooth movement."
                            innerColor="white"
                        />
                    </StyledRightGrid>
                </Grid>
            </Box>

        </>
    );
};


export default VideoTile;