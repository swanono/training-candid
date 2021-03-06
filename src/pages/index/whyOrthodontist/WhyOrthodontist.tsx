import { Button, Grid, Box, CircularProgressProps, CircularProgress, Typography } from "@material-ui/core/";
import { StyledBox } from "./WhyOrthodontist.styled";
import { Paragraph } from "components/paragraph/Paragraph";
import  TableComparison  from "components/tableComparison/TableComparison"
import { CircularProgressWithLabel } from "components/circularProgressWithLabel/CircularProgressWithLabel";
import { FC } from "react";
import { Container } from "next/app";


export const WhyOrthodontist = () => {


    return (
        <>
            <StyledBox component="div" >

                <Grid container justify="center" direction="row">

                    <Grid item xs={12} sm="auto" md="auto" lg="auto" xl="auto">
                        <Paragraph 
                            title="Why do we use orthodontists, not general dentists?" 
                            text="Because only orthodontists are trained in the diagnosis, 
                                prevention and correction of irregular alignments of the teeth and jaws." 
                        />
                    </Grid>


                    <Grid item xs={6} sm="auto" md="auto" lg="auto" xl="auto">
                        <div>
                            <CircularProgressWithLabel value={4} roundColor="secondary" title="Dentist" />
                        </div>
                    </Grid>

                    <Grid item xs={6} sm="auto" md="auto" lg="auto" xl="auto">
                        <div>
                        
                        <CircularProgressWithLabel  value={7} title="Orthodontist"/>
                        </div>
                    </Grid>
                    
                </Grid>



                <Grid 
                    container
                    justify="center"
                    direction="row"
                >
                        <Grid item xs="auto">
                            <TableComparison/>
                        </Grid>
                </Grid>

            </StyledBox>

        </>
    );
};


export default WhyOrthodontist;