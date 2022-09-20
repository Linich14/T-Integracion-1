import * as React from "https://cdn.skypack.dev/react@^17";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@^17";
import "https://cdn.skypack.dev/emoji-picker-element@^1";

const Picker = () => {
  const ref = React.useRef(null);

  React.useEffect(() => {
    ref.current.addEventListener('emoji-click', event => {
      console.log('Emoji clicked!', event);
    });
    ref.current.skinToneEmoji = '👍';
  }, []);

  return React.createElement('emoji-picker', { ref });
};

ReactDOM.render(React.createElement(Picker, null), document.querySelector('li>div>#root'));