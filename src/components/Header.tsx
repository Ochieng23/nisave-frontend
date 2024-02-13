'use client'

import { Fragment } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

function MobileNavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Popover.Button as={Link} href={href} className="block w-full p-2">
      {children}
    </Popover.Button>
  )
}

function MobileNavIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0',
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0',
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            <MobileNavLink href="#features">Features</MobileNavLink>
            <MobileNavLink href="#testimonials">Testimonials</MobileNavLink>
            <MobileNavLink href="#pricing">Pricing</MobileNavLink>
            <hr className="m-2 border-slate-300/40" />
            <MobileNavLink href="/login">Sign in</MobileNavLink>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

export function Header() {
  return (
    <header className="py-10">
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="#" aria-label="Home" className='flex justify-between'>
            <div>
            <svg width="56" height="29" viewBox="0 0 96 79" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M96 35.5771C94.8716 21.9351 87.9356 9.45562 77.185 1.06494L41.8662 26.8703C37.1338 30.1208 32.355 33.3429 27.4821 36.377C24.2747 38.3732 20.4748 40.7332 16.9592 42.1131C12.2291 43.97 4.65985 44.5648 0 43.015C1.83199 56.385 8.11084 69.9227 19.1187 77.7752L56.3963 51.0839C61.1264 47.8345 65.9064 44.6113 70.7792 41.5784C73.9866 39.581 77.7877 37.2199 81.3033 35.8388C86.0968 33.9592 91.2858 33.9592 96 35.5771Z" fill="#E61F53"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M36.0643 22.1595L21.2905 0C9.5599 7.38575 0.464515 21.2033 0.435059 35.6292C9.38316 39.1335 27.9274 29.4716 35.5941 22.9367" fill="#E61F53"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M76.0385 78.2104C88.279 70.776 94.2791 57.8161 95.5911 43.4502C86.9897 39.1642 68.6131 50.658 60.3958 56.4848" fill="#E61F53"/>
</svg>
</div>
          <div>
              <h1 className='font-bold text-red-600'>Nisave</h1>
              </div>
            </Link>
            <div className="hidden md:flex md:gap-x-6">
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#testimonials">Testimonials</NavLink>
              <NavLink href="#pricing">Pricing</NavLink>
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
           
            <Button href="/register" color="blue" >
              <span>
              Gain early access <span className="hidden lg:inline">today</span>
              </span>
            </Button>
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}