import Link from 'next/link'
import AuthButton from './AuthButton'

export default function Header() {
    return (
        <header className="w-full border-b border-gray-200 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <Link href="/" className="font-bold text-xl hover:text-gray-700 transition-colors">
                    Demo App
                </Link>
                <AuthButton />
            </div>
        </header>
    )
}
