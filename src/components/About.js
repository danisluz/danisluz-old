const About = () => {
  return (
    <section
      id="about"
      data-nav-tooltip="About"
      className="pp-section pp-scrollable section counter"
    >
      <div className="container">

        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 m-15px-tb">
            <div className="about-me">
              <div className="img">
                <div className="img-in">
                  <img src="static/img/about-me.png" title="" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="about-info">
              <div className="title">
                <h3>Sur moi.</h3>
              </div>
              <div className="about-text">
                <h3>
                  {`Je suis`} un développeur JavaScript full stack passionné par la création de solutions technologiques innovantes.{" "}
                </h3>
                <p>
                  Ces dernières années, j'ai renforcé mes compétences en développement web, notamment dans les frameworks Angular, React et Node.JS. Mon parcours a débuté dans la création publicitaire, mais mon intérêt pour le développement Front-End m'a amené à travailler sur des projets stimulants chez Mirante Tecnologia avec l'équipe de développement du client INCRA.GOV(Gouvernement brésilien).
                </p>
                <p>
                  En dehors du développement, j'aime enseigner le design et le développement web. Mon objectif est de continuer à apprendre et à évoluer dans le domaine de la technologie, en recherchant constamment de nouveaux défis et opportunités. Si vous cherchez un professionnel dévoué, passionné et polyvalent, je suis ouvert à de nouvelles connexions et opportunités de collaboration. Mettons-nous en contact et explorons ensemble de nouvelles possibilités!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="separated" />

        <div className="title">
          <h3>Éducation &amp; Compétences</h3>
        </div>
        <div className="row">
          <div className="col-lg-4 m-15px-tb">
            <ul className="aducation-box">
              <li>
                <span>2013-2015</span>
                <h6>Production Multimédia</h6>
                <p>Collège SENAC, RS, Brésil</p>
              </li>
              <li>
                <span>2007-2008</span>
                <h6>Technicien Web Design</h6>
                <p>École SENAI, RS, Brésil</p>
              </li>
            </ul>
          </div>
          <div className="col-lg-7 ml-auto m-15px-tb">
            <div className="skills-box">
              <h3>Compétences</h3>
              <div className="skill-lt">
                  <h6>HTML 5</h6>
                  <div className="skill-bar">
                    <div className="skill-bar-in" style={{ width: "95%" }}>
                      <span data-toggle="tooltip" title="952%" />
                    </div>
                  </div>
                </div>
                {/* /skill */}
                <div className="skill-lt">
                  <h6>CSS 3</h6>
                  <div className="skill-bar">
                    <div className="skill-bar-in" style={{ width: "90%" }}>
                      <span data-toggle="tooltip" title="90%" />
                    </div>
                  </div>
                </div>
                {/* /skill */}
                <div className="skill-lt">
                  <h6>JavaScript</h6>
                  <div className="skill-bar">
                    <div className="skill-bar-in" style={{ width: "85%" }}>
                      <span data-toggle="tooltip" title="85%" />
                    </div>
                  </div>
                </div>
                {/* /skill */}
                <div className="skill-lt">
                  <h6>Angular</h6>
                  <div className="skill-bar">
                    <div className="skill-bar-in" style={{ width: "85%" }}>
                      <span data-toggle="tooltip" title="85%" />
                    </div>
                  </div>
                </div>
                {/* /skill */}
                <div className="skill-lt">
                  <h6>React.js</h6>
                  <div className="skill-bar">
                    <div className="skill-bar-in" style={{ width: "75%" }}>
                      <span data-toggle="tooltip" title="75%" />
                    </div>
                  </div>
                </div>
                {/* /skill */}
                <div className="skill-lt">
                  <h6>Node.js</h6>
                  <div className="skill-bar">
                    <div className="skill-bar-in" style={{ width: "50%" }}>
                      <span data-toggle="tooltip" title="50%" />
                    </div>
                  </div>
                </div>
                {/* /skill */}
                <div className="skill-lt">
                  <h6>Bootstrap</h6>
                  <div className="skill-bar">
                    <div className="skill-bar-in" style={{ width: "80%" }}>
                      <span data-toggle="tooltip" title="80%" />
                    </div>
                  </div>
                </div>
                {/* /skill */}
                <div className="skill-lt">
                  <h6>Sass/SCSS</h6>
                  <div className="skill-bar">
                    <div className="skill-bar-in" style={{ width: "80%" }}>
                      <span data-toggle="tooltip" title="80%" />
                    </div>
                  </div>
                </div>
                {/* /skill */}
                <div className="skill-lt">
                  <h6>Less</h6>
                  <div className="skill-bar">
                    <div className="skill-bar-in" style={{ width: "60%" }}>
                      <span data-toggle="tooltip" title="60%" />
                    </div>
                  </div>
                </div>
                {/* /skill */}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
export default About;
