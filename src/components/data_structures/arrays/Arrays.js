import React from 'react';
import { v4 } from 'uuid';
import Canvas from './Canvas';
import Element from './Element';
import Layout from '../../Layout';

class Arrays extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      foundAt: -1,
      element: null
    };
  }

  handleChange = event => {
    this.setState({
      element: parseInt(event.target.value, 10)
    });
  };

  handleAddClick = () => {
    const { element, data } = this.state;
    const newData = [...data, element];
    this.setState({
      data: newData
    });
  };

  handleFindClick = () => {
    const { element, data } = this.state;
    const elementIndex = data.indexOf(element);
    this.setState(() => ({
      foundAt: elementIndex > -1 ? elementIndex : -1
    }));
  };

  handleClearClick = () => {
    this.setState({
      data: []
    });
  };

  render() {
    const { data, foundAt } = this.state;
    const {
      handleAddClick,
      handleFindClick,
      handleClearClick,
      handleChange
    } = this;
    const canvasWidth = data.length * 50 || 50;
    return (
      <Layout>
        <h1>Arrays</h1>
        <p>
          Unarguably the most popular data structure in Javascript. Arrays are
          very flexible.
        </p>
        <div>
          <h2>Visualization</h2>
          <Canvas width={canvasWidth}>
            {data.map((d, i) => (
              <Element
                key={v4()}
                position={i * 50}
                element={d}
                foundAt={foundAt}
              />
            ))}
          </Canvas>
          <div>
            <input
              name="element"
              placeholder="Element"
              onChange={handleChange}
            />
            <button type="button" onClick={handleAddClick}>
              Add Element
            </button>
            <button type="button" onClick={handleFindClick}>
              Find Element
            </button>
            <button type="button" onClick={handleClearClick}>
              Clear Array
            </button>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Arrays;
