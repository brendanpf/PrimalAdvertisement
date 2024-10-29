class ThemeToggle extends HTMLElement {
    constructor() {
      super();
  
      const button = this.querySelector('button');
  
      // Check if the button exists before proceeding
      if (!button) {
        console.error("Button not found in ThemeToggle component");
        return;
      }
  
      /** Set the theme to dark/light mode and save preference */
      const setTheme = (dark) => {
        document.documentElement.classList.toggle('theme-dark', dark);
        button.setAttribute('aria-pressed', dark ? 'true' : 'false');
        // Ensure localStorage is available before saving preference
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem('theme', dark ? 'dark' : 'light');
        }
      };
  
      /** Determine if dark theme should be applied */
      const isDark = () => {
        if (typeof localStorage !== 'undefined') {
          const storedTheme = localStorage.getItem('theme');
          if (storedTheme) {
            return storedTheme === 'dark';
          }
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
      };
  
      // Initialize the theme based on stored preference or system setting
      setTheme(isDark());
  
      // Toggle the theme when the button is clicked
      button.addEventListener('click', () => {
        const currentDarkMode = document.documentElement.classList.contains('theme-dark');
        setTheme(!currentDarkMode);
      });
    }
  }
  
  customElements.define('theme-toggle', ThemeToggle);  