import classnames from "classnames";
import React, { FC } from "react";

// TODO Add in handling image loading errors
export interface IImageProps {
  imageSrc: string;
  alternativeText?: string;
  classNames?: string;
  variant?: EImageVariant.fill | EImageVariant.none;
}

export enum EImageVariant {
  fill = "",
  none = "",
}

const Image: FC<IImageProps> = ({
  imageSrc,
  alternativeText,
  variant,
  classNames,
}) => {
  return (
    <img
      alt={alternativeText}
      src={imageSrc}
      className={classnames(variant, classNames)}
    />
  );
};

Image.defaultProps = {
  classNames: "",
  alternativeText: "",
  variant: EImageVariant.none,
};

export default Image;
