import Link from 'next/link';

export default function Home() {
    return (
        <div className='min-h-screen w-full flex items-center justify-center text-center'>
            <Link
                href="/book"
                className='
                    text-lg
                    bg-[var(--primary-color)]
                    px-5
                    py-3
                    rounded-full
            '>Go to page</Link>
        </div>
    );
}
