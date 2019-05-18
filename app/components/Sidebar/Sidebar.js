// @flow

import React, { Component } from 'react';
import { Rnd, ResizeEnable } from 'react-rnd';

import styles from './Sidebar.css';
import Caret from '../svg/Caret';

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
          <li className={styles.listItem}>
            <Caret />
            <div>Power</div>
          </li>

          <li className={styles.listItem}>
            <Caret />
            <div>Soil and Water</div>
          </li>

          <li className={styles.listItem}>
            <Caret />
            <div>Farm Structures and Buildings</div>
          </li>
        </ul>
      </Rnd>
    )
  }
}
