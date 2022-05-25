import FormEmail from "./form";
import Gegevens from "./gegevens";


const Contact = () => {
  return(
    <div className="contact-container">
      <h3 className="text-center mb-3">Contact</h3>
      <div className="row row-cols-sm-2">
      
        <Gegevens/>
        <FormEmail/>
      </div>
    </div>
  
  )
}


export default Contact;