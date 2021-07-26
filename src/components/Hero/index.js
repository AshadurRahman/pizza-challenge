import React from 'react';
import Navbar from '../Navbar';
import {
    HeroContainer,
    HeroContent,
    HeroItems,
    HeroH1,
    HeroP,
    HeroBtn,
} from './HeroElements';

const Hero = () => {
    return (
        <HeroContainer>
            <Navbar />
            <HeroContent>
                <HeroItems>
                    <HeroH1>Gretest Pizza Ever</HeroH1>
                    {/* <HeroP>Ready in less time</HeroP>
                    <HeroBtn>Place Order</HeroBtn> */}
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    );
}

export default Hero;