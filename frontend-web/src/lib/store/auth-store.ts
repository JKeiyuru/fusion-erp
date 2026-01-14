// ============================================
// FILE: frontend-web/src/lib/store/auth-store.ts
// Location: frontend-web/src/lib/store/auth-store.ts
// ============================================
import { create } from 'zustand'
import { apiClient } from '../api/client'

interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  companyId: string
  companyName: string
  roles: string[]
}

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (data: any) => Promise<void>
  logout: () => void
  loadUser: () => Promise<void>
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: true,

  login: async (email, password) => {
    const response = await apiClient.post('/auth/login', { email, password })
    const { user, accessToken, refreshToken } = response.data

    localStorage.setItem('accessToken', accessToken)
    localStorage.setItem('refreshToken', refreshToken)

    set({ user, isAuthenticated: true })
  },

  register: async (data) => {
    const response = await apiClient.post('/auth/register', data)
    const { user, accessToken, refreshToken } = response.data

    localStorage.setItem('accessToken', accessToken)
    localStorage.setItem('refreshToken', refreshToken)

    set({ user, isAuthenticated: true })
  },

  logout: () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    set({ user: null, isAuthenticated: false })
  },

  loadUser: async () => {
    try {
      const token = localStorage.getItem('accessToken')
      if (!token) {
        set({ isLoading: false })
        return
      }

      const response = await apiClient.get('/auth/me')
      set({ user: response.data, isAuthenticated: true, isLoading: false })
    } catch (error) {
      set({ user: null, isAuthenticated: false, isLoading: false })
    }
  },
}))