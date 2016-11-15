import { decl } from 'bem';

export default decl({
  block: 'button',
  tag: 'button',
  content({ children }) {
    return children;
  }
});
