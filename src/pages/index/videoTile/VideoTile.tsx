import { Button, Grid, Box } from "@material-ui/core/";
import {
    StyledIconBlock,
    StyledBackgroundImage,
    StyledRightGrid
} from "./VideoTile.styled";
import { Paragraph } from "components/paragraph/Paragraph";
import { IconLabeled } from "components/iconLabeled/IconLabeled";


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
                        <StyledIconBlock>
                            <IconLabeled
                                iconName="study"
                                text="20 years of experience on average"
                                innerColor="white"
                            />
                            <IconLabeled
                                iconName="tooth"
                                text="Experts in clear aligner treatment"
                                innerColor="white"
                            />
                            <IconLabeled
                                iconName="phone"
                                text="Trained in cutting-edge remote care"
                                innerColor="white"
                            />
                        </StyledIconBlock>
                    </StyledRightGrid>
                </Grid>
            </Box>

        </>
    );
};


export default VideoTile;