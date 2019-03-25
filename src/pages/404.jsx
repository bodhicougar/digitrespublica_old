import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const ErrorPage = center => (
  <Layout>
    <Helmet title={'404'} />
    <Header title="404" />
    <Container center={center}>
      <h1>Hurz, etwas hat da nicht funktioniert.</h1>
      <h3>Diese Seite existiert nicht mehr oder kann nicht mehr geöffnet werden.</h3>
      <h3>
        Sie können mit Klick hier zurückgelangen <Link to="/">Homepage</Link>.
      </h3>
    </Container>
  </Layout>
);

export default ErrorPage;

Container.propTypes = {
  center: PropTypes.object,
};
