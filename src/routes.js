import React from 'react';
import {Router, Route} from 'react-router';
import markdownPage from 'components/markdownPage';
import App from 'pages/App';
import Home from 'pages/Home';
import Simple from 'pages/examples/Simple';
import SynchronousValidation from 'pages/examples/SynchronousValidation';
import SubmitValidation from 'pages/examples/SubmitValidation';
import AsynchronousBlurValidation from 'pages/examples/AsynchronousBlurValidation';
import AlternateMountPoint from 'pages/examples/AlternateMountPoint';
import Examples from 'pages/examples/Examples.md';
import Api from 'pages/api/Api.md';
import ApiReduxForm from 'pages/api/ReduxForm.md';
import ApiReducer from 'pages/api/Reducer.md';
import ApiReducerNormalize from 'pages/api/ReducerNormalize.md';
import ApiReducerPlugin from 'pages/api/ReducerPlugin.md';
import ApiProps from 'pages/api/Props.md';
import ApiActionCreators from 'pages/api/ActionCreators.md';

const routes = (
  <Router>
    <Route component={App}>
      <Route path="/" component={Home}/>
      <Route path="/api" component={markdownPage(Api)}/>
      <Route path="/api/action-creators" component={markdownPage(ApiActionCreators)}/>
      <Route path="/api/props" component={markdownPage(ApiProps)}/>
      <Route path="/api/reduxForm" component={markdownPage(ApiReduxForm)}/>
      <Route path="/api/reducer" component={markdownPage(ApiReducer)}/>
      <Route path="/api/reducer/normalize" component={markdownPage(ApiReducerNormalize)}/>
      <Route path="/api/reducer/plugin" component={markdownPage(ApiReducerPlugin)}/>
      <Route path="/examples" component={markdownPage(Examples)}/>
      <Route path="/examples/asynchronous-blur-validation" component={AsynchronousBlurValidation}/>
      <Route path="/examples/alternate-mount-point" component={AlternateMountPoint}/>
      <Route path="/examples/simple" component={Simple}/>
      <Route path="/examples/submit-validation" component={SubmitValidation}/>
      <Route path="/examples/synchronous-validation" component={SynchronousValidation}/>
      <Route path="*" component={Home}/>
    </Route>
  </Router>
);

export default routes;