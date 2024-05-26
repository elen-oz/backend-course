// For each section you must include a heading and at least one paragraph. You must also include at least one image on your website (however, no more than three images should be added).
// Once you are done with your website, you must publish the website and include the link to the published/live website in your application. The link to your website should be pasted into your application in the section called “Personligt Brev”.
import { PiLinkedinLogoDuotone } from 'react-icons/pi';
import { PiGithubLogoDuotone } from 'react-icons/pi';
import { PiIdentificationCardDuotone } from 'react-icons/pi';

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
                  className='border-b-2 border-white hover:border-b-2 hover:border-slate-500 px-3 py-2 flex items-center gap-2'
                  href='https://elenoz.app/'
                  target='_blank'
                >
                  <PiIdentificationCardDuotone size={25} />
                  Portfolio
                </a>
                <a
                  className='border-b-2 border-white hover:border-b-2 hover:border-slate-500 px-3 py-2 flex items-center gap-2'
                  href='https://github.com/elen-oz'
                  target='_blank'
                >
                  <PiGithubLogoDuotone size={25} />
                  GitHub
                </a>
                <a
                  className='border-b-2 border-white hover:border-b-2 hover:border-slate-500 px-3 py-2 flex items-center gap-2'
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
          <ul className='flex flex-wrap items-start gap-8'>
            <li className='w-2/5'>
              <p className='text-lg font-medium leading-6 '>
                A section motivating why you want to study this course. (Maximum
                250 words)
              </p>
              <p className='mt-2'>
                <p className='text-base leading-6 text-gray-300'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Magnam, itaque autem est ea ab commodi voluptatibus veritatis
                  sint accusamus alias earum, neque excepturi debitis
                  perferendis eius. Eveniet, ad? Exercitationem, nostrum?
                </p>
              </p>
            </li>
            <li className='w-2/5'>
              <p className='text-lg font-medium leading-6 '>
                A section motivating why you think you would be a good future
                developer. (Maximum 250 words)
              </p>
              <p className='mt-2'>
                <p className='text-base leading-6 text-gray-300'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam, autem! Totam eveniet reprehenderit dolorem debitis
                  aperiam saepe doloremque repellendus ipsa! Sapiente fuga ex,
                  porro velit quisquam quos nobis possimus sed?
                </p>
              </p>
            </li>
            <li className='w-2/5'>
              <p className='text-lg font-medium leading-6 '>
                A section containing a personal letter where you can introduce
                yourself to us. (Maximum 700 words)
              </p>
              <p className='mt-2'>
                <p className='text-base leading-6 text-gray-300'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quasi sunt dolorum iste saepe repellat nobis autem repudiandae
                  perferendis quos optio eum nisi officiis, dolores ullam earum
                  blanditiis veritatis voluptates quia!
                </p>
              </p>
            </li>
            <li className='w-2/5'>
              <p className='text-lg font-medium leading-6 '>
                A section with a short description of what course or previous
                experience you have within front-end development. (Maximum 250
                words)
              </p>
              <p className='mt-2'>
                <p className='text-base leading-6 text-gray-300'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
                  voluptatem officia voluptates in aliquam eius ducimus error
                  assumenda quibusdam saepe accusamus iste tempora soluta,
                  voluptate inventore provident qui velit? Cum.
                </p>
              </p>
            </li>
            <li className='w-2/5'>
              <p className='text-lg font-medium leading-6 '>
                A section where you link to a public repository on your GitHub
                that demonstrates your skills within HTML, CSS, and JavaScript.
                In this section you must also explain your code and how you
                created your project. (Maximum 500 words)
              </p>
              <p className='mt-2'>
                <p className='text-base leading-6 text-gray-300'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
                  quibusdam consequatur sequi officia incidunt nihil delectus
                  minima autem ut tenetur. Esse dolorum fugit reprehenderit quo
                  ducimus numquam odit nobis fuga.
                </p>
              </p>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default App;
