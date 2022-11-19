export enum MBTI_TYPE {
  E = "E",
  I = "I",
  N = "N",
  S = "S",
  F = "F",
  T = "T",
  P = "P",
  J = "J"
}

export type TMbtiResult = {
  [key in MBTI_TYPE]: number;
};

export interface IMbtiItem {
  text:string;
  type:MBTI_TYPE;
}

export interface IMbti {
  question: string;
  answers: IMbtiItem[];
}

export interface ITypeItem {
  name: string;
  description: string;
  title: string;
  type: string;
}

