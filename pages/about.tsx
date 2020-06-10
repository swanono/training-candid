import Head from 'next/head'
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Navbar from 'components/navbar/Navbar';
import HomeTiles from 'components/homesTiles/HomeTiles';
import { StylesProvider } from '@material-ui/core/styles';
import styled from 'styled-components';


const StyledButton = styled(Button)`
    background-color: red;
`;


export default function Home() {
  return (
    
    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledButton>Test</StyledButton>
      
      
    </div>
  )
}
