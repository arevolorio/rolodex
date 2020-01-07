import React from 'react';
import { Card } from '../card-component/card-component';

import './card-list.css';

export const CardList = props => {
    return <div className="card-list">
        {
            props.users.map(user => <Card key={user.id} user={user}></Card>)
        }
    </div>
};