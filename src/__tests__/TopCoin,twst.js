import TopCoin from '../redux/coins';

describe('Testing reducer', () => {
  test('should return the initial state', () => {
    expect(TopCoin(undefined, {})).toEqual([]);
  });
});
