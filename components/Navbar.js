import styled from "styled-components";

const Navbar = styled.div`
  background: var(--primary);
  color: var(--primary-contrast);
  display: grid;
  font-size: var(--font-md);
  grid-template-columns: auto 1fr;
  padding: var(--space-sm);
  text-align: center;

  a {
    color: var(--primary-contrast);
    margin: calc(var(--space-sm) * -1);
    padding: var(--space-sm);
    text-decoration: none;

    &:hover {
      background: var(--primary-lighten);
      color: var(--primary-contrast);
    }

    &:first-child {
      margin-right: var(--space-sm);
    }

    &:last-child {
      margin-left: var(--space-sm);
    }
  }

  img {
    filter: brightness(0) invert(1);
    width: 32px;
  }
`;

export default Navbar;
