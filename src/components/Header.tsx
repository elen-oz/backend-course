import {
  PiLinkedinLogoDuotone,
  PiGithubLogoDuotone,
  PiIdentificationCardDuotone,
} from 'react-icons/pi';

const Header = () => {
  return (
    <header className='fixed top-0 w-full z-50'>
      <div className='px-8 mx-auto max-w-7xl'>
        <div className='w-full justify-between flex items-center'>
          <div></div>

          <nav className='flex items-baseline space-x-4'>
            <a
              className='border-b-2 border-neutral-500 hover:border-b-2 hover:border-white px-3 py-2 flex items-center gap-2'
              href='https://elen-oz.com/'
              target='_blank'
            >
              <PiIdentificationCardDuotone size={25} />
              <span className='hidden sm:inline-block'>Portfolio</span>
            </a>
            <a
              className='border-b-2 border-neutral-500 hover:border-b-2 hover:border-white px-3 py-2 flex items-center gap-2'
              href='https://github.com/elen-oz'
              target='_blank'
            >
              <PiGithubLogoDuotone size={25} />
              <span className='hidden sm:inline-block'>GitHub</span>
            </a>
            <a
              className='border-b-2 border-neutral-500 hover:border-b-2 hover:border-white px-3 py-2 flex items-center gap-2'
              href='https://www.linkedin.com/in/elen-oz/'
              target='_blank'
            >
              <PiLinkedinLogoDuotone size={25} />
              <span className='hidden sm:inline-block'>Linkedin</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
