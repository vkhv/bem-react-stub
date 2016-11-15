import React from 'react';
import { declMod } from 'bem';

import Button from 'b:button';

export default declMod(({ withControl }) => withControl === 'button', {
  block: 'card',
  mods({ withControl }) {
    return { 
      ...this.__base.apply(this, arguments),
      withControl
    };
  },
  content(props) {
    const mainContent = this.__base.apply(this, arguments);

    return [
      mainContent,
      <Button>{props.buttonText}</Button>
    ];
  }
});
