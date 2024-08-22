"use client";
import { Fragment, useState } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "@/assets/logo.png";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const pages = [
  { name: "Home", href: "/" },
  { name: "Products & Services", href: "/products" },
  { name: "Milestones", href: "/milestones" },
  { name: "About us", href: "/about" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white">
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full flex-col overflow-y-auto bg-red-100 pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5 ml-auto">
                  <button
                    type="button"
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-8 w-8" aria-hidden="true" />
                  </button>
                </div>

                {/* Logo and title */}
                <div className="flex">
                  <Image
                    className="h-20 w-22 mt-10"
                    src={logo}
                    quality={100}
                    height={100}
                    width={100}
                    alt="Durga Engineers"
                  />
                  <div className="mt-14 ml-2">
                    <h4 className="text-2xl text-gray-900">Durga Engineers</h4>
                    <p className="text-sm text-red-600">
                      {/* Software Engineer @Oracle */}
                    </p>
                  </div>
                </div>

                {/* Navigation links */}
                <div className="space-y-6 border-t border-gray-200 px-4 py-2 border-b mt-4">
                  {pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <Link
                        href={page.href}
                        onClick={() => {
                          setOpen(false);
                        }}
                        className={classNames(
                          page.href === path
                            ? "border-red-600 text-red-600"
                            : "border-transparent text-gray-700 hover:text-gray-800",
                          "flex items-center text-sm font-medium relative z-10 "
                        )}
                      >
                        {page.name}
                      </Link>
                    </div>
                  ))}
                </div>

                {/* Contact Us Button for Mobile */}
                <div className="px-4 py-6">
                  <Link href="/contact">
                    <button className="w-full px-4 py-2 text-sm font-medium text-white bg-red-500 hover:bg-red-600 rounded-full focus:outline-none transition">
                      Contact Us
                    </button>
                  </Link>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <nav
          aria-label="Top"
          className="mx-auto max-w-full px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <button
                  type="button"
                  className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                  onClick={() => setOpen(true)}
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Logo and Durga Electronics */}
                <div className="flex items-center">
                  <Image
                    className="w-auto h-12"
                    src={logo}
                    alt="logo"
                    height={60}
                    width={60}
                  />
                  <span className="ml-4 text-2xl font-semibold text-gray-900">
                    Durga Engineers
                  </span>
                </div>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {pages.map((page) => (
                    <Link
                      key={page.name}
                      href={page.href}
                      className={classNames(
                        page.href === path
                          ? "border-red-600 text-red-600"
                          : "border-transparent text-gray-700 hover:text-gray-800",
                        "flex items-center text-sm font-medium relative z-10 border-b-2 transition-all"
                      )}
                    >
                      {page.name}
                    </Link>
                  ))}
                  <Link href="/contact">
                    <button className="ml-4 px-4 py-2 text-sm font-medium text-white bg-red-500 hover:bg-red-600 p-4 rounded-full mt-3 focus:outline-none transition">
                      Contact Us
                    </button>
                  </Link>
                </div>
              </Popover.Group>
            </div>
            {/* Single bottom border for active tab */}
            <div className=" border-gray-300" />
          </div>
        </nav>
      </header>
    </div>
  );
}
