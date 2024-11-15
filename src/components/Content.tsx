import { CgMediaLive } from 'react-icons/cg';
import { PiGithubLogoDuotone } from 'react-icons/pi';

const Content = () => {
  return (
    <main>
      <section className='hero relative min-h-screen flex flex-col justify-center overflow-x-hidden'>
        <div className='absolute inset-0 bg-black bg-opacity-40 z-10'></div>
        <div className='container relative z-20'>
          <h1>
            Personal
            <br/>
            Letter
          </h1>
        </div>
      </section>

      <section className='container'>
        <h2 className='mb-12 pt-14 text-3xl font-extrabold leading-9 border-b-2 border-gray-100'>
          Admission Asked Questions
        </h2>
        <ul className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <li className='col-span-1 row-span-4'>
            <p className='mt-2'>
              <h3 className='text-lg font-medium leading-6 capitalize'>
                Personal letter
              </h3>
              <p className='text-base leading-6 text-gray-300'>
                I am Elena and I have been programming for the last 2 years. I am currently in my second year at Hyper Island and completing my LIA internship. I can confidently say that I have a good command of the following technologies: TypeScript, JavaScript, React.js, Git/Github, HTML/CSS, working with the terminal, state managers. In addition to hard skills, I am an extremely motivated and goal-oriented person.
                <br/>
                <br/>
                Currently at Optimal Connections AB, I work as a Frontend Developer with route optimization systems and integrate frontend solutions with Python-based backend APIs. Before this, I was at Fictive Reality AB working on interactive learning solutions, and I started my tech journey as a junior frontend developer at Allihop AB where I learned to collaborate effectively in a team and implement new functionality. Prior to my transition into software development, I built a strong foundation with over 5 years of experience in the field of economics.
                <br/>
                <br/>
                I participated in two hackathons for charity - in the first one, I worked with a team to create a mini-game for a website about the psychological challenges of adopting foster children, and most recently participated in another charity hackathon in late October. I also have experience of mentoring fellow students on my course, where I help them explain things they can't understand (and that I know and can explain). This happens as an additional extracurricular programming activity.
                <br/>
                <br/>
                My education includes professional training in Frontend Development at Hyper Island in Stockholm, Sweden. In addition, I have taken various professional development courses including The Complete 2023 Web Development Bootcamp and React and TypeScript. My major goal is to become a full-stack developer.
              </p>
            </p>
          </li>
          <li>
            <h3 className='text-lg font-medium leading-6 capitalize'>
              Motivation for Studying This Course
            </h3>
            <p className='mt-2'>
              <p className='text-base leading-6 text-gray-300'>
                I'm eager to learn this course on backend development because I
                aspire to become a full stack developer. I currently specialize
                in frontend development, having gained a solid foundation from
                Hexlet (Russian Online School) and Hyper Island (Stockholm
                College) courses, I understand that mastering backend
                technologies is crucial to a complete understanding of web
                development. This course represents the next logical step in my
                professional journey, allowing me to build more secure and
                efficient applications by understanding and controlling both
                ends of the development spectrum.
              </p>
            </p>
          </li>
          <li>
            <h3 className='text-lg font-medium leading-6 capitalize'>
              Motivation for Being a Good Future Developer
            </h3>
            <p className='mt-2'>
              <p className='text-base leading-6 text-gray-300'>
                Over the past two years I have studied and practiced various
                aspects of programming intensely. Participating in a 3-day
                hackathon where I co-created a web game for a charity and my
                internship as a junior frontend developer has honed my practical
                skills and taught me the importance of writing clean,
                maintainable code. With a solid foundation in frontend
                technologies such as HTML, CSS, SCSS, JavaScript, TypeScript and
                React.js I'm ready to dive into backend development and
                integrate it into my skill set.
              </p>
            </p>
          </li>

          <li>
            <h3 className='text-lg font-medium leading-6 capitalize'>
              Previous Experience in Frontend Development
            </h3>
            <p className='mt-2'>
              <p className='text-base leading-6 text-gray-300'>
                I took a 10-month frontend development course at Hexlet online
                school, which laid the foundation of my skills in HTML, CSS, and
                JavaScript. After that, I continued my education at Hyper
                Island, where I delved into advanced frontend technologies and
                methodologies. Over the past two years, I have gained
                significant hands-on experience through participation in a
                hackathon where I helped develop a web game for a charity, as
                well as two internships as a junior frontend developer. This
                experience solidified my knowledge of HTML/CSS, SCSS,
                JavaScript, TypeScript, React.js and prepared me to tackle more
                complex development tasks as I transitioned to backend
                development.
              </p>
            </p>
          </li>
          <li>
            <h3 className='text-lg font-medium leading-6 capitalize'>
              Project Demonstration: Chat App
            </h3>
            <p className='mt-2'>
              <div className='text-base leading-6 text-gray-300'>
                <div className='w-full flex-col mb-3'>
                  <a
                    className='px-3 py-2 flex items-center gap-2 hover:text-neutral-500'
                    href='https://github.com/elen-oz/chat_react-firebase'
                    target='_blank'
                  >
                    <PiGithubLogoDuotone size={25} />
                    Link to GitHub
                  </a>
                  <a
                    className='px-3 py-2 flex items-center gap-2 hover:text-neutral-500'
                    href='https://chat-react-firebase-6de84.web.app/'
                    target='_blank'
                  >
                    <CgMediaLive size={25} />
                    Link to Live
                  </a>
                </div>
                This is one of my recent projects I did to prepare for an
                internship at a company. Here I tried Firebase: authentication
                and data storage. The logic of working with Firebase I took from
                a tutorial, but there was used an old version of Firebase, so I
                rewrote the code working with official Firebase documentation.
                The rest of the application logic and design is done by me.
                <br />
                <br />
                React.js and Tailwindcss for styles were used.
              </div>
            </p>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Content;
