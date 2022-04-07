/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

const CartPage: FC = () => {
  return (
    <section className="cart">
      <div className="container">
        <div className="cart__content grid grid--tablet">
          <header className="buy__header
              grid__item--t--1-8
              grid__item--d--1-12
            "
          >
            <a
              href="https://crazybaby.com/"
              className="buy__logo logo"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="./images/logo.svg"
                alt="crazy baby logo"
                className="logo__image"
              />
            </a>
            <div className="buy__back">
              <Link to="/" className="icon icon--left-arrow menu-close" />
              {/* Повертати на сторінку назад по історії, але не напраму на головну */}
            </div>
            <div className="buy__cross">
              <Link to="/" className="icon icon--left-arrow menu-close" />
            </div>
            <div className="buy__bullets buy__bullets--hidden">
              <label className="buy__bullet-content buy__bullet-content--active">
                <input
                  type="radio"
                  name="stage"
                  className="buy__bullet-input"
                  checked
                />
                <div className="buy__bullet">
                  <div className="buy__bullet-inner" />
                </div>
                <span className="buy__bullet-text">
                  CART
                </span>
              </label>
              <label className="buy__bullet-content">
                <input
                  type="radio"
                  name="stage"
                  className="buy__bullet-input"
                />
                <div className="buy__bullet">
                  <div className="buy__bullet-inner" />
                </div>
                <span className="buy__bullet-text">
                  SHIPPING
                </span>
              </label>
              <label className="buy__bullet-content">
                <input
                  type="radio"
                  name="stage"
                  className="buy__bullet-input"
                />
                <div className="buy__bullet">
                  <div className="buy__bullet-inner" />
                </div>
                <span className="buy__bullet-text">
                  PAYMENT
                </span>
              </label>
            </div>
          </header>
          <h2 className="cart__title
              grid__item--t--2-4
              grid__item--d--6-8
            "
          >
            LUNA EYE
          </h2>
          <p className="cart__price
              grid__item--t--2-4
              grid__item--d--6-8
            "
          >
            $129.00
          </p>
          <div className="cart__image-container
              grid__item--t--2-7
              grid__item--d--1-5
            "
          >
            <img
              src="images/cart/luna-eye.png"
              alt="LUNA EYE silver"
              className="cart__image"
            />
          </div>
          <div className="cart__buy-block
              grid__item--t--2-4
              grid__item--d--6-8
            "
          >
            <div className="cart__filter">
              <div className="cart__colors">
                <div className="cart__color-conatainer cart__color-conatainer--active--silver">
                  <div className="cart__color cart__color--silver" />
                </div>
                <div className="cart__color-conatainer">
                  <div className="cart__color cart__color--grey" />
                </div>
                <div className="cart__color-conatainer">
                  <div className="cart__color cart__color--brown" />
                </div>
                <div className="cart__color-conatainer">
                  <div className="cart__color cart__color--gold" />
                </div>
                <div className="cart__color-conatainer">
                  <div className="cart__color cart__color--darkgrey" />
                </div>
              </div>
              <span className="cart__color-name">
                Silver
              </span>
            </div>
            <div className="cart__counter counter">
              <button
                disabled
                className="counter__button counter__button--minus"
                type="button"
              />
              <label>
                <input
                  type="number"
                  name="count"
                  className="counter__count-input counter__count-input--large"
                  value="1"
                />
              </label>
              <button
                className="counter__button counter__button--plus"
                type="button"
              />
            </div>
            <button
              className="cart__add-button button button--style--revert"
              type="button"
            >
              add TO CARD
            </button>
          </div>
          <div className="cart__delivery
              grid__item--t--2-4
              grid__item--d--6-8
            "
          >
            <div className="cart__delivery-image">
              <div className="icon icon--contain icon--delivery" />
            </div>
            <div className="cart__delivery-text">
              Free Shipping + Free Returns
            </div>
          </div>
          <div className="cart__items
              grid__item--t--2-7
              grid__item--d--4-9
            "
          >
            <div className="product-card cart__item">
              <div className="product-card__close">
                <span className="icon icon--cross-grey" />
              </div>
              <div className="product-card__content">
                <div className="product-card__image-container">
                  <img
                    className="product-card__image"
                    src="./images/cart/cart-gold.png"
                    alt="siler luna eye"
                  />
                </div>
                <div className="product-card__specs">
                  <div className="product-card__text">
                    <span className="product-card__color-text">Color:</span>
                    <span className="product-card__color">Gold</span>
                  </div>
                  <div className="product-card__counter counter">
                    <button
                      disabled
                      className="counter__button counter__button--minus"
                      type="button"
                    />
                    <label>
                      <input
                        type="number"
                        name="count"
                        className="counter__count-input"
                        value="1"
                      />
                    </label>
                    <button
                      className="counter__button counter__button--plus"
                      type="button"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="product-card cart__item">
              <div className="product-card__close">
                <span className="icon icon--cross-grey" />
              </div>
              <div className="product-card__content">
                <div className="product-card__image-container">
                  <img
                    className="product-card__image"
                    src="./images/cart/cart-silver.png"
                    alt="siler luna eye"
                  />
                </div>
                <div className="product-card__specs">
                  <div className="product-card__text">
                    <span className="product-card__color-text">Color:</span>
                    <span className="product-card__color">Silver</span>
                  </div>
                  <div className="product-card__counter counter">
                    <button
                      disabled
                      className="counter__button counter__button--minus"
                      type="button"
                    />
                    <label>
                      <input
                        type="number"
                        name="count"
                        className="counter__count-input"
                        value="3"
                      />
                    </label>
                    <button
                      className="counter__button counter__button--plus"
                      type="button"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="cart__order
              grid__item--t--6-7
              grid__item--d--10-11
            "
          >
            <h3 className="cart__order-title">
              Order Summary
            </h3>
            <div>
              <p className="cart__total-text">
                Total:
              </p>
              <p className="cart__total-price">
                $129.00
              </p>
              <a href="./shipping.html" className="cart__continue-button button">
                CONTINUE
              </a>
            </div>
          </div>
          <footer className="footer
              cart__footer
              grid__item--t--1-8
              grid__item--d--1-12
            "
          >
            <div className="container">
              <div className="footer__content">
                <a
                  href="https://crazybaby.com/"
                  className="footer__logo logo"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="./images/logo.svg"
                    alt="crazy baby logo"
                    className="logo__image"
                  />
                </a>
                <div className="footer__social">
                  <a
                    href="https://www.facebook.com/hicrazybaby/"
                    className="
                      footer__social-link
                      icon
                      icon--contain
                      icon--facebook
                    "
                    target="_blank"
                    rel="noreferrer"
                  />
                  <a
                    href="https://twitter.com/crazybabyaudio"
                    className="
                      footer__social-link
                      icon
                      icon--contain
                      icon--twitter
                    "
                    target="_blank"
                    rel="noreferrer"
                  />
                  <a
                    href="https://www.instagram.com/crazybaby/"
                    className="
                      footer__social-link
                      icon
                      icon--contain
                      icon--instagram
                    "
                    target="_blank"
                    rel="noreferrer"
                  />
                </div>
                <p className="footer__copy">
                  © 2019 All rights reserved. Terms of Use & Privacy Policy
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default memo(CartPage);
