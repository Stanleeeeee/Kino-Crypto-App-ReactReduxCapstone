import Navigation from '../redux/coins';

describe('Testing reducer', () => {
  test('should return the initial state', () => {
    expect(Navigation(undefined, {})).toEqual([]);
  });
});
