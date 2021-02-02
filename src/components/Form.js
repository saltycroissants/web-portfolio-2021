import React , {useState}from 'react'
import emailjs from 'emailjs-com';
import styles from './css/Form.module.css'


const Form = () => {
    const [feedback, setFeedback] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    //const [isSubmit, setSubmit] =useState(false);


    const handleChange = (e) => {
       console.log("handlechange");
       //console.log(feedback);
       setFeedback(e.target.value);
    }

    const handleChangeName = (e) => {
        console.log("handlename");
        //console.log(feedback);
        setName(e.target.value);
    }
    
    const handleChangeEmail = (e) => {
        console.log("handleemail");
        //console.log(feedback);
        setEmail(e.target.value);
        handleValidation();

        
     }

    const handleValidation = () => {
        console.log('validation for email needed');
    }


    const handleSubmit = (e) => {
        console.log("handleSubmit");
        const templateId = 'template_m581rkq';

        const sendFeedback = (templateId, templateParams) => {
            const serviceId = 'service_ybmoq6e';
            const USER_ID = 'user_X1bf8J0b9UvFlwEKWfWyG'
    
            emailjs.send(serviceId, templateId, templateParams, USER_ID)
            .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            }, function(err) {
            console.log('FAILED...', err);
            });
          }
        
        const submitParams = {
            message: feedback,
            from_name: name,
            reply_to: email,
            to_name : 'eunji'
        } 
        sendFeedback(templateId, submitParams);
        alert("email submitted!");
        window.location= '/';
      
     }


    return (
        <>
            <form className = {styles.container}>
                <div className ={styles.title}>SEND ME AN EMAIL</div>
                <div>
                    <textarea
                        id="name-input"
                        name="name-input"
                        onChange={handleChangeName}
                        placeholder="your name, please"
                        required
                        value={name}
                        style={{width: '100%', height: '30px'}}
                    />
                </div>

                <div>
                    <textarea
                        id="email-input"
                        name="email-input"
                        onChange={handleChangeEmail}
                        placeholder="your email, please"
                        required
                        value={email}
                        style={{width: '100%', height: '30px'}}
                    />
                </div>
                
                <div>
                    <textarea
                        id="test-mailing"
                        name="test-mailing"
                        onChange={handleChange}
                        placeholder="write here😄"
                        required
                        value={feedback}
                        style={{width: '100%', height: '200px'}}
                    />
                </div>
                <input type="button" value="Submit" className="btn btn--submit" onClick={handleSubmit} />
            </form>
        </>
    )
}

export default Form;