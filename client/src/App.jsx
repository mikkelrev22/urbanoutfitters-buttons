import React from 'react';
import axios from 'axios';
import Items from './Items.jsx';


class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
        id: '',
        name: '',
        price: '',
        sizes: [],
        colors: [],
        description: ''
      }
      this.getItem =  this.getItem.bind(this);
    }

    getItem () {
      // let url = parseInt(window.location.pathname.slice(1), 10);
      //axios.get(`/data/${url}`)
      axios.get('/data/10')
      .then((response) => {
        console.log(response.data);
        this.setState({
          data: response.data
          })
      });
    };

    componentDidMount() {
      this.getItem();
    };

    render() {
      return (
        <div>
          <Items data={this.state.data} /> 
        </div>
      )
    }
  }

export default App

