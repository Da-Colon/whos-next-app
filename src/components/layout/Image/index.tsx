import classnames from "classnames";
import { FC } from "react";

// TODO Add in handling image loading errors
interface ImageProps {
  imageSrc: string;
  alternativeText?: string;
  classNames?: string;
}

const Image: FC<ImageProps> = ({ imageSrc, alternativeText, classNames }) => {
  return <img alt={alternativeText} src={imageSrc} className={classnames(classNames)} />;
};

Image.defaultProps = {
  classNames: "",
  alternativeText: "",
};

export default Image;
