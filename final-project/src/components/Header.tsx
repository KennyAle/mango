"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BiCartAlt, BiMenu, BiSearch, BiUser } from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion";
import Cart from "./Cart";

const categories = [
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "tops",
  "womens-bags",
  "womens-dresses",
  "womens-jewellery",
  "womens-shoes",
  "womens-watches",
];

const extraPagesWithLinks = {
  "About Us": [
    { name: "About", slug: "about" },
    { name: "Careers", slug: "careers" },
    { name: "Help", slug: "help" },
    { name: "News & Blog", slug: "news-blog" },
    { name: "Sustainability", slug: "sustainability" },
    { name: "Press", slug: "press" },
  ],
  Brands: [
    { name: "Brands Overview", slug: "brands" },
    { name: "Brand Partners", slug: "brand-partners" },
    { name: "Brand Stories", slug: "brand-stories" },
  ],
  Contact: [
    { name: "Contact Us", slug: "contact" },
    { name: "Customer Service", slug: "customer-service" },
    { name: "Store Locator", slug: "store-locator" },
  ],
  Collections: [
    { name: "New Arrivals", slug: "new-arrivals" },
    { name: "Best Sellers", slug: "best-sellers" },
    { name: "Limited Editions", slug: "limited-editions" },
    { name: "Sale", slug: "sale" },
  ],
  "Gift Cards": [
    { name: "Buy Gift Cards", slug: "gift-cards" },
    { name: "Check Balance", slug: "gift-card-balance" },
  ],
  Lookbook: [
    { name: "Spring Collection", slug: "lookbook-spring" },
    { name: "Summer Collection", slug: "lookbook-summer" },
    { name: "Autumn Collection", slug: "lookbook-autumn" },
    { name: "Winter Collection", slug: "lookbook-winter" },
  ],
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowSearch(false);
      }
    };

    if (showSearch && searchInputRef.current) {
      searchInputRef.current.focus();
    }

    if (showSearch) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSearch]);

  return (
    <>
      {mounted && (
        <AnimatePresence>
          {(isMenuOpen || isCartOpen )&& (
            <motion.div
              className="fixed inset-0 bg-neutral-900/80 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setIsMenuOpen(false)
                setIsCartOpen(false)
              }}
            />
          )}
        </AnimatePresence>
      )}

      {mounted && (
        <AnimatePresence>
          {isMenuOpen && (
            <motion.aside
              className="fixed top-0 right-0 h-full w-[280px] md:w-[320px] bg-white dark:bg-black z-50 p-6 shadow-lg flex flex-col overflow-y-auto hide-scrollbar"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <button
                onClick={() => setIsMenuOpen(false)}
                className="fixed self-end mb-4 text-neutral-500 hover:text-orange-500 dark:hover:text-yellow-400 transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                ✕
              </button>
              {[
                {
                  title: "Categories",
                  links: categories.map((cat) => ({
                    name: cat.replace(/-/g, " "),
                    slug: `category/${cat}`,
                  })),
                },
                ...Object.entries(extraPagesWithLinks).map(
                  ([title, links]) => ({
                    title,
                    links: links.map(({ name, slug }) => ({ name, slug })),
                  })
                ),
              ].map(({ title, links }) => (
                <section key={title} className="mb-8 text-sm">
                  <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4 capitalize">
                    {title}
                  </h2>
                  <ul className="flex flex-wrap gap-y-4">
                    {links.map(({ name, slug }) => (
                      <li key={slug} className="w-1/2">
                        <Link
                          href={`/${slug}`}
                          onClick={() => setIsMenuOpen(false)}
                          className="dark:text-zinc-300 block w-full capitalize hover:text-orange-500 dark:hover:text-yellow-400 transition-colors duration-200"
                        >
                          {name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </motion.aside>
          )}
          {isCartOpen && (
            <motion.aside
            className="fixed z-100"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
            </motion.aside>
          )}
        </AnimatePresence>
      )}

      <header className="w-full flex justify-between items-center gap-2 px-4 md:px-10 lg:px-20 py-3 md:py-3 text-xl text-gray-800 bg-neutral-200 dark:bg-neutral-800/80 dark:text-gray-100 fixed z-30">
        <Link
          href="/"
          className={`text-2xl font-semibold transition-opacity duration-300 ${
            showSearch ? "opacity-0 invisible md:opacity-100 md:visible" : ""
          }`}
        >
          MANGO
        </Link>
        <nav className="hidden md:block">
          <ul className="flex justify-center items-center gap-6 lg:gap-10 text-sm font-semibold">
            {["women", "men", "accessories", "arrivals"].map((item) => (
              <li className="text-center" key={item}>
                <Link
                  href={`/${item}`}
                  className="hover:text-orange-500 dark:hover:text-yellow-400 transition-colors duration-200 capitalize"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4 relative" ref={searchRef}>
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search..."
            className={`fixed md:static left-5 md:left-0 px-2 py-1 border border-gray-900 dark:border-gray-300 text-sm outline-none bg-neutral-200 dark:bg-neutral-800 dark:text-white transition-all duration-300 ${
              showSearch
                ? "opacity-100 w-1/2 md:w-[150px] mr-2"
                : "opacity-0 w-0 pointer-events-none"
            }`}
          />
          <button
            onClick={() => setShowSearch((prev) => !prev)}
            className="cursor-pointer hover:text-orange-500 dark:hover:text-yellow-400 transition-colors duration-200"
            aria-label="Toggle search input"
          >
            <BiSearch />
          </button>
          <Link
            href="/login"
            className="hover:text-orange-500 dark:hover:text-yellow-400 transition-colors duration-200"
          >
            <BiUser />
          </Link>
          <button
            onClick={() => setIsCartOpen((prev) => !prev)}
            className="cursor-pointer hover:text-orange-500 dark:hover:text-yellow-400 transition-colors duration-200"
          >
            <BiCartAlt />
          </button>
          <div className="h-7 w-0.5 bg-black dark:bg-white mx-2 rounded-full" />
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="hover:text-orange-500 dark:hover:text-yellow-400 transition-colors duration-200 cursor-pointer"
            aria-label="Open menu"
          >
            <BiMenu />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
