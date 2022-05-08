import ReactTooltip, { TooltipProps } from "react-tooltip";

export const Tooltip = (props: TooltipProps) => {
  return <ReactTooltip {...props} />;
};

Tooltip.defaultProps = {
  effect: "solid",
  delayHide: 100,
};
