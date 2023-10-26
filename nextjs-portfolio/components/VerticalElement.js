import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"; // import the styles
import styles from "../styles/VerticalElement.module.css"; // import your module styles

// Work History Data (year-month-day)
const events = [
  {
    start: new Date("2021-09-12"),
    end: null,
    position: "Digital Technology Apprentice",
    company: "PwC",
    description: (
      <div>
        During my two summer placements, I honed my skills in Google Workspace,
        AppScript, Alteryx, Tableau, and UiPath, while gaining hands-on
        experience in JavaScript, API Development, and Google Cloud Platform.
        <br />
        I excelled in data analysis, creating an Excel Add-On, a PowerBI
        Dashboard, and enhancing internal services through Google's Advanced
        API.
        <br />
        <br /> Alongside developing technical skills, I strengthened key soft
        skills like oral communication, problem-solving, and team collaboration,
        successfully managing a high workload and fostering an environment of
        constructive feedback.
      </div>
    ),
  },
  {
    start: new Date("2021-06-01"),
    end: new Date("2021-08-21"),
    position: "Electronics Manufacturing and Quality Assurance Intern",
    company: "MailASail",
    description: (
      <div>
        Mastered hands-on production and quality control in electronic
        engineering, including the operation of Speedio CNC and laser machines
        and use of in G-Code.
        <br />
        <br />
        Gained end-to-end knowledge of the production cycle, and honed my
        adaptability in a fast-paced, agile environment.
      </div>
    ),
  },
  {
    start: new Date("2018-12-01"),
    end: new Date("2019-12-01"),
    position: "Classroom Assistant",
    company: "La Petite École Française D'Elmbridge",
    description:
      "Supporting teaching, learning and leading group activities for young children.",
  },

  // Add more events here
];

const getYear = (date) => (date ? date.getFullYear() : null);

const CareerTimeline = () => {
  return (
    <div style={{marginTop: '20px', marginBottom: '20px'}}>
    <VerticalTimeline>
      {events.map((data, index) => (
        <VerticalTimelineElement
          key={index}
          className={`vertical-timeline-element--work ${styles.moreSpace}`}
          contentStyle={{ background: "#202330", color: "#e6feff" }}
          contentArrowStyle={{ borderRight: "7px solid #202330" }}
          date={
            <span className={styles.customDateStyle}>{`${getYear(
              data.start
            )} - ${data.end ? getYear(data.end) : "present"}`}</span>
          }
          iconStyle={{ background: "#393c5c"}}
          icon={
            <div className={styles.iconWrapper}>
              <img
                src="/work.png"
                alt="Work Icon"
                className={styles.iconImage}
              />
            </div>
          }
        >
          <h3 className="vertical-timeline-element-title">{data.position}</h3>
          <h4 className="vertical-timeline-element-subtitle">{data.company}</h4>
          <div>{data.description}</div>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
    </div>
  );
};

export default CareerTimeline;
