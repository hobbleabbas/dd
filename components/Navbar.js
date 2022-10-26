import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useRouter } from 'next/router'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar({ dark }) {

  const router = useRouter()
  const path = router.asPath


  const navigation = [
    { name: 'Home', href: '/', current: path == "/" },
    { name: 'Services', href: '/services', current: path == "/services" },
    { name: 'Work', href: '/work', current: path == "/work" },
    { name: 'About', href: '/about', current: path == "/about" },
    { name: 'Humans', href: '/humans', current: path == "/humans" },
    { name: 'Contact', href: '/contact', current: path == "/contact" },
  ]

  return (
    <Disclosure as="nav" className={classNames(dark ? "" : "text-black", "p-0 sm:p-8 col-span-full relative")}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl ">
            <div className="flex h-16 justify-between">
                <div className="flex flex-shrink-0 items-center">
                  
                  {/** Mobile logo */}
                {dark ? 

                    <img
                    className="block h-20 w-auto lg:hidden m-8"
                    src="/logos/light.png"
                    alt="Your Company"
                    />

                  :

                    <img
                      className="block h-20 w-auto lg:hidden m-8"
                      src="/logos/dark.png"
                      alt="Your Company"
                    />
                  }


                  {dark ? 

                      <img
                        className="hidden mt-1 h-24 w-auto lg:block"
                        src="/logos/light.png"
                        alt="Digital Dash"
                      />

                    :

                    <img
                      className="hidden mt-1 h-24 w-auto lg:block"
                      src="/logos/dark.png"
                      alt="Digital Dash"
                    />
                  }
                </div>
              <div className="flex items-center">
                <div className="flex">
                    <div className="-ml-2 mr-2 flex items-center md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className={classNames(dark ? "hover:text-white " : "hover:bg-slate-100 hover:text-slate-800 ", "m-4 inline-flex items-center justify-center rounded-md p-2 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white")}>
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                        )}
                    </Disclosure.Button>
                    </div>
                    
                    <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                    {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                        >
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                                (item.current && dark) ? 'text-white underline underline-offset-8' : (!item.current && dark) ? 'text-gray-200 hover:underline underline-offset-8 transition delay-100 hover:text-white' : (item.current && !dark) ? "underline underline-offset-8" : (!item.current && !dark) ? "hover:underline underline-offset-8 delay-50 hover:text-gray-500" : "",
                                'px-3 py-2 rounded-md text-xs font-extralight uppercase'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                            >
                            {item.name}
                            </a>
                        </Link>
                    ))}
                    </div>
                </div>
              </div>
            </div>
          </div>

          {
            dark ?

            <Disclosure.Panel className="md:hidden p-3 backdrop-blur-lg">
              <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                {navigation.map((item) => (
                  <Link href = {item.href}>
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'text-white font-extrabold tracking-wider' : 'text-gray-300 hover:text-white',
                        'block px-3 py-2 rounded-md text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  </Link>
                ))}
              </div>
            </Disclosure.Panel>

            :

            <Disclosure.Panel className="md:hidden p-3 backdrop-blur-lg">
              <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                {navigation.map((item) => (
                  <Link href = {item.href}>
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'text-slate-800 font-extrabold tracking-wider' : 'text-slate-700 hover:bg-gray-50',
                        'block px-3 py-2 rounded-md text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  </Link>
                ))}
              </div>
            </Disclosure.Panel>
          }
        </>
      )}
    </Disclosure>
  )
}
