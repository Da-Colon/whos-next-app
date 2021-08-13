import React, { FC } from "react";
import classnames from "classnames";

export enum EContainer {
  body = "px-8 mx-auto mb-8 mt-0 hide-scrollbar",
  header = "flex items-center justify-between pt-4 px-6 h-4.5",
  text = "static sm:absolute top-36 left-0 sm:left-auto sm:right-4 text-20 text-gold p-8 text-center max-w-128",
  section = "mt-4 sm:mb-24 p-4 relative min-h-64 sm:h-64",
  flex = "flex",
  field = "w-full flex items-center justify-between whitespace-nowrap my-2 md:80",
  fields = "flex flex-col w-full md:flex-row md:justify-between md:gap-32 md:px-8",
  column = "flex flex-col",
  margined = "flex flex-col my-8 py-8 background-main inset-shadow relative",
  inset = "my-8 py-8 background-main inset-shadow relative",
  padded = "flex flex-col p-8 pt-4 background-main inset-shadow",
  button = "flex flex-col sm:flex-row sm:justify-center items-center my-8 gap-4",
  none = "",
}

interface IContainerProps {
  variant?: EContainer;
  addClasses?: string;
  addMinHeight?: boolean;
  role?: string;
  styles?: {}
}

const BODY_STYLE = { minHeight: "calc(100vh - 16rem)" };

const Container: FC<IContainerProps> = ({
  variant,
  addMinHeight,
  addClasses,
  styles,
  children,
}) => {
  return (
    <div
      className={classnames(variant, addClasses)}
      style={styles ? styles : addMinHeight ? BODY_STYLE : {}}
    >
      { children }
    </div>
  );
};

Container.defaultProps = {
  addMinHeight: false,
  variant: EContainer.none,
};

export default Container;
