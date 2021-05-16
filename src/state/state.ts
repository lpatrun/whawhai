export interface GameState {
  warriors: Warrior[];
  selectedWarrior: number;
  selectedAttacks: string[];
}

export interface Warrior {
  id: number,
  name: string;
  image: string;
  attacks: string[];
}

export const initialGameState: GameState = {
  warriors: [
    { id: 0, name: "Marvin", image: "avatar_marvin", attacks: ["Depression #1", "Depression #2", "Depression #3"]},
    { id: 1, name: "Dragon", image: "avatar_dragon", attacks: ["Fire-Spitting", "Dragon-Claw", "Pound"]},
    { id: 2, name: "Hackerman", image: "avatar_hackerman", attacks: ["Cyber", "System32 Error", "Norton Antivirus"]},
    { id: 3, name: "Tesla", image: "avatar_tesla", attacks: ["Shaker-Machine", "AC voltage", "Radio Waves"]},
    { id: 4, name: "Unicorn", image: "avatar_unicorn", attacks: [ "Rainbowshit", "Candypuke", "Cornlove"]},
  ],
  selectedWarrior: 0,
  selectedAttacks: []
};