// For each section you must include a heading and at least one paragraph. You must also include at least one image on your website (however, no more than three images should be added).
// Once you are done with your website, you must publish the website and include the link to the published/live website in your application. The link to your website should be pasted into your application in the section called “Personligt Brev”.
import {
  PiLinkedinLogoDuotone,
  PiGithubLogoDuotone,
  PiIdentificationCardDuotone,
} from 'react-icons/pi';
import { CgMediaLive } from 'react-icons/cg';

const App = () => {
  return (
    <div className='relative'>
      <header className='fixed top-0 w-full z-50'>
        <div className='px-8 mx-auto max-w-7xl'>
          <div className='flex items-center justify-between h-16'>
            <div className='w-full justify-between flex items-center'>
              <div></div>

              <nav className='flex items-baseline space-x-4'>
                <a
                  className='border-b-2 border-slate-500 hover:border-b-2 hover:border-white px-3 py-2 flex items-center gap-2'
                  href='https://elenoz.app/'
                  target='_blank'
                >
                  <PiIdentificationCardDuotone size={25} />
                  Portfolio
                </a>
                <a
                  className='border-b-2 border-slate-500 hover:border-b-2 hover:border-white px-3 py-2 flex items-center gap-2'
                  href='https://github.com/elen-oz'
                  target='_blank'
                >
                  <PiGithubLogoDuotone size={25} />
                  GitHub
                </a>
                <a
                  className='border-b-2 border-slate-500 hover:border-b-2 hover:border-white px-3 py-2 flex items-center gap-2'
                  href='https://www.linkedin.com/in/elen-oz/'
                  target='_blank'
                >
                  <PiLinkedinLogoDuotone size={25} />
                  Linkedin
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className='hero h-screen relative bg-cover bg-center bg-no-repeat flex flex-col justify-center'>
          <div className='absolute inset-0 bg-black bg-opacity-40 z-10'></div>
          <div className='container'>
            <div className='relative z-20'>
              <h1>
                Personal
                <br />
                Letter
              </h1>
            </div>
          </div>
        </section>

        <section className='container'>
          <h2 className='mb-12 pt-14 text-3xl font-extrabold leading-9 border-b-2 border-gray-100'>
            Admission Asked Questions
          </h2>
          <ul className='grid grid-cols-2 gap-8'>
            <li className='col-span-2 row-span-4'>
              <p className='text-lg font-medium leading-6 '>Personal Letter</p>
              <p className='mt-2'>
                <p className='text-base leading-6 text-gray-300'>
                  Hello Michiel!
                  <br />
                  <br />
                  I am Elena and I have been programming for the last 2 years,
                  last year I was studying at Hyper Island and I consider
                  programming as my hobby (no, really, check out my GitHub). I
                  can confidently say that I have a good command of the
                  following technologies: TypeScript, JavaScript (including
                  asynchronous programming), React.js, Git, HTML/CSS, (including
                  CSS modules, SCSS) working with the terminal, Redux. In
                  addition to hard skills, I am an extremely motivated and
                  goal-oriented person. I consider programming to be my passion
                  and hobby.
                  <br />
                  <br />
                  I have over 5 years of experience in the field of economics
                  before moving into software development. Working as a junior
                  frontend developer at Allihop AB allowed me to collaborate
                  effectively in a team and implement new functionality. At
                  Hexlet, I honed my skills as a frontend developer through
                  hands-on projects and demonstrated proficiency in React.js,
                  JavaScript, HTML/CSS and responsive design.
                  <br />
                  <br />
                  I also participated in a hackathon for a charity where I with
                  a team created a mini-game for a website about the
                  psychological challenges of adopting foster children. I also
                  have experience of mentoring fellow students on my course,
                  where I help them explain things they can't understand (and
                  that I know and can explain). This happens as an additional
                  extracurricular programming activity.
                  <br />
                  <br />
                  My education includes professional training in Frontend
                  Development at Hyper Island in Stockholm, Sweden. In addition,
                  I have taken various professional development courses
                  including The Complete 2023 Web Development Bootcamp and React
                  and TypeScript.
                </p>
              </p>
            </li>
            <li className=''>
              <p className='text-lg font-medium leading-6 '>
                Motivation for Studying This Course
              </p>
              <p className='mt-2'>
                <p className='text-base leading-6 text-gray-300'>
                  I'm eager to learn this course on backend development because
                  I aspire to become a full stack developer. I currently
                  specialize in frontend development, having gained a solid
                  foundation from Hexlet (Russian Online School) and Hyper
                  Island (Stockholm College) courses, I understand that
                  mastering backend technologies is crucial to a complete
                  understanding of web development. This course represents the
                  next logical step in my professional journey, allowing me to
                  build more secure and efficient applications by understanding
                  and controlling both ends of the development spectrum.
                </p>
              </p>
            </li>
            <li className=''>
              <p className='text-lg font-medium leading-6 '>
                Motivation for Being a Good Future Developer
              </p>
              <p className='mt-2'>
                <p className='text-base leading-6 text-gray-300'>
                  Over the past two years I have studied and practiced various
                  aspects of programming intensely. Participating in a 3-day
                  hackathon where I co-created a web game for a charity and my
                  internship as a junior frontend developer has honed my
                  practical skills and taught me the importance of writing
                  clean, maintainable code. With a solid foundation in frontend
                  technologies such as HTML, CSS, SCSS, JavaScript, TypeScript
                  and React.js I'm ready to dive into backend development and
                  integrate it into my skill set.
                </p>
              </p>
            </li>

            <li className=''>
              <p className='text-lg font-medium leading-6 '>
                Previous Experience in Frontend Development
              </p>
              <p className='mt-2'>
                <p className='text-base leading-6 text-gray-300'>
                  I took a 10-month frontend development course at Hexlet online
                  school, which laid the foundation of my skills in HTML, CSS,
                  and JavaScript. After that, I continued my education at Hyper
                  Island, where I delved into advanced frontend technologies and
                  methodologies. Over the past two years, I have gained
                  significant hands-on experience through participation in a
                  hackathon where I helped develop a web game for a charity, as
                  well as two internships as a junior frontend developer. This
                  experience solidified my knowledge of HTML/CSS, SCSS,
                  JavaScript, TypeScript, React.js and prepared me to tackle
                  more complex development tasks as I transitioned to backend
                  development.
                </p>
              </p>
            </li>
            <li className=''>
              <p className='text-lg font-medium leading-6 '>
                Project Demonstration: Chat App
              </p>
              <p className='mt-2'>
                <div className='text-base leading-6 text-gray-300'>
                  <div className='w-full flex'>
                    <a
                      className='px-3 py-2 flex items-center gap-2 hover:text-slate-500'
                      href='https://github.com/elen-oz/chat_react-firebase'
                      target='_blank'
                    >
                      <PiGithubLogoDuotone size={25} />
                      Link to GitHub
                    </a>
                    <a
                      className='px-3 py-2 flex items-center gap-2 hover:text-slate-500'
                      href='https://chat-react-firebase-6de84.web.app/'
                      target='_blank'
                    >
                      <CgMediaLive size={25} />
                      Link to Live
                    </a>
                  </div>
                  This is one of my recent projects I did to prepare for an
                  internship at a company. Here I tried Firebase: authentication
                  and data storage. The logic of working with Firebase I took
                  from a tutorial, but there was used an old version of
                  Firebase, so I rewrote the code working with official Firebase
                  documentation. The rest of the application logic and design is
                  done by me.
                  <br />
                  <br />
                  React.js and Tailwindcss for styles were used.
                </div>
              </p>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default App;
