const React = require('react');

const CountdownForm = React.createClass({
  onSubmit (e) {
    e.preventDefault();
    let strSeconds = this.refs.seconds.value;

    if (strSeconds.match(/^[0-9]*$/)) {
      this.refs.seconds.value = '';
      this.props.onSetCountdown(parseInt(strSeconds, 10));
    }
  },
  render () {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
          <input type="number" min="1" ref="seconds" placeholder="Enter time in seconds" required/>
          <button className="button expanded">Start</button>
        </form>
      </div>
    );
  }
});

module.exports = CountdownForm;
