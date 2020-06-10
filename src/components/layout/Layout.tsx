import { FC } from "react";
import { StyledLayout, StyledButton } from "./StyledLayout";

const Layout: FC = ({ children }) => {
  return (
    <StyledLayout>
      <StyledButton>test</StyledButton>
      {children}
    </StyledLayout>
  );
};

export default Layout;
