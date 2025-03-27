import { render } from '@testing-library/react'
import { NavLink } from './nav-link'
import { MemoryRouter } from 'react-router-dom'

describe('Navlink', () => {
  it('should highlight the nav link when it is the current page link', () => {
    const wrapper = render(
    <>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
    </>
    , {
      wrapper: ({ children }) => {
        return (
          <MemoryRouter initialEntries={['/about']}>
            {children}
          </MemoryRouter>
        )
      }

    })
    // wrapper.debug()

    expect(wrapper.getByText('Home').dataset.current).toEqual('false')
    expect(wrapper.getByText('About').dataset.current).toEqual('true')
  })
})