import React , { useState } from 'react';

const Contact = () => {

	const [email , cgemail] = useState('email');
	const [password , cgpass] = useState('password');
	const [meassage , cgmessage]= useState('meassage');

    const submit = (e) =>{
    	console.log('email ' + email);
    	console.log('password ' + password);
    }
    
return(
 	<>
     <div className = "container-fluid">
           <div className = 'form-custom'>
                <form>
                   <label className="text-capitalize label font-weight-bold">email</label>
                   <br/>
                   <input name = "email" type= 'email' placeholder = {email} onChange = { (e) => cgemail(e.target.value)} />
                   <br/>
                   <label className="text-capitalize label font-weight-bold"  >password</label>
                   <br/>
                   <input name = "password" type= 'password' placeholder ={password} onChange = { (e) => cgpass(e.target.value)} />
                   <br/>
                   <label className="text-capitalize label font-weight-bold"  >meassage</label>
                   <br/>
                   <input name = "textarea" className = "textarea" onChange = {(e) => cgmessage(e.target.value)}/>
                   <br/>
                   <button type="button" className="btn btn-primary mt" onClick ={(e) => submit(e.target.value)} >submit</button>
                </form>
           </div>
     </div>
 	</>
 	);

}

export default Contact;