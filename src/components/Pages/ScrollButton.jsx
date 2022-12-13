import React, { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import { Button } from './Styles';

function ScrollButton() {
    const [visible, setVisibility] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisibility(true);
        }
        else if (scrolled <= 300) {
            setVisibility(false);
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behaviour: 'smooth'
        });
    };
    const getButtonStyle = () => {
        return visible ? 'inline' : 'none';
    }
    window.addEventListener('scroll', toggleVisible);
    return (
        <Button>
            <FaArrowCircleUp title='Go to Top' onClick={() => scrollToTop()}
                style={{ display: getButtonStyle() }} />
        </Button>
    )
}
export default ScrollButton