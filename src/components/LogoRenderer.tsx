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

const logoMapper: { [key: string]: string } = {
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
};

interface Props {
  name: string;
}

export const LogoRenderer: FC<Props> = ({ name }) => {
  if (!logoMapper[name]) throw new Error("Logo not in assets folder.");
  return <div>LogoRenderer</div>;
};
