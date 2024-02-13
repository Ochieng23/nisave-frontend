import Link from 'next/link'

import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import { SlimLayout } from '@/components/SlimLayout'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign Up',
}

export default function Register() {
  return (
    <SlimLayout>
      <div className="flex">
        <Link href="/" aria-label="Home">
        <svg className="h-10 w-auto" width="56" height="29" viewBox="0 0 96 79" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M96 35.5771C94.8716 21.9351 87.9356 9.45562 77.185 1.06494L41.8662 26.8703C37.1338 30.1208 32.355 33.3429 27.4821 36.377C24.2747 38.3732 20.4748 40.7332 16.9592 42.1131C12.2291 43.97 4.65985 44.5648 0 43.015C1.83199 56.385 8.11084 69.9227 19.1187 77.7752L56.3963 51.0839C61.1264 47.8345 65.9064 44.6113 70.7792 41.5784C73.9866 39.581 77.7877 37.2199 81.3033 35.8388C86.0968 33.9592 91.2858 33.9592 96 35.5771Z" fill="#E61F53"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M36.0643 22.1595L21.2905 0C9.5599 7.38575 0.464515 21.2033 0.435059 35.6292C9.38316 39.1335 27.9274 29.4716 35.5941 22.9367" fill="#E61F53"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M76.0385 78.2104C88.279 70.776 94.2791 57.8161 95.5911 43.4502C86.9897 39.1642 68.6131 50.658 60.3958 56.4848" fill="#E61F53"/>
</svg>
          
        </Link>
      </div>
      <h2 className="mt-20 text-lg font-semibold text-gray-900">
        Get started for free
      </h2>
      <p className="mt-2 text-sm text-gray-700">
        Already registered?{' '}
        <Link
          href="/login"
          className="font-medium text-blue-600 hover:underline"
        >
          Sign in
        </Link>{' '}
        to your account.
      </p>
      <form
        action="#"
        className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2"
      >
        <TextField
          label="First name"
          name="first_name"
          type="text"
          autoComplete="given-name"
          required
        />
        <TextField
          label="Last name"
          name="last_name"
          type="text"
          autoComplete="family-name"
          required
        />
        <TextField
          className="col-span-full"
          label="Email address"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
        <TextField
          className="col-span-full"
          label="Password"
          name="password"
          type="password"
          autoComplete="new-password"
          required
        />
        <SelectField
          className="col-span-full"
          label="How did you hear about us?"
          name="referral_source"
        >
          <option>AltaVista search</option>
          <option>Super Bowl commercial</option>
          <option>Our route 34 city bus ad</option>
          <option>The “Never Use This” podcast</option>
        </SelectField>
        <div className="col-span-full">
          <Button type="submit" variant="solid" color="blue" className="w-full">
            <span>
              Sign up <span aria-hidden="true">&rarr;</span>
            </span>
          </Button>
        </div>
      </form>
    </SlimLayout>
  )
}
