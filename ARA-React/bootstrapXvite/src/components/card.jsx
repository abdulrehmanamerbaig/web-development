import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample({name,age = "Age is missing"}) {
    console.log('props', name )
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/18968278/pexels-photo-18968278/free-photo-of-man-with-smartphone-and-bicycle-standing-in-corridor.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" height={'208rem'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          {name} {age}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;