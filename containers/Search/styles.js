import styled from "styled-components";

export const Wrapper = styled.div`
  padding: var(--space-sm);
`;

export const Form = styled.form`
  display: flex;
`;

export const Search = styled.input.attrs({ type: "search" })`
  border: 0;
  border-bottom: 2px solid var(--primary);
  flex: 1;
  outline: none;
  padding: var(--space-xs) var(--space-sm);

  &:focus,
  &:hover {
    border-color: var(--primary-darken);
  }
`;

export const List = styled.ul`
  background: var(--white);
  box-shadow: var(--box-shadow);
  left: 0;
  margin: 0;
  padding: 0;
  position: absolute;
  right: 0;
  z-index: 999;
`;
export const Button = styled.button.attrs({ type: "submit" })`
  background: none;
  border: 0;
  cursor: pointer;
`;

export const Item = styled.li`
  list-style: none;

  a {
    background: var(--bg);
    display: block;
    padding: var(--space);
    text-decoration: none;

    &:hover {
      background: var(--bg-hover);
    }
  }
`;
