import Head from 'next/head'
import {Toolbar, AppBar, Typography, Button} from '@material-ui/core/';
import IconButton from '@material-ui/core/IconButton';



export default function Navbar() {

    return (
        <div>
        <AppBar >
            <Toolbar>
                <Typography variant="h3" color="inherit">
                    React & Material-UI Sample Application
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
}
