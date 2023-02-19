import PropTypes from 'prop-types'
import Button from './Button'


const Header = ( { title }) => {

  const onClick = () => {
   console.log('Click')
  }

  // const onDelete = () => {
  //   console.log('Delete')
  //  }

  return (
    <header className='header'>
        {/* <h1 style={ headingStyle }> {title}</h1> */}
          <h1> {title}</h1>
      <Button color='green' text='Add new task' onClick={onClick} />
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