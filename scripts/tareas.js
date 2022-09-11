'use strict'; 
const e = React.createElement; 
class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      return e(
        "div",
        null,
        React.createElement(
          "h3",
          null,
          "Tareas pendientes"
        ),
        e(TodoList, { items: this.state.items }),
        e(
          "form",
          { onSubmit: this.handleSubmit },
          e(
            "label",
            { htmlFor: "new-todo" },
            "\xBFQu\xE9 se necesita hacer?"
          ),
          e("input", {
            id: "new-todo",
            onChange: this.handleChange,
            value: this.state.text
          }),
          e(
            "button",
            null,
            "A\xF1adir #",
            this.state.items.length + 1
          )
        )
      );
    }
  
    handleChange(e) {
      this.setState({ text: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (this.state.text.length === 0) {
        return;
      }
      const newItem = {
        text: this.state.text,
        id: Date.now()
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
      }));
    }
  }
  
  class TodoList extends React.Component {
    render() {
      return e(
        "ul",
        null,
        this.props.items.map(item => e(
          "li",
          { key: item.id },
          item.text
        ))
      );
    }
  }
const domContainer = document.querySelector('#tareas');  
ReactDOM.render(e(TodoApp), domContainer);
