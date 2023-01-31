import styles from './styles'
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./Components";
function App() {
  

  return (
    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats />    {/*Services Page*/}
            <Business />   {/*About Me Page*/}
            <h1 className='text-white font-bold p-2'>Future Projects</h1>
            <Billing />    {/*Portfolio Page*/}
            <CardDeal />   {/*Contact*/}
            <Testimonials />  {/*Fotter*/}
            <Clients />       {/*Privacy*/}
            <CTA />           {/*Terms*/}
            <Footer /> 
          </div>
        </div>

    </div>
  )
}

export default App
