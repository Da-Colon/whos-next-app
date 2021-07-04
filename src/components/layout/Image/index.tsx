import classNames from "classnames";
import React, { FC } from "react";

// TODO Add in handling image loading errors
export interface IImageProps {
  imageSrc: string;
  alternativeText?: string;
  addClasses?: string;
  variant?: EImageVariant.fill | EImageVariant.none;
}

export enum EImageVariant {
  fill = "w-full h-full",
  none = "",
}

const Image: FC<IImageProps> = ({
  imageSrc,
  alternativeText,
  variant,
  addClasses,
}) => {
  return (
    <img
      alt={alternativeText}
      src={imageSrc}
      className={classNames(variant, addClasses)}
    />
  );
};

Image.defaultProps = {
  addClasses: "",
  alternativeText: "",
  variant: EImageVariant.none,
};

export default Image;
