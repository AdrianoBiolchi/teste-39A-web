import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';
import ScaleLoader from 'react-spinners/ScaleLoader';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import { Container } from './styles';
import api from '../../../services/api'

function New(props) {
  const [product, setProduct] = useState({ name: '', 'description':'' });
  const [loading, setLoading] = useState(false);

  const saveProduct = (e) => {
    setLoading(true);
    e.preventDefault();
    const data = { name: product.name, description: product.description };
    api.post('/products ', data)
      .then((result) => {
        setLoading(false);
        props.history.push('/details/' + result.data.id)
      }).catch((error) => setLoading(false));
  };

  const onChange = (e) => {
    e.persist();
    setProduct({...product, [e.target.name]: e.target.value});
  }

  return (
    <div>
   <Jumbotron>
      <Form onSubmit={saveProduct}>
        <Form.Group>
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" name="name" id="name" placeholder="Enter product name" value={product.name} onChange={onChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Product Description</Form.Label>
          <Form.Control as="textarea" name="description" id="description" rows="3" placeholder="Enter product description" value={product.description} onChange={onChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    </Jumbotron>
  </div>
  );
}
export default withRouter(New);
