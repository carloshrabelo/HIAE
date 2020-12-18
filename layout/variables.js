import { css } from "styled-components";

export default css`
  --white: #fff;

  --primary: #3c3d8b;
  --primary-lighten: #4159be;
  --primary-contrast: var(--white);
  --primary-darken: #111370;

  --secondary: #8a09be;

  --black: #202020;

  --gray: #999;

  --success: #1de9b6;
  --danger: #ff1744;

  --bg: var(--white);
  /* --bg: linear-gradient(128deg, var(--primary-darken) 0%, var(--secondary) 100%); */
  --bg-hover: #f5f5f5;

  --text-color: var(--black);

  --font-sm: 14px;
  --font: 16px;
  --font-md: 24px;

  --space-xxs: 4px;
  --space-xs: 8px;
  --space-sm: 16px;
  --space: 24px;
  --space-md: 32px;
  --space-lg: 48px;
  --space-xlg: 64px;

  --transition: 0.3s;
`;
