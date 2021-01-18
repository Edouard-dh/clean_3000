import './sass/main.scss';
import Header from './components/Header';
import { Component } from 'react';
import New_calling from './components/New_calling'
import React, { useState } from 'react';
import clients from './clients'
import Formulaire from'./components/Formulaire'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      nom: 'Non ?'
    }
    this.handelChange = this.handelChange.bind(this)
  }

  handelChange(e) {
    this.setState({
      nom: e.target.value,
      checked: e.target.checked
    })
  }


  // addCallingCard(){
  //   const id = "Avis-nb" + Date.now();
  //   this.props.history.push(`/newcalling/${id}`)

  // }



  render() {
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };




    // const TimeRelatedForm = () => {
    //   const onFinish = (fieldsValue: any) => {
    //     // Should format date value before submit.
    //     const values = {
    //       ...fieldsValue,
    //       'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss')
    //     };
    //   };

    return (
      <div className="App">
        <Header />
        <Formulaire/>
      </div>
    );
  }
}

export default App;
