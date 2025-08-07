
'use client';
import { useLanguage } from '@/context/language-context';
import {
  ChevronDown,
  Globe,
  GraduationCap,
  MapPin,
  Menu,
  Newspaper,
  Search,
  Users,
} from 'lucide-react';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ThemeToggle } from './theme-toggle';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Skeleton } from './ui/skeleton';

const navLinks = [
  {
    en: 'Education',
    ar: 'التعليم',
    subLinks: [
      {
        en: 'General Education',
        ar: 'التعليم العام',
        href: '#',
        icon: Users,
      },
      {
        en: 'Higher Education',
        ar: 'التعليم العالي',
        href: '#',
        icon: GraduationCap,
      },
    ],
  },
  {
    en: 'Media Center',
    ar: 'المركز الإعلامي',
    subLinks: [
      { en: 'News', ar: 'الأخبار', href: '#news', icon: Newspaper },
    ],
  },
];

export function Header() {
  const { language, setLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
  };

  const NavContent = () => {
    if (!mounted) {
        return (
            <>
                <Skeleton className="h-8 w-24" />
                <Skeleton className="h-8 w-32" />
                <Skeleton className="h-8 w-28" />
            </>
        )
    }

    return (
        <>
        {navLinks.map((link) => (
            <DropdownMenu key={link.en}>
            <DropdownMenuTrigger asChild>
                <Button
                variant="ghost"
                className="group flex items-center text-foreground hover:bg-transparent"
                >
                {language === 'en' ? link.en : link.ar}
                <ChevronDown className="ms-1 h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                {link.subLinks.map((subLink) => (
                <DropdownMenuItem key={subLink.en} asChild>
                    <Link href={subLink.href} className="flex items-center gap-2">
                    <subLink.icon className="h-4 w-4 text-muted-foreground" />
                    <span>{language === 'en' ? subLink.en : subLink.ar}</span>
                    </Link>
                </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
            </DropdownMenu>
        ))}
        <Button variant="ghost" asChild>
            <Link href="#">{language === 'en' ? 'Contact Us' : 'تواصل معنا'}</Link>
        </Button>
        </>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg">
            <svg
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="hsl(var(--gold))"
            >
              <path
                d="M50,5A15,15 0,1,0 65,20 15,15 0,0,0 50,5M50,23.75A8.75,8.75 0,1,1 58.75,15 8.75,8.75 0,0,1 50,23.75"
                fill="hsl(var(--primary))"
              />
              <path
                d="M62.5,30H37.5a2.5,2.5,0,0,0-2.5,2.5V95l17.5-10,17.5,10V32.5A2.5,2.5,0,0,0,62.5,30Z"
              />
              <path
                d="M50,55a2.5,2.5,0,0,0-2.5,2.5v15l-5-2.5V57.5a2.5,2.5,0,0,0-5,0v15l-5-2.5V57.5a2.5,2.5,0,0,0-5,0v15l17.5,10,17.5-10v-15a2.5,2.5,0,0,0-5,0v12.5l-5,2.5v-15l-5,2.5v-15A2.5,2.5,0,0,0,50,55Z"
                fill="hsl(var(--primary))"
              />
            </svg>
            {mounted && <span className="hidden sm:inline">
              {language === 'en' ? 'SaudiEdu' : 'تعليمك'}
            </span>}
          </Link>
           {/* This is where you would integrate dynamic region data */}
           <div className="hidden md:flex items-center gap-2 rounded-full border bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            <span>{mounted ? (language === 'en' ? 'Riyadh Region' : 'منطقة الرياض') : <Skeleton className="h-4 w-20" />}</span>
          </div>
        </div>

        <nav className="hidden items-center gap-4 text-sm font-medium lg:flex">
          <NavContent />
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="hidden md:inline-flex"
          >
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <ThemeToggle />
          {mounted && <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            className="hidden md:inline-flex"
          >
            <Globe className="me-2 h-4 w-4" />
            {language === 'en' ? 'العربية' : 'English'}
          </Button>}
          <div className="lg:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side={language === 'ar' ? 'right' : 'left'}>
                <SheetHeader>
                  <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                   <Link href="/" className="flex items-center gap-2 font-bold text-lg mb-4">
                     <svg
                        viewBox="0 0 100 100"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10"
                        fill="hsl(var(--gold))"
                      >
                        <path
                          d="M50,5A15,15 0,1,0 65,20 15,15 0,0,0 50,5M50,23.75A8.75,8.75 0,1,1 58.75,15 8.75,8.75 0,0,1 50,23.75"
                          fill="hsl(var(--primary))"
                        />
                        <path
                          d="M62.5,30H37.5a2.5,2.5,0,0,0-2.5,2.5V95l17.5-10,17.5,10V32.5A2.5,2.5,0,0,0,62.5,30Z"
                        />
                        <path
                          d="M50,55a2.5,2.5,0,0,0-2.5,2.5v15l-5-2.5V57.5a2.5,2.5,0,0,0-5,0v15l-5-2.5V57.5a2.5,2.5,0,0,0-5,0v15l17.5,10,17.5-10v-15a2.5,2.5,0,0,0-5,0v12.5l-5,2.5v-15l-5,2.5v-15A2.5,2.5,0,0,0,50,55Z"
                          fill="hsl(var(--primary))"
                        />
                      </svg>
                    {mounted && <span>
                      {language === 'en' ? 'SaudiEdu' : 'تعليمك'}
                    </span>}
                  </Link>
                </SheetHeader>
                <div className="mt-6 flex flex-col gap-4">
                  <NavContent />
                   {mounted && <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      toggleLanguage();
                      setMobileMenuOpen(false);
                    }}
                  >
                    <Globe className="me-2 h-4 w-4" />
                    {language === 'en' ? 'العربية' : 'English'}
                  </Button>}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

    