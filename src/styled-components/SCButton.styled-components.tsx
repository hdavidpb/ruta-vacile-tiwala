import { styled, Button } from "@mui/material";
import { theme } from "../theme/theme";

export const SCButton = styled(Button)`
  background-color: ${theme.primaryColor};
  color: "#FFFFFF";

  :hover {
    background-color: ${theme.primaryColor};
  }
`;
