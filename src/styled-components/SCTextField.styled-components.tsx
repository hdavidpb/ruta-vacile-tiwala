import { TextField, styled } from "@mui/material";
import { theme } from "../theme/theme";

export const SCTextField = styled(TextField)`
  .MuiInput-underline:after {
    border-bottom: 2px solid ${theme.primaryColor};
  }

  label.Mui-focused {
    color: ${theme.primaryColor};
  }
`;
