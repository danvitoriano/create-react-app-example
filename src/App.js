import React from 'react';
import { Alert } from './Alert';
import './App.css';
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { name: "danilo" };
    this.updateDiv = this.updateDiv.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateDiv() {
    this.setState({ name: "lurdes" })
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.name);
    event.preventDefault();
  }

  async componentDidMount(){
    await fetch("https://5d04064fd1471e00149bb174.mockapi.io/api/v1/blogs/1")
      .then(response => response.json())
      .then(data => this.setState({name: data.title}))
  }

  render() {
    return (
      <>
        <Alert name={this.state.name} />
        <div className="App-header">{this.state.name}</div>
        <button onClick={this.updateDiv}>update div</button>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name: <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </>
    )
  }

}

export default App;
