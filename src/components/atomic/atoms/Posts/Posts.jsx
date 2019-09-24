import React from 'react';
import './styles.scss';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <table className="table">
      <thead className="thead">
        <tr className="headerRow">
          <th>Name</th>
          <th>Description</th>
          <th>Owner</th>
          <th>Url</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <tr key={post.id} className="postRow">
            <td>{post.name}</td>
            <td>{post.description}</td>
            <td>{post.owner.login}</td>
            <td>
              <a href={post.url}>{post.url}</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Posts;
