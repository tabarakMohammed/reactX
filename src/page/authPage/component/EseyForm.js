import React from 'react';

import '../../../App.css';

 export default class EssayForm extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: 'Please write an essay about your favorite DOM element.'
  //   };

  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // handleChange(event) {
  //   this.setState({value: event.target.value});
  // }

  // handleSubmit(event) {
  //   alert('An essay was submitted: ' + this.state.value);
  //   event.preventDefault();
  // }

  // render() {
  //   return (
  //     <form onSubmit={this.handleSubmit}>
  //       <label>
  //         Essay:
  //         <textarea value={this.state.value} onChange={this.handleChange} />
  //       </label>
  //       <input type="submit" value="Submit" />
  //     </form>
  //   );
  // }

  // constructor(props) {
  //   super(props);
  //   this.state = {items: ['hello', 'world', 'click', 'me']};
  //   this.handleAdd = this.handleAdd.bind(this);
  // }

  // handleAdd() {
  //   const newItems = this.state.items.concat([
  //     prompt('Enter some text')
  //   ]);
  //   this.setState({items: newItems});
  // }

  // handleRemove(i) {
  //   let newItems = this.state.items.slice();
  //   newItems.splice(i, 1);
  //   this.setState({items: newItems});
  // }


  // render() {
  //   const items = this.state.items.map((item, i) => (
  //     <div key={i} onClick={() => this.handleRemove(i)}>
  //       {item}
  //     </div>
  //   ));

  //   return (
  //     <div>
  //       <button onClick={this.handleAdd}>Add Item</button>
  //       <ReactCSSTransitionGroup
  //         transitionName="example"
  //         transitionEnterTimeout={500}
  //         transitionLeaveTimeout={300}>
  //         {items}
  //       </ReactCSSTransitionGroup>
  //     </div>
  //   );
  // }
}