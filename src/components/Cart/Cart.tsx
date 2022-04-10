/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
import { memo, FC } from 'react';
import classNames from 'classnames';
import Container from '../../layouts/Container/Container';
import Footer from '../../layouts/Footer';
import { Grid, GridItem } from '../../layouts/Grid';

import '../../layouts/Grid/Grid.scss';

import style from './styles/Cart.module.scss';
import Counter from './components/Counter';
import { BuyHeader } from './components/BuyHeader/BuyHeader';

export const Cart: FC = memo(() => {
  return (
    <section className={style.cart}>
      <Container>
        <Grid fromTablet>
          <GridItem
            render={BuyHeader}
            fromTablet={[1, 8]}
            fromDesktop={[1, 12]}
          />

          <GridItem
            className={style.cart__title}
            fromTablet={[2, 4]}
            fromDesktop={[6, 8]}
            htmlTag="h2"
          >
            LUNA EYE
          </GridItem>

          <GridItem
            className={style.cart__price}
            fromTablet={[2, 4]}
            fromDesktop={[6, 8]}
            htmlTag="p"
          >
            $129.00
          </GridItem>

          <GridItem
            className={style['cart__image-container']}
            fromTablet={[2, 4]}
            fromDesktop={[1, 5]}
            htmlTag="p"
          >
            <img
              src="images/cart/luna-eye.png"
              alt="LUNA EYE silver"
              className={style.cart__image}
            />
          </GridItem>

          <GridItem
            className={style['cart__buy-block']}
            fromTablet={[2, 4]}
            fromDesktop={[6, 8]}
          >
            <div className={style.cart__filter}>
              <div className={style.cart__colors}>
                <div
                  className={classNames(
                    style['cart__color-conatainer'],
                    style['cart__color-conatainer--active--silver'],
                  )}
                >
                  <div
                    className={classNames(
                      style.cart__color,
                      style['cart__color--silver'],
                    )}
                  />
                </div>

                <div
                  className={classNames(
                    style['cart__color-conatainer'],
                  )}
                >
                  <div
                    className={classNames(
                      style.cart__color,
                      style['cart__color--grey'],
                    )}
                  />
                </div>

                <div
                  className={classNames(
                    style['cart__color-conatainer'],
                  )}
                >
                  <div
                    className={classNames(
                      style.cart__color,
                      style['cart__color--brown'],
                    )}
                  />
                </div>

                <div
                  className={classNames(
                    style['cart__color-conatainer'],
                  )}
                >
                  <div
                    className={classNames(
                      style.cart__color,
                      style['cart__color--gold'],
                    )}
                  />
                </div>

                <div
                  className={classNames(
                    style['cart__color-conatainer'],
                  )}
                >
                  <div
                    className={classNames(
                      style.cart__color,
                      style['cart__color--darkgrey'],
                    )}
                  />
                </div>
              </div>
              <span className={style['cart__color-name']}>
                Silver
              </span>
            </div>

            <Counter className={style.cart__counter} />

            <button
              className={classNames(
                'button',
                'button--style--revert',
                style['cart__add-button'],
              )}
            >
              ADD TO CARD
            </button>
          </GridItem>

          <GridItem
            className={style.cart__delivery}
            fromTablet={[2, 4]}
            fromDesktop={[6, 8]}
          >
            <div className={style['cart__delivery-image']}>
              <div className="icon icon--contain icon--delivery" />
            </div>
            <div className={style['cart__delivery-text']}>
              Free Shipping + Free Returns
            </div>
          </GridItem>

          <GridItem
            className={style.cart__items}
            fromTablet={[2, 7]}
            fromDesktop={[4, 9]}
          >
            <div
              className={classNames(
                'product-card',
                style.cart__item,
              )}
            >
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
                  <Counter className="product-card__counter" />
                </div>
              </div>
            </div>

            <div
              className={classNames(
                'product-card',
                style.cart__item,
              )}
            >
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
                  <Counter className="product-card__counter" />
                </div>
              </div>
            </div>
          </GridItem>

          <GridItem
            className={style.cart__order}
            fromTablet={[6, 7]}
            fromDesktop={[10, 11]}
          >
            <h3 className={style['cart__order-title']}>
              Order Summary
            </h3>
            <div>
              <p className={style['cart__total-text']}>
                Total:
              </p>
              <p className={style['cart__total-price']}>
                $129.00
              </p>
              <a href="#" className={`${style['cart__continue-button']} button`}>
                CONTINUE
              </a>
            </div>
          </GridItem>

          <GridItem
            render={Footer}
            className={style.cart__footer}
            fromTablet={[1, 8]}
            fromDesktop={[1, 12]}
          />
        </Grid>
      </Container>
    </section>
  );
});
