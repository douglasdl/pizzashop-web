import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { SignIn } from './sign-in'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/lib/react-query'
import { HelmetProvider } from 'react-helmet-async'

describe('SignIn', () => {
  it('should set default email input value if e-mail is present on search params', () => {
    const wrapper = render(<SignIn />, {
      wrapper: ({ children }) => {
        return (
          <MemoryRouter initialEntries={['/sign-in?email=douglas_san@hotmail.com']}>
            <HelmetProvider>
              <QueryClientProvider client={queryClient}>
                {children}
              </QueryClientProvider>
            </HelmetProvider>
          </MemoryRouter>
        )
      }

    })
    
    // wrapper.debug()

    const emailInput = wrapper.getByLabelText('Seu e-mail') as HTMLInputElement

    // console.log(emailInput.outerHTML)

    expect(emailInput.value).toEqual('douglas_san@hotmail.com')
    
  })
})