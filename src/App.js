import './App.css';
import Button from './components/Button/Button';
import ContactForm from './components/ContactForm/ContactForm';
import ContactHeader from './components/contactHeader/ContactHeader';
import Navigation from './components/Navigation/Navigation';
import classNames from 'classnames'

function App() {
  return (
    <div className={"container"}>
      <Navigation />
      <ContactHeader />
      <ContactForm />
      {/* <Button /> */}
    </div>
  );
}

export default App;
