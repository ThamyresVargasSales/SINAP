import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import JogosVideos from "../pages/JogosVideos";
import './Jogos.css';

export default function Jogos() {
  return (
    <>
      <Header/>
      <JogosVideos />
      <Footer/>
    </>
  );
}
