import PropTypes from 'prop-types'
import Button from './Button'


const Header = ( { title, onAdd, showAdd}) => {


  // const onDelete = () => {
  //   console.log('Delete')
  //  }

  return (
    <header className='header'>
        {/* <h1 style={ headingStyle }> {title}</h1> */}
          <h1> {title}</h1>
      <Button color={!showAdd ? 'green' : 'red'} text={!showAdd ? 'Add new task' : 'Hide'} onClick={onAdd} />
      {/* <Button color='green' text='Add new task' onClick={onDelete} /> */}
    </header>
  )
}


// required to use prop title 
Header.propTypes = {
    title: PropTypes.string.isRequired,
}


// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header