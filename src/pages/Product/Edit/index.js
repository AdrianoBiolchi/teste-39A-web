import React, { useState, useEffect } from 'react';
import api from '../../../services/api';
import { withRouter } from 'react-router-dom';
import { Container } from './styles';

function Update(props){
  const [product, setProduct] = useState({ name: '', 'description':'' });
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
    const fetchData = async () => {
      const result = await api.get(`products/${props.match.params.id}`);
      setProduct(result.data);
      console.log(result.data);
      setLoading(false);
    };

    const fecthCategory = async () => {
      const result = await api.get('categories');
      setCategory(result.data);
      console.log(result.data);
    }

    fetchData();
    fecthCategory();
  }, []);

  const updateProduct = (e) => {
    setLoading(true);
    e.preventDefault();
    const data = { name: product.name, description: product.description };
    console.log(data)
    //api.put('products', data)
    //.then((result) => {
      //  setLoading(false);
        //props.history.push('/details/' + result.data._id)
      //}).catch((error) => setLoading(false));
      console.log(data)
  };
  const onChange = (e) => {
    e.persist();
    setProduct({...product, [e.target.name]: e.target.value});
  }

  return (
    <Container>
     <form onSubmit={updateProduct}>
     <label>
          <h3>Nome</h3>
          <input type="text" name="name" id="name" placeholder="Digite o nome do produto" value={product.name} onChange={onChange} />
        </label>
        <label>
         <h3>Descrição</h3>
          <textarea name="description" id="description" placeholder="Digite a descrição do produto..." value={product.description} onChange={onChange} />
        </label>
        <label>
        <input
             name="category"
             type="checkbox"
             value={product.categories ? product.categories.map(c =>
              c.id
              ) : null}
            onChange={onChange} />
            <span>{product.categories ? product.categories.map(c =>
              c.title
              ) : null}</span>

        </label>
        <label>
        <h3>Categoria</h3>
        <select>
          {product.categories ? product.categories.map(c =>(
             <option value={c.id} key={c.id}>{c.title}</option>
          )) : null}
          </select>

          </label>
        </form>
    </Container>
  );

}

export default withRouter(Update)
