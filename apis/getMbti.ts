import { collection, getDocs } from "firebase/firestore";
import { FireStorage } from "firestore";
import { ITypeItem } from "types";

const getMbti = async (mbtiType: string) => {
  const querySnapshot = await getDocs(collection(FireStorage, "mbti-type"));
  const data = querySnapshot.docs
    .map((item) => item.data().types)[0]
    .filter((type: ITypeItem) => type.type === mbtiType);
  return data;
}

export default getMbti;