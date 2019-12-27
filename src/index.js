import './index.css';

import List from './pages/List';
import Favorites from './pages/Favorites';

window.state = {
  data: [
    { id: 1, name: 'Top onem 1?', fav: false },
    { id: 2, name: 'Top onem 2?', fav: true },
    { id: 3, name: 'Top onem 3?', fav: false },
  ],
  theme: 'DARK',
};

List();
Favorites();
