'use client'

import Link from "next/link";
import style from "./StickManWithCard.module.css";
export default function StickManWithCard() {
  return (
    <div className={style.main}>
      <div draggable="true" className={style["stickman"]}>
        <div className={style["rl"]}></div>
        <div className={style["ll"]}></div>
        <div className={style["bdy"]}></div>
        <div className={style["l-eye"]}></div>
        <div className={style["r-eye"]}></div>
        <div className={style["mouth"]}></div>
        <div className={style["la"]}></div>
        <div className={style["ra"]}></div>
        <div className={style.card}>
          <Link href="https://drive.google.com/file/d/1vYQjCJugZZG_ku4YxShRwVfDTJ-SW1D-/view?usp=drivesdk">
            my CV
          </Link>
        </div>
        <div className={style["h"]}></div>
      </div>
    </div>
  );
}
