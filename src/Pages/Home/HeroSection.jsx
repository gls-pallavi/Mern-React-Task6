export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Pallavi</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">3rd Year</span>{" "}
            <br />
            Undergrad Student
          </h1>
          <p className="hero--section-description">
          Welcome to my portfolio! I am a 3rd-year undergraduate student specializing in Computer Science Engineering with a keen interest in Artificial Intelligence and Machine Learning.
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
