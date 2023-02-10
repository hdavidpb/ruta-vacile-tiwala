export interface IInitialState {
  questions: IQuestion[];

  answers: any;
  index: number;
  isSendedForm: boolean;
  isSending: boolean;
  totalQuestions: number;
}

export interface IQuestion {
  key: string;
  question: string;
  policy?: string;
  type: QuestionType;
  options?: IOptions[];
  multiOptions?: OcupationQuestion;
  isDone: boolean;
  image?: string;
}

export interface IOptions {
  label: string;
  value: string;
}

export interface IMultiOption {}

export interface OcupationQuestion {
  docente: string[];
  pensionado: string[];
}

export interface IAnswers {
  name: string;
  lastName: string;
  email: string;
  cedula: string;
  department: string;
  ocupation: OcupationType;
  contractTypeOrPagadury: string;
  creditType: string;
  amount: string;
  medio: string;
  phoneNumber?: string;
}

export enum OcupationType {
  docente = "docente",
  pensionado = "pensionado",
}

export enum QuestionType {
  text = "text",
  number = "number",
  email = "email",
  amount = "amount",
  checkbox = "checkbox",
  dropdown = "dropdown",
  authorization = "authorization",
  date = "date",
}
