function MyCard() {
  return (
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
        <img src="portfolio/facebook-icon.png" alt="" />
      </div>
    </div>
  );
}

export default MyCard;
