// src/pages/AboutPage.js
import React from "react";
import "../css/pages/AboutPage.css";

const AboutPage = () => {
  const certs = [
    {
      name: "Azure Administrator Associate",
      date: "April 2023",
    },
    {
      name: "Azure Solutions Architect Expert",
      date: "April 2023",
    },
    {
      name: "Power Platform Developer Associate",
      date: "February 2023",
    },
    {
      name: "Power Platform Functional Consultant Associate",
      date: "February 2023",
    },
    {
      name: "Power Platform Fundamentals",
      date: "January 2023",
    },
    {
      name: "Azure Fundamentals",
      date: "October 2021",
    },
    {
      name: "UiPath Certified Professional Advanced RPA Developer (UiARD)",
      date: "October 2022",
    },
  ];

  const senecaSkills = [
    {
      name: "C Programming",
      desc: "Focusing on writing efficient and optimized programs to enhance performance.",
    },
    {
      name: "C++ Programming",
      desc: "Developing advanced applications capable of handling complex scenarios with object-oriented principles.",
    },
    {
      name: "SQL with Oracle DB",
      desc: "Managing large-scale data effectively, including creating and optimizing queries for real-world database systems.",
    },
    {
      name: "Python Programming",
      desc: "Building diverse algorithms and exploring its versatility in solving computational problems.",
    },
    {
      name: "Full-Stack Development",
      desc: "Gaining hands-on experience with modern web technologies like Node.js, EJS, and MongoDB, enabling me to design and implement dynamic, database-driven web applications.",
    },
  ];

  const getCertRows = (certs) => {
    return (
      <tbody>
        {certs.map((cert) => (
          <tr>
            <td>{cert.name}</td>
            <td>{cert.date}</td>
          </tr>
        ))}
      </tbody>
    );
  };

  const getSenecaSkills = (skills) => {
    let key = 0;
    return (
      <ol>
        {skills.map((skill) => (
          <li>
            <strong>
              <em>{skill.name}</em>
            </strong>
            : {skill.desc}
          </li>
        ))}
      </ol>
    );
  };

  return (
    <div>
      <div class="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary row">
        <div class="col-lg-6 px-0">
          <h1 class="display-4 fst-italic">About me</h1>
          <p class="lead my-3">
            I am an experienced full-stack developer with over 7 years of
            expertise in C# and React.js, delivering high-quality web
            applications and backend solutions. Skilled in both front-end and
            back-end development, with a strong focus on creating scalable,
            efficient, and user-friendly systems.
          </p>
        </div>
        <div class="col-lg-6 col-12">
          <div className="row justify-content-center">
            <img
              className="selfie"
              src={process.env.PUBLIC_URL + "/self.jpg"}
              alt="Me"
            />
          </div>
          <div className="row name">
            <p className="text-center fs-5 fw-bold fst-italic">Gabriel Yeung</p>
          </div>
        </div>
      </div>
      <div className="container">
        <article class="blog-post">
          <h2 class="display-5 link-body-emphasis mb-1">
            Lancaster University
          </h2>
          <h3>
            Bachelor of Science in Information Technology for Creative
            Industries
          </h3>
          <p class="blog-post-meta">October 2012 - June 2015</p>

          <div className="row blog-section">
            <div className="col-lg-6">
              <p>
                In 2011, I embarked on an exciting journey to study in the UK,
                where I immersed myself in a new culture and educational
                environment. A year later, in 2012, I was accepted into
                Lancaster University to pursue my Bachelor’s degree. It was
                during this time that I took my first steps into the world of
                programming, learning the foundational concepts that sparked my
                passion for technology and problem-solving.
              </p>
              <p>
                In university, my degree program encompassed a wide variety of
                courses designed to establish a strong foundation in the
                programming world. These courses covered topics ranging from
                mathematics relevant to computing and basic programming with
                Java to design theories and the fundamentals of the internet.
                While the coursework provided an introductory-level
                understanding rather than in-depth expertise in each area, it
                allowed me to gain a comprehensive overview of essential
                concepts. This broad exposure helped me build a solid base to
                explore advanced topics and practical applications later in my
                career.
              </p>
            </div>
            <div className="col-lg-6">
              <img
                className="blog-img img-thumbnail"
                src={process.env.PUBLIC_URL + "/about/lancaster.jpg"}
                alt="lancaster university"
              />
            </div>
          </div>

          <div className="row blog-section">
            <div className="col-lg-6">
              <img
                className="blog-img img-thumbnail"
                src={process.env.PUBLIC_URL + "/about/scarecrowproject.png"}
                alt="scarecrow project"
              />
            </div>
            <div className="col-lg-6">
              <p>
                During my studies, I had the opportunity to design and build a
                robotic scarecrow using an Arduino board and a few servo motors.
                This hands-on project not only allowed me to apply my
                programming and engineering knowledge but also sparked my
                creativity and problem-solving skills. It was an incredibly fun
                and rewarding experience that deepened my interest in robotics
                and hardware development.
              </p>
            </div>
          </div>
          <hr />
        </article>

        <article class="blog-post">
          <h2 class="display-5 link-body-emphasis mb-1">Flexystem Limited</h2>
          <h3>Programmer</h3>
          <p class="blog-post-meta">October 2015 - April 2019, Hong Kong</p>
          <div className="container">
            <img
              className="blog-img img-thumbnail rounded mx-auto d-block"
              src={process.env.PUBLIC_URL + "/about/flexsystem.jpg"}
              alt="My old workplace and my boss"
            />
            <p className="text-center blog-post-meta">
              My old workplace and boss
            </p>
          </div>
          <p>
            After graduating from university, I returned to my hometown to begin
            my career as a programmer. I secured a position at Flexsystem
            Limited, where I joined the development team working on a Human
            Resources Management System (HRMS) product. My primary
            responsibilities included enhancing existing functionalities to meet
            client requirements, debugging reported issues, and providing
            suggestions and technical support to colleagues to address client
            concerns effectively. The experience at Flexsystem served as a
            strong foundation for my programming career, elevating my skills to
            the entry level of a professional software engineer. I frequently
            utilized the LINQ library in the .NET framework to optimize older
            programs, significantly improving their efficiency and
            maintainability.
          </p>
          <hr />
        </article>

        <article class="blog-post">
          <h2 class="display-5 link-body-emphasis mb-1">
            Hong Kong Broadband Network
          </h2>
          <h3>Web developer / Analyst Programmer</h3>
          <p class="blog-post-meta">August 2019 - March 2023, Hong Kong</p>

          <img
            className="blog-img img-thumbnail rounded mx-auto d-block"
            src={process.env.PUBLIC_URL + "/about/hkbn.jpg"}
            alt="HKBN logo"
          />
          <p className="text-center blog-post-meta">My previous employer</p>
          <p>
            After spending more than three years in my first position, I felt it
            was the right time to advance to the next stage of my career. After
            careful consideration, I joined Hong Kong Broadband Network, a
            leading internet service provider in my hometown, as an in-house web
            developer. Working within an agile team, we adapted to the
            ever-changing requirements from the marketing team, our primary
            stakeholders, to enhance the website for various promotional events.
            The global pandemic during this time necessitated remote work,
            which, while challenging, provided valuable experience collaborating
            with colleagues across different geographies.
          </p>
          <div className="row blog-section">
            <div className="col-lg-6">
              <p>
                In the first half of my career at HKBN, I transitioned from a
                backend-focused developer to a full-stack role, learning to
                develop websites using React and Redux—a completely new
                experience for me as someone who previously specialized in
                programming business logic with C#. One of my major assignments
                during this period was to migrate the middleware of our website
                from Java to .NET Core. This task required months of effort,
                extensive collaboration across teams, and rigorous testing to
                ensure the migration would not impact our customers.
              </p>
            </div>
            <div className="col-lg-6">
              <img
                className="blog-img img-thumbnail"
                src={process.env.PUBLIC_URL + "/about/hkbnres.png"}
                alt="HKBN residential website"
              />
            </div>
          </div>
          <div className="row blog-section">
            <div className="col-lg-6">
              <img
                className="blog-img img-thumbnail"
                src={process.env.PUBLIC_URL + "/about/powerautomate.webp"}
                alt="Sample flow of power automate"
              />
            </div>
            <div className="col-lg-6">
              <p>
                After more than a year, I was relocated to a Systems Integration
                (SI) team to take over several projects following the departure
                of colleagues. This shift expanded my skill set as I worked on a
                diverse range of initiatives. For instance, I became the primary
                Mulesoft API developer in our team after completing a
                certification exam, helping unify our API development practices.
                I also collaborated with third-party companies to build bridging
                APIs between internal teams and external partners using Azure
                Functions. To improve business operations, I delved into
                Microsoft Power Automate, developing various automation
                processes that are still actively in use today. These
                experiences significantly broadened my technical expertise and
                adaptability, equipping me with a well-rounded skill set to
                handle complex, real-world challenges."
              </p>
            </div>
          </div>
          <p>Here are the certifications I got:</p>
          <table class="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Effective from</th>
              </tr>
            </thead>
            {getCertRows(certs)}
          </table>
          <hr />
        </article>

        <article class="blog-post">
          <h2 class="display-5 link-body-emphasis mb-1">Seneca College</h2>
          <h3>Diploma in Computer Programming</h3>
          <p class="blog-post-meta">May 2023 - August 2024, Toronto</p>

          <div className="row blog-section">
            <div className="col-lg-6">
              <p>
                After graduating from university abroad, I often found myself
                missing the experience of living and exploring another country.
                In 2023, I decided to take a bold step, leaving my job and
                moving to Canada to seek new opportunities. To build on my
                existing knowledge and experience in software development, I
                enrolled in a Computer Programming diploma program at Seneca
                College. I saw this as an excellent way to not only consolidate
                my skills but also stay updated with the latest technologies and
                industry practices while immersing myself in a new cultural and
                academic environment.
              </p>
            </div>
            <div className="col-lg-6">
              <img
                className="blog-img img-thumbnail"
                src={process.env.PUBLIC_URL + "/about/seneca.webp"}
                alt="Sample flow of power automate"
              />
            </div>
          </div>
          <p>
            During the course, I had the opportunity to explore a variety of
            technologies that I had not encountered in my previous career. These
            included:
          </p>
          {getSenecaSkills(senecaSkills)}
          <p>
            This exposure significantly broadened my technical skill set and
            reinforced my ability to adapt to new tools and methodologies.
          </p>

          <hr />
        </article>
      </div>
    </div>
  );
};

export default AboutPage;
