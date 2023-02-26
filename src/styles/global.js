import { css } from '@emotion/react'

export const style = css`
  :root {
    /* カラー */
    --white: #fffff;
    --gray-10: #eeeeee;
    --gray-25: #aaaaaa;
    --gray-50: #707070;
    --gray-75: #444444;
    --black: #222222;
    --accent: #0d87e0;

    /* タイポグラフィ */
    --body: clamp(1rem, 0.95rem + 0.2vw, 1.125rem); /* 16-18px */
    --display: clamp(4.5rem, 1.83rem + 11.34vw, 10rem); /* 72-160 */
    --heading1: clamp(2rem, 1.3rem + 34vw, 10rem); /* 72-160 */
    --heading2: calc(var(--body) * 1.5); /* 24-27px */
    --heading3: calc(var(--body) * 1.2); /* 19.2-21.6px */
    --small-heading2: clamp(0.875rem, 4vw - 1rem, 1.6875rem); /* 14-27px */
    --small-heading3: calc(var(--small-heading2) * 0.86); /* 12-23px */

    /* スペース（余白・間隔）*/
    --space-xs: clamp(1.2543rem, 1rem + 0.98vw, 1.875rem); /* 20-30px */
    --space-sm: calc(var(--space-xs) * 1.5); /* 30-45px */
    --space-md: calc(var(--space-xs) * 2); /* 40-60px */
    --space-lg: calc(var(--space-xs) * 3); /* 60-90px */
    --space-xl: calc(var(--space-xs) * 4); /* 80-120px */
    --space-jump: clamp(1.25rem, 0.35rem + 3.8vw, 3.75rem); /* 20-60px */
  }

  /* 基本設定 */
  body {
    color: var(--black);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
      sans-serif;
    font-size: var(--body);
  }

  h1 {
    font-size: var(--heading1);
  }

  h2 {
    font-size: var(--heading2);
  }

  h3 {
    font-size: var(--heading3);
  }

  /* リセット */
  body,
  h1,
  h2,
  h3,
  p,
  figure,
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`
