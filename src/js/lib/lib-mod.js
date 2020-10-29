// Modulo that works with negative numbers
export default function mod(n, m) {
  console.log("MOD ", ((n % m) + m) % m)
    return ((n % m) + m) % m;
  }