const data = [
    {
      question: "С какой скоростью Вы можете продолжить движение вне населенного пункта по левой полосе на легковом автомобиле?",
      image: require('./images/1.png'),
      incorrectAnswers: [
        "Не более 50 км/ч",
        "Не менее 50 км/ч и не более 70 км/ч."
        
      ],
      correctAnswer: "Не менее 50 км/ч и не более 90 км/ч.",
    },

    {
      question:
        "Можно ли водителю легкового автомобиля выполнить обгон грузовых автомобилей вне населенного пункта по такой траектории?",
        
      incorrectAnswers: [
        "Можно, если скорость грузовых автомобилей менее 30 км/ч.",
        "Нельзя"
      ],
      correctAnswer: " Можно.",
    },
    {
      question: "В каком случае водителю разрешается поставить автомобиль на стоянку в указанном месте?",
      
      incorrectAnswers: [
        "Только если расстояние до сплошной линии разметки не менее 3 м.", 
      "При соблюдении обоих перечисленных условий."
    ],
      correctAnswer: " Только если расстояние до сплошной линии разметки не менее 3 м.",
    },
    {
      question: "Кому Вы обязаны уступить дорогу при повороте налево?",
      
      incorrectAnswers: [
        "Движение всех транспортных средств со скоростью не более 20 км/ч.",
      "Движение механических транспортных средств."
    ],
      correctAnswer: "Только автобусу.",
    },
    // {
    //   question: "Разрешен ли Вам выезд на полосу с реверсивным движением, если реверсивный светофор выключен?",
      
    //   incorrectAnswers: [
    //     "Разрешен.",
    //     "Разрешен, если скорость автобуса менее 30 км/ч",
    //     "Бог судья",
    //   ],
    //   correctAnswer: "Запрещен",
    // },
    // {
    //   question: "В каких направлениях Вам разрешается продолжить движение?",
      
    //   incorrectAnswers: [
    //     "Только прямо",
    //     "Прямо и налево",
    //     "Налево и в обратном направлении",
    //   ],
    //   correctAnswer: "Только налево",
    // },
    // {
    //   question: "Поднятая вверх рука водителя легкового автомобиля является сигналом, информирующим Вас о его намерении:",
      
    //   incorrectAnswers: ["Повернуть направо", 
    //   "Продолжить движение прямо", 
    //   "Повернуть налево"],
    //   correctAnswer: "Снизить скорость, чтобы остановиться и уступить дорогу мотоциклу",
    // },
    // {
    //   question: "Двигаясь по левой полосе, водитель намерен перестроиться на правую. На каком из рисунков показана ситуация, в которой он обязан уступить дорогу?",
      
    //   incorrectAnswers: [
    //     "На правом",
    //     "На обоих",
    //     "Неизвестно, нас этому не учили",
    //   ],
    //   correctAnswer: "На левом",
      
    // },
    // {
    //   question: "Двигаясь по левой полосе, водитель намерен перестроиться на правую. На каком из рисунков показана ситуация, в которой он обязан уступить дорогу?",
      
    //   incorrectAnswers: [
    //     "На правом",
    //     "На обоих",
    //     "Неизвестно, нас этому не учили",
    //   ],
    //   correctAnswer: "На левом",
      
    // },
    // {
    //   question: "Двигаясь по левой полосе, водитель намерен перестроиться на правую. На каком из рисунков показана ситуация, в которой он обязан уступить дорогу?",
      
    //   incorrectAnswers: [
    //     "На правом",
    //     "На обоих",
    //     "Неизвестно, нас этому не учили",
    //   ],
    //   correctAnswer: "На левом",
      
    // },
    // {
    //   question: "Двигаясь по левой полосе, водитель намерен перестроиться на правую. На каком из рисунков показана ситуация, в которой он обязан уступить дорогу?",
      
    //   incorrectAnswers: [
    //     "На правом",
    //     "На обоих",
    //     "Неизвестно, нас этому не учили",
    //   ],
    //   correctAnswer: "На левом",
      
    // },
    // {
    //   question: "Двигаясь по левой полосе, водитель намерен перестроиться на правую. На каком из рисунков показана ситуация, в которой он обязан уступить дорогу?",
      
    //   incorrectAnswers: [
    //     "На правом",
    //     "На обоих",
    //     "Неизвестно, нас этому не учили",
    //   ],
    //   correctAnswer: "На левом",
      
    // },
    // {
    //   question: "Двигаясь по левой полосе, водитель намерен перестроиться на правую. На каком из рисунков показана ситуация, в которой он обязан уступить дорогу?",
      
    //   incorrectAnswers: [
    //     "На правом",
    //     "На обоих",
    //     "Неизвестно, нас этому не учили",
    //   ],
    //   correctAnswer: "На левом",
      
    // },
    // {
    //   question: "Двигаясь по левой полосе, водитель намерен перестроиться на правую. На каком из рисунков показана ситуация, в которой он обязан уступить дорогу?",
      
    //   incorrectAnswers: [
    //     "На правом",
    //     "На обоих",
    //     "Неизвестно, нас этому не учили",
    //   ],
    //   correctAnswer: "На левом",
      
    // },
    // {
    //   question: "Двигаясь по левой полосе, водитель намерен перестроиться на правую. На каком из рисунков показана ситуация, в которой он обязан уступить дорогу?",
      
    //   incorrectAnswers: [
    //     "На правом",
    //     "На обоих",
    //     "Неизвестно, нас этому не учили",
    //   ],
    //   correctAnswer: "На левом",
      
    // },
    // {
    //   question: "Двигаясь по левой полосе, водитель намерен перестроиться на правую. На каком из рисунков показана ситуация, в которой он обязан уступить дорогу?",
      
    //   incorrectAnswers: [
    //     "На правом",
    //     "На обоих",
    //     "Неизвестно, нас этому не учили",
    //   ],
    //   correctAnswer: "На левом",
      
    // },
    // {
    //   question: "Двигаясь по левой полосе, водитель намерен перестроиться на правую. На каком из рисунков показана ситуация, в которой он обязан уступить дорогу?",
      
    //   incorrectAnswers: [
    //     "На правом",
    //     "На обоих",
    //     "Неизвестно, нас этому не учили",
    //   ],
    //   correctAnswer: "На левом",
      
    // },
    // {
    //   question: "Двигаясь по левой полосе, водитель намерен перестроиться на правую. На каком из рисунков показана ситуация, в которой он обязан уступить дорогу?",
      
    //   incorrectAnswers: [
    //     "На правом",
    //     "На обоих",
    //     "Неизвестно, нас этому не учили",
    //   ],
    //   correctAnswer: "На левом",
      
    // },
    // {
    //   question: "Двигаясь по левой полосе, водитель намерен перестроиться на правую. На каком из рисунков показана ситуация, в которой он обязан уступить дорогу?",
      
    //   incorrectAnswers: [
    //     "На правом",
    //     "На обоих",
    //     "Неизвестно, нас этому не учили",
    //   ],
    //   correctAnswer: "На левом",
      
    // },
    // {
    //   question: "Двигаясь по левой полосе, водитель намерен перестроиться на правую. На каком из рисунков показана ситуация, в которой он обязан уступить дорогу?",
      
    //   incorrectAnswers: [
    //     "На правом",
    //     "На обоих",
    //     "Неизвестно, нас этому не учили",
    //   ],
    //   correctAnswer: "На левом",
      
    // },
    // {
    //   question: "Двигаясь по левой полосе, водитель намерен перестроиться на правую. На каком из рисунков показана ситуация, в которой он обязан уступить дорогу?",
      
    //   incorrectAnswers: [
    //     "На правом",
    //     "На обоих",
    //     "Неизвестно, нас этому не учили",
    //   ],
    //   correctAnswer: "На левом",
      
    // },
    // {
    //   question: "Двигаясь по левой полосе, водитель намерен перестроиться на правую. На каком из рисунков показана ситуация, в которой он обязан уступить дорогу?",
      
    //   incorrectAnswers: [
    //     "На правом",
    //     "На обоих",
    //     "Неизвестно, нас этому не учили",
    //   ],
    //   correctAnswer: "На левом",
      
    // },
    // {
    //   question: "Двигаясь по левой полосе, водитель намерен перестроиться на правую. На каком из рисунков показана ситуация, в которой он обязан уступить дорогу?",
      
    //   incorrectAnswers: [
    //     "На правом",
    //     "На обоих",
    //     "Неизвестно, нас этому не учили",
    //   ],
    //   correctAnswer: "На левом",
      
    // },
    // {
    //   question: "Двигаясь по левой полосе, водитель намерен перестроиться на правую. На каком из рисунков показана ситуация, в которой он обязан уступить дорогу?",
      
    //   incorrectAnswers: [
    //     "На правом",
    //     "На обоих",
    //     "Неизвестно, нас этому не учили",
    //   ],
    //   correctAnswer: "На левом",
      
    // },
    // {
    //   question: "Двигаясь по левой полосе, водитель намерен перестроиться на правую. На каком из рисунков показана ситуация, в которой он обязан уступить дорогу?",
      
    //   incorrectAnswers: [
    //     "На правом",
    //     "На обоих",
    //     "Неизвестно, нас этому не учили",
    //   ],
    //   correctAnswer: "На левом",
      
    // },
  ];
  
  export default data;