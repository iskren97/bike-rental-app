import { useState, useEffect } from 'react';
import { ScrollContainer, ScrollIcon } from './ScrollToTop.styled';
import { animateScroll as scroll } from 'react-scroll';

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <ScrollContainer>
      {showTopBtn && <ScrollIcon onClick={goToTop} />}
    </ScrollContainer>
  );
};
export default ScrollToTop;
