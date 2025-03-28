import { http, HttpResponse } from 'msw'
import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>('/me', () => { 
  return HttpResponse.json({
    id: 'custom-user-id',
    name: 'Douglas',
    email: 'douglas_san@hotmail.com',
    phone: '00000000000',
    role: 'manager',
    createdAt: new Date(),
    updatedAt: null
  })
})