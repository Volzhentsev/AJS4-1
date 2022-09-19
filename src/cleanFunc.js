export default function healthIndicator(el) {
  if (el.health >= 50) {
    return 'healthy';
  } if (el.health < 50 && el.health >= 15) {
    return 'wounded';
  }
  return 'critical';
}
