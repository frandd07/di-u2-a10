"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Canvas from "./Canvas";
import Scoreboard from "./Scoreboard";
import Canvas2 from "./Canvas_2";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Ejercicio 1</h1>
      <Scoreboard />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>Ejercicio 2</h1>
      <Canvas />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>Ejercicio 3</h1>
      <Canvas2/>
      <br />
      <br />
      <br />
      <br />
      <br />

    </div>
  );
}
