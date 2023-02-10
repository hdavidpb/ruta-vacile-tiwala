import { IQuestion, QuestionType } from "../redux/features/forms/interface";
export const POLICY = "https://tiwala.com.co/co/politica_tratamiento_datos/";
export const documentOptions = [
  {
    value: "CC",
    label: "Cédula de ciudadanía",
  },
  {
    value: "CE",
    label: "Cédula de Extranjería",
  },
  {
    value: "PE",
    label: "Permiso Especial",
  },
  {
    value: "nit",
    label: "Nit",
  },
];

export const colombiaDepartments = [
  {
    value: "Amazonas",
    label: "Amazonas",
  },
  {
    value: "Antioquia",
    label: "Antioquia",
  },
  {
    value: "Arauca",
    label: "Arauca",
  },
  {
    value: "Atlantico",
    label: "Atlántico",
  },
  {
    value: "Bogota",
    label: "Bogotá",
  },
  {
    value: "Bolivar",
    label: "Bolivar",
  },
  {
    value: "Boyaca",
    label: "Boyaca",
  },
  {
    value: "Caldas",
    label: "Caldas",
  },

  {
    value: "Caqueta",
    label: "Caquetá",
  },
  {
    value: "Casanare",
    label: "Casanare",
  },
  {
    value: "Cauca",
    label: "Cauca",
  },
  {
    value: "Cesar",
    label: "Cesar",
  },
  {
    value: "Choco",
    label: "Chocó",
  },
  {
    value: "Cordoba",
    label: "Córdoba",
  },
  {
    value: "Cundinamarca",
    label: "Cundinamarca",
  },

  {
    value: "Guainia",
    label: "Guainía",
  },
  {
    value: "Guaviare",
    label: "Guaviare",
  },
  {
    value: "Huila",
    label: "Huila",
  },
  {
    value: "La Guajira",
    label: "La Guajira",
  },
  {
    value: "Magdalena",
    label: "Magdalena",
  },
  {
    value: "Meta",
    label: "Meta",
  },
  {
    value: "Nariño",
    label: "Nariño",
  },
  {
    value: "Norte de Santander",
    label: "Norte de Santander",
  },
  {
    value: "Putumayo",
    label: "Putumayo",
  },
  {
    value: "Quindio",
    label: "Quindío",
  },
  {
    value: "Risaralda",
    label: "Risaralda",
  },
  {
    value: "San Andrés y Providencia",
    label: "San Andrés y Providencia",
  },
  {
    value: "Santander",
    label: "Santander",
  },
  {
    value: "Sucre",
    label: "Sucre",
  },
  {
    value: "Tolima",
    label: "Tolima",
  },
  {
    value: "Valle del Cauca",
    label: "Valle del Cauca",
  },
  {
    value: "Vaupes",
    label: "Vaupés",
  },
  {
    value: "Vichada",
    label: "Vichada",
  },
];

export const questions: IQuestion[] = [
  {
    isDone: false,
    key: "name",
    question: "¿Cuál es tu nombre completo?",
    type: QuestionType.text,
  },

  {
    isDone: false,
    key: "email",
    question: "¿Cuál es tu correo electrónico?",
    type: QuestionType.email,
  },
  {
    isDone: false,
    key: "phoneNumber",
    question: "¿Cómo es tu número de teléfono?",
    type: QuestionType.number,
  },
  {
    isDone: false,
    key: "date",
    question: "¿Cuál es tu fecha de nacimiento?",
    type: QuestionType.date,
  },
  {
    isDone: false,
    key: "authorization",
    question:
      "Autorizo a tratar mis datos personales, conforme a las finalidades y disposiciones contenidas en la ",
    policy: "Política de tratamiento de datos.",
    type: QuestionType.authorization,
  },
];

export const marks = [
  {
    value: 1000000,
    label: "$1,000.000",
  },
  {
    value: 40000000,
    label: "$40,000.000",
  },
  {
    value: 80000000,
    label: "$80,000.000",
  },
  {
    value: 120000000,
    label: "$120,000.000",
  },
];
