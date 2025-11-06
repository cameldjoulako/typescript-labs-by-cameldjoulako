interface Character {
  name: string;
  life: number;
  attack: number;
  defense: number;
}
type Pet = Character;
interface Hero extends Character {
  pet?: Pet;
}
