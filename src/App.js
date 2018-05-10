import React, { Component } from 'react';
import { NavPane, NavPaneItem, Text,Button ,TextInput} from 'react-desktop/windows';

export default class extends Component {
  static defaultProps = {
    color: '#cc7f29',
    theme: 'light'
  };

  constructor() {
    super();
    this.state = {
      selected: 'Civil Case'
    }
  }

  render() {
    return (
      <NavPane openLength={200} push color={this.props.color} theme={this.props.theme}>
        {this.renderItem('Civil Case', 
        <div>
          

          <TextInput
        ref="input"
      name="text"
        label="Suit Number"
        placeholder="Enter Suit Number Here"
      />

       <TextInput
        ref="input"
        label="Suit Number"
        placeholder="Enter Suit Number Here"
      />
        <Button push color={this.props.color} onClick={() => 
          console.log('Clicked!')}>
        Synchronize
      </Button>
      </div>
    )}
        {this.renderItem('Criminal Cases', 'CCriminal Cases Items')}
      </NavPane>
    );
  }

  renderItem(title, content) {
    return (
      <NavPaneItem
        title={title}
        icon={this.renderIcon(title)}
        theme="light"
        background="#ffffff"
        selected={this.state.selected === title}
        onSelect={() => this.setState({ selected: title })}
        padding="10px 20px"
        push
      >
        <Text>{content}</Text>
      </NavPaneItem>
    );
  }

  renderIcon(name) {
    const fill = this.props.theme === 'dark' ? '#ffffff' : '#000000';
    switch(name) {
    case 'Civil Case':
      return (
       ""
        );
    case 'Item 2':
      return (
       ""
      );
   
    }
  }
}