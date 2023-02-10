import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { questions } from "../../../utils";
import { sendDataWebHook } from "../services";
import { IInitialState } from "./interface";

const initialState: IInitialState = {
  questions: questions,
  answers: {
    name: "",
    email: "",
    phoneNumber: "",
    date: "",
    authorization: false,
  },
  index: 0,
  isSendedForm: false,
  isSending: false,
  totalQuestions: questions.length,
};

const formSlice = createSlice({
  initialState,
  name: "formSlice",
  reducers: {
    setChangeAnswerValue: (
      state: IInitialState,
      { payload }: PayloadAction<{ key: string; value: string | boolean }>
    ) => {
      state.answers = { ...state.answers, [payload.key]: payload.value };
    },
    setQuestionsAsDone: (
      state: IInitialState,
      { payload }: PayloadAction<{ key: string; index: number }>
    ) => {
      state.questions.forEach((question) => {
        if (question.key === payload.key) {
          question.isDone = true;
        }
      });
      if (state.questions.length - 1 !== payload.index) {
        state.index = payload.index + 1;
      }
    },
    setNextOrPreviusQuestion: (
      state: IInitialState,
      { payload }: PayloadAction<{ index: number; isNext: boolean }>
    ) => {
      if (payload.isNext) {
        if (state.questions.length - 1 !== payload.index) {
          state.index = payload.index + 1;
        }
      } else {
        state.index = payload.index - 1;
      }
    },
  },
  extraReducers: ({ addCase }) => {
    addCase(sendDataWebHook.pending, (state) => {
      state.isSending = true;
    });
    addCase(sendDataWebHook.fulfilled, (state) => {
      state.isSending = false;
      state.isSendedForm = true;
    });
  },
});

export const {
  setChangeAnswerValue,
  setQuestionsAsDone,
  setNextOrPreviusQuestion,
} = formSlice.actions;
export default formSlice.reducer;
