import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Footer from './Footer'

describe('footer rendered', () => {
  it('should rendered', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
    expect(getByTestId('footer')).toBeInTheDocument()
  })
})
