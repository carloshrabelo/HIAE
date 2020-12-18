import React from "react";
import styled from "styled-components";
import Spiner from "components/Spiner";

const Loading = styled.div`
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  display: grid;
  flex: 1;
  margin: var(--space-sm);
  place-items: center;
`;
const LoadingState = () => (
  <Loading>
    <Spiner color="primary" />
  </Loading>
);
export default LoadingState;
