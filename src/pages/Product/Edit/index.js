import React, { useState, useEffect } from 'react';

import api from '../../../services/api';
import { withRouter } from 'react-router-dom';
import { Container } from './styles';
import Axios from 'axios';

function Update(props) {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    categories: [],
    subcategories: [],
    attributes: [],
    features: [],
    applications: [],
    files: [],
  });

  const [image, setImage] = useState();
  const [subcategory, setSubCategory] = useState([]);
  const [category, setCategory] = useState([]);
  const [attributes, setAttributes] = useState([]);
  const [features, setFeatures] = useState([]);
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get(`products/${props.match.params.id}`);
      setProduct(result.data);
    };
    fetchData();

    const getAll = async () => {
      Axios.all([
        api.get('subcategories'),
        api.get('categories'),
        // api.get('attributes'),
        // api.get('features'),
        // api.get('applications'),
      ]).then(
        Axios.spread(function(
          subcategories,
          categories,
          attributes,
          features,
          applications
        ) {
          setSubCategory(subcategories.data.data);
          setCategory(categories.data.data);
          // setAttributes(attributes.data.data);
          // setFeatures(features.data.data);
          // setApplications(applications.data.data);
        })
      );
    };
    getAll();
  }, []);

  const updateProduct = e => {
    e.preventDefault();

    const data = {
      name: product.name,
      description: product.description,
      subcategories: [parseInt(product.subcategories)],
      categories: [parseInt(product.categories)],
      attributes: [parseInt(product.attributes)],
      features: [parseInt(product.features)],
      applications: [parseInt(product.applications)],
      files: product.image,
      image: image,
    };

    api
      .put(`products/${props.match.params.id}`, data)
      .then(result => {
        props.history.push('/details/' + result.data.id);
      })
      .catch(error => error);

    const formData = new FormData();
    formData.append('image', data.image);
    api
      .post(`/products/${props.match.params.id}/files`, formData, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      })
      .then(result => {
        console.log(result);
      })
      .catch(error => error);
  };

  const onChange = e => {
    e.persist();
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };
  const onChangeFile = e => {
    setImage(e.target.files[0]);
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
        </label>

        <label>
          <h3> Categoria </h3>
          <select onChange={onChange} name="categories" id="categories">
            <option> Selecione uma Categoria </option>
            {category.map((c, index) => {
              return (
                <option value={c.id} key={index}>
                  {c.title}
                </option>
              );
            })}
          </select>
        </label>
        <label>
          <h3> Atributos </h3>
          <select onChange={onChange} name="attributes" id="attributes">
            <option> Selecione atributo </option>
            {product.attributes.map((at, index) => {
              return (
                <option value={at.id} key={index}>
                  {at.title}
                </option>
              );
            })}
          </select>
        </label>
        <label>
          <h3> Aplicação </h3>

          <select onChange={onChange} name="applications" id="applications">
            <option> Selecione uma aplicação </option>
            {product.applications.map((ap, index) => {
              return (
                <option value={ap.id} key={index}>
                  {ap.description}
                </option>
              );
            })}
          </select>
        </label>
        <label>
          <h3> Benefícios </h3>
          <select onChange={onChange} name="features" id="features">
            <option> Selecione uma aplicação </option>
            {product.features.map((f, index) => {
              return (
                <option value={f.id} key={index}>
                  {f.description}
                </option>
              );
            })}
          </select>
        </label>

        <label>
          <input type="file" id="image" name="image" onChange={onChangeFile} />
        </label>

        <button type="submit">Enviar</button>
      </form>
    </Container>
  );
}

export default withRouter(Update);
