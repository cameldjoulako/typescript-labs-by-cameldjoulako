function addition(x: number, y: number): number {
  return x + y;
}
const result: number = addition(10, 20);
console.log(result);

//object type
function damage(characterDamage: { life: number }, amount: number): number {
  characterDamage.life -= amount;
  return characterDamage.life;
}

const result2 = damage({ life: 100 }, 12);
console.log(result);
