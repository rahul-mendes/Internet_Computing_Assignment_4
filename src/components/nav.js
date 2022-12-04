import React, { Component } from 'react';
import Homelink from './homelink'
import Newss from './newss';

class Nav extends Component {
  render() {
    return (
        <div className="Navbar">
        <Homelink />
         <meta http-equiv="refresh" content="60"/>
           
            <Newss newss={this.state.newss} />
        </div>
        
    )
};

state = {
    newss: []
};

componentDidMount() {
    fetch("http://api.mediastack.com/v1/news?access_key=ecac253fc97c0130bef95f1de86397f5&languages=en&limit=3")
        .then(res => res.json())
        .then((res) => {
            this.setState({ newss: res.data })
        })
        .catch(console.log)
}

}
export default Nav;
