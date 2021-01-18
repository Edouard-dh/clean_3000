import Header from './Header';
import React, { Component } from 'react'
import clients from '../clients'
export default class New_command_detail extends Component {



    render() {
        const ListClients = clients.map((client) => {
            return (

                <div className="New_calling_detail" >
                    <h2>Avis de passage</h2>
                    <div>
                        <p>Nom de l'entreprise ou du client: {client.name}</p>
                        <p>Adresse de l'entreprise ou du client : {client.adress}</p>
                        <p>Notre technicien est intervenu pour l entretien de la vitrerie le :</p>
                        <p>Observations:</p>
                        <p>Merci de votre confiance</p>
                        <div>
                           <div><p>Signature du technicien:</p></div>
                           <div><p>Signature du client/Cachet de l entreprise</p></div>
                        </div>
                    </div>
                    
                </div>

            );
        });
        return (
            <div className="New_command_detail">
                <Header />
                <div>
                    <div className="New_command_detail_body">
                        {ListClients}
                    </div>
                    
                </div>
            </div>
        )
    }
}

