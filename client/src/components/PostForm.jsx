import React from 'react';
import { gql, useMutation } from '@apollo/client';
import { Button, Form } from 'semantic-ui-react';
import { useForm } from '../util/hooks';
import { FETCH_POSTS_QUERY } from '../util/graphql';

export default () => {
  const { values, onSubmit, onChange } = useForm(createPostCallback, {
    body: '',
  });

  const [createPost, { error }] = useMutation(CREATE_POST_MUTATION, {
    variables: values,
    update(proxy, result) {
      const data = proxy.readQuery({
        query: FETCH_POSTS_QUERY,
      });
      // data.getPosts = [result.data.createPost, ...data.getPosts];
      proxy.writeQuery({ query: FETCH_POSTS_QUERY, data });
      values.body = '';
    },
    onError(err) {
      console.log(err);
    },
  });
  
  function createPostCallback() {
    createPost();
  }

  return (
    <>
      <Form onSubmit={onSubmit}>
        <h2>Create a post:</h2>
        <Form.Field>
          <Form.Input
            placeholder='Hi World!'
            name='body'
            onChange={onChange}
            value={values.body}
            error={error ? true : false}
          />
        </Form.Field>
        <Button type='submit' color='teal'>
          Submit
        </Button>
      </Form>
      {error && (
        <div className='ui error message' style={{ marginBottom: 20 }}>
          <ul className='list'>
            <li>{error.graphQLErrors[0].message}</li>
          </ul>
        </div>
      )}
    </>
  );
};

const CREATE_POST_MUTATION = gql`
  mutation createPost($body: String!) {
    createPost(body: $body) {
      id
      body
      createdAt
      username
      likes {
        id
        username
        createdAt
      }
      likeCount
      comments {
        id
        body
        username
        createdAt
      }
      commentCount
    }
  }
`;
