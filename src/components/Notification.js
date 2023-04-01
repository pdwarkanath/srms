import Alert from 'react-bootstrap/Alert';

const Notification = ({ notification }) => {
    if (notification === null) {
      return null
    }
  
    return (
      <Alert variant="success">
        {notification}
      </Alert>
    )
}

export default Notification