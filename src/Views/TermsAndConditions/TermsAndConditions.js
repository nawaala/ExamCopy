import './TermsAndConditions.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

const TermsAndConditions = () => {
    return(
        /* For the final product we will list the confirmed Terms and Conditions */
        <div className='TermsAndConditions-page'>
            <Header/>
            <h1>Terms And Conditions</h1>
            <div className='square-container'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborumSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciuntNeque
                porro quisquam.
            </div>       
            <Footer/>
        </div>
        

    )

} 

export default TermsAndConditions