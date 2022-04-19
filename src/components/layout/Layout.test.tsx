import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { createStore } from 'library'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Layout from './Layout'

window.scrollTo = jest.fn()

afterAll(() => {
  jest.clearAllMocks()
})

describe('layout rendered', () => {
  it('should rendered', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Provider store={createStore()}>
          <Layout>
            <div data-testid="children-div"> </div>
          </Layout>
        </Provider>
      </BrowserRouter>
    )
    expect(getByTestId('layout')).toBeInTheDocument()
    expect(getByTestId('children-div')).toBeInTheDocument()
  })
})
