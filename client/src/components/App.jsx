import React from 'react';
import axios from 'axios';
import Items from './Items.jsx';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
        selectedSize: '',
        selectedColor: '',
        selectedQty: 1
      }
      this.getItem =  this.getItem.bind(this);
      this.updateSize = this.updateSize.bind(this);
      this.updateColor = this.updateColor.bind(this);
      this.updateQty = this.updateQty.bind(this);
      this.updateButtons = this.updateButtons.bind(this);
    }

    displayItem() {
      console.log('displays')
    }

    getItem() {
      // let url = parseInt(window.location.pathname.slice(1), 10);
      //axios.get(`/data/${url}`)
      axios.get('/data/3')
      .then((response) => {
        console.log(response.data)
        this.setState({
          data: response.data
          })
      });
    };

    updateButtons() {
      axios.patch('/data/3', {
        selectedSize: this.state.selectedSize,
        selectedColor: this.state.selectedColor,
        selectedQty: this.state.selectedQty
      })
      .then((response) => {
        this.getItem();
      })
    }

    updateSize(event){
      this.setState({
        selectedSize: event.target.value
      })
    }

    updateColor(event){
      this.setState({
        selectedColor: event.target.value
      })
    }

    updateQty(event){
      this.setState({
        selectedQty: event.target.value
      })
    }

    componentDidMount() {
      this.getItem();
    };

    render() {
      return (
        <div>
          <Items display={this.displayItem} addToBag={this.updateButtons} changeQty={this.updateQty} changeColor={this.updateColor} changeSize={this.updateSize} data={this.state.data}/> 
        </div>
      )
    }
  }

export default App

