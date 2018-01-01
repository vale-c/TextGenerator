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
      textFormat: 'html',
      text: ''
    };
      this.handleParasNum = this.handleParasNum.bind(this);
      this.changeFormat = this.changeFormat.bind(this);
  }

  componentWillMount(){
    this.getSampleText();
  }

  getSampleText(){
    axios.get('https://baconipsum.com/api/?type=all-meat&paras='+this.state.paras+'&format='+this.state.textFormat)
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
      <h2 className="text-center">🍖🍗The All-Meaty Text Generator🍗🍖</h2>
      <h6 className="subtitle text-center"> A dummy React Web App</h6>
     <div>
        <img src={'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9%0A&s=12a605e13e911abdc6773f018a266369'} alt={"burger"} className="img-responsive"
        style={{
        height: '350',
        width: '500',
        marginLeft: '27%'
      }}
       />
    </div>
       <hr />

        <form className="form-inline">
          <div className="form-group">
            <label> Paragraphs:</label>
            <Paras value={this.state.paras} onChange={this.handleParasNum} />
          </div>
       </form>

        <form className="form-inline">
         <div className="form-group">
           <label> Choose your desired output format: </label>
             <Select value={this.state.textFormat} onChange={this.changeFormat} />
          </div>
        </form>

      <br /><br />

       <Output value={this.state.text} />
       <footer className='text-center' style={{'position': 'static'}}> Made with ❤ &nbsp; by <a
       target="blank" href='https://www.github.com/valecalabrese'>Vale</a></footer>
      </div>
    );
  }
}

export default App;
