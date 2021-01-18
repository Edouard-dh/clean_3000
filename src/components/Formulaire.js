import React, { Component } from 'react'
import { Form, Input, DatePicker, TimePicker, Cascader, Button } from 'antd';
import FormItem from 'antd/lib/form/FormItem';

export default class Formulaire extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nom: ''
        }
        this.handelChange = this.handelChange.bind(this)
    }

    handelChange(e) {
        this.setState({
            nom: e.target.value,
            checked: e.target.checked
        })
    }
    render() {
        return (
            <div className="App-body">
                {/* <New_calling /> */}
                {/* addCallingCard={() => this.addCallingCard()} */}
                <Form>
                    <h2>Avis de passage</h2>
                    <div>
                        <label htmlFor="deja_client">Le client à déjà fait appel à nous ? Si oui cochez la case</label>
                        <input type="checkbox" name="drone" checked={this.state.checked} onChange={this.handelChange} />
                        {this.state.checked ? <FormItem htmlFor="nom"
                            label="Nom entreprise/ou client dans la base de donnée :">
                            <select value={this.state.nom} onChange={this.handelChange}>
                                <option value="defaut">trouver votre adresse</option>

                                <option value="Jardin d'Ariana 10 rue de la lavande 94270 Le Kremlin-Bicetre">Jardin d'Ariana</option>

                                <option value="Jérôme Livran 25 rue de l'église saint louis 59000 Lille">Jérôme Livran</option>

                                <option value="Philippe Praguey 9 rue de Berlfort 33160 Saint Médaert en Jalles">Philippe Praguey</option>

                                <option value="2 rue des pommiers 59112 Carvin">Archimed</option>

                                <option value="BeCom 29 rue Jean I 75000 Paris">BeCom</option>

                                <option value="Joris Poussse-Mousse 17 rue de la Poupounerie 59240 Dunkerque">Joris Poussse-Mousse</option>

                            </select>
                        </FormItem> : null}
                        {this.state.nom}

                    </div>
                    <label htmlFor="coucou">Non?</label>
                    {/* <input type="radio" name="drone" checked={this.state.checked} onChange={this.handelChange}  checked /> */}
                    {/* {this.state.checked ? */}
                    <FormItem label="Nom et  Adresse de entreprise/ou du client :">
                        {/* {this.state.checked == !true <Input /> :null} */}
                        <Input className="NandA_Input" />
                    </FormItem>
                    {/* <Form.Item name="date-time-picker" label="Notre technicien est intervenu pour l’entretien de la vitrerie le"  >
                {/* {...config} */}
                    {/* <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
                </Form.Item> */}
                    <div>

                        <div><label >Notre technicien est intervenu pour l’entretien de la vitrerie le:</label>
                        </div>
                        <div className="date">
                            <input type="date" name="" id="" />
                        </div>
                    </div>

                    <Form.Item name={['user', 'introduction']} label="Observations">
                        <Input.TextArea className="div-Obesrvations" />
                    </Form.Item>
                    {/* : null} */}
                    <div><p>Merci de votre confiance</p></div>
                    <div className="div-signature">
                        <div><p>Signature du technicien:</p></div>
                        <div><p>Signature du client/Cachet de l entreprise:</p></div>
                    </div>
                    <Button>Imprimer</Button>
                </Form>


            </div>
        )
    }
}
