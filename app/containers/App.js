// @flow
import * as React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';

type Props = {
  children: React.Node
};

export default class App extends React.Component<Props> {
  props: Props;

  render() {
    const { children } = this.props;
    return <div>
      <Sidebar />
      <React.Fragment>
        {children}
      </React.Fragment>
    </div>
  }
}
