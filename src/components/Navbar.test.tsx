import { render } from '@testing-library/react'
import { store } from 'library'
import { Provider } from 'react-redux'
import Navbar from './Navbar'

describe('Navbar rendered', () => {
  it('should rendered', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Navbar />
      </Provider>
    )
    expect(getByTestId('navbar')).toBeTruthy()
  })
})
