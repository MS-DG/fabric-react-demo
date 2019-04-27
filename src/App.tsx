import { DetailsListDocumentsExample } from "./test";
import { Cmd } from './cmd'
import * as React from 'react';
import { FluentCustomizations } from '@uifabric/fluent-theme';
import { Customizer } from "@uifabric/utilities";
class App extends React.Component {
  public render() {
    return (
      <Customizer {...FluentCustomizations}>
        <Cmd />
        <DetailsListDocumentsExample />
      </Customizer>
    );
  }
}
export default App;