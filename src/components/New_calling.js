import React, { Component } from 'react'
import { Card } from 'antd';
import { Link } from 'react-router-dom';

export default class New_calling extends Component {
    render() {
        return (
            <div className="site-card-border-less-wrapper " id="New_calling" >
                {/* this.props.addCallingCard */}
            <Card cover={<i class="fab fa-accessible-icon"></i>} bordered={false} style={{ width: 300 }}>
            <hr/>
                <h2>Nouvelle Avis de Passage </h2>
                <p>Créer et enregister un nouvelle avis de passage</p>
            </Card>
        </div>
        )
    }
}