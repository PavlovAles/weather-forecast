const cities = [
  {
    value: 1512236,
    label: 'Абакан',
    coord: { lon: 91.429169, lat: 53.715561 },
  },
  {
    value: 580054,
    label: 'Азов',
    coord: { lon: 39.416481, lat: 47.107792 },
  },
  {
    value: 583350,
    label: 'Александров',
    coord: { lon: 38.709999, lat: 56.400002 },
  },
  {
    value: 582750,
    label: 'Алексин',
    coord: { lon: 37.080002, lat: 54.509998 },
  },
  {
    value: 582182,
    label: 'Анапа',
    coord: { lon: 37.323898, lat: 44.890839 },
  },
  {
    value: 2027667,
    label: 'Ангарск',
    coord: { lon: 103.886391, lat: 52.536671 },
  },
  {
    value: 1511494,
    label: 'Анжеро-Судженск',
    coord: { lon: 86.028503, lat: 56.081001 },
  },
  {
    value: 581357,
    label: 'Апатиты',
    coord: { lon: 33.403099, lat: 67.56414 },
  },
  {
    value: 580724,
    label: 'Арзамас',
    coord: { lon: 43.83992, lat: 55.394852 },
  },
  {
    value: 580922,
    label: 'Армавир',
    coord: { lon: 41.123402, lat: 44.989201 },
  },
  {
    value: 1511330,
    label: 'Асбест',
    coord: { lon: 61.45776, lat: 57.00993 },
  },
  {
    value: 1512165,
    label: 'Ачинск',
    coord: { lon: 90.499298, lat: 56.269402 },
  },
  {
    value: 579492,
    label: 'Балаково',
    coord: { lon: 47.800701, lat: 52.027821 },
  },
  {
    value: 579464,
    label: 'Балашиха',
    coord: { lon: 37.958061, lat: 55.809448 },
  },
  {
    value: 579460,
    label: 'Балашов',
    coord: { lon: 43.166698, lat: 51.550201 },
  },
  {
    value: 1510853,
    label: 'Барнаул',
    coord: { lon: 83.763611, lat: 53.360561 },
  },
  {
    value: 578072,
    label: 'Белгород',
    coord: { lon: 36.580002, lat: 50.610001 },
  },
  {
    value: 1510469,
    label: 'Белово',
    coord: { lon: 86.2976, lat: 54.4165 },
  },
  {
    value: 577881,
    label: 'Белорецк',
    coord: { lon: 58.39806, lat: 53.963058 },
  },
  {
    value: 1510350,
    label: 'Бердск',
    coord: { lon: 83.096703, lat: 54.7551 },
  },
  {
    value: 2026643,
    label: 'Биробиджан',
    coord: { lon: 132.949997, lat: 48.799999 },
  },
  {
    value: 1509008,
    label: 'Бор',
    coord: { lon: 90.018059, lat: 61.601109 },
  },
  {
    value: 572525,
    label: 'Борисоглебск',
    coord: { lon: 42.084942, lat: 51.36713 },
  },
  {
    value: 572154,
    label: 'Боровичи',
    coord: { lon: 33.915459, lat: 58.387779 },
  },
  {
    value: 571476,
    label: 'Брянск',
    coord: { lon: 34.380562, lat: 53.287498 },
  },
  {
    value: 570427,
    label: 'Бузулук',
    coord: { lon: 52.2635, lat: 52.780701 },
  },
  {
    value: 519336,
    label: 'Великий Новгород',
    coord: { lon: 31.283331, lat: 58.51667 },
  },
  {
    value: 1487281,
    label: 'Верхняя Пышма',
    coord: { lon: 60.58083, lat: 56.966671 },
  },
  {
    value: 2013348,
    label: 'Владивосток',
    coord: { lon: 131.873535, lat: 43.105621 },
  },
  {
    value: 473249,
    label: 'Владикавказ',
    coord: { lon: 44.667782, lat: 43.036671 },
  },
  {
    value: 473247,
    label: 'Владимир',
    coord: { lon: 40.39658, lat: 56.136551 },
  },
  {
    value: 472757,
    label: 'Волгоград',
    coord: { lon: 44.501839, lat: 48.719391 },
  },
  {
    value: 472761,
    label: 'Волгодонск',
    coord: { lon: 42.15139, lat: 47.513611 },
  },
  {
    value: 472234,
    label: 'Волжск',
    coord: { lon: 48.359402, lat: 55.866379 },
  },
  {
    value: 472459,
    label: 'Вологда',
    coord: { lon: 39.888599, lat: 59.2187 },
  },
  {
    value: 1486910,
    label: 'Воркута',
    coord: { lon: 64, lat: 67.5 },
  },
  {
    value: 472045,
    label: 'Воронеж',
    coord: { lon: 39.169998, lat: 51.666389 },
  },
  {
    value: 471656,
    label: 'Воскресенск',
    coord: { lon: 38.663612, lat: 55.3125 },
  },
  {
    value: 471430,
    label: 'Воткинск',
    coord: { lon: 53.987171, lat: 57.048649 },
  },
  {
    value: 471101,
    label: 'Всеволожск',
    coord: { lon: 30.637159, lat: 60.020432 },
  },
  {
    value: 470546,
    label: 'Выборг',
    coord: { lon: 28.752831, lat: 60.70763 },
  },
  {
    value: 470444,
    label: 'Выкса',
    coord: { lon: 42.174438, lat: 55.317501 },
  },
  {
    value: 561887,
    label: 'Гатчина',
    coord: { lon: 30.12833, lat: 59.576389 },
  },
  {
    value: 561667,
    label: 'Геленджик',
    coord: { lon: 38.074722, lat: 44.573055 },
  },
  {
    value: 561347,
    label: 'Глазов',
    coord: { lon: 52.658421, lat: 58.139408 },
  },
  {
    value: 558146,
    label: 'Губкин',
    coord: { lon: 37.54583, lat: 51.28167 },
  },
  {
    value: 558118,
    label: 'Гудермес',
    coord: { lon: 46.105282, lat: 43.356941 },
  },
  {
    value: 558082,
    label: 'Гуково',
    coord: { lon: 39.93111, lat: 48.053059 },
  },
  {
    value: 566532,
    label: 'Дербент',
    coord: { lon: 48.289871, lat: 42.067799 },
  },
  {
    value: 563708,
    label: 'Дзержинск',
    coord: { lon: 43.463058, lat: 56.238892 },
  },
  {
    value: 566199,
    label: 'Димитровград',
    coord: { lon: 49.618378, lat: 54.21386 },
  },
  {
    value: 565955,
    label: 'Дмитров',
    coord: { lon: 37.516666, lat: 56.349998 },
  },
  {
    value: 565381,
    label: 'Домодедово',
    coord: { lon: 37.758331, lat: 55.442223 },
  },
  {
    value: 564719,
    label: 'Дубна',
    coord: { lon: 37.166668, lat: 56.733334 },
  },
  {
    value: 1486209,
    label: 'Екатеринбург',
    coord: { lon: 60.612499, lat: 56.857498 },
  },
  {
    value: 468082,
    label: 'Елабуга',
    coord: { lon: 52.06493, lat: 55.761269 },
  },
  {
    value: 467978,
    label: 'Елец',
    coord: { lon: 38.50169, lat: 52.623661 },
  },
  {
    value: 466990,
    label: 'Ессентуки',
    coord: { lon: 42.860561, lat: 44.044441 },
  },
  {
    value: 463082,
    label: 'Жигулевск',
    coord: { lon: 49.495281, lat: 53.399719 },
  },
  {
    value: 463830,
    label: 'Зеленогорск',
    coord: { lon: 29.70183, lat: 60.19968 },
  },
  {
    value: 462444,
    label: 'Златоуст',
    coord: { lon: 59.650829, lat: 55.171108 },
  },
  {
    value: 555312,
    label: 'Иваново',
    coord: { lon: 40.985832, lat: 56.994167 },
  },
  {
    value: 554840,
    label: 'Ижевск',
    coord: { lon: 53.23333, lat: 56.849998 },
  },
  {
    value: 554894,
    label: 'Избербаш',
    coord: { lon: 47.864471, lat: 42.56955 },
  },
  {
    value: 1505429,
    label: 'Искитим',
    coord: { lon: 83.304497, lat: 54.6366 },
  },
  {
    value: 1505453,
    label: 'Ишим',
    coord: { lon: 69.49015, lat: 56.112808 },
  },
  {
    value: 551487,
    label: 'Казань',
    coord: { lon: 49.122139, lat: 55.788738 },
  },
  {
    value: 554234,
    label: 'Калининград',
    coord: { lon: 20.51095, lat: 54.70649 },
  },
  {
    value: 553915,
    label: 'Калуга',
    coord: { lon: 36.275421, lat: 54.529301 },
  },
  {
    value: 553287,
    label: 'Камышин',
    coord: { lon: 45.416012, lat: 50.098331 },
  },
  {
    value: 1504682,
    label: 'Канск',
    coord: { lon: 95.717499, lat: 56.201672 },
  },
  {
    value: 1503901,
    label: 'Кемерово',
    coord: { lon: 86.083328, lat: 55.333328 },
  },
  {
    value: 548605,
    label: 'Кинешма',
    coord: { lon: 42.128941, lat: 57.43914 },
  },
  {
    value: 548442,
    label: 'Кириши',
    coord: { lon: 32.020489, lat: 59.447121 },
  },
  {
    value: 548395,
    label: 'Кирово-Чепецк',
    coord: { lon: 50.03986, lat: 58.55386 },
  },
  {
    value: 548114,
    label: 'Кисловодск',
    coord: { lon: 42.720829, lat: 43.91333 },
  },
  {
    value: 547523,
    label: 'Клин',
    coord: { lon: 36.73333, lat: 56.333328 },
  },
  {
    value: 547475,
    label: 'Клинцы',
    coord: { lon: 32.239342, lat: 52.760189 },
  },
  {
    value: 543460,
    label: 'Ковров',
    coord: { lon: 41.319172, lat: 56.35722 },
  },
  {
    value: 6695754,
    label: 'Когалым',
    coord: { lon: 74.479057, lat: 62.265369 },
  },
  {
    value: 546230,
    label: 'Коломна',
    coord: { lon: 38.778332, lat: 55.079441 },
  },
  {
    value: 554233,
    label: 'Королев',
    coord: { lon: 37.825562, lat: 55.914169 },
  },
  {
    value: 543878,
    label: 'Кострома',
    coord: { lon: 40.934444, lat: 57.770832 },
  },
  {
    value: 543704,
    label: 'Котлас',
    coord: { lon: 46.655556, lat: 61.261112 },
  },
  {
    value: 542374,
    label: 'Красногорск',
    coord: { lon: 37.318054, lat: 55.822498 },
  },
  {
    value: 542420,
    label: 'Краснодар',
    coord: { lon: 38.976944, lat: 45.03278 },
  },
  {
    value: 1502096,
    label: 'Краснокаменск',
    coord: { lon: 93.259438, lat: 54.333889 },
  },
  {
    value: 542327,
    label: 'Краснокамск',
    coord: { lon: 55.754108, lat: 58.080158 },
  },
  {
    value: 1502026,
    label: 'Красноярск',
    coord: { lon: 92.791672, lat: 56.00972 },
  },
  {
    value: 540761,
    label: 'Кропоткин',
    coord: { lon: 40.575558, lat: 45.4375 },
  },
  {
    value: 540251,
    label: 'Крымск',
    coord: { lon: 37.991169, lat: 44.92934 },
  },
  {
    value: 540103,
    label: 'Кстово',
    coord: { lon: 44.197868, lat: 56.147331 },
  },
  {
    value: 537737,
    label: 'Кузнецк',
    coord: { lon: 46.600368, lat: 53.116749 },
  },
  {
    value: 539283,
    label: 'Кумертау',
    coord: { lon: 55.783329, lat: 52.76667 },
  },
  {
    value: 539147,
    label: 'Кунгур',
    coord: { lon: 56.959301, lat: 57.436798 },
  },
  {
    value: 1501321,
    label: 'Курган',
    coord: { lon: 65.333328, lat: 55.450001 },
  },
  {
    value: 538560,
    label: 'Курск',
    coord: { lon: 36.19389, lat: 51.730282 },
  },
  {
    value: 1500973,
    label: 'Кызыл',
    coord: { lon: 94.449997, lat: 51.700001 },
  },
  {
    value: 537281,
    label: 'Лабинск',
    coord: { lon: 40.735558, lat: 44.634167 },
  },
  {
    value: 536162,
    label: 'Лениногорск',
    coord: { lon: 52.460869, lat: 54.602558 },
  },
  {
    value: 1500607,
    label: 'Лесосибирск',
    coord: { lon: 92.48278, lat: 58.235828 },
  },
  {
    value: 535121,
    label: 'Липецк',
    coord: { lon: 39.570759, lat: 52.603111 },
  },
  {
    value: 534595,
    label: 'Лобня',
    coord: { lon: 37.481941, lat: 56.00972 },
  },
  {
    value: 532657,
    label: 'Лыткарино',
    coord: { lon: 37.905834, lat: 55.58139 },
  },
  {
    value: 532615,
    label: 'Люберцы',
    coord: { lon: 37.883331, lat: 55.677776 },
  },
  {
    value: 2123628,
    label: 'Магадан',
    coord: { lon: 150.800003, lat: 59.566669 },
  },
  {
    value: 532288,
    label: 'Магнитогорск',
    coord: { lon: 59.047218, lat: 53.41861 },
  },
  {
    value: 532096,
    label: 'Махачкала',
    coord: { lon: 47.502361, lat: 42.976379 },
  },
  {
    value: 1498920,
    label: 'Междуреченск',
    coord: { lon: 88.06028, lat: 53.694172 },
  },
  {
    value: 527717,
    label: 'Мелеуз',
    coord: { lon: 55.916672, lat: 52.966671 },
  },
  {
    value: 1498894,
    label: 'Миасс',
    coord: { lon: 60.10833, lat: 55.044998 },
  },
  {
    value: 1498693,
    label: 'Минусинск',
    coord: { lon: 91.6875, lat: 53.710281 },
  },
  {
    value: 527191,
    label: 'Мичуринск',
    coord: { lon: 40.4907, lat: 52.8978 },
  },
  {
    value: 524894,
    label: 'Москва',
    coord: { lon: 37.606667, lat: 55.761665 },
  },
  {
    value: 524305,
    label: 'Мурманск',
    coord: { lon: 33.09251, lat: 68.979172 },
  },
  {
    value: 524294,
    label: 'Муром',
    coord: { lon: 42.041668, lat: 55.565556 },
  },
  {
    value: 523812,
    label: 'Мытищи',
    coord: { lon: 37.733891, lat: 55.90889 },
  },
  {
    value: 1497951,
    label: 'Назарово',
    coord: { lon: 90.391388, lat: 56.00639 },
  },
  {
    value: 523426,
    label: 'Наро-Фоминск',
    coord: { lon: 36.73307, lat: 55.38752 },
  },
  {
    value: 2019528,
    label: 'Находка',
    coord: { lon: 132.894714, lat: 42.833328 },
  },
  {
    value: 522377,
    label: 'Невинномысск',
    coord: { lon: 41.945278, lat: 44.626667 },
  },
  {
    value: 2019309,
    label: 'Нерюнгри',
    coord: { lon: 124.649101, lat: 56.670898 },
  },
  {
    value: 522942,
    label: 'Нефтекамск',
    coord: { lon: 54.270321, lat: 56.091991 },
  },
  {
    value: 1497917,
    label: 'Нефтеюганск',
    coord: { lon: 72.603493, lat: 61.099789 },
  },
  {
    value: 1497543,
    label: 'Нижневартовск',
    coord: { lon: 76.553101, lat: 60.934399 },
  },
  {
    value: 521118,
    label: 'Нижнекамск',
    coord: { lon: 51.824471, lat: 55.63657 },
  },
  {
    value: 520555,
    label: 'Нижний Новгород',
    coord: { lon: 44.002048, lat: 56.328674 },
  },
  {
    value: 1496990,
    label: 'Новокузнецк',
    coord: { lon: 87.109901, lat: 53.755699 },
  },
  {
    value: 518557,
    label: 'Новомосковск',
    coord: { lon: 38.284599, lat: 54.010502 },
  },
  {
    value: 1496747,
    label: 'Новосибирск',
    coord: { lon: 82.934441, lat: 55.041111 },
  },
  {
    value: 517836,
    label: 'Новотроицк',
    coord: { lon: 58.326649, lat: 51.203011 },
  },
  {
    value: 518976,
    label: 'Новочебоксарск',
    coord: { lon: 47.477551, lat: 56.11095 },
  },
  {
    value: 518970,
    label: 'Новочеркасск',
    coord: { lon: 40.093887, lat: 47.418056 },
  },
  {
    value: 517963,
    label: 'Новошахтинск',
    coord: { lon: 39.93335, lat: 47.760368 },
  },
  {
    value: 520068,
    label: 'Ногинск',
    coord: { lon: 38.443802, lat: 55.86647 },
  },
  {
    value: 516436,
    label: 'Обнинск',
    coord: { lon: 36.610279, lat: 55.096943 },
  },
  {
    value: 516215,
    label: 'Одинцово',
    coord: { lon: 37.277729, lat: 55.677979 },
  },
  {
    value: 1496153,
    label: 'Омск',
    coord: { lon: 73.400002, lat: 55 },
  },
  {
    value: 515003,
    label: 'Оренбург',
    coord: { lon: 55.098801, lat: 51.772701 },
  },
  {
    value: 514734,
    label: 'Орск',
    coord: { lon: 58.566849, lat: 51.204868 },
  },
  {
    value: 512063,
    label: 'Павлово',
    coord: { lon: 30.896669, lat: 59.808609 },
  },
  {
    value: 511565,
    label: 'Пенза',
    coord: { lon: 45.004639, lat: 53.200661 },
  },
  {
    value: 511196,
    label: 'Пермь',
    coord: { lon: 56.285519, lat: 58.01741 },
  },
  {
    value: 509820,
    label: 'Петрозаводск',
    coord: { lon: 34.346909, lat: 61.784912 },
  },
  {
    value: 504341,
    label: 'Псков',
    coord: { lon: 28.3496, lat: 57.813599 },
  },
  {
    value: 503550,
    label: 'Пятигорск',
    coord: { lon: 43.059444, lat: 44.048611 },
  },
  {
    value: 502010,
    label: 'Ревда',
    coord: { lon: 34.561489, lat: 67.937103 },
  },
  {
    value: 502018,
    label: 'Реутов',
    coord: { lon: 37.861668, lat: 55.759445 },
  },
  {
    value: 499717,
    label: 'Ржев',
    coord: { lon: 34.328171, lat: 56.262409 },
  },
  {
    value: 501175,
    label: 'Ростов-на-Дону',
    coord: { lon: 39.71389, lat: 47.236389 },
  },
  {
    value: 1493467,
    label: 'Рубцовск',
    coord: { lon: 81.25, lat: 51.5 },
  },
  {
    value: 500004,
    label: 'Рыбинск',
    coord: { lon: 38.84259, lat: 58.044601 },
  },
  {
    value: 499292,
    label: 'Салават',
    coord: { lon: 55.90773, lat: 53.383652 },
  },
  {
    value: 499099,
    label: 'Самара',
    coord: { lon: 50.150002, lat: 53.200001 },
  },
  {
    value: 536203,
    label: 'Санкт-Петербург',
    coord: { lon: 30.25, lat: 59.916668 },
  },
  {
    value: 498698,
    label: 'Саранск',
    coord: { lon: 45.1749, lat: 54.1838 },
  },
  {
    value: 498687,
    label: 'Сарапул',
    coord: { lon: 53.797821, lat: 56.47633 },
  },
  {
    value: 498677,
    label: 'Саратов',
    coord: { lon: 46.033333, lat: 51.566666 },
  },
  {
    value: 498525,
    label: 'Саров',
    coord: { lon: 43.323521, lat: 54.935829 },
  },
  {
    value: 496285,
    label: 'Северодвинск',
    coord: { lon: 39.8302, lat: 64.563499 },
  },
  {
    value: 1538637,
    label: 'Северск',
    coord: { lon: 84.886391, lat: 56.600559 },
  },
  {
    value: 1492663,
    label: 'Серов',
    coord: { lon: 60.578701, lat: 59.60334 },
  },
  {
    value: 496527,
    label: 'Серпухов',
    coord: { lon: 37.410831, lat: 54.921391 },
  },
  {
    value: 496519,
    label: 'Сертолово',
    coord: { lon: 30.201651, lat: 60.144402 },
  },
  {
    value: 492094,
    label: 'Славянск-на-Кубани',
    coord: { lon: 38.118057, lat: 45.251945 },
  },
  {
    value: 491687,
    label: 'Смоленск',
    coord: { lon: 32.040001, lat: 54.781666 },
  },
  {
    value: 491023,
    label: 'Соликамск',
    coord: { lon: 56.772888, lat: 59.61956 },
  },
  {
    value: 490996,
    label: 'Солнечногорск',
    coord: { lon: 36.983334, lat: 56.183334 },
  },
  {
    value: 491422,
    label: 'Сочи',
    coord: { lon: 39.730278, lat: 43.599998 },
  },
  {
    value: 487495,
    label: 'Стерлитамак',
    coord: { lon: 55.95015, lat: 53.624619 },
  },
  {
    value: 486968,
    label: 'Ступино',
    coord: { lon: 38.070831, lat: 54.900833 },
  },
  {
    value: 486137,
    label: 'Сургут',
    coord: { lon: 51.20348, lat: 53.92498 },
  },
  {
    value: 485239,
    label: 'Сыктывкар',
    coord: { lon: 50.80994, lat: 61.676418 },
  },
  {
    value: 484907,
    label: 'Таганрог',
    coord: { lon: 38.896881, lat: 47.236172 },
  },
  {
    value: 484646,
    label: 'Тамбов',
    coord: { lon: 41.433891, lat: 52.73167 },
  },
  {
    value: 483019,
    label: 'Тихвин',
    coord: { lon: 33.529369, lat: 59.645111 },
  },
  {
    value: 483029,
    label: 'Тихорецк',
    coord: { lon: 40.125278, lat: 45.854721 },
  },
  {
    value: 482283,
    label: 'Тольятти',
    coord: { lon: 49.3461, lat: 53.5303 },
  },
  {
    value: 1489425,
    label: 'Томск',
    coord: { lon: 84.966667, lat: 56.5 },
  },
  {
    value: 481608,
    label: 'Троицк',
    coord: { lon: 37.307362, lat: 55.484982 },
  },
  {
    value: 480716,
    label: 'Туапсе',
    coord: { lon: 39.074165, lat: 44.112499 },
  },
  {
    value: 480562,
    label: 'Тула',
    coord: { lon: 37.611111, lat: 54.204441 },
  },
  {
    value: 1488754,
    label: 'Тюмень',
    coord: { lon: 65.527222, lat: 57.152222 },
  },
  {
    value: 477494,
    label: 'Узловая',
    coord: { lon: 38.171181, lat: 53.981789 },
  },
  {
    value: 478581,
    label: 'Урус-Мартан',
    coord: { lon: 45.54306, lat: 43.128609 },
  },
  {
    value: 479561,
    label: 'Уфа',
    coord: { lon: 56.037498, lat: 54.775002 },
  },
  {
    value: 479411,
    label: 'Ухта',
    coord: { lon: 53.683479, lat: 63.567051 },
  },
  {
    value: 562319,
    label: 'Фрязино',
    coord: { lon: 38.045555, lat: 55.960556 },
  },
  {
    value: 2022890,
    label: 'Хабаровск',
    coord: { lon: 135.092773, lat: 48.480831 },
  },
  {
    value: 550478,
    label: 'Хасавюрт',
    coord: { lon: 46.588058, lat: 43.25 },
  },
  {
    value: 550280,
    label: 'Химки',
    coord: { lon: 37.4375, lat: 55.901669 },
  },
  {
    value: 569696,
    label: 'Чебоксары',
    coord: { lon: 47.251942, lat: 56.132221 },
  },
  {
    value: 1508291,
    label: 'Челябинск',
    coord: { lon: 61.429722, lat: 55.154442 },
  },
  {
    value: 2025527,
    label: 'Черемхово',
    coord: { lon: 103.067497, lat: 53.156109 },
  },
  {
    value: 569223,
    label: 'Череповец',
    coord: { lon: 37.900002, lat: 59.133331 },
  },
  {
    value: 569154,
    label: 'Черкесск',
    coord: { lon: 42.057781, lat: 44.223331 },
  },
  {
    value: 1508054,
    label: 'Черногорск',
    coord: { lon: 91.284172, lat: 53.823608 },
  },
  {
    value: 569591,
    label: 'Чехов',
    coord: { lon: 37.471111, lat: 55.143055 },
  },
  {
    value: 2025339,
    label: 'Чита',
    coord: { lon: 113.550003, lat: 52.033329 },
  },
  {
    value: 1492517,
    label: 'Шадринск',
    coord: { lon: 63.633499, lat: 56.085201 },
  },
  {
    value: 495957,
    label: 'Шали',
    coord: { lon: 45.901939, lat: 43.14806 },
  },
  {
    value: 496015,
    label: 'Шахты',
    coord: { lon: 40.214432, lat: 47.70911 },
  },
  {
    value: 493228,
    label: 'Шуя',
    coord: { lon: 34.232712, lat: 61.952511 },
  },
  {
    value: 495344,
    label: 'Щелково',
    coord: { lon: 37.99139, lat: 55.921665 },
  },
  {
    value: 563514,
    label: 'Элиста',
    coord: { lon: 44.255829, lat: 46.307781 },
  },
  {
    value: 2119441,
    label: 'Южно-Сахалинск',
    coord: { lon: 142.733658, lat: 46.958118 },
  },
  {
    value: 1485724,
    label: 'Юрга',
    coord: { lon: 84.886108, lat: 55.723061 },
  },
];

export default cities;
