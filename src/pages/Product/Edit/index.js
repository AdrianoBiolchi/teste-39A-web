import React, { useState, useEffect } from 'react';

import api from '../../../services/api';
import { withRouter } from 'react-router-dom';
import { Container } from './styles';

function Update(props) {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    categories: [],
    subcategories: [],
    files: [],
  });
  const [subcategory, setSubCategory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get(`products/${props.match.params.id}`);
      setProduct(result.data);
    };
    fetchData();

    /**Subcategorias */
    const fecthSubCategory = async () => {
      const result = await api.get('subcategories');
      const { data } = result.data;
      setSubCategory(data);
    };
    fecthSubCategory();
  }, []);

  const updateProduct = e => {
    e.preventDefault();

    const data = {
      name: product.name,
      description: product.description,
      subcategories: [parseInt(product.subcategories)],
      categories: [1],
      attributes: [1],
      features: [1],
      applications: [1],
      files: product.image,
    };

    const formData = new FormData();
    formData.append('image', product.image);
    console.log(data.files);
    console.log(product.image);
    // const config = {
    //   headers: {
    //     'content-type': 'multipart/form-data',
    //   },
    // };

    // api
    //   .post(
    //     `/products/${props.match.params.id}/files`,
    //     {
    //       data: { image: product.image },
    //     },
    //     config
    //   )
    //   .then(result => {
    //     alert('The file is successfully uploaded');
    //     props.history.push('/details/' + result.data.id);
    //   })
    //   .catch(error => error);

    // api
    //   .put(`products/${props.match.params.id}`, data)
    //   .then(result => {
    //     props.history.push('/details/' + result.data.id);
    //   })
    //   .catch(error => error);
    // console.log(data);
  };

  const onChange = e => {
    e.persist();
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container>
      <form onSubmit={updateProduct} encType="multipart/form-data">
        <label>
          <h3> Nome </h3>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Digite o nome do produto"
            value={product.name}
            onChange={onChange}
          />
        </label>
        <label>
          <h3> Descrição </h3>
          <textarea
            name="description"
            id="description"
            placeholder="Digite a descrição do produto..."
            value={product.description}
            onChange={onChange}
          />
        </label>
        <label>
          <h3> Propriedades </h3>

          <div className="checkbox">
            {subcategory.map((sb, index) => {
              return (
                <label key={index}>
                  <input
                    type="checkbox"
                    value={sb.id}
                    key={index}
                    onChange={onChange}
                    name="subcategories"
                    id="subcategories"
                  />
                  {sb.title}
                </label>
              );
            })}
          </div>

          {/* <select onChange={onChange} name="subcategories" id="subcategories">
            <option> Selecione uma propriedade </option>
            {subcategory.map((sb, index) => {
              return (
                <option value={sb.id} key={index}>
                  {sb.title}
                </option>
              );
            })}
          </select> */}
        </label>
        <label>
          <input type="file" id="image" name="image" onChange={onChange} />
        </label>

        <button type="submit"> Enviar </button>
      </form>
    </Container>
  );
}

export default withRouter(Update);
