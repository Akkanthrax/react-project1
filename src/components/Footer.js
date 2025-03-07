import React from "react";
const AnoAtual=new Date().getFullYear();
export default function Footer(){
    return(
        <footer>
            <p>Termos de uso | Politicas de privacidades</p>
            <hr />
            <p> &copy; {AnoAtual} Minha aplicação reacty. Todos direitos reservados</p>
            <p>Marca registrada &reg;</p>
        </footer>
    )
}
