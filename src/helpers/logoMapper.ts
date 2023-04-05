import React, { FC } from "react";
import react from "../assets/logos/react.png";
import laravel from "../assets/logos/laravel.png";
import nodejs from "../assets/logos/nodejs.png";
import css from "../assets/logos/css.png";
import postgresql from "../assets/logos/postgresql.png";
import html from "../assets/logos/html.png";
import javascript from "../assets/logos/javascript.png";
import express from "../assets/logos/express.png";
import firebase from "../assets/logos/firebase.png";
import tailwind from "../assets/logos/tailwind.png";
import php from "../assets/logos/php.png";
import mysql from "../assets/logos/mysql.png";
import git from "../assets/logos/git.png";
import materialui from "../assets/logos/materialui.png";
import sass from "../assets/logos/sass.png";
import bootstrap from "../assets/logos/bootstrap.png";
import electron from "../assets/logos/electron.png";
import typescript from "../assets/logos/typescript.png";
import nextjs from "../assets/logos/nextjs.png";

const logoMap: { [key: string]: string } = {
  react,
  laravel,
  nodejs,
  css,
  postgresql,
  html,
  javascript,
  express,
  firebase,
  tailwind,
  php,
  mysql,
  git,
  materialui,
  sass,
  bootstrap,
  electron,
  typescript,
  nextjs,
};

export default function logoMapper(name: string) {
  if (!logoMap[name]) throw new Error("Logo not in assets folder.");

  return logoMap[name];
}
