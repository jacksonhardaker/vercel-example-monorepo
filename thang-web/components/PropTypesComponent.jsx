import PropTypes from 'prop-types';

export const PropTypesComponent = ({ myString, myInt, myComplexObj, children }) => {

  const renderComplexObject = () => {
    return (
      <div>
        <p>myComplexObj</p>
        <hr />
        <p>myComplexObj.date: {myComplexObj.date.toString()}</p>
        <p>myComplexObj.random: {myComplexObj.random}</p>
      </div>
    )
  }

  return (
    <>
      <p>myString: {myString}</p>
      <p>myInt: {myInt}</p>
      {renderComplexObject()}
      {children && <div>{children}</div>}
    </>
  )
}

PropTypesComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.func,
    PropTypes.arrayOf(PropTypes.element)
  ]),
  myString: PropTypes.string.isRequired,
  myInt: PropTypes.number.isRequired,
  myComplexObj: PropTypes.shape({
    date: PropTypes.instanceOf(Date).isRequired,
    random: PropTypes.number.isRequired,
  }),
}
