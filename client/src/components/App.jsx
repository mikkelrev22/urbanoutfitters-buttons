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
        selectedQty: 1,
        isEmptyState : true
      }
      this.getItem =  this.getItem.bind(this);
      this.updateSize = this.updateSize.bind(this);
      this.updateColor = this.updateColor.bind(this);
      this.updateQty = this.updateQty.bind(this);
      this.updateButtons = this.updateButtons.bind(this);
      this.toggleBox = this.toggleBox.bind(this);
    }

    displayItem() {
      console.log('displays')
    }

    getItem() {
      // let url = parseInt(window.location.pathname.slice(1), 10);
      //axios.get(`/data/${url}`)
      axios.get('/data/4')
      .then((response) => {
        // console.log(response.data)
        this.setState({
          data: response.data
          })
      });
    };

    updateButtons() {
      axios.patch('/data/4', {
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

    toggleBox() {
      this.setState({
        isEmptyState: false,
        addNormalView: true
      })
      // this.setState(prevState => ({ isBoxVisible: !prevState.isBoxVisible }));
    };

    componentDidMount() {
      this.getItem();
    };

    render() {
      // const { isBoxVisible } = this.state;
      return (
        <div>
          {/* <Items changeVisibility={this.toggleBox} display={this.displayItem} addToBag={this.updateButtons} changeQty={this.updateQty} changeColor={this.updateColor} changeSize={this.updateSize} data={this.state.data}/>  */}
          
          {/* <div className={`box ${isBoxVisible ? "" : "hidden"}`}>
            <p>I'm the box</p>
          </div> */}
          
          {this.state.isEmptyState && <Items changeVisibility={this.toggleBox} display={this.displayItem} addToBag={this.updateButtons} changeQty={this.updateQty} changeColor={this.updateColor} changeSize={this.updateSize} data={this.state.data}/> }
          {this.state.addNormalView && <AddToBag/>}

        </div>
      )
    }
  }

export default App

