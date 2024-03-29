import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  // searchQuery 상태 추가
  const [query, setQuery] = useSearchParams();
  const getProducts = async () => {
    let searchQuery = query.get('q') || '';
    console.log('쿼리값은?', searchQuery);
    let url = `https://my-json-server.typicode.com/sonjongmin1/hnm-react-router-practice/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, [query]); // searchQuery가 변경될 때마다 호출되도록 useEffect 업데이트

  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu) => (
            <Col lg={3} key={menu.id}>
              {' '}
              {/* 각 항목에 고유한 key 추가 */}
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
