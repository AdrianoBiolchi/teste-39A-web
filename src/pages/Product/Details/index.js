import React, { useState, useEffect } from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { css } from '@emotion/core';
import api from '../../../services/api';
import { Container, BoxImg, BoxInfo } from './styles';


import NoImage from '../../../assets/no-image.png';

export default function Details({ match }) {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const id = decodeURIComponent(match.params.id);
    async function loadProduct() {
      const response = await api.get(`/products/${id}`);

      // Pega dados do produto específico
      const { data } = response;
      setProduct(data);
      setLoading(false);
    }

    loadProduct();
  }, []);
  console.log(product.files);
  return (

    <Container>
   {loading ? (
        <ScaleLoader

          sizeUnit="px"
          height={20}
          width={4}
          radius={2}
          color="#333"
        />
      ) : (
        <>
      <div>
        <h5> ID: {product.id} </h5> <h1> {product.name} </h1>
        <BoxImg
          src={product.files ? product.files.map(file => file.url) : NoImage}
          alt="Image"
        />
      </div>
      <BoxInfo>
        <h3> Descrição: </h3>
        <blockquote>
          <p> {product.description} </p>
        </blockquote>
        <h3> Categoria: </h3>
        <p>
          {product.categories ? product.categories.map(c => c.title) : null}{' '}
          {product.subcategories
            ? product.subcategories.map(sb => sb.title)
            : null}
        </p>
        <h3> Aplicação: </h3>
        <p>
          {product.applications
            ? product.applications.map(a => a.description)
            : null}
        </p>
        <h3>
          {product.attributes ? product.attributes.map(at => at.title) : null}:
        </h3>
        <p>
          {product.attributes ? product.attributes.map(at => at.value) : null}
        </p>
        <h3> Características: </h3>
        <p>
          {product.features ? product.features.map(c => c.description) : null}
        </p>
      </BoxInfo>
      </>
      )}
    </Container>

  );
}
