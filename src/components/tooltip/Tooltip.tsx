import { ReactNode } from 'react'
import { Tooltip } from 'primereact/tooltip'

export interface TooltipProps {
  target: string
  text: string
  textslice?: string
  icon?: ReactNode
  customclassName?: string
}

const CustomTooltip = ({ target, text, textslice, customclassName, icon }: TooltipProps) => {
  return (
    <div className={customclassName && customclassName} data-testid="tooltip">
      <Tooltip className="prose text-sm sm:text-base" target={`.${target}`} position="top" />

      {textslice && (
        <p className={`my-0 ${target}`} data-pr-showdelay="200" data-pr-tooltip={text}>
          {textslice}
        </p>
      )}

      {icon && (
        <i className={target} data-pr-showdelay="200" data-pr-tooltip={text} data-pr-position="top">
          {icon}
        </i>
      )}
    </div>
  )
}

export default CustomTooltip
