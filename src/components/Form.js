import React , {useState, useEffect}from 'react'
import emailjs from 'emailjs-com';


const Form = () => {
    const [feedback, setFeedback] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');


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
     }


    const handleSubmit = (e) => {
        console.log("handleSubmit");
        const templateId = 'template_m581rkq';

        const sendFeedback = (templateId, templateParams) => {
            const serviceId = 'service_ybmoq6e';
    
            emailjs.send(serviceId, templateId, templateParams)
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
        
     }


    return (
        <>
            <form>
                <div>it works</div>
                <div>
                    <textarea
                        id="name-input"
                        name="name-input"
                        onChange={handleChangeName}
                        placeholder="your name, please"
                        required
                        value={name}
                        style={{width: '100%', height: '50px'}}
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
                        style={{width: '100%', height: '50px'}}
                    />
                </div>
                
                <div>
                    <textarea
                        id="test-mailing"
                        name="test-mailing"
                        onChange={handleChange}
                        placeholder="contact me via mail 😄"
                        required
                        value={feedback}
                        style={{width: '100%', height: '50px'}}
                    />
                </div>
                <input type="button" value="Submit" className="btn btn--submit" onClick={handleSubmit} />
            </form>
        </>
    )
}

export default Form;