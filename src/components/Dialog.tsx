import React from "react";
import image from "../assets/tiwala.gif";

import { Slide, Dialog } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { SuccesCreditoDialog } from "./index";

import { IQuestion } from "../redux/features/forms/interface";
import { SCButton } from "../styled-components/SCButton.styled-components";

import "./styles.css";
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface Props {
  bgColor?: string;
  question?: IQuestion;
}
export const ShowDialog = ({ bgColor, question }: Props) => {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    if (question?.isDone) {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <div
          className="dialog-content"
          style={{ backgroundColor: bgColor ?? "#ffffff" }}
        >
          {question?.isDone === true ? (
            <SuccesCreditoDialog />
          ) : (
            <>
              <img src={image} alt="logo" />
              <h1>Disfruta de la ruta del vacile</h1>
              <SCButton
                style={{ marginTop: "12px" }}
                size="large"
                variant="contained"
                onClick={handleClose}
              >
                Resgistrate aquí
              </SCButton>
            </>
          )}
        </div>
      </Dialog>
    </div>
  );
};
