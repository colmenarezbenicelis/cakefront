/*Importamos componente React, con las funcionalidades
UseEffect */
import React, { useEffect } from "react";

/*Constante de tipo funcion flecha retornando el html */
const create =()=>{

    const enviar = (e) =>{
        alert("hola desde enviar");
    }

    /*Retornamos el html */
    return (
        <div style={{textAlign:"center"}} className="divLogin">
            <label>Nombre</label><br/>
            <input type="text" name="username" placeholder="primer nombre"/><br/>
            <label>Apellido</label><br/>
            <input type="text" name="username" placeholder="Primer apellido"/><br/>
            <label>Email</label><br/>
            <input type="text" name="username" placeholder="correo@nmb"/><br/>
            <label>Password</label><br/>
            <input type="text" name="username" placeholder="clave"/><br/>
            <button type="submit" name="send" onClick={enviar}>Entrar</button><br/>
            <a href="/">Volver</a>
        </div>);
}


/*Exportamos el componente Login */
export default create;