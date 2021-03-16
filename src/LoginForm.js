import { Children } from 'react';
import './LoginForm.css';

function LoginForm({children}) {
 return (

         <form className="login__form">
			   {children}		
			</form>
    
  );
}

function LoginField({title,type,placeholder,icon}) {
   return (
      <div className="login__container">
            <label className="login__label">{title}</label>
				<input className="login__input"type={type} placeholder={placeholder}/>
            <img className="login__image" src={`./${icon}.svg`} alt="icon"/>
      </div>
   );
}


LoginForm.field=LoginField;

export default LoginForm;

