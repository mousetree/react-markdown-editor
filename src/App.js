import React, {Component} from 'react';
import Remarkable from 'remarkable';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {value: 'Type some *markdown* here!'};
  }

  handleChange() {
    this.setState({value: this.refs.textarea.value});
  }

  getRawMarkup() {
    var md = new Remarkable();
    return { __html: md.render(this.state.value) };
  }

  render() {
    return (
      <div className="container">
        <div className="panel">
          <textarea
            onChange={this.handleChange}
            ref="textarea"
            defaultValue={this.state.value} />
          </div>
          <div className="panel">
            <div
              className="content"
              dangerouslySetInnerHTML={this.getRawMarkup()}
            />
        </div>         
        
      </div>
    );
  }
}

export default App;