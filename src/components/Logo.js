import React from "react";
import styled from "styled-components";
function Logo() {
  return (
    <Wrapper>
      <span>book</span>dukan
    </Wrapper>
  );
}
const Wrapper = styled.h3`
  margin-bottom: 0;
  color: var(--clr-grey-1);
  span {
    color: var(--clr-primary-5);
  }
`;

export default Logo;
