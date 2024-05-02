import React from "react";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaLocationArrow, FaMobileAlt } from "react-icons/fa";

const FooterLinks = [
  {
    title: "Home",
    links: "/#",
  },
  {
    title: "About",
    links: "/#",
  },
  {
    title: "Contact",
    links: "/#",
  },
  {
    title: "Blogs",
    links: "/#",
  },
];

const Footer = () => {
  return (
    <div className="dark:bg-gray-900 bg-white">
      <div className="container ">
        <div className="grid sm:grid-cols-4 py-10">
          {/* company details */}
          <div className="px-4 py-8">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              Eshop
            </a>
            <p className="text-gray-600 dark:text-white/70 lg:pr-20 pt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cumquequisquam, quos consequuntur.
            </p>

            <p className="text-gray-500 mt-3">
              Made with ❤ by the coding journey
            </p>
            <a
              href="#"
              className="inline-block bg-primary/90 text-white px-4 py-2 whitespace-nowrap rounded-full mt-4 text-sm sm:text-base md:text-sm "
            >
              Visit Our Youtube Channel
            </a>
          </div>
          <div className="col-span-2 grid grid-cols-2 md:pl-10 ">
            <div className="py-8 px-3">
              <h1 className="text-xl font-bold sm:text-left mb-3 whitespace-nowrap">
                Iportant Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.links}
                      className="text-gray-600 dark:hover:text-white dark:text-gray-400 hover:text-black duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.links}
                      className="text-gray-600 dark:hover:text-white dark:text-gray-400 hover:text-black duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* company address */}
          <div className="px-4 py-8 col-span-2 sm:col-auto">
          <h1 className="text-xl font-bold sm:text-left mb-3">
                Address
              </h1>
            <div className="flex item-center gap-3">
                <FaLocationArrow/>
                <p>Adiss Ababa, Gurdshola</p>
            </div>

            <div className="flex item-center gap-3 mt-6">
                <FaMobileAlt/>
                <p>+251 968 990 765</p>
            </div>

            <div className="flex item-center gap-3 mt-6">
                <a href="#">
                <FaLinkedinIn className="text-3xl hover:text-primary duration-100"/>
                </a>

                <a href="#">
                <FaInstagram className="text-3xl hover:text-primary duration-100"/>
                </a>

                <a href="#">
                <FaFacebook className="text-3xl hover:text-primary duration-100"/>
                </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
