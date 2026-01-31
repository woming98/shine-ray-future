import type { User } from '@supabase/supabase-js'

const adminUserId = import.meta.env.VITE_ADMIN_USER_ID as string | undefined
const adminEmail = import.meta.env.VITE_ADMIN_EMAIL as string | undefined

export const isAdminUser = (user: User | null | undefined) => {
  if (!user) return false
  if (adminUserId && user.id === adminUserId) return true
  if (adminEmail && user.email && user.email.toLowerCase() === adminEmail.toLowerCase()) return true
  return false
}

