import React from 'react';

import Hamburger from './Hamburger';

class Navbar extends React.PureComponent {
  state = {
    isOpen: false,
  };

  toggleOpen = () => this.setState(prevState => ({ isOpen: !prevState.isOpen }));

  render() {
    const { isOpen } = this.state;

    return (
      <Hamburger isActive={isOpen} onActivate={this.toggleOpen} />
    );
  }
}

export default Navbar;
