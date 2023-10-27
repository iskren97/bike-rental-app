import { useState, useEffect } from 'react';
import { ScrollContainer, ScrollIcon } from './ScrollToTop.styled';
import { animateScroll as scroll } from 'react-scroll';

// ScrollToTop component is used for scrolling the page to it's top
// when clicked for better UX

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
