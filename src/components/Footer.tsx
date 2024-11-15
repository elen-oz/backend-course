const Footer = () => {
  return (
      <footer className='py-3 text-center'>
          <a
              href='https://github.com/elen-oz/backend-course/'
              target='_blank'
              className='text-neutral-500 hover:text-white p-2'
          >
              This Project on Github
          </a>
          <a
              href='https://backend-course-assignment.netlify.app/'
              target='_blank'
              className='text-neutral-500 hover:text-white p-2'
          >
              Live link to this Project
          </a>
      </footer>
  );
};

export default Footer;
