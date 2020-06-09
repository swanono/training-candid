import { GridList, GridListTile } from '@material-ui/core/';
import NoSsr from '@material-ui/core/NoSsr';

import {StyledGridListTile, StyledImg} from './HomeTiles.styled';
import {Paragraph} from '../paragraph/Paragraph';


export default function Navbar() {



    return (
        <div>
            <NoSsr>
                <GridList cellHeight={'auto'}  cols={3} spacing={8}>
                        <GridListTile cols={1}   >
                            <StyledImg src='/assets/images/image1.jpg'  />
                        </GridListTile>
                        <GridListTile cols={1}  >
                            <StyledImg src='/assets/images/image2.jpg'  />
                        </GridListTile>
                        <GridListTile cols={1}  >
                            <Paragraph 
                                subtitle="CLEAR ALIGNERS REALIGNED" 
                                title="Meet the future of teeth straightening." 
                                text="Introducing clear aligner treatment with 
                                    remote monitoring by an orthodontist. 
                                    Skip the office visits, keep the expert oversight."
                                button="Am I a candidate?"
                            />
                        </GridListTile>
                </GridList>
            </NoSsr>
        </div>
    )
}