'use client'

import React from 'react'
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { TbMenu2 as MenuHamburger } from "react-icons/tb";
import Link from 'next/link';
import { ThemeSwitcher } from './common/components/ThemeSwitcher';

const PATHS: { href: string, label: string }[] = [
  { href: 'about', label: 'about' },
  { href: 'post', label: 'blog' },
]

const LINKS = [
  { icon: <FaXTwitter />, href: 'https://twitter.com/takada_masaya_' },
  { icon: <FaGithub />, href: 'https://github.com/TakadaMasaya' },
]

export default function Header() {
  return (
    <Navbar>
      <NavbarBrand>
        <Link href='/'>
          たかだ
        </Link>
      </NavbarBrand>
      <NavbarContent justify="start" className='hidden sm:flex gap-4'>
        {PATHS.map(({ href, label }) =>
          <NavbarItem key={href}>
            <Link href={href}>{label}</Link>
          </NavbarItem>
        )}
      </NavbarContent>

      <NavbarContent justify="end" className='hidden sm:flex gap-4'>
        {LINKS.map(({ href, icon }) =>
          <NavbarItem key={href}>
            <Link href={href} target='_blank'>{icon}</Link>
          </NavbarItem>
        )}
      </NavbarContent>

      <NavbarContent justify='end' className='sm:hidden'>
        <Dropdown>
          <DropdownTrigger>
            <Button isIconOnly>
              <MenuHamburger fontSize={24} />
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label='header menu'>
            {PATHS.map(({ href, label }) =>
              <DropdownItem key={href} href={href}>
                {label}
              </DropdownItem>
            )}
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      <ThemeSwitcher />
    </Navbar>
  )
}