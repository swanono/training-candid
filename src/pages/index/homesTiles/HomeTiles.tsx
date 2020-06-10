import { GridList, GridListTile } from '@material-ui/core/';
import NoSsr from '@material-ui/core/NoSsr';
import { FC } from "react";

import {StyledGridList, StyledGridListTile, StyledImg} from './HomeTiles.styled';
import {Paragraph} from 'components/paragraph/Paragraph';


const HomeTiles: FC  = () => {



    return (
        <div>
            
                <StyledGridList cellHeight={"auto"}  cols={3} spacing={1}>
                        <StyledGridListTile cols={1}   >
                            <StyledImg src='/assets/images/image1.jpg'  />
                        </StyledGridListTile>
                        <StyledGridListTile cols={1}  >
                            <StyledImg src='/assets/images/image2.jpg'  />
                        </StyledGridListTile>
                        <StyledGridListTile cols={1}  >
                            <Paragraph 
                                subtitle="CLEAR ALIGNERS REALIGNED" 
                                title="Meet the future of teeth straightening." 
                                text="Introducing clear aligner treatment with 
                                    remote monitoring by an orthodontist. 
                                    Skip the office visits, keep the expert oversight."
                                button="Am I a candidate?"
                            />
                        </StyledGridListTile>
                </StyledGridList>
            
        </div>
    );
};

export default HomeTiles;