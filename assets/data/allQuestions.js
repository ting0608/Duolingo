export default [
  // {
  //   id: "q0",
  //   type: "FILL_IN_THE_BLANK",
  //   parts: [
  //     {
  //       text: "la",
  //       isBlank: true,
  //     },
  //     {
  //       text: "nino",
  //       isBlank: true,
  //     },
  //     {
  //       text: "el",
  //       isBlank: true,
  //     },
  //     {
  //       text: "nina",
  //       isBlank: true,
  //     },
  //   ],
  //   options: ["la", "el", "nina", "nino", "ella"],
  // },
  {
    id: "q1",
    type: "IMAGE_MULTIPLE_CHOICE",
    question: 'Which of these is "Psyduck"?',
    options: [
      {
        id: "option1",
        image:
          "https://img.pokemondb.net/sprites/sword-shield/normal/psyduck.png",
        text: "可达鸭",
        correct: true,
      },
      {
        id: "option2",
        image:
          "https://img.pokemondb.net/sprites/sword-shield/normal/golduck.png",
        text: "哥达鸭",
      },
      {
        id: "option3",
        image:
          "https://img.pokemondb.net/sprites/sword-shield/normal/farfetchd.png",
        text: "大葱鸭",
      },
      {
        id: "option4",
        image:
          "https://img.pokemondb.net/sprites/sword-shield/normal/pikachu.png",
        text: "皮卡丘",
      },
    ],
  },
  {
    id: "q2",
    type: "OPEN_ENDED",
    text: "皮卡丘",
    answer: "pikachu",
  },
  {
    id: "q3",
    type: "IMAGE_MULTIPLE_CHOICE",
    question: 'Which of these is "Mimikyu"?',
    options: [
      {
        id: "option4",
        image:
          "https://img.pokemondb.net/sprites/sword-shield/normal/mimikyu.png",
        text: "迷拟q",
        correct: true,
      },
      {
        id: "option1",
        image:
          "https://img.pokemondb.net/sprites/sword-shield/normal/morpeko-full-belly.png",
        text: "莫魯貝可",
      },
      {
        id: "option3",
        image:
          "https://img.pokemondb.net/sprites/sword-shield/normal/raichu.png",
        text: "雷丘",
      },
      {
        id: "option2",
        image:
          "https://img.pokemondb.net/sprites/sword-shield/normal/electabuzz.png",
        text: "电击兽",
      },
    ],
  },
  {
    id: "q4",
    type: "IMAGE_MULTIPLE_CHOICE",
    type: "OPEN_ENDED",
    text: "皮卡丘",
    answer: "pikachu",
  },
  {
    id: "q3",
    question: 'Which of these is "Ralts"?',
    type: "IMAGE_MULTIPLE_CHOICE",
    options: [
      {
        id: "option3",
        image:
          "https://img.pokemondb.net/sprites/sword-shield/normal/zigzagoon.png",
        text: "蛇纹熊",
      },
      {
        id: "option2",
        image:
          "https://img.pokemondb.net/sprites/sword-shield/normal/eevee.png",
        text: "伊布",
      },
      {
        id: "option4",
        image:
          "https://img.pokemondb.net/sprites/sword-shield/normal/azurill.png",
        text: "露力丽",
      },
      {
        id: "option1",
        image:
          "https://img.pokemondb.net/sprites/sword-shield/normal/ralts.png",
        text: "拉鲁拉丝",
        correct: true,
      },
    ],
  },
  {
    id: "q5",
    type: "OPEN_ENDED",
    text: "可达鸭",
    answer: "psyduck",
  },
  {
    id: "q6",
    type: "IMAGE_MULTIPLE_CHOICE",
    question: 'Which of these is "ニャルマー"?',
    options: [
      {
        id: "option2",
        image:
          "https://img.pokemondb.net/sprites/sword-shield/normal/meowth.png",
        text: "喵喵 Meowth",
      },
      {
        id: "option3",
        image: "https://img.pokemondb.net/sprites/x-y/normal/glameow.png",
        text: "魅力喵 Glameow",
        correct: true,
      },
      {
        id: "option1",
        image:
          "https://img.pokemondb.net/sprites/sword-shield/normal/meowstic-male.png",
        text: "超能妙喵 Meowstic",
      },
      {
        id: "option4",
        image:
          "https://img.pokemondb.net/sprites/sword-shield/normal/torracat.png",
        text: "炎热喵 Torracat",
      },
    ],
  },
];
