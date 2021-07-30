import React, { useState, useEffect } from 'react';
import SearchBarContext from './searchBarContext';

import * as API from '../services';

const [data, setData] = useState();
