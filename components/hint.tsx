import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export interface HintProps {
  children: React.ReactNode;
  label: string;
  align?: "start" | "center" | "end";
  side?: "top" | "bottom" | "left" | "right";
  alignOffset?: number;
  sideOffset?: number;
}

export const Hint = ({
  children,
  label,
  side,
  align,
  sideOffset,
  alignOffset,
}: HintProps) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent
          className="text-white bg-black border-black"
          align={align}
          side={side}
          alignOffset={alignOffset}
          sideOffset={sideOffset}
        >
          <p className="font-semibold capitalize">{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
