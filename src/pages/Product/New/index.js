import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';
import { Container } from './styles';
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
  <Container>
      <form onSubmit={saveProduct}>
        <label>
          <h3>Nome</h3>
          <input type="text" name="name" id="name" placeholder="Digite o nome do produto" value={product.name} onChange={onChange} />
        </label>
        <label>
         <h3>Descrição</h3>
          <textarea name="description" id="description" placeholder="Digite a descrição do produto..." value={product.description} onChange={onChange} />
        </label>
        <button type="submit">Enviar</button>
      </form>


    </Container>
  );
}
export default withRouter(New);
