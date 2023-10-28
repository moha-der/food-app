import React, { useState, useEffect } from "react";

import { getProducto } from "../utils/products";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col, FormGroup, Label, Input } from "reactstrap";

import { cartActions } from "../store/shopping-cart/cartSlice";

import "../styles/product-details.css";

import ProductCard from "../components/UI/product-card/ProductCard";

const FoodDetails = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);

  const dispatch = useDispatch();
  const [previewImg, setPreviewImg] = useState(null);

  const [ingredientsSelected, setingredientsSelected] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productoObtenido = await getProducto(id);
        console.log(productoObtenido);
        setProduct(productoObtenido); 
        console.log(productoObtenido.image01)
        setPreviewImg(productoObtenido.image01)
        window.scrollTo(0, 0);
      } catch (error) {
        console.error('Error al obtener el producto:', error);
      }
    };

    fetchData();
  }, []);

  if(!product) {
    return <div>Loading....</div>
  }

  const { title, price, category, descr, image01, ingredients } = product;
  const ingredientsArray = ingredients.split(",");

  const handleIngredientChange = (ingredient, isChecked) => {
    if (isChecked) {
        setingredientsSelected([...ingredientsSelected, ingredient]);
    } else {
        setingredientsSelected(ingredientsSelected.filter(item => item !== ingredient));
    }
  };

  const addItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image01,
        ingredientsSelected
      })
    );
  };


  return (
    <Helmet title="Product-details">
        <CommonSection title={title} />

        <section>
          <Container>
            <Row>
              <Col lg="2" md="2">
                <div className="product__images ">
                  <div
                    className="img__item mb-3"
                    onClick={() => setPreviewImg(product.image01)}
                  >
                    <img src={product.image01} alt="" className="w-50" />
                  </div>
                  <div
                    className="img__item mb-3"
                    onClick={() => setPreviewImg(product.image02)}
                  >
                    <img src={product.image02} alt="" className="w-50" />
                  </div>

                  <div
                    className="img__item"
                    onClick={() => setPreviewImg(product.image03)}
                  >
                    <img src={product.image03} alt="" className="w-50" />
                  </div>
                </div>
              </Col>

              <Col lg="4" md="4">
                <div className="product__main-img">
                  <img src={previewImg} alt="" className="w-100" />
                </div>
              </Col>

              <Col lg="6" md="6">
                <div className="single__product-content">
                  <h2 className="product__title mb-3">{title}</h2>
                  <p className="product__price">
                    {" "}
                    Price: <span>${price}</span>
                  </p>
                  <p className="category mb-5">
                    Category: <span>{category}</span>
                  </p>
                  <span className="select__ingredient">Select ingredients:</span>
                  <FormGroup>
                    {ingredientsArray.map(ingredient => (
                      <div key={ingredient}>
                        <Label check>
                          <Input
                            type="checkbox"
                            name={ingredient}
                            checked={ingredientsSelected.includes(ingredient)}
                            onChange={(e) => handleIngredientChange(ingredient, e.target.checked)}
                          />
                          <span className="check__ingredient">{ingredient}</span>
                        </Label>
                      </div>
                    ))}
                  </FormGroup>

                  <button onClick={addItem} className="addToCart__btn">
                    Add to Cart
                  </button>
                </div>
              </Col>

              <Col lg="12">
                <div className="tabs d-flex align-items-center gap-5 py-3">
                  <h6
                    className="desc tab__active"
                  >
                    Description
                  </h6>
                </div>
                <div className="tab__content">
                    <p>{descr}</p>
                  </div>

              </Col>

              <Col lg="12" className="mb-5 mt-4">
                <h2 className="related__Product-title">You might also like</h2>
              </Col>

            </Row>
          </Container>
        </section>
      </Helmet>
  );
};

export default FoodDetails;