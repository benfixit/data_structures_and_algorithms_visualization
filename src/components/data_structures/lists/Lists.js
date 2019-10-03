import React from 'react';
import Layout from '../../Layout';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout>
        <div>
          <h2>Operations</h2>
          <h3>List Class Implementation</h3>
        </div>
      </Layout>
    );
  }
}

export default List;
