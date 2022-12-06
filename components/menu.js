import * as React from "react";

import Link from "next/link";
let menu_classList =
  "duration-1000 w-[20%] text-center top_menu text-xs md:text-base";
let bar_position = [`0%`, `20%`, `40%`, `60%`, `80%`];
let bar_toggle = 0;

export default function Menu() {
  React.useEffect(() => {
    window.onscroll = function () {
      onView();
    };
  });

  const onView = () => {
    const box = document.querySelectorAll(".box");

    for (let i = 0; i < box.length; i++) {
      let rect = box[i].getBoundingClientRect();

      const isInViewport =
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth);

      if (isInViewport === true) {
        toggle(i);
      }
    }
  };

  const toggle = (id) => {
    let element = document.querySelectorAll(".top_menu");
    let bar = document.getElementById("bar");

    for (let i = 0; i < element.length; i++) {
      element[i].classList.remove("font-extrabold");
    }

    bar.classList.remove(`ml-[${bar_position[bar_toggle]}]`);

    element[id].classList.add("font-extrabold");

    bar.classList.add(`ml-[${bar_position[id]}]`);

    bar_toggle = id;
  };

  return (
    <nav className="flex flex-row justify-around w-screen h-10 fixed px-3 z-10">
      <img src="..." className="hidden lg:block" />
      <div className="flex flex-col justify-evenly w-full lg:w-1/2 ">
        <div className="flex flex-row justify-between align-middle">
          <div className={`font-extrabold ${menu_classList}`}>
            <Link href="/#">TOP</Link>
          </div>
          <div className={menu_classList}>
            <Link href="/#about">O MNIE</Link>
          </div>
          <div className={menu_classList}>
            <Link href="/#cv">CV</Link>
          </div>
          <div className={menu_classList}>
            <Link href="/#">PORTFOLIO</Link>
          </div>
          <div className={menu_classList}>
            <Link href="/#footer">KONTAKT</Link>
          </div>
        </div>
        <div
          className="duration-1000 h-0.5 w-[20%] bg-black rounded"
          id="bar"
        ></div>
      </div>
    </nav>
  );
}
