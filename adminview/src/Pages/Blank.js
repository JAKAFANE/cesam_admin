import React from 'react'


import ExclamationCircleIcon from './../../node_modules/@heroicons/react/16/solid/esm/ExclamationCircleIcon.d';

function Page404() {
  return (
    <div className="flex flex-col items-center">
      <ExclamationCircleIcon className="w-12 h-12 mt-8 text-purple-200" aria-hidden="true" />
      <h1 className="text-6xl font-semibold text-gray-700 dark:text-gray-200">404</h1>
      <p className="text-gray-700 dark:text-gray-300">
        Page not found. Check the address or{' '}
        <a className="text-purple-600 hover:underline dark:text-purple-300" href="../Pages/Blank.js">
          go back
        </a>
        .
      </p>
    </div>
  )
}

export default Page404