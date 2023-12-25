import Footer from './components/footer/Footer';
import Header from './components/header/header';
import ImageBesidesText from './components/image-besides-text/image-besides-text';
import ImageWithCta from './components/image-with-cta/Image-with-cta';
import ProcessComp from './components/process-component/Process-component';
import SignUp from './components/sign-up-component/Sign-up-component';
import Tags from './components/tags/Tags';
import TextWithOrangeBg from './components/text-with-orange-bg/Text-with-orange-bg';
import TopFeatures from './components/top-features/Top-features';


function App() {
  return (
    <div className="App">
      <Header/>
      <ImageBesidesText />
      <Tags/>
      <TextWithOrangeBg/>
      <ImageWithCta/>
      <TopFeatures />
      <ProcessComp/>
      <SignUp />
      <Footer/>
    </div>
  );
}

export default App;
