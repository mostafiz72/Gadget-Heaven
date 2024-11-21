import React from 'react'

export default function Error() {
  return (
    <div className='flex items-center justify-center h-screen text-white'>
        <div className="text-center p-8 h-screen flex flex-col items-center justify-center">
            <h1 className="text-6xl font-bold text-red-500">404 Not Found't</h1>
            <p className="mt-4 text-xl">Oops! Page Not Found</p>
            <p className="mt-2">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>

            <div className="mt-6">
            <a href="/" className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">
                Go to Homepage
            </a>
            </div>
        </div>
    </div>
  )
}
