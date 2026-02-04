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
function NavBookButton() {
  return (
    <a
      href="#book-us"
      className="btn-transition border-2 border-[#183a3b] px-6 py-3 font-medium text-[#183a3b] uppercase text-base
        hover:bg-[#183a3b] hover:border-white hover:text-white
        active:bg-[#1d4749] active:border-white active:text-white"
    >
      Book Us
    </a>
  );
}

// Yellow Button Component with hover/click states
function YellowButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <button
      className={`btn-transition bg-[#ffe129] rounded-lg px-10 py-4 font-bold text-[#4d4200] text-2xl tracking-wide uppercase
        shadow-[8px_8px_0px_0px_#c3c3c3]
        hover:shadow-[0px_0px_0px_0px_#c3c3c3]
        active:bg-[#ffef8f] active:shadow-[0px_0px_0px_0px_#c3c3c3]
        ${className}`}
    >
      {children}
    </button>
  );
}

// Hero Button Component (dark teal with gold shadow)
function HeroButton({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      className="btn-transition bg-[#183a3b] rounded-lg px-10 py-4 font-bold text-[#fef4d1] text-2xl tracking-wide uppercase inline-block w-fit
        shadow-[8px_8px_0px_0px_#d4b878]
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
        className="bg-white border border-[#adadad] flex items-center justify-between w-full px-4 py-2"
      >
        <span className={`font-normal text-xl leading-10 ${selected ? "text-[#183a3b]" : "text-[#4d4d4d]"}`}>
          {selected || "Which type of event are you hosting?"}
        </span>
        <svg
          className={`dropdown-arrow w-8 h-8 ${isOpen ? "open" : ""}`}
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
        className={`dropdown-content bg-white border border-[#adadad] border-t-0 ${isOpen ? "open" : ""}`}
      >
        <div className="flex flex-col gap-2 px-4 py-2">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
              className="text-left font-normal text-xl leading-10 text-[#183a3b] hover:bg-gray-50 px-0 py-0"
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
      <div className="flex items-center justify-between font-semibold text-xl leading-7">
        <span className="text-[#183a3b]">{name}</span>
        <span className="text-[#ab8d09]">{price}</span>
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
    <div className="backdrop-blur-md bg-white/50 border border-white/50 flex flex-col gap-8 p-8 rounded-xl flex-1">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-2xl leading-10 text-[#183a3b] uppercase">{title}</h3>
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
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-montserrat)]">
      {/* Nav Bar */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/65 shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)] px-8 py-3">
        <div className="max-w-[1376px] mx-auto flex items-center justify-between">
          <a href="#" className="btn-transition hover:opacity-80">
            <ProtectedImage
              src="/assets/logo.png"
              alt="Island Monkey Café"
              width={48}
              height={48}
              className="object-cover"
            />
          </a>
          <div className="flex gap-8 items-center">
            <a href="#our-story" className="font-medium text-[#183a3b] text-base uppercase hover:opacity-70 btn-transition">
              Our Story
            </a>
            <a href="#gallery" className="font-medium text-[#183a3b] text-base uppercase hover:opacity-70 btn-transition">
              Gallery
            </a>
            <a href="#menu" className="font-medium text-[#183a3b] text-base uppercase hover:opacity-70 btn-transition">
              Menu
            </a>
            <NavBookButton />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[835px] flex items-center justify-center overflow-hidden px-16 py-2">
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
          <div className="backdrop-blur-md bg-[#fef4d1]/65 p-8 w-[764px] flex flex-col gap-8">
            <h1 className="font-[family-name:var(--font-pacifico)] text-[70px] leading-[86px] text-[#183a3b]">
              We are<br />Island Monkey Café
            </h1>
            <p className="font-medium text-2xl leading-10 text-[#2d5253]">
              We are the coolest mobile coffee stand on the Peninsula. Look for our trailer by the ocean!
            </p>
            <HeroButton href="#menu">SEE WHAT&apos;S BREWING</HeroButton>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="bg-white flex items-center justify-center overflow-hidden p-16">
        <div className="max-w-[1312px] w-full flex gap-4 items-center">
          <div className="flex-1 flex flex-col gap-12">
            <h2 className="font-[family-name:var(--font-pacifico)] text-5xl leading-[64px] text-[#183a3b]">
              Our Story
            </h2>
            <div className="text-xl leading-7 text-[#183a3b]">
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
            <YellowButton>VIEW THE GALLERY</YellowButton>
          </div>
          <div className="flex-1 flex justify-end">
            <div className="relative h-[343px] w-[528px]">
              {/* Yellow tilted frame */}
              <div className="absolute left-0 top-0 -rotate-9 bg-[#f6edb6] rounded-[32px] w-[272px] h-[255px] overflow-hidden flex items-center justify-center">
                <div className="rotate-5 w-[234px] h-[178px] shadow-[4px_4px_12px_0px_rgba(0,0,0,0.25)]" style={{ background: "linear-gradient(127deg, rgb(255, 255, 255) 0%, rgb(241, 241, 241) 100%)" }}>
                  <div className="relative w-full h-full p-[4px]">
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
              <div className="absolute right-0 bottom-0 rotate-9 bg-[#b6e0e2] rounded-[32px] w-[272px] h-[255px] overflow-hidden flex items-center justify-center">
                <div className="-rotate-5 w-[234px] h-[178px] shadow-[4px_4px_12px_0px_rgba(0,0,0,0.25)]" style={{ background: "linear-gradient(127deg, rgb(255, 255, 255) 0%, rgb(241, 241, 241) 100%)" }}>
                  <div className="relative w-full h-full p-[4px]">
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
      <section id="gallery" className="bg-[#70c0c2] flex flex-col items-center overflow-hidden p-16 h-[1024px]">
        <div className="max-w-[1312px] w-full flex flex-col gap-8 flex-1">
          {/* Row 1 */}
          <div className="flex gap-8 flex-1">
            <div className="w-[357px] h-full relative rounded-l-[176px] overflow-hidden">
              <ProtectedImage src="/assets/gallery-1.png" alt="Gallery" fill className="object-cover" />
            </div>
            <div className="flex-1 h-full relative rounded-r-[176px] overflow-hidden">
              <ProtectedImage src="/assets/gallery-2.png" alt="Gallery" fill className="object-cover" />
            </div>
          </div>
          {/* Row 2 */}
          <div className="flex gap-8 flex-1">
            <div className="flex-1 h-full relative rounded-l-[176px] overflow-hidden">
              <ProtectedImage src="/assets/gallery-3.png" alt="Gallery" fill className="object-cover" />
            </div>
            <div className="w-[357px] h-full relative rounded-r-[176px] overflow-hidden">
              <ProtectedImage src="/assets/gallery-4.png" alt="Gallery" fill className="object-cover" />
            </div>
          </div>
          {/* Row 3 */}
          <div className="flex gap-8 flex-1">
            <div className="w-[357px] h-full relative rounded-l-[176px] overflow-hidden">
              <ProtectedImage src="/assets/gallery-5.png" alt="Gallery" fill className="object-cover" />
            </div>
            <div className="flex-1 h-full relative rounded-r-[176px] overflow-hidden">
              <ProtectedImage src="/assets/gallery-6.png" alt="Gallery" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="relative h-[736px] flex items-center justify-center overflow-hidden p-16">
        <div className="absolute inset-0">
          <ProtectedImage
            src="/assets/menu-bg.png"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#fef4d1]/70" />
        </div>
        <div className="relative max-w-[1312px] w-full flex flex-col gap-8 items-center h-full">
          <h2 className="font-[family-name:var(--font-pacifico)] text-5xl leading-[64px] text-[#183a3b] text-center tracking-wide">
            Menu
          </h2>
          <div className="h-px w-[511px] bg-[#9A9A9A]" />
          <div className="flex gap-4 flex-1 w-full overflow-hidden">
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
      <section id="book-us" className="bg-white flex items-center justify-center overflow-hidden p-16">
        <div className="max-w-[1312px] w-full flex gap-4 items-center">
          <div className="flex-1 flex justify-start">
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
          <div className="flex-1 flex flex-col gap-12">
            <h2 className="font-[family-name:var(--font-pacifico)] text-5xl leading-[64px] text-[#183a3b]">
              Book us!
            </h2>
            <p className="text-xl leading-7 text-[#183a3b]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Enter your name"
                className="bg-white border border-[#adadad] px-4 py-2 text-xl leading-10 text-[#4d4d4d] placeholder:text-[#4d4d4d] w-full"
              />
              <input
                type="email"
                placeholder="Enter your email address"
                className="bg-white border border-[#adadad] px-4 py-2 text-xl leading-10 text-[#4d4d4d] placeholder:text-[#4d4d4d] w-full"
              />
              <EventDropdown />
              <textarea
                placeholder="Message"
                className="bg-white border border-[#adadad] px-4 py-2 text-xl leading-10 text-[#4d4d4d] placeholder:text-[#4d4d4d] w-full h-[224px] resize-none"
              />
            </form>
            <YellowButton>SEND MESSAGE</YellowButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#f9f9f9] flex flex-col gap-8 items-center justify-center overflow-hidden p-16">
        <ProtectedImage
          src="/assets/logo.png"
          alt="Island Monkey Café"
          width={96}
          height={96}
          className="object-cover"
        />
        <div className="flex gap-8 items-center">
          <a
            href="https://www.instagram.com/islandmonkey.cafe/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 btn-transition"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/instagram.svg" alt="Instagram" width={32} height={32} />
          </a>
          <span className="cursor-default">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/tiktok.svg" alt="TikTok" width={32} height={32} />
          </span>
        </div>
        <p className="text-base leading-10 text-[#4d4d4d]">
          © 2026 Island Monkey Coffee
        </p>
      </footer>
    </div>
  );
}
