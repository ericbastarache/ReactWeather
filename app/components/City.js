var React = require('react');
var PropTypes = React.PropTypes;

function Button (props) {
  return (
    <button type='button'
      style={{margin: 10}}
      className='btn btn-sucess'
      onClick={props.onSubmitCity}>
      {props.children}
    </button>
  )
}

function InputField (props) {
  return (
    <input type='text'
      className='form-control'
      onChange={props.onUpdateCity}
      placeholder='Toronto, Ontario'
      value={props.city} />
  )
}

function getStyles (props) {
  return {
    display: 'flex',
    flexDirection: props.direction || 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 300,
    alignSelf: 'right'
  }
}

function City (props) {
  return (
    <div style={getStyles(props)}>
      <InputField
        onUpdateCity={props.onUpdateCity}
        city={props.city} />
      <Button
        onSubmitCIty={props.onSubmitCity}>
        Get Weather
      </Button>
    </div>
  )
}

City.propTypes = {
  direction: PropTypes.string,
  onSubmitCity: PropTypes.func.isRequired,
  onUpdateCity: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired
}

module.exports = City;
