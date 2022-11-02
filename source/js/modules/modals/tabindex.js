const FOOTER_TITLES = document.querySelectorAll('.footer-title');

const editTabindex = () => {
  const onWindowLoadResize = () => {
    FOOTER_TITLES.forEach((elem) => {
      if (window.innerWidth >= 768) {
        elem.setAttribute('tabindex', '-1');
      } else {
        elem.setAttribute('tabindex', '0');
      }
    });
  };

  window.addEventListener('resize', onWindowLoadResize);
  window.addEventListener('load', onWindowLoadResize);
};


export {editTabindex};
