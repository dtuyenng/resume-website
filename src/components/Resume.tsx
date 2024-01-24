import MyCard from "./MyCard";

function Resume() {
  return (
    <div className="resume-wrap">
      <div className="mid_wrapper">
        <MyCard></MyCard>
        <div className="aboutme_card">
          <h3>About Me</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            nisi magnam modi reiciendis quam assumenda obcaecati libero minima
            eius fugit commodi rem, cumque possimus iusto fugiat nemo
            distinctio. Architecto, cum?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus suscipit dolorum exercitationem doloremque doloribus
            minima. Deserunt, quod ad pariatur laboriosam explicabo culpa.
            Facere, corrupti ipsum culpa enim blanditiis voluptate deserunt.
          </p>
        </div>
      </div>

      <div className="skill_card">
        <h3 className="skill_card_title">Skills / Technologies</h3>
        <div className="skill_item_wrapper">
          <div className="skill_item">
            <img src="portfolio/software.png" alt="" />
            <h4>Mobile Development</h4>
            <ul>
              <li>Swift, SwiftUI ()</li>
              <li>CoreData, SwiftData ()</li>
              <li>Apple Xcode</li>
              <li>React Native (/android)</li>
              <li>Android Studio</li>
            </ul>
          </div>
          <div className="skill_item">
            <img src="portfolio/front-end.png" alt="" />

            <h4>Front-End, UI/UX</h4>
            <ul>
              <li>React</li>
              <li>JavaScript, TypeScript</li>
              <li>HTML and CSS</li>
              <li>Mobile-friendly, responsive designs.</li>
              <li>Figma</li>
              <li>Abobe Creative Suits, Photoshop, Illustrator</li>
            </ul>
          </div>

          <div className="skill_item">
            <img src="portfolio/technology.png" alt="" />
            <h4>Back-End</h4>
            <ul>
              <li>NodeJS</li>
              <li>Python</li>
              <li>MySQL</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
