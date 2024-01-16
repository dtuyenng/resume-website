import React from "react";

function Resume() {
  return (
    <div className="resume-wrap">
      <div className="mid_wrapper">
        <div className="my_card">
          <div className="headshot">
            <img src="portfolio/headshot.jpeg" alt="" />
          </div>

          <div className="fullname">
            <span>Andre Tuyen Nguyen</span>
            <div className="title">
              Cross-Platform Developer (Web & Mobile Apps)
            </div>
          </div>
          <div className="education_card">
            <span className="material-symbols-outlined">school</span>
            <div>
              <strong>B.S Computer Science.</strong>
              <div>California State University Northridge.</div>
            </div>
          </div>
          <div className="contact_card">
            <span className="material-symbols-outlined">perm_phone_msg</span>
            <div>
              <div className="email">dtuyen.ng@gmail.com</div>
              <div className="phone">310-598-0096</div>
              <div className="website"></div>
            </div>
          </div>

          <div className="links_card">
            <img src="portfolio/linkedinIcon.png" alt="" />
            <img src="portfolio/GitHub-logo.png" alt="" />
          </div>
        </div>
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
              <li>React Native (/android)</li>
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
