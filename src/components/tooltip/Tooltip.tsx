import { Tooltip } from 'primereact/tooltip'

export interface TooltipProps {
  target: string
  text: string
  textslice: string
  customclassName?: string
}

const CustomTooltip = ({ target, text, textslice, customclassName }: TooltipProps) => {
  return (
    <div className={customclassName && customclassName} data-testid="tooltip">
      <Tooltip className="prose text-sm sm:text-base" target={`.${target}`} position="top" />
      <p className={`my-0 ${target}`} data-pr-showdelay="200" data-pr-tooltip={text}>
        {textslice}
      </p>
    </div>
  )
}

export default CustomTooltip
