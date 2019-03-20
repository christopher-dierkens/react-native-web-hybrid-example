import React from 'react';
const reactRouterDom = require('react-router-dom');

const BrowserRouter = ({ children }) => <div>{children}</div>;

reactRouterDom.BrowserRouter = BrowserRouter;

module.exports = reactRouterDom;
