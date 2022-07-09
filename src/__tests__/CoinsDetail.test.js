import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import App from '../App';
import store from '../redux/configureStore';
import { fetchGetCoins } from '../redux/coins'
import CoinsDetail from '../components/coins/CoinsDetail';

describe('Testing detail', () => {
  it('testing click interaction', async () => {
    await store.dispatch(fetchGetCoins());
    render(
      <Provider store={store}>
        <App>
          <CoinsDetail />
        </App>
      </Provider>,
    );
    const TetherDetail = screen.getByText('Tether - USDT');
    fireEvent.click(TetherDetail);
    expect(screen.getByText('Cryptocurrency')).toMatchSnapshot();
  });
});
