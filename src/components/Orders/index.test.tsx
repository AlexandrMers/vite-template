import { render, screen } from '@testing-library/react'

import Orders from 'components/Orders'

describe('', () => {
  it('should render component', () => {
    render(<Orders />)
    const list = screen.getAllByRole('listitem')
    expect(list).toHaveLength(3)
  })
})
