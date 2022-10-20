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
    { name: 'News', href: '/news', current: path == "/news" },
  ]

  return (
    <Disclosure as="nav" className={classNames(dark ? "" : "text-black", "m-8 col-span-full relative")}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="/logos/dark.png"
                    alt="Your Company"
                  />
                  {dark ? 

                    <img
                      className="hidden mt-1 h-28 w-auto lg:block"
                      src="/logos/light.png"
                      alt="Digital Dash"
                    />

                    :

                    <img
                      className="hidden mt-1 h-28 w-auto lg:block"
                      src="/logos/dark.png"
                      alt="Digital Dash"
                    />
                  }
                </div>
              <div className="flex items-center">
                <div className="flex">
                    <div className="-ml-2 mr-2 flex items-center md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
                                'px-3 py-2 rounded-md text-sm font-medium uppercase'
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

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className="border-t border-gray-700 pt-4 pb-3">
              <div className="flex items-center px-5 sm:px-6">
                
                <button
                  type="button"
                  className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
