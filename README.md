# BEM react stub

Stub to start a new BEM project with react.

Project-stub is a template project repository used for BEM projects creation. It contains the minimal configuration files and folders you will need for quick start from scratch.

There is main library are linked here by default:

* [bem-react-core](https://github.com/bem/bem-react-core)

# Example

Creating a block with element:

blocks/header/header.js

```js
import { decl } from 'bem';

export default decl({
	block: 'header',
	elem: 'title',
	content() {
		return 'header';
	}
});
```

Using the block from root component:
blocks/root/root.js

```js
import { decl } from 'bem';
import React from 'react'
import Header from 'b:header'

export default decl({
  block: 'root',
  content() {
       return <Header />  }
});
```
