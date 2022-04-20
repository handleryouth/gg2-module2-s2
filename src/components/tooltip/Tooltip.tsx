import { ReactNode } from 'react';
import { Tooltip } from 'primereact/tooltip';

export interface TooltipProps {
  target: string;
  text: string;
  textslice?: string;
  icon?: ReactNode;
}

const CustomTooltip = ({ target, text, textslice, icon }: TooltipProps) => {
  return (
    <div data-testid="tooltip">
      <Tooltip className="prose text-sm sm:text-base" target={`.${target}`} position="bottom" />

      {textslice && (
        <p className={`my-0 ${target} text-white`} data-pr-showdelay="200" data-pr-tooltip={text}>
          {textslice}
        </p>
      )}

      {icon && (
        <i
          className={`${target} text-white hover:text-blue-500 transition-colors`}
          data-pr-showdelay="200"
          data-pr-tooltip={text}>
          {icon}
        </i>
      )}
    </div>
  );
};

export default CustomTooltip;
