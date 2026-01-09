import Link from 'next/link'

export default function Newsletter() {
    return (
        <section className="w-full bg-gray-50 rounded-2xl p-8 my-12 text-center border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold mb-3 text-gray-900">메일링 리스트 구독하기</h2>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">
                최신 소식과 유용한 정보를 메일로 받아보세요. 스팸은 보내지 않습니다.
            </p>
            <Link
                href="https://page.stibee.com/subscriptions/465285"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white font-medium py-3 px-8 rounded-full hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg transform active:scale-95 duration-200"
            >
                구독하기
            </Link>
        </section>
    )
}
