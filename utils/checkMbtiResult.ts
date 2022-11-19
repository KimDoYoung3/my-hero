import { TMbtiResult } from "types";

const checkMbtiTestResult = (mbtiResult: TMbtiResult): string => {
  const result = [];
  const {E, I, N, S, F, T, P, J} = mbtiResult;

  if(E > I) {
    result.push("E");
  } else if (E < I) {
    result.push("I");
  }

  if(N > S) {
    result.push("N");
  } else if (N < S) {
    result.push("S");
  }

  if(F > T) {
    result.push("F");
  } else if (F < T) {
    result.push("T");
  }

  if(P > J) {
    result.push("P");
  } else if (P < J) {
    result.push("J");
  }

  return result.join("");
}

export default checkMbtiTestResult
