import '@testing-library/jest-dom'
import { FormEvent } from 'react'
import { fireEvent, render } from '@testing-library/react'
import ItemForm from './ItemForm'

describe('Itemform rendered', () => {
  it('should rendered properly', () => {
    const { getByTestId } = render(<ItemForm toggleSubmit={() => null} toggleCancel={() => null} />)

    expect(getByTestId('item-form')).toBeInTheDocument()
  })

  it('should submit works', () => {
    const submitFunction = jest.fn((e: FormEvent<HTMLFormElement>) => e.preventDefault())
    const { getAllByTestId } = render(
      <ItemForm toggleSubmit={(e) => submitFunction(e)} toggleCancel={() => null} />
    )
    fireEvent.click(getAllByTestId('button')[0])
    expect(submitFunction).toHaveBeenCalled()
  })
})
