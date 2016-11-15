import { decl } from 'bem';

export default decl({
  block: 'card',
  tag: 'section',
  attrs(props) {
    return { id: props.id, tabIndex: 0 };
  },
  content() {
    return 'it card';
  }
});
