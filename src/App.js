import React, { Component } from 'react';
import './App.css';
import Output from './Components/Output';
import Select from './Components/Controls/Select';
import Paras from './Components/Controls/Paras';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      paras: 3,
      textFormat: 'text',
      text: ''
    };
      this.handleParasNum = this.handleParasNum.bind(this);
      this.changeFormat = this.changeFormat.bind(this);
  }

  componentWillMount(){
    this.getSampleText();
  }

  getSampleText(){
    axios.get('https://baconipsum.com/api/?type=meat-and-filler&paras='+this.state.paras+'&format='+this.state.textFormat)
      .then((response) => {
        this.setState({text: response.data}, function(){
          console.log(this.state);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  changeFormat(format) {
    this.setState({
    textFormat: format
     }, this.getSampleText);
  }

  handleParasNum(number) {
     this.setState({
       paras: number
     }, this.getSampleText);
   }

  render() {
    return (
    <div className="App container">
      <h4 className="text-center"><span className="titleBreak">🍗&nbsp;The All-Meaty</span> Text Generator&nbsp;🍖</h4>
      <h5 className="subtitle text-center">A dummy React Web Application</h5>
     <div>
      <img src={'https://images.unsplash.com/photo-1487758608033-7780b34680ac?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=494833974c76f0d96ea91ca87f0c95c7'} alt={"bacon"} 
           className="img-responsive" 
           style={{
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    height: '70%',
                    width: '90%',
                    borderRadius: '15px'
          }}
       />
    </div>
       <hr />

        <form className="form-inline">
          <div className="form-group">
            <label>How many paragraphs ?</label>
            <span className="parasFormatSelector"><Paras value={this.state.paras} onChange={this.handleParasNum} /></span>
          </div>
       </form>

        <form className="form-inline">
         <div className="form-group">
           <label>Which text format?</label>
             <span className="textFormatSelector"><Select value={this.state.textFormat} onChange={this.changeFormat} /></span>
          </div>
        </form>

      <br /><br />

       <Output value={this.state.text} />
       <footer className='text-center'
       style={{
           'position': 'static'
         }}
        > Made with 🥓 & &nbsp;💓 by <a target="blank" href='https://www.github.com/vale-c'>Vale</a></footer>
      </div>
    );
  }
}

export default App;
