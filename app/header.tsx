import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';

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
      <NavbarBrand>たかだ</NavbarBrand>
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

    </Navbar>
  )
}