import React from 'react';
import { declMod } from 'bem';

import Button from 'b:button';

export default declMod(({ picture }) => picture, {
  block: 'card',
  mods({ picture }) {
    return {
      ...this.__base.apply(this, arguments),
      picture: Boolean(picture) 
    };
  }
});
