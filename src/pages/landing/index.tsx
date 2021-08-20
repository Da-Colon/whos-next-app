import "./styles.scss";

const LANDING_SECTIONS = [
  {
    heading: "Create or upload!",
    body: "Irure exercitation magna eiusmod esse esse irure nulla laboris ipsum non ut proident commodo. Culpa sint consequat non cillum. Officia in labore commodo dolore ad sint non fugiat quis. Et ullamco eiusmod enim elit adipisicing non. Incididunt incididunt exercitation id quis incididunt cupidatat mollit ea fugiat adipisicing adipisicing ea et duis.",
    backgroundImageSrc: "",
  },
  {
    heading: "Edit!",
    body: "Irure exercitation magna eiusmod esse esse irure nulla laboris ipsum non ut proident commodo. Culpa sint consequat non cillum. Officia in labore commodo dolore ad sint non fugiat quis. Et ullamco eiusmod enim elit adipisicing non. Incididunt incididunt exercitation id quis incididunt cupidatat mollit ea fugiat adipisicing adipisicing ea et duis.",
    backgroundImageSrc: "",
  },
  {
    heading: "Spin!",
    body: "Irure exercitation magna eiusmod esse esse irure nulla laboris ipsum non ut proident commodo. Culpa sint consequat non cillum. Officia in labore commodo dolore ad sint non fugiat quis. Et ullamco eiusmod enim elit adipisicing non. Incididunt incididunt exercitation id quis incididunt cupidatat mollit ea fugiat adipisicing adipisicing ea et duis.",
    backgroundImageSrc: "",
  },
];

const Landing = () => {
  return (
    <div className="landing-page-container">
      {LANDING_SECTIONS.map((section) => (
        <section key={section.heading} className="landing-page-section">
          <div className="landing-page-section-heading">{section.heading}</div>
          <div className="landing-page-section-hero-container">
            <div className="landing-page-section-image">{/* BackgroundImage */}</div>
            <div className="landing-page-section-text">{section.body}</div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Landing;
