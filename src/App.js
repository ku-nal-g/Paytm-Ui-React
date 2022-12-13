import './App.css';
import Header from './components/Header/Header'
import Home from './components/Pages/Home'
import Services from './components/Pages/Services';
import PaymentInstrument from './components/Pages/PaymentInstrument';
import FinancialService from './components/Pages/FinancialService';
import BusinessService from './components/Pages/BusinessService';
import BusinessTools from './components/Pages/BusinessTools';
import Footer from './components/Footer/Footer';
import { Fragment } from 'react';
import ScrollButton from './components/Pages/ScrollButton';

function App() {
  return (
    <div className='Parent-div'>
      <Header />
      <Home />
      <Services />
      <PaymentInstrument />
      <FinancialService />
      <BusinessService />
      <BusinessTools />
      <Footer />

      <Fragment>
        <ScrollButton />
      </Fragment>

      <div className='footer-bottom'>
        <div className='footer1'>
        </div>
        <div className='footer2'>
        </div>
      </div>
    </div>
  )
}

export default App;
