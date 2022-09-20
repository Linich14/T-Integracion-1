function calculateWinner(squares) {
    const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]];
  
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  
  function Square(props) {
    return /*#__PURE__*/(
      React.createElement("button", { className: "square", onClick: () => props.onClick() },
      props.value));
  
  
  }
  
  class Board extends React.Component {
    renderSquare(i) {
      const squares = this.props.squares;
      return /*#__PURE__*/React.createElement(Square, { value: squares[i], onClick: () => this.props.onClick(i) });
    }
    render() {
      return (
        React.createElement("div", null,
        React.createElement("div", { className: "board-row" },
        this.renderSquare(0),
        this.renderSquare(1),
        this.renderSquare(2)),
  
        React.createElement("div", { className: "board-row" },
        this.renderSquare(3),
        this.renderSquare(4),
        this.renderSquare(5)),
  
        React.createElement("div", { className: "board-row" },
        this.renderSquare(6),
        this.renderSquare(7),
        this.renderSquare(8))));
  
    }}
  
  class Game extends React.Component {
    constructor() {
      super();
      this.state = {
        history: [{
          squares: Array(9).fill(null),
          xIsNext: true }],
  
        stepNumber: 0,
        xIsNext: true };
  
    }
  
    handleClick(i) {
      var history = this.state.history.slice(0, this.state.stepNumber + 1);
      var current = history[history.length - 1];
      const squares = current.squares.slice();
  
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
  
      squares[i] = this.state.xIsNext ? 'X' : 'O';
  
      this.setState({
        history: history.concat([{
          squares: squares,
          xIsNext: !this.state.xIsNext }]),
  
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext });
  
    }
  
    jumpTo(step) {
      this.setState({
        stepNumber: step,
        xIsNext: step % 2 ? false : true });
  
    }
  
    render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
  
      const winner = calculateWinner(current.squares);
      let status;
      if (winner) {
        status = 'Winner: ' + winner;
      } else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      }
  
      let moveReset;
      let movesX = [];
      let movesO = [];
  
      history.map((step, move) => {
        let desc;
        if (move === 0) {
          desc = 'Game Reset';
          moveReset = React.createElement("a", { href: "#", onClick: () => this.jumpTo(move) }, desc);
        } else {
          if (step.xIsNext) {
            desc = 'Move #' + step;
            movesO.push(
            React.createElement("li", { key: move },
            React.createElement("a", { href: "#", onClick: () => this.jumpTo(move) }, desc)));
  
  
          } else {
            desc = 'Move #' + step;
            movesX.push(
            React.createElement("li", { key: move }, /*#__PURE__*/
            React.createElement("a", { href: "#", onClick: () => this.jumpTo(move) }, desc)));
  
  
          }
        }
      });
  
      return(
        React.createElement("div", { className: "game-wrap" },
        React.createElement("div", { className: "game-header" },
        React.createElement("div", null, status),
        React.createElement("div", null, moveReset)),
  
        React.createElement("div", { className: "game-body" },
        React.createElement("div", { className: "game-left" },
        React.createElement("div", { className: "title" }, "Player: X"),
        React.createElement("ol", null, movesX)),
  
        React.createElement("div", { className: "game-main" },
        React.createElement(Board, { squares: current.squares, onClick: i => this.handleClick(i) })),
  
        React.createElement("div", { className: "game-right" },
        React.createElement("div", { className: "title" }, "Player: O"),
        React.createElement("ol", null, movesO)))));
  
  
  
  
    }}
  
  ReactDOM.render(React.createElement(Game, null), document.getElementById('app'));