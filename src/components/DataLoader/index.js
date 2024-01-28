import { Component } from 'react';

class DataLoader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: false,
      error: null,
    };
  }
  load = async () => {
    const { loadData } = this.props;
    this.setState({ isLoading: true });
    try {
      const data = await loadData();
      this.setState({ data: data });
    } catch (err) {
      this.setState({ error: err });
    } finally {
      this.setState({ isLoading: false });
    }
  };
  componentDidMount() {
    this.load();
  }

  render() {
    const { children } = this.props;
    return children(this.state);
  }
}

export default DataLoader;
