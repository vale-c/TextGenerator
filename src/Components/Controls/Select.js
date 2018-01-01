import React, {Component} from 'react';

class Select extends Component{
  constructor(props){
    super(props);
    this.state = {
      value: props.value
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
     this.setState({
       value: event.target.value
     }, function() {
       this.props.onChange(this.state.value);
     });
   }

  render(){
    return (
      <div>
       <select className='form-control' onChange={this.handleChange}>
          <option value='text' defaultValue>text</option>
          <option value='html'>html</option>
       </select>
      </div>
    )
  }
}

export default Select;
