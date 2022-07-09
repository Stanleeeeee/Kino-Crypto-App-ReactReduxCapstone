import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import Coins from '../components/coins/Coins';
import App from '../App';

import store from '../redux/configureStore';
import { fetchGetCoins } from '../redux/coins';

describe('pages test snapshots', () => {
  it('testing detail page', async () => {
    await store.dispatch(fetchGetCoins());
    const coinsPage = renderer
      .create(
        <Provider store={store}>
          <App>
            <Coins />
          </App>
        </Provider>,
      )
      .toJSON();
    expect(coinsPage).toMatchSnapshot();
  });
});
