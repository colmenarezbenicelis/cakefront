/*Importamos componente React, con las funcionalidades
UseEffect */
import React, { useEffect } from "react";


/*Constante de tipo funcion flecha retornando el html */
const Login =()=>{
    /*Retornamos el html */
    return (
        <div style={{textAlign:"center"}} className="divLogin">
            <label>Usuario</label><br/>
            <input type="text" name="username" placeholder="usuario o correo"/><br/>
            <label>Clave</label><br/>
            <input type="text" name="password" placeholder="clave"/><br/>
            <button type="submit" name="send">Entrar</button><br/>
            <a href="/create">Darse de alta</a>
        </div>);
}


/*Exportamos el componente Login */
export default Login;