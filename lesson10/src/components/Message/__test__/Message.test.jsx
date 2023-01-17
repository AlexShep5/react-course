import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Message } from '../Message'

describe('testing Message', () => {
  it('render component Message', () => {
    render(<Message></Message>)
  })

  it('render with snapshot', () => {
    const { asFragment } = render(<Message></Message>)
    expect(asFragment()).toMatchSnapshot()
  })

  it('render with message', () => {
    render(
      <Message text='message'></Message>
    )
    expect(screen.getByText('message')).toBeInTheDocument()
  })

  it('render with author', () => {
    render(
      <Message author='author'></Message>
    )
    expect(screen.getByText('author')).toBeInTheDocument()
  })

  it('render multiply', () => {
    render(
      <>
        <Message text='message'></Message>
        <Message text='message'></Message>
      </>
    )
    expect(screen.queryAllByText('message').length).toBe(2)
  })

})
