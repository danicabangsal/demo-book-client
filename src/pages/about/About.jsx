import React from 'react'
import { BsCloudArrowUp } from 'react-icons/bs';
import { HiLockClosed, HiServer } from "react-icons/hi";

const About = () => {
  return (
    <div className='mt-20'>
        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-blue-600">Library Management System</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Project Scope and Limitations</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Our platform features a secure admin login that lets authorized staff easily upload new books and manage existing ones. 
                With simple book uploading tools and real-time inventory tracking, keeping your collection organized has never been easier. 
                Users can browse books by genre, explore different sections, and quickly discover titles that interest them. 
                Admins also have full control to edit or remove books from the inventory whenever needed, ensuring the catalog stays accurate and up to date.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                LBMS only accepts books that live in the public domain or are publicly available. 
                Upholding this policy keeps the platform legally accessible for every reader while setting clear expectations for contributors. 
                As the project grows we plan to expand supported formats, enrich search, and add collaboration tools, but safeguarding compliance will always be the baseline.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <BsCloudArrowUp className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Streamlined uploads.</strong> Admins can securely add, edit, or remove PDF titles with intuitive forms that keep the catalog up to date.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <HiLockClosed className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Respect for copyright.</strong> Public-domain and publicly released works keep the system compliant and transparent for contributors.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <HiServer className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">A growing catalog.</strong> Thousands of public-domain PDFs give readers a deep well of classics and curated finds to explore at their own pace.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Readers can browse by genre, explore curated sections, and discover content that matches their interests without navigating a cluttered UI. 
                The goal is to keep the interface approachable for everyone while still giving avid readers tools to dive deeper.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Built For Growth</h2>
              <p className="mt-6">
                LBMS is as an academic project that will continue to evolve. 
                Future iterations aim to widen file-format support, sharpen search capabilities, and introduce collaborative features for readers and admins alike. 
                Have an idea that could improve LBMS? Let us know—community input guides what we tackle next.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About
