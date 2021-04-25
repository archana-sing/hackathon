import React from "react";
import Link from "next/link";
import style from "./Styles/navbar.module.css";
import { MdArrowDropDown } from 'react-icons/md';

const links = [
  
  {
    href: "/tutorials",
    title: "Tutorials",
  },
  {
    href: "/references",
    title: "References",
  },
  {
    href: "/exercises",
    title: "Exercises",
  },
];
const links2 = [
  {
    href: "/search",
    title: "search",
  },
  {
    href: "/buycourses",
    title: "Buy Courses",
  }
];
export default function Navbar() {
  return (
    <div className={style.nav__wrap}>
      <div className={style.nav__left}>
      <div><Link  href="/"><div className={style.logo}><img src="/w3-2.jpg" alt=""/></div></Link></div>
        {links?.map(({ href, title }) => (

          <div><Link href={href}><div>{title} <span className={style.dropDown}><MdArrowDropDown/></span></div></Link></div>
        ))}
      </div>
      <div className={style.nav__right}>
        {links2?.map(({ href, title }) => (
           <div> <Link href={href}>{title}</Link></div>
           
        ))}
        <div><button className={style.login_btn2}>Login</button></div>
      </div>
    </div>
  );
}
