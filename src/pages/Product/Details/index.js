import React, { useState, useEffect } from 'react';
import api from '../../../services/api';

import { Container } from './styles';

export default function Details({ match }) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const id = decodeURIComponent(match.params.id);
    async function loadProduct() {
      const response = await api.get(`/products/${id}`);

      // Pega dados do produto específico
      const { data } = response;

      setProduct(data);
    }

    loadProduct();
  }, []);

  return (
    <Container>
      <h1> ID Produto: {product.id}</h1>
      <h2>Nome: {product.name}</h2>
      <span>Descrição: {product.description} </span>
      {console.log(product.categories)}
    </Container>
  );
}
