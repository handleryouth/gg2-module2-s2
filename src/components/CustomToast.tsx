import { Toast } from 'primereact/toast'
import { CustomToastProps } from 'types'

const CustomToast = ({ customRef }: CustomToastProps) => {
  return <Toast className="w-[280px] prose sm:w-auto" data-testid="custom-toast" ref={customRef} />
}

export default CustomToast
