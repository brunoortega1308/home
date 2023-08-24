import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <Gallery />
    </div>
  );
}

function Gallery() {
  return (
    <section>
      <img
        src={`https://picsum.photos/seed/${Math.random()}/1280/1024`}
        alt="gallery"
      />
      <img
        src={`https://picsum.photos/seed/${Math.random()}/1280/1024`}
        alt="gallery"
      />
      <img
        src={`https://picsum.photos/seed/${Math.random()}/1280/1024`}
        alt="gallery"
      />
      <img
        src={`https://picsum.photos/seed/${Math.random()}/1280/1024`}
        alt="gallery"
      />
      <img
        src={`https://picsum.photos/seed/${Math.random()}/1280/1024`}
        alt="gallery"
      />
    </section>
  );
}

export default App;
