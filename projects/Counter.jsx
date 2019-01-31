import React, {Component} from 'react';
import {Button, Input, Modal} from 'antd';
import './Counter.less';

class Counter extends React.PureComponent {
  // count = 0;

  constructor(props) {
    super(props);
     this.count = 0;
     this.state = {
       open: false,
       list: [1,2,3,4,5],
     };
  }

  handleClick = e => {

    const {list} = this.state;

    let num = Math.random() * 1000;
    num = Math.ceil(num);

    console.log(num);
    list.push(num);

    this.setState(prevStatus => {
      return prevStatus.list;
    });
  };

  handleSearch = (value) => {
    console.log(value);
  }

  render() {
    return (
      <div className="Counter">
        <header className="App-header">
          {
            this.state.list.map( (item, idx) => {
              return <div key={`list-item-${idx}`}>{item}</div>;
            })
          }
          <Button onClick={this.handleClick}>카운터</Button>
          <Input.Search
            className={'Search'}
            placeholder="input search text"
            onSearch={this.handleSearch}
            enterButton
          />
        </header>
      </div>
    );
  }
}

export default Counter;
