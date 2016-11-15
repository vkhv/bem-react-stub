import React from 'react';
import { decl } from 'bem';

import Card from 'b:card m:withControl=button m:picture';

export default decl({
  block: 'root',
  content() {
    return [
      <Card withControl='button' buttonText='Новый текст кнопки' id='2' />,
      <Card withControl='button' picture='http://ya.ru' buttonText='Новый текст кнопки' id='2' />
    ];
  }
});
