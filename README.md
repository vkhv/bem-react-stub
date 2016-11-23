# BEM react srub

# Example

Creating a block with element:

blocks/header/header.js

```
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

```
import { decl } from 'bem';
import React from 'react'
import Header from 'b:header'

export default decl({
  block: 'root',
  content() {
       return <Header />  }
});
```
