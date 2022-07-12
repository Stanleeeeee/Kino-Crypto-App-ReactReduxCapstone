import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './coins.css';

const CoinsDetail = () => {
  const { coins } = useSelector((state) => state.coins);
  const { active } = useSelector((state) => state.coins);
  return (
    <div className="detailContainer">
      <NavLink className="backBttn" to="/">
        <img alt="Back button" src="https://img.icons8.com/ios-glyphs/30/ffffff/circled-left-2.png" />
      </NavLink>
      <p>Cryptocurrency</p>
      <div className="infoContainer">
        <p className="detailInfo">
          {`${coins[active].coin_id} `}
          -
          {` ${coins[active].coin_name}`}
        </p>
      </div>
      <p>Value</p>
      <div className="infoContainer">
        <p className="detailInfo">{`$${coins[active].coin_value}`}</p>
      </div>
      <p>Daily Fluctuation</p>
      <div className="infoContainer">
        <p className="detailInfo">{`${coins[active].coin_change}%`}</p>
      </div>
    </div>
  );
};
export default CoinsDetail;
