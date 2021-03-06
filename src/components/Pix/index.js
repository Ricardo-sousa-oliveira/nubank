import React from 'react';

import './styles.scss';
import PixImage from '../../img/pix.png';
import Link from '../Link';

function Pix() {
  return (
    <>
      <section className="pix">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="pix__title">
                Pix: um novo jeito de fazer transferências e pagamentos
              </h2>
              <Link url="http://localhost:3000/#" text="Saiba como funciona" />
              <div className="text-center">
                <img className="pix__img" src={PixImage} alt="pix" />
              </div>
              <div className="pix__account">
                <h3 className="pix__text">
                  Peça sua conta e cartão de crédito do Nubank
                </h3>
                <input
                  className="pix__input"
                  placeholder="Digite seu CPF"
                  type="text"
                />
                <button type="submit" className="pix__button">
                  <strong>Continuar</strong>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 21 20"
                    color="currentColor"
                    role="img"
                  >
                    <title>Arrow Right</title>
                    <g>
                      <path
                        d="M18.5 10H2.5M18.5 10L12 16.5M18.5 10L12 3.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="square"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Pix;
