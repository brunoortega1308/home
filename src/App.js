import "./App.css";
import React from "react";
import Header from "headerApp/Header";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Gallery />
    </div>
  );
}

function Gallery() {
  return (
    <section>
      <img
        src={`https://picsum.photos/seed/${Math.random()}/1920/1024`}
        alt="random image"
      />
      <img
        src={`https://picsum.photos/seed/${Math.random()}/1920/1024`}
        alt="random image"
      />
      <img
        src={`https://picsum.photos/seed/${Math.random()}/1920/1024`}
        alt="gallery image"
      />
      <img
        src={`https://picsum.photos/seed/${Math.random()}/1920/1024`}
        alt="gallery image"
      />
      <img
        src={`https://picsum.photos/seed/${Math.random()}/1920/1024`}
        alt="gallery image"
      />
    </section>
  );
}

export default App;
