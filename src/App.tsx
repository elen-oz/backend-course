// Once you are done with your website, you must publish the website and include the link to the published/live website in your application. The link to your website should be pasted into your application in the section called “Personligt Brev”.
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  return (
    <div className='relative'>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
