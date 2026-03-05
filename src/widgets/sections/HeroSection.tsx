import "./HeroSection.css";

export function HeroSection() {
  return (
    <section className="hero" aria-label="Hero section">
      <div className="hero__content">
        <p className="hero__eyebrow">Frontend Developer</p>
        <h1 className="hero__title">
          Merhaba, ben Oguz.
          <span className="hero__titleAccent"> Modern web deneyimleri gelistiriyorum.</span>
        </h1>
        <p className="hero__description">
          React, TypeScript ve Tailwind tabanli hizli, temiz ve olceklenebilir arayuzler
          olusturuyorum.
        </p>
        <div className="hero__actions">
          <a className="hero__button hero__button--primary" href="#projects">
            Projelerim
          </a>
          <a className="hero__button hero__button--ghost" href="#contact">
            Iletisim
          </a>
        </div>
      </div>
    </section>
  );
}
