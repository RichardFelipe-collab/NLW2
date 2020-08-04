import React from 'react';

import whatsappIcon from'../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem(){
    return(
        <article className="teacher-item">
                <header>
                
                <img src="https://avatars3.githubusercontent.com/u/54228659?s=460&u=b1c1dfca284dadae66ca13d86e52edb0813d0c02&v=4" alt="Richard Felipe"/>
                <div>
                    <strong>Richard Felipe</strong>
                    <span>DevOps</span>
                </div>
                </header>   
                <p>
                    Entusiasta das melhores e mais dificeis linguagens de programação
                    <br/><br/>
                    Apaixonado por explodir computadores, digitando códigos malucos.
                </p>
                <footer>
                    <p>
                        Preço/hora
                        <strong>R$90.00</strong>
                    </p>
                    <button type="button">
                        <img src={whatsappIcon} alt="Whatsapp" />
                        Entrar em contato
                    </button>
                </footer>
                </article>
    )
}

export default TeacherItem;