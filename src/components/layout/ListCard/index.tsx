import React, { FC } from "react";
import classnames from "classnames";
import plusSign from "../../assets/images/plusSign.svg";
import { NavLink } from "react-router-dom";

enum EContinerStyles {
  container = "border-2 shadow-card my-4 relative mr-8 z-10",
  tab = "absolute top-0 -mt-6 z-0 px-2 border-t border-l border-r border-black text-gold text-13",
  imageContainer = "w-full h-full box-border p-4",
}

enum EListCardVariant {
  new = "new",
  default = "default",
}

interface IListCard {
  title: string;
  variant?: string;
}

const LIST_CARD_STYLES = { width: "12rem", height: "8rem" };

const ListCard: FC<IListCard> = ({ title, variant }) => {
  switch (variant) {
    case EListCardVariant.new:
      return (
        <NavLink
          to={"/lists/new"}
          className={classnames(EContinerStyles.container, "cursor-pointer")}
          style={LIST_CARD_STYLES}
        >
          {title && (
            <div className={classnames(EContinerStyles.tab)}>{title}</div>
          )}
          <div className={classnames(EContinerStyles.imageContainer)}>
            <img alt="" src={plusSign} className="w-full h-full" />
          </div>
        </NavLink>
      );
    default: {
      return (
        <div
          className={classnames(EContinerStyles.container)}
          style={LIST_CARD_STYLES}
        >
          {title && (
            <div className={classnames(EContinerStyles.tab)}>{title}</div>
          )}
        </div>
      );
    }
  }
};

ListCard.defaultProps = {
  variant: EListCardVariant.default,
};

export default ListCard;
