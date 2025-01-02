/* eslint-disable react/prop-types */
import "../styles/resume.css";

function HorizontalBreak({ title }) {
  const style = {
    height: 1,
    width: "100%",
    backgroundColor: "black",
  };

  const wrapperStyle = {
    width: "100%",
  };

  const font = {
    fontSize: 20,
  };

  return (
    <div style={wrapperStyle}>
      <p style={font}> {title} </p>
      <div style={style}></div>
    </div>
  );
}

function Section({ heading, subheading, start, end, children }) {
  const childrenStyle = {
    width: "100%",
  };
  return (
    <>
      <div className="section-wrapper">
        <div>
          <h2> {heading} </h2>
          <i> {subheading} </i>
        </div>
        <div>
          <p>
            {" "}
            {start} - {end}
          </p>
        </div>
      </div>
      <div style={childrenStyle}>{children}</div>
    </>
  );
}

function Resume({ person }) {
  return (
    <div className="resume-wrapper">
      <h1> {person["first-name"] + " " + person["last-name"]}</h1>
      <p>
        {" "}
        {person["phone-number"] + " | " + person.email + " | "}{" "}
        <a href={person.linkedIn}>{person.linkedIn}</a>
      </p>
      <HorizontalBreak title="Education" />
      <Section
        heading={person.school}
        subheading={person.major}
        start={person["ed-start-date"]}
        end={person["ed-end-date"]}
      >
        <ul>
          <li>Skills: {person.skills}</li>
        </ul>
      </Section>
      <HorizontalBreak title="Work Experience" />
      {Object.keys(person.jobs).map((key) => (
        <Section
          heading={person.jobs[key]["job-title"]}
          subheading={person.jobs[key].company}
          start={person.jobs[key]["job-start-date"]}
          end={person.jobs[key]["job-end-date"]}
          key={key}
        >
          <ul>
            <li>{person.jobs[key].description}</li>
          </ul>
        </Section>
      ))}
    </div>
  );
}

export default Resume;
