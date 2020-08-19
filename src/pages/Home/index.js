import React from 'react';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import Button from '../../components/Button/styles';
import Container from '../../components/HeaderMain/styles';
import Logo from '../../components/Logo/styles';
import LogoSrc from '../../assets/img/Logo.png';

function Home(){
    return (
        <div>
          <Container>
            <Logo src={LogoSrc}/>
            <Button>Novo vídeo  </Button> 

          
          </Container>
        </div>
    )
}

export default Home;