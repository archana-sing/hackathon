import React from "react";
import style from "./Styles/footer.module.css";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";


export default function Footer() {
  return (
    <div className={style.footer__wrap}>
      <div className={style.courses_wrap}>
        <div className={style.courses_1}>
          <div>
            <button>COURSES</button>
          </div>
          <div>
            {" "}
            <button>QUIZZES</button>
          </div>
          <div>
            {" "}
            <button>EXERCISES</button>
          </div>
        </div>
        <div className={style.courses_2}>
          <div>FORUM | ABOUT </div>
        </div>
      </div>
      <div className={style.social__icon}>
        <div>
          <AiFillFacebook />
        </div>
        <div>
          <AiOutlineInstagram />
        </div>
        <div>
          <AiFillLinkedin />
        </div>
      </div>
      <div className={style.footer__text}>
        W3Schools is optimized for learning, testing, and training. Examples
        might be simplified to improve reading and basic understanding.
        Tutorials, references, and examples are constantly reviewed to avoid
        errors, but we cannot warrant full correctness of all content.  While
        using this site, you agree to have read and accepted our terms of use,
        cookie and privacy policy.
        <div><span className={style.footer__copy}>Copyright 1999-2021 </span>by Refsnes Data.All
        Rights Reserved.</div>
      </div>
      <div className={style.footer__like}><AiOutlineLike/></div>
      <div className={style.footer__btn}>W3SCHOOLS SHOP</div>
    </div>
  );
}
