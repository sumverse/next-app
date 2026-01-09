'use client'

import { signup } from '@/app/auth/actions'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function SignupPage() {
    const searchParams = useSearchParams()
    const error = searchParams.get('error')

    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-24">
            <form action={signup} className="flex flex-col gap-4 w-full max-w-md p-8 bg-white rounded-lg shadow-md border border-gray-100">
                <h1 className="text-2xl font-bold mb-4 text-center">Sign Up</h1>

                {error && (
                    <div className="p-3 bg-red-50 text-red-500 text-sm rounded-md">
                        {error}
                    </div>
                )}

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium" htmlFor="email">Email</label>
                    <input
                        className="p-2 border rounded-md"
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium" htmlFor="password">Password</label>
                    <input
                        className="p-2 border rounded-md"
                        id="password"
                        name="password"
                        type="password"
                        required
                        minLength={6}
                        placeholder="••••••••"
                    />
                </div>

                <button className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-colors mt-2">
                    Sign Up
                </button>

                <p className="text-center text-sm text-gray-600 mt-2">
                    Already have an account?{' '}
                    <Link href="/login" className="text-blue-600 hover:underline">
                        Log In
                    </Link>
                </p>
            </form>
        </div>
    )
}
