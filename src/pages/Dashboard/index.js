import React, { useState, useEffect } from 'react';
import { MdVisibility, MdModeEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { ProductList, Container, ButtonDetails, ButtonEdit } from './styles';

export default function Dashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      // Pega todos os produtos da api
      const { data } = response.data;
      setProducts(data);
    }

    loadProducts();
  }, []);

  return (
    <Container>
      <ProductList>
        {products.map((product, i) => (
          <li key={product.id}>
            {product.files.map(img => (
              <img src={img.url} alt={img.name} key={img.key} />
            ))}
            <strong>{product.name}</strong>
            <span>{product.description}</span>
            <ButtonDetails to={`/details/${encodeURIComponent(product.id)}`}>
              <div>
                <MdVisibility size={16} color="#FFF" />
              </div>
              <span>Visualizar Item</span>
            </ButtonDetails>

            <ButtonEdit to={`/edit/${encodeURIComponent(product.id)}`}>
              <div>
                <MdModeEdit size={16} color="#FFF" />
              </div>
              <span>Editar Item</span>
            </ButtonEdit>
          </li>
        ))}
      </ProductList>
    </Container>
  );
}
