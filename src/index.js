import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// class Clock extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = { date : new Date(),
//     text : '',
//     local : 'en-US'}
//   }
//   componentDidMount(){
//     setInterval(() => {
//      this.trick()
//     },1000)
//   }
//   handleClick = () =>{
//     this.setState(
//       {
//         text : 'you have clicked button just now and as soon as the clock become bangla',
//         local : 'bn-BD'
//       }
//     )
//   }
//   trick(){
//     this.setState({date : new Date()})
//   };

//   render(){
//     const {date, local} = this.state;
//     let button;
//     if(local === 'bn-BD'){
//       <button onClick={this.handleClick}>click me</button>
//     }

//     return (
//       <div>
//         <h1>The time is now {date.toLocaleTimeString(local)}</h1>

//         <p>{this.state.text}</p>
//       </div>
//     )
//   }
// }


class FormTest extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tittle: 'javaScript',
      text: 'Enter your name',
      city: 'Comilla',
    }
  }
  handleChange = (e) => {
    if (e.target.type === 'text') {
      this.setState({
        tittle: e.target.value,
      })
    } else if (e.target.type === 'textarea') {
      this.setState({
        text: e.target.value,
      })
    } else if (e.target.type === 'select-one') {
      this.setState({
        city: e.target.value,
      })
    } else {
      console.log('ki hoice')
    }
  }

  render() {
    const { tittle, text, city } = this.state;
    const { name } = this.props;
    return (
      <div>
        <form>
          <div>
            <label for='name'> name : </label>
            <input type='text' id='name' value={tittle} onChange={this.handleChange} onBlur={this.blur}></input>
          </div>
          <div>
            <textarea value={text} onChange={this.handleChange}></textarea>
          </div>
          <div>
            <select value={city} onChange={this.handleChange}>
              <option value='Dhaka'>Dhaka</option>
              <option value='Comilla'>Comilla</option>
            </select>
          </div>
          <div>
            <input type='text' value={name}></input>
          </div>
        </form>
      </div>
    )
  }
}




root.render(<FormTest name='Rakib'></FormTest>, root)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
