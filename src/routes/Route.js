import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export default function RouteWrapper({
  component: Component,
  // isPrivate = false, -> o false é definido como default props la embaixo
  isPrivate,
  ...rest
}) {
  // variavel que guarda a informacao se o usuario esta logado
  const signed = false;
  // -> se o usuario nao estiver logado e a rota isPrivate for true
  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }
  // -> se estiver logado e a rota não for privada
  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }
  // -> se passou pelos if, ele estiver logado e nao esta em uma rota privada
  return <Route {...rest} component={Component} />;
}

// -> Validacoes de proptypes
RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  // dois tipos de props aqui, um elemento e uma funcao dai o uso do oneOfType passando um vetor []
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};
// -> Default Props
RouteWrapper.defaultProps = {
  isPrivate: false,
};
