import React from 'react';
import Navbar from '../Navbar';
import {
    HeroContainer,
    HeroContent,
    HeroItems,
    HeroH1,
} from './HeroElements';

const Hero = () => {
    return (
        <HeroContainer>
            <Navbar />
            <HeroContent>
                <HeroItems>
                    <HeroH1>Gretest Pizza Ever</HeroH1>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    );
}

export default Hero;