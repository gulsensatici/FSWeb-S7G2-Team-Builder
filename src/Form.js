import React ,{ useState } from "react";
import "./Form.css";

function Form() {
const [uye, setUye]= useState({
    Name: "",
    Surname:"",
    Age:"",
    Email:"",
    Phone:"",
    Password:"",
});
function handleSubmit(e){
    e.preventDefault();
}
function handleIsimDegistir(event){
    const {value, id}= event.target
    setUye({...uye}, [id], value);
}
function formuTemizle(e){
    setUye({
        Name: "",
        Surname:"",
        Age:"",
        Email:"",
        Phone:"",
        Password:"",

    })
   
    
  
}



 return (
    <header>
    <div className="app">
        <form onSubmit={handleSubmit}>
            <div className="giris">
        <h3>Üyeliğini Başlat</h3>

        </div>
<div className=" input">
        <p>
       <label htmlfor="Name">Name:</label>
<input 
 onChange={handleIsimDegistir}
type="text" 
id="Name" 
placeholder="Yaren"
name="user" />
</p>

<p>
<label htmlfor="Surname">Surname:</label>
<input 
 onChange={handleIsimDegistir}
type="text" 
id="Surname" 
placeholder="Sadak"
name="user" />
</p>

<p>
       <label htmlfor="Age">Age:</label>
<input 
 onChange={handleIsimDegistir}
type="text" 
id="Age" 
placeholder="25"
name="user" />
</p>

<p>
       <label htmlfor="Email">Email:</label>
<input 
 onChange={handleIsimDegistir}
type="text" 
id="Email" 
placeholder="sample@example.com"
name="user" />
</p>

<p>
       <label htmlfor="Phone">Phone:</label>
<input 
 onChange={handleIsimDegistir}
type="text" 
id="Phone" 
placeholder="5xx xxx xxxx"
name="user" />
</p>

<p>
       <label htmlfor="Password">Password:</label>
<input 
 onChange={handleIsimDegistir}
type="text" 
id="Password" 
placeholder="*****"
name="user" />
</p>

<p>
<button classNmae="button1" onClick={formuTemizle} type="button">
                Formu Temizle
              </button>
              
<button type="button">Kaydet</button>
</p>
</div>
</form>

    </div>
    </header>
    ) ;
}

export default Form;