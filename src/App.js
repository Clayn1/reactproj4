import React from 'react';
import './App.css';
import Card from "./components/Card/Card";
import Title from "./components/Title/Title";

class App extends React.Component {

    state = {
        data: null,
        visible: null,
        to: null
    };

    clTo() {
        console.log(clearTimeout(this.state.to));
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(result => {
                console.log(result);
                this.setState({data: result})
            })
    }

    setTo = (to) => {
        this.setState({to:to})
    };
    show = (user) => {
        this.clTo();
        let {data} = this.state;
        console.log(data.indexOf(user));
        this.setState({visible: data.indexOf(user)});
    };

    render() {
        const {data, visible, to} = this.state;
        return (
            <div className="App">
                <div style={{width: '50%', height: '1000px', backgroundColor: 'red', float: 'left'}}>
                    {data ? data.map(element => <Title user={element}
                                                       onClick={{
                                                           show: this.show,
                                                           to: this.setTo
                                                       }}/>) : <h1>Loading...</h1>}
                </div>
                <div style={{width: '50%', height: '1000px', backgroundColor: 'green', float: 'left'}}>
                    {visible === null ? <p>No Selected Elements</p> : <Card user={data[visible]}/>}
                </div>
            </div>
        );
    }
}

export default App;
