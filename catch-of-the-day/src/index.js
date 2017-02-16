// let's go!
import React from 'react';
import { render } from 'react-dom'; // We import only the render method
import './css/style.css'

import StorePicker from './components/StorePicker';

render(<StorePicker/>, document.querySelector('#main'));