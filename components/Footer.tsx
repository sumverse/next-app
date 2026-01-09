import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="w-full border-t border-gray-200 bg-white py-12 mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col gap-2">
                    <span className="font-bold text-lg">Demo App</span>
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Demo App. All rights reserved.
                    </p>
                </div>

                <div className="flex gap-6 text-sm text-gray-600">
                    <Link href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</Link>
                    <Link href="#" className="hover:text-gray-900 transition-colors">Terms of Service</Link>
                    <Link href="#" className="hover:text-gray-900 transition-colors">Contact</Link>
                </div>
            </div>
        </footer>
    )
}
