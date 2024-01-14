import React from "react";

function Resume() {
  return (
    <div className="resume-wrap">
      <div className="fullname">
        <h1>Andre Tuyen Nguyen</h1>
        <div className="title">
          Cross-Platform Developer (Web & Mobile Apps)
        </div>
      </div>
      <div className="education_card">
        <h3>Education</h3>
        <div>
          <h4>Highschool</h4>
          <div>College Francais a Montreal</div>
        </div>
        <div>
          <h4>University</h4>
          <strong>Bachelor of Science in Computer Science.</strong>
          <div>California State University Northridge.</div>
        </div>
      </div>
      <div className="contact_card">
        <h3>Contact</h3>
        <div className="email">
          <strong>email: </strong>dtuyen.ng@gmail.com
        </div>
        <div className="phone">
          <strong>phone: </strong>310-598-0096
        </div>
        <div className="website">
          <strong>url: </strong>
          <a href="">http://www.mywebsite.com</a>
        </div>
      </div>
      <div className="aboutme_card">
        <h3>About Me</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          nisi magnam modi reiciendis quam assumenda obcaecati libero minima
          eius fugit commodi rem, cumque possimus iusto fugiat nemo distinctio.
          Architecto, cum?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus suscipit dolorum exercitationem doloremque doloribus
          minima. Deserunt, quod ad pariatur laboriosam explicabo culpa. Facere,
          corrupti ipsum culpa enim blanditiis voluptate deserunt.
        </p>
      </div>

      <div className="skill_card">
        <h3>Skills / Technologies</h3>
        <div className="skill_item_wrapper">
          <div className="skill_item">
            <h4>UI/UX Design</h4>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
            </ul>
          </div>
          <div className="skill_item">
            <h4>Front-End</h4>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
            </ul>
          </div>

          <div className="skill_item">
            <h4>Back-End</h4>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="experience_card">
        <h3>Experience (expand)</h3>
      </div>
    </div>
  );
}

export default Resume;
