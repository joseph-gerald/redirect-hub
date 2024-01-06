import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full text-sm items-center lg:flex flex-col">
        <div className='mb-10 items-center flex flex-col'>
          <h2 className='text-7xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>Redirect Hub</h2>
          <h1>flexible and targeted redirects</h1>
        </div>
        <Link href="/register" className='bg-accent p-2 rounded-lg font-semibold hover:saturate-200 duration-300 focus:shadow-inner focus:shadow-background'>Get Started</Link>
      </div>
    </main>
  )
}
