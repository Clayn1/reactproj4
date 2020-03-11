import React, {Component} from 'react';

class Card extends Component {
    render() {
        const {user} = this.props;
        return (
            <div className="card" style={{width: '18rem',height: '5rem'}}>
                <div style={{width: '100%', backgroundColor: 'blue'}}>{user.username}</div>
                <div>{user.address.city}</div>
            </div>
        );
    }
}

export default Card;