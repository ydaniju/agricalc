// @flow

import React, { Component } from 'react';
import { Rnd, ResizeEnable } from 'react-rnd';

import styles from './Sidebar.css';

const enableResizing: ResizeEnable = {
  bottom: false,
  bottomLeft: false,
  bottomRight: false,
  left: false,
  right: true,
  top: false,
  topLeft: false,
  topRight: false,
}

export default class Sidebar extends Component {
  render() {
    return (
      <Rnd
        className={styles.background}
        default={{
          x: 0,
          y: 0,
          width: 250,
          height: '100%',
        }}
        disableDragging
        enableResizing={enableResizing}
      >
        <ul className={styles.list}>
          <li className={styles.listItem}><a>Power</a></li>
          <li className={styles.listItem}><a>Soil and Water</a></li>
          <li className={styles.listItem}><a>Farm Structures and Buildings</a></li>
        </ul>
      </Rnd>
    )
  }
}
