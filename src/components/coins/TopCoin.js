import { useSelector } from 'react-redux';
import './topCoin.css';

const TopCoin = () => {
  const { coins } = useSelector((state) => state.coins);

  return (
    <>
      <div className="container">
        <h3>
          Most Valuable -
          {' '}
          { coins !== undefined ? coins[0].coin_name : <p>Loading Crypto</p> }
        </h3>
        <div className="content">
          <img alt="BTC" src="https://img.icons8.com/color/70/000000/bitcoin--v3.png" />
          { coins !== undefined ? `$${coins[0].coin_value}` : <p>Loading Value</p> }
        </div>
      </div>
    </>
  );
};

export default TopCoin;
