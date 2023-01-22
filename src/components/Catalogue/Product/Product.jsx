import { Button, Card } from 'react-bootstrap'

//para mostrar productos se usa componente card de bootstrap
const Product = ( props ) => {
  const { product } = props
  return (
    <Card style={ { width: '18rem' } } key={ product._id }>
      <Card.Img variant="top" src={ product.imagen } />
      <Card.Body>
        <Card.Title>{ product.marca }</Card.Title>
        <Card.Text>
          <p>{ product.modelo }</p>
          <p>{ product.name }</p>
          <p>{ product.precio } USD</p>
        </Card.Text>
        <Button variant="primary">Agregar al carrito</Button>
      </Card.Body>
    </Card> )
}
export default Product