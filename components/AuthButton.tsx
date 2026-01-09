import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { signOut } from '@/app/auth/actions'

export default async function AuthButton() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    return user ? (
        <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">
                {user.email}
            </span>
            <form action={signOut}>
                <button
                    className="py-2 px-4 rounded-md no-underline bg-gray-100 hover:bg-gray-200 transition-colors text-sm"
                >
                    Logout
                </button>
            </form>
        </div>
    ) : (
        <div className="flex gap-4">
            <Link
                href="/login"
                className="py-2 px-4 rounded-md no-underline bg-gray-100 hover:bg-gray-200 transition-colors text-sm"
            >
                Login
            </Link>
            <Link
                href="/signup"
                className="py-2 px-4 rounded-md no-underline bg-blue-600 text-white hover:bg-blue-700 transition-colors text-sm"
            >
                Sign up
            </Link>
        </div>
    )
}
