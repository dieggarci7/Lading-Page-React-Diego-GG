import React from "react";
import Card from "./Card";

const CardProps = () =>{
    let Props = [
            {title:"Ronaldo Nazario", text:"Some quick example text to build on the card title and make up the bulk of the card's content.", image:"https://st.depositphotos.com/1837549/1696/i/450/depositphotos_16968823-stock-photo-brazilian-player-ronaldo.jpg"},
            {title:"Zinedine Zidane", text:"Some quick example text to build on the card title and make up the bulk of the card's content.", image:"https://cdn.artphotolimited.com/images/59888232b0ba742a2efde168/1000x1000/zinedine-zidane-france-ukraine.jpg"},
            {title:"Raúl González", text:"Some quick example text to build on the card title and make up the bulk of the card's content.", image:"https://www.ceroacero.es/img/jogadores/30/671930_ori__20200508164059_raul_gonzalez.png"},
            {title:"Luis Figo", text:"Some quick example text to build on the card title and make up the bulk of the card's content.", image:"https://fundacaoluisfigo.pt/wp-content/uploads/2021/09/Luis-Figo-Portugal-01.jpg"}
    ];

    return (
        <div className="row mt-4 mb-4 me-5 ms-5 d-flex justify-content-between">
            {
                Props.map((item,index)=>(
                    <Card key={index} title={item.title} image={item.image} text={item.text}/>
                ))
            }
        </div>
    )
}
export default CardProps