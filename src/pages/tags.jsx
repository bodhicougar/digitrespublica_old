import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Container } from 'layouts';
import { Header, TagsBlock } from 'components';

const Tags = ({ pageContext }) => {
  const { tags } = pageContext;

  return (
    <Layout>
<<<<<<< HEAD
      <Header title="Tags Page">Die digitale res publica</Header>
=======
      <Header title="Tags Page">Gatsby Tutorial Starter</Header>
>>>>>>> Second commit
      <Container>
        <TagsBlock list={tags} />
      </Container>
    </Layout>
  );
};

export default Tags;

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tags: PropTypes.array,
  }),
};
