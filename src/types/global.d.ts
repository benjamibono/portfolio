declare global {
  interface Window {
    animateThemeChange: (to: 'dark' | 'light') => Promise<void>;
  }
}

export {};
