import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { store } from 'library'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Navbar'

describe('Navbar rendered', () => {
  it('should rendered', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </BrowserRouter>
    )
    expect(getByTestId('navbar')).toBeInTheDocument()
  })
})
