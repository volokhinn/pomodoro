const chances = {
  10: [0.6, 0.2, 0.15, 0.05],
  2700: [0.5, 0.3, 0.1, 0.1],
  3600: [0.3, 0.3, 0.25, 0.15],
};

const awards = [
  { id: "tomato", chance: 0 },
  { id: "gold", chance: 0 },
  { id: "diamond", chance: 0 },
  { id: "platinum", chance: 0 },
];

let time = 10;

export const setTime = (value) => {
  time = value;
};

export const setChances = () => {
  awards.forEach((award, index) => {
    award.chance = chances[time][index];
  });
};

const lerp = (min, max, value) => (1 - value) * min + value * max;

export const getDrop = () => {
  const total = awards.reduce(
    (accumulator, item) => accumulator + item.chance,
    0
  );
  const chance = lerp(0, total, Math.random());

  let current = 0;
  for (const item of awards) {
    if (current <= chance && chance < current + item.chance) {
      return item;
    }

    current += item.chance;
  }
};
