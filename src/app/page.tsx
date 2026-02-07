"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

// Protected Image Component - prevents download/drag
function ProtectedImage(props: ImageProps) {
  return (
    <Image
      {...props}
      className={`protected-image ${props.className || ""}`}
      draggable={false}
      onContextMenu={(e) => e.preventDefault()}
    />
  );
}

// Nav Bar Button Component with hover/click states
function NavBookButton({ onClick }: { onClick?: () => void }) {
  return (
    <a
      href="#book-us"
      onClick={onClick}
      className="btn-transition border-2 border-[#183a3b] px-4 py-2 md:px-6 md:py-3 font-medium text-[#183a3b] uppercase text-base md:text-sm lg:text-base text-center w-full md:w-auto
        hover:bg-[#183a3b] hover:border-white hover:text-white
        active:bg-[#1d4749] active:border-white active:text-white"
    >
      Book Us
    </a>
  );
}

// Mobile Menu Button (Hamburger)
function MobileMenuButton({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <span className={`block w-6 h-0.5 bg-[#183a3b] transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
      <span className={`block w-6 h-0.5 bg-[#183a3b] transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
      <span className={`block w-6 h-0.5 bg-[#183a3b] transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
    </button>
  );
}

// Yellow Button Component with hover/click states
function YellowButton({ children, className = "", href }: { children: React.ReactNode; className?: string; href?: string }) {
  const buttonClasses = `btn-transition bg-[#ffe129] rounded-lg px-6 py-3 md:px-10 md:py-4 font-bold text-[#4d4200] text-lg md:text-2xl tracking-wide uppercase inline-block w-full md:w-fit text-center
    shadow-[6px_6px_0px_0px_#c3c3c3] md:shadow-[8px_8px_0px_0px_#c3c3c3]
    hover:shadow-[0px_0px_0px_0px_#c3c3c3]
    active:bg-[#ffef8f] active:shadow-[0px_0px_0px_0px_#c3c3c3]
    ${className}`;

  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {children}
      </a>
    );
  }

  return (
    <button className={buttonClasses}>
      {children}
    </button>
  );
}

// Hero Button Component (dark teal with gold shadow)
function HeroButton({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      className="btn-transition bg-[#183a3b] rounded-lg px-6 py-3 md:px-10 md:py-4 font-bold text-[#fef4d1] text-lg md:text-2xl tracking-wide uppercase inline-block w-full md:w-fit text-center
        shadow-[6px_6px_0px_0px_#d4b878] md:shadow-[8px_8px_0px_0px_#d4b878]
        hover:shadow-[0px_0px_0px_0px_#d4b878]
        active:bg-[#1d4749] active:shadow-[0px_0px_0px_0px_#d4b878]"
    >
      {children}
    </a>
  );
}

// Dropdown Component
function EventDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const options = ["Wedding", "Corporate", "Private Party", "Something else"];

  return (
    <div className="relative w-full">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white border border-[#adadad] flex items-center justify-between w-full px-3 py-2 md:px-4 text-left"
      >
        <span className={`font-normal text-base md:text-xl leading-8 md:leading-10 ${selected ? "text-[#183a3b]" : "text-[#4d4d4d]"}`}>
          {selected || "Which type of event are you hosting?"}
        </span>
        <svg
          className={`dropdown-arrow w-6 h-6 md:w-8 md:h-8 flex-shrink-0 ${isOpen ? "open" : ""}`}
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M8 12L16 20L24 12"
            stroke="#183a3b"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div
        className={`dropdown-content absolute left-0 right-0 z-10 bg-white border border-[#adadad] border-t-0 text-left ${isOpen ? "open" : ""}`}
      >
        <div className="flex flex-col py-2">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
              className="text-left font-normal text-base md:text-xl leading-8 md:leading-10 text-[#183a3b] hover:bg-[#183a3b] hover:text-white px-3 py-1 md:px-4 transition-colors duration-150"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// Menu Item Component
function MenuItem({ name, price }: { name: string; price: string }) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex items-center justify-between font-semibold text-base md:text-xl leading-6 md:leading-7">
        <span className="text-[#183a3b]">{name}</span>
        <span className="text-[#245556]">{price}</span>
      </div>
      <div className="h-px w-full bg-[#C5C5C5]" />
    </div>
  );
}

// Menu Category Component
function MenuCategory({
  title,
  icon,
  items,
}: {
  title: string;
  icon: React.ReactNode;
  items: { name: string; price: string }[];
}) {
  return (
    <div className="backdrop-blur-md bg-white/50 border border-white/50 flex flex-col gap-4 md:gap-8 p-4 md:p-8 rounded-xl flex-1 min-w-0">
      <div className="flex flex-col gap-3 md:gap-4">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-lg md:text-2xl leading-8 md:leading-10 text-[#183a3b] uppercase">{title}</h3>
          {icon}
        </div>
        <div className="h-0.5 w-full bg-[#4DB1B3]" />
      </div>
      {items.map((item) => (
        <MenuItem key={item.name} name={item.name} price={item.price} />
      ))}
    </div>
  );
}

// Menu Icon Component
function MenuIcon({ src, alt }: { src: string; alt: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} width={32} height={32} />
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-montserrat)]">
      {/* Nav Bar */}
      <div className="sticky top-0 z-50">
        <nav className="backdrop-blur-md bg-white/65 shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)] px-4 md:px-8 py-3">
          <div className="max-w-[1376px] mx-auto flex items-center justify-between">
            <a href="#" className="btn-transition hover:opacity-80">
              <ProtectedImage
                src="/assets/logo.png"
                alt="Island Monkey Café"
                width={40}
                height={40}
                className="object-cover md:w-12 md:h-12"
              />
            </a>
            {/* Desktop Nav */}
            <div className="hidden md:flex gap-4 lg:gap-8 items-center">
              <a href="#our-story" className="font-medium text-[#183a3b] text-sm lg:text-base uppercase hover:opacity-70 btn-transition">
                Our Story
              </a>
              <a href="#gallery" className="font-medium text-[#183a3b] text-sm lg:text-base uppercase hover:opacity-70 btn-transition">
                Gallery
              </a>
              <a href="#menu" className="font-medium text-[#183a3b] text-sm lg:text-base uppercase hover:opacity-70 btn-transition">
                Menu
              </a>
              <NavBookButton />
            </div>
            {/* Mobile Menu Button */}
            <MobileMenuButton isOpen={mobileMenuOpen} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} />
          </div>
        </nav>
        {/* Mobile Menu - outside nav for working backdrop blur */}
        <div className={`md:hidden absolute left-0 right-0 transition-all duration-300 ${mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}`}>
          <div className="backdrop-blur-md bg-white/65 shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)]">
            <div className="px-4 md:px-8 pb-4 pt-2">
              <div className="max-w-[1376px] mx-auto flex flex-col gap-4">
                <a href="#our-story" onClick={closeMobileMenu} className="font-medium text-[#183a3b] text-base uppercase hover:opacity-70 btn-transition">
                  Our Story
                </a>
                <a href="#gallery" onClick={closeMobileMenu} className="font-medium text-[#183a3b] text-base uppercase hover:opacity-70 btn-transition">
                  Gallery
                </a>
                <a href="#menu" onClick={closeMobileMenu} className="font-medium text-[#183a3b] text-base uppercase hover:opacity-70 btn-transition">
                  Menu
                </a>
                <NavBookButton onClick={closeMobileMenu} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[500px] md:min-h-[600px] lg:h-[835px] flex items-center justify-center overflow-hidden px-4 py-8 md:px-8 lg:px-16 md:py-2">
        <div className="absolute inset-0">
          <ProtectedImage
            src="/assets/hero-bg.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#fef4d1]/60" />
        </div>
        <div className="relative max-w-[1312px] w-full">
          <div className="backdrop-blur-md bg-[#fef4d1]/65 p-4 md:p-6 lg:p-8 w-full md:w-[85%] lg:w-[764px] flex flex-col gap-4 md:gap-6 lg:gap-8">
            <h1 className="font-[family-name:var(--font-pacifico)] text-[36px] leading-[44px] md:text-[50px] md:leading-[62px] lg:text-[70px] lg:leading-[86px] text-[#183a3b]">
              We are<br />Island Monkey Café
            </h1>
            <p className="font-medium text-base md:text-xl lg:text-2xl leading-7 md:leading-8 lg:leading-10 text-[#2d5253]">
              We are the coolest mobile coffee stand on the Peninsula. Look for our trailer by the ocean!
            </p>
            <HeroButton href="#menu">SEE WHAT&apos;S BREWING</HeroButton>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="bg-white flex items-center justify-center overflow-hidden px-4 py-8 md:p-8 lg:p-16">
        <div className="max-w-[1312px] w-full flex flex-col md:flex-row gap-8 md:gap-4 items-center">
          <div className="flex-1 flex flex-col gap-6 md:gap-8 lg:gap-12 order-2 md:order-1">
            <h2 className="font-[family-name:var(--font-pacifico)] text-3xl md:text-4xl lg:text-5xl leading-[40px] md:leading-[52px] lg:leading-[64px] text-[#183a3b]">
              Our Story
            </h2>
            <div className="text-base md:text-lg lg:text-xl leading-6 md:leading-7 text-[#183a3b]">
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="mb-4">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative h-[220px] w-[300px] md:h-[280px] md:w-[420px] lg:h-[343px] lg:w-[528px]">
              {/* Yellow tilted frame */}
              <div className="absolute left-0 top-0 -rotate-9 bg-[#f6edb6] rounded-[20px] md:rounded-[28px] lg:rounded-[32px] w-[160px] h-[150px] md:w-[216px] md:h-[200px] lg:w-[272px] lg:h-[255px] overflow-hidden flex items-center justify-center">
                <div className="rotate-5 w-[135px] h-[100px] md:w-[185px] md:h-[140px] lg:w-[234px] lg:h-[178px] shadow-[4px_4px_12px_0px_rgba(0,0,0,0.25)]" style={{ background: "linear-gradient(127deg, rgb(255, 255, 255) 0%, rgb(241, 241, 241) 100%)" }}>
                  <div className="relative w-full h-full p-[3px] md:p-[4px]">
                    <div className="relative w-full h-full overflow-hidden">
                      <ProtectedImage
                        src="/assets/gallery-preview-1.png"
                        alt="Gallery preview"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Teal tilted frame - offset */}
              <div className="absolute right-0 bottom-0 rotate-9 bg-[#b6e0e2] rounded-[20px] md:rounded-[28px] lg:rounded-[32px] w-[160px] h-[150px] md:w-[216px] md:h-[200px] lg:w-[272px] lg:h-[255px] overflow-hidden flex items-center justify-center">
                <div className="-rotate-5 w-[135px] h-[100px] md:w-[185px] md:h-[140px] lg:w-[234px] lg:h-[178px] shadow-[4px_4px_12px_0px_rgba(0,0,0,0.25)]" style={{ background: "linear-gradient(127deg, rgb(255, 255, 255) 0%, rgb(241, 241, 241) 100%)" }}>
                  <div className="relative w-full h-full p-[3px] md:p-[4px]">
                    <div className="relative w-full h-full overflow-hidden">
                      <ProtectedImage
                        src="/assets/gallery-preview-2.png"
                        alt="Gallery preview"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="bg-[#70c0c2] flex flex-col items-center overflow-hidden px-4 py-8 md:p-8 lg:p-16">
        <div className="max-w-[1312px] w-full flex flex-col gap-4 md:gap-6 lg:gap-8">
          {/* Mobile: 4 images in 2x2 grid / Tablet+: 6 images in two-column rows */}
          {/* Row 1 */}
          <div className="flex flex-row gap-4 md:gap-6 lg:gap-8">
            <div className="flex-1 md:flex-none md:w-[35%] lg:w-[357px] h-[150px] md:h-[200px] lg:h-[280px] relative rounded-[40px] md:rounded-l-[120px] lg:rounded-l-[176px] md:rounded-r-none overflow-hidden">
              <ProtectedImage src="/assets/gallery-1.png" alt="Gallery" fill className="object-cover" />
            </div>
            <div className="flex-1 h-[150px] md:h-[200px] lg:h-[280px] relative rounded-[40px] md:rounded-r-[120px] lg:rounded-r-[176px] md:rounded-l-none overflow-hidden">
              <ProtectedImage src="/assets/gallery-2.png" alt="Gallery" fill className="object-cover" />
            </div>
          </div>
          {/* Row 2 */}
          <div className="flex flex-row gap-4 md:gap-6 lg:gap-8">
            <div className="flex-1 h-[150px] md:h-[200px] lg:h-[280px] relative rounded-[40px] md:rounded-l-[120px] lg:rounded-l-[176px] md:rounded-r-none overflow-hidden">
              <ProtectedImage src="/assets/gallery-3.png" alt="Gallery" fill className="object-cover" />
            </div>
            <div className="flex-1 md:flex-none md:w-[35%] lg:w-[357px] h-[150px] md:h-[200px] lg:h-[280px] relative rounded-[40px] md:rounded-r-[120px] lg:rounded-r-[176px] md:rounded-l-none overflow-hidden">
              <ProtectedImage src="/assets/gallery-4.png" alt="Gallery" fill className="object-cover" />
            </div>
          </div>
          {/* Row 3 */}
          <div className="flex flex-row gap-4 md:gap-6 lg:gap-8">
            <div className="flex-1 md:flex-none md:w-[35%] lg:w-[357px] h-[150px] md:h-[200px] lg:h-[280px] relative rounded-[40px] md:rounded-l-[120px] lg:rounded-l-[176px] md:rounded-r-none overflow-hidden">
              <ProtectedImage src="/assets/gallery-5.png" alt="Gallery" fill className="object-cover" />
            </div>
            <div className="flex-1 h-[150px] md:h-[200px] lg:h-[280px] relative rounded-[40px] md:rounded-r-[120px] lg:rounded-r-[176px] md:rounded-l-none overflow-hidden">
              <ProtectedImage src="/assets/gallery-6.png" alt="Gallery" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="relative min-h-[600px] md:min-h-[650px] lg:h-[736px] flex items-center justify-center overflow-hidden px-4 py-8 md:p-8 lg:p-16">
        <div className="absolute inset-0">
          <ProtectedImage
            src="/assets/menu-bg.png"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#fef4d1]/70" />
        </div>
        <div className="relative max-w-[1312px] w-full flex flex-col gap-4 md:gap-6 lg:gap-8 items-center">
          <h2 className="font-[family-name:var(--font-pacifico)] text-3xl md:text-4xl lg:text-5xl leading-[40px] md:leading-[52px] lg:leading-[64px] text-[#183a3b] text-center tracking-wide">
            Menu
          </h2>
          <div className="h-px w-full max-w-[300px] md:max-w-[400px] lg:max-w-[511px] bg-[#9A9A9A]" />
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <MenuCategory
              title="Hot Drinks"
              icon={<MenuIcon src="/assets/icon-hot-drinks.svg" alt="Hot Drinks" />}
              items={[
                { name: "Americano", price: "$3.49" },
                { name: "Latte", price: "$4.49" },
                { name: "Cappuccino", price: "$5.99" },
                { name: "Flat White", price: "$5.99" },
                { name: "Mocha", price: "$4.99" },
              ]}
            />
            <MenuCategory
              title="Cold Drinks"
              icon={<MenuIcon src="/assets/icon-cold-drinks.svg" alt="Cold Drinks" />}
              items={[
                { name: "Cold Brew", price: "$4.29" },
                { name: "Iced Tea", price: "$3.49" },
                { name: "Iced Matcha", price: "$5.99" },
              ]}
            />
            <MenuCategory
              title="Snacks"
              icon={<MenuIcon src="/assets/icon-snacks.svg" alt="Snacks" />}
              items={[
                { name: "Açai Bowl", price: "$7.49" },
                { name: "Yogurt Parfait", price: "$6.99" },
                { name: "Ginger Snap Cookie", price: "$2.49" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Book Us Section */}
      <section id="book-us" className="bg-white flex items-center justify-center overflow-hidden px-4 py-8 md:p-8 lg:p-16">
        <div className="max-w-[1312px] w-full flex flex-col lg:flex-row gap-8 lg:gap-4 items-center">
          <div className="hidden lg:flex flex-1 justify-start">
            {/* Yellow tilted frame */}
            <div className="-rotate-9 bg-[#f6edb6] rounded-[32px] w-[467px] h-[437px] overflow-hidden flex items-center justify-center">
              <div className="rotate-5 w-[401px] h-[306px] shadow-[4px_4px_12px_0px_rgba(0,0,0,0.25)]" style={{ background: "linear-gradient(127deg, rgb(255, 255, 255) 0%, rgb(241, 241, 241) 100%)" }}>
                <div className="relative w-full h-full p-[4px]">
                  <div className="relative w-full h-full overflow-hidden">
                    <ProtectedImage
                      src="/assets/gallery-6.png"
                      alt="Book us"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:flex-1 flex flex-col gap-6 md:gap-8 lg:gap-12">
            <h2 className="font-[family-name:var(--font-pacifico)] text-3xl md:text-4xl lg:text-5xl leading-[40px] md:leading-[52px] lg:leading-[64px] text-[#183a3b]">
              Book us!
            </h2>
            <p className="text-base md:text-lg lg:text-xl leading-6 md:leading-7 text-[#183a3b]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <form className="flex flex-col gap-3 md:gap-4">
              <input
                type="text"
                placeholder="Enter your name"
                className="bg-white border border-[#adadad] px-3 py-2 md:px-4 text-base md:text-xl leading-8 md:leading-10 text-[#4d4d4d] placeholder:text-[#4d4d4d] w-full"
              />
              <input
                type="email"
                placeholder="Enter your email address"
                className="bg-white border border-[#adadad] px-3 py-2 md:px-4 text-base md:text-xl leading-8 md:leading-10 text-[#4d4d4d] placeholder:text-[#4d4d4d] w-full"
              />
              <EventDropdown />
              <textarea
                placeholder="Message"
                className="bg-white border border-[#adadad] px-3 py-2 md:px-4 text-base md:text-xl leading-8 md:leading-10 text-[#4d4d4d] placeholder:text-[#4d4d4d] w-full h-[160px] md:h-[200px] lg:h-[224px] resize-none"
              />
            </form>
            <YellowButton>SEND MESSAGE</YellowButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#f9f9f9] flex flex-col gap-6 md:gap-8 items-center justify-center overflow-hidden px-4 py-8 md:p-12 lg:p-16">
        <ProtectedImage
          src="/assets/logo.png"
          alt="Island Monkey Café"
          width={72}
          height={72}
          className="object-cover md:w-24 md:h-24"
        />
        <div className="flex gap-6 md:gap-8 items-center">
          <a
            href="https://www.instagram.com/islandmonkey.cafe/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 btn-transition"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/instagram.svg" alt="Instagram" width={28} height={28} className="md:w-8 md:h-8" />
          </a>
          <span className="cursor-default">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/tiktok.svg" alt="TikTok" width={28} height={28} className="md:w-8 md:h-8" />
          </span>
        </div>
        <p className="text-sm md:text-base leading-8 md:leading-10 text-[#4d4d4d] text-center">
          © 2026 Island Monkey Café
        </p>
      </footer>
    </div>
  );
}
