import { Card, CardActionArea, CardMedia} from '@material-ui/core/';
import  { StyledH1, StyledP, StyledBadge, StyledCardMedia } from './BadgedLabeledPicture.styled';


export const BadgedLabeledPicture = ({src, imgTitle, title, text, badgeNumber}: 
                            {src: string,
                             imgTitle: string,
                             title: string, 
                             text: string,
                             badgeNumber: string}
                         ) => 
{

    

    return (
        <>
            <StyledBadge 
                color='primary' 
                anchorOrigin = {{
                    vertical: 'top',
                    horizontal: 'left',
                }} 
                badgeContent={badgeNumber} 
            >
                <Card >
                    <CardActionArea>
                        <StyledCardMedia
                        component="img"
                        alt={imgTitle}
                        image={src}
                        title={imgTitle}
                        />
                        
                    </CardActionArea>
                
                </Card>
            </StyledBadge>
            <StyledH1 >{title}</StyledH1>
            <StyledP >{text}</StyledP>



        </>
    )
}