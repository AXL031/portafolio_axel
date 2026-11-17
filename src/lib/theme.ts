export type ThemePreference = 'light' | 'dark' | 'system'

export const THEME_STORAGE_KEY = 'portfolio-theme'

// Runs in the document head before painting. With no override, CSS follows
// prefers-color-scheme, including when storage or JavaScript is unavailable.
export const themeInitScript = `(function(){try{var theme=localStorage.getItem('${THEME_STORAGE_KEY}');if(theme==='light'||theme==='dark'){document.documentElement.setAttribute('data-theme',theme)}}catch(e){}})()`

export function applyThemePreference(preference: ThemePreference) {
  if (preference === 'system') {
    document.documentElement.removeAttribute('data-theme')
  } else {
    document.documentElement.setAttribute('data-theme', preference)
  }
}
