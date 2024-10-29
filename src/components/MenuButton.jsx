
import React, { useEffect } from 'react';

export default function MenuButton({ children }) {
  useEffect(() => {
    const btn = document.querySelector('.menu-button');
    const menu = document.getElementById('menu-content');

    if (btn && menu) {
      // Hide menu (shown by default to support no-JS browsers).
      menu.hidden = true;
      // Add "menu-content" class in JS to avoid covering content in non-JS browsers.
      menu.classList.add('menu-content');

      /** Set whether the menu is currently expanded or collapsed. */
      const setExpanded = (expand) => {
        btn.setAttribute('aria-expanded', expand ? 'true' : 'false');
        menu.hidden = !expand;
      };

      // Toggle menu visibility when the menu button is clicked.
      const clickHandler = () => setExpanded(menu.hidden);
      btn.addEventListener('click', clickHandler);

      // Hide menu button for large screens.
      const handleViewports = (e) => {
        setExpanded(e.matches);
        btn.hidden = e.matches;
      };

      const mediaQueries = window.matchMedia('(min-width: 75em)');
      handleViewports(mediaQueries);
      mediaQueries.addEventListener('change', handleViewports);

      // Clean up event listeners on unmount
      return () => {
        btn.removeEventListener('click', clickHandler);
        mediaQueries.removeEventListener('change', handleViewports);
      };
    }
  }, []);

  return (
    <>
      {children}
    </>
  );
}