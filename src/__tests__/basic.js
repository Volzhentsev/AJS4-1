import healthIndicator from '../cleanFunc';

test.each([
  [{ name: 'мечник', health: 10 }, 'critical'],
  [{ name: 'маг', health: 100 }, 'healthy'],
  [{ name: 'лучник', health: 30 }, 'wounded'],
])('testing health status function', (hero, expected) => {
  const result = healthIndicator(hero);
  expect(result).toBe(expected);
});
