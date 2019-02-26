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
      <Hamburger
        color="black"
        isActive={isOpen}
        onActivate={this.toggleOpen}
        rounding={20}
        size={100}
        thickness={30}
      />
    );
  }
}

export default Navbar;
