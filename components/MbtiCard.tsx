import styles from "./MbtiCard.module.css";
import classNames from "classnames/bind";
import HeroImage from "./HeroImage";
import { ITypeItem } from "types";


const cx = classNames.bind(styles);

interface IMbtiCardProps {
  data: ITypeItem[];
}

function MbtiCard({ data }: IMbtiCardProps) {
  const {type, name, title, description} = data[0];
  return (
    <div className={cx("container")}>
      <div className={cx("card")}>
        <div className={cx("image-wrapper")}>
          <HeroImage code={type} />
        </div>
        <div className={cx("name")}>{name}</div>
        <div className={cx("keyword")}>{title}</div>
        <div className={cx("description")}>{description}</div>
      </div>
    </div>
  )
}

export default MbtiCard;