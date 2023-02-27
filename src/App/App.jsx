import { Component } from 'react';
import Searchbar from '../components/Searchbar';
import SearchInfo from '../Services/SearchInfo';
import ScrollOnTop from '../components/ScrollToTop';
class App extends Component {
  state = {
    query: '',
  };
  handleFormSubmit = query => {
    this.setState({ query });
  };

  render() {
    const { query } = this.state;
    return (
      <>
        <header>
          <Searchbar onSubmit={this.handleFormSubmit} />
        </header>
        <main>
          <SearchInfo query={query} />
          <ScrollOnTop />
        </main>
      </>
    );
  }
}
export default App;
