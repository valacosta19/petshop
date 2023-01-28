import React from "react";
import styled from "styled-components";

export const DefaultFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Flex = ({ children }) => {
  return <DefaultFlex>{children}</DefaultFlex>;
};

export default Flex;
