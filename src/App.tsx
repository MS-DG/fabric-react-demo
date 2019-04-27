import { DetailsListDocumentsExample } from "./test";
import { Cmd } from './cmd'
import * as React from 'react';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Cmd />
        <DetailsListDocumentsExample />
      </div>
    );
  }
}
export default App;