type Equipment = {
  price: number;
  attack?: number;
  defense?: number;
};

// Équivalent du type générique que nous venons de voir, avec une interface
interface Shop<ItemType> {
  name: string;
  owner: Character;
  items: Array<ItemType>;
}
// Une fonction générique
function createShop<ItemType>(
  name: string,
  owner: Character,
  items: Array<ItemType>
): Shop<ItemType> {
  return { name, owner, items };
}
// Appel de la fonction générique
const armory = createShop<Equipment>(
  "My armory",
  { name: "Bob", life: 100, attack: 1, defense: 2 },
  []
);

// Une fonction qui retourne simplement ce qu'elle reçoit en paramètre
function returnParameter<T>(x: T): T {
  return x;
}
// Ceci fonctionne, c'est ce que nous avons vu jusque-là
const a = returnParameter<number>(1);
// Mais puisque le type "T" est utilisé pour typer le paramètre "x",
// il n'est pas nécessaire de le préciser en appelant la fonction.
// Avec la ligne ci-dessous, TypeScript devine tout seul que "T" est "number" !
const a2 = returnParameter(1);
