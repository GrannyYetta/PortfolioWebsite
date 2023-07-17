import ButtonMailto from "./MailTo"

const Contact = () => {
    return (
       <div>
         <div>
         <h1>Contact</h1>
         </div>
         <div>
         <p>Drop me a line! I'd love to hear from you.</p>
         </div>
         <ButtonMailto label="Write me an E-Mail" mailto="mailto:rebeca.taboada@posteo.net"/>
         </div>
    )   
   }
   
   export default Contact