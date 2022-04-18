import '@testing-library/jest-dom'
import { createRef } from 'react'
import { render } from '@testing-library/react'
import { Toast } from 'primereact/toast'
import CustomToast from './CustomToast'

describe('Custom Toast rendered', () => {
  it('should render Custom Toast', () => {
    const toastRef = createRef<Toast>()
    const { getByTestId } = render(<CustomToast customRef={toastRef} />)
    expect(getByTestId('custom-toast')).toBeInTheDocument()
  })
})
