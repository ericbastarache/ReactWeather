var React = require('react');

var Header = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Hello World</h1>
        {this.props.children}
      </div>

    )
  }
})

module.exports = Header;
