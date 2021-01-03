/* eslint-disable max-len */
test('object should be sorted', () => {
  const sortFunction = jest.fn((obj, [a, b]) => {
    const startArr = Object.entries(obj);
    const arr = [];
    // eslint-disable-next-line guard-for-in
    for (const item in startArr) {
      const objToSort = {
        key: startArr[item][0],
        value: startArr[item][1],
      };
      if (objToSort.key === a) {
        arr[0] = objToSort;
      }
      if (objToSort.key === b) {
        arr[1] = objToSort;
      }
    }
    startArr.forEach((item) => {
      if (item[0] === 'name' || item[0] === 'level') {
        startArr.splice(startArr.indexOf(item), 1);
      }
    });
    startArr.sort();
    // eslint-disable-next-line guard-for-in
    for (const item in startArr) {
      const objToSort = {
        key: startArr[item][0],
        value: startArr[item][1],
      };
      arr.push(objToSort);
    }
    return arr;
  });

  sortFunction({
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  }, ['name', 'level']);

  expect(sortFunction).toHaveReturnedWith([
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ]);
});

test('another object should be sorted', () => {
  const sortFunction = jest.fn((obj, [a, b]) => {
    const startArr = Object.entries(obj);
    const arr = [];
    // eslint-disable-next-line guard-for-in
    for (const item in startArr) {
      const objToSort = {
        key: startArr[item][0],
        value: startArr[item][1],
      };
      if (objToSort.key === a) {
        arr[0] = objToSort;
      }
      if (objToSort.key === b) {
        arr[1] = objToSort;
      }
    }
    startArr.forEach((item) => {
      if (item[0] === 'name' || item[0] === 'level') {
        startArr.splice(startArr.indexOf(item), 1);
      }
    });
    startArr.sort();
    // eslint-disable-next-line guard-for-in
    for (const item in startArr) {
      const objToSort = {
        key: startArr[item][0],
        value: startArr[item][1],
      };
      arr.push(objToSort);
    }
    return arr;
  });

  sortFunction({
    mock: 'killMyBrain',
    name: 'лучник',
    health: 8,
    level: 3,
    attack: 95,
    defence: 25,
    iq: 220,

  }, ['name', 'level']);

  expect(sortFunction).toHaveReturnedWith([
    { key: 'name', value: 'лучник' },
    { key: 'level', value: 3 },
    { key: 'attack', value: 95 },
    { key: 'defence', value: 25 },
    { key: 'health', value: 8 },
    { key: 'iq', value: 220 },
    { key: 'mock', value: 'killMyBrain' },
  ]);
});

// Есть вопрос по поводу теста, есть ли вариант не использовать mock, чтобы проверить что возвращает функция?
// Эта тема с mock оказалась как танцы с бубном, хотя на первый взгляд кажется логично, что если просто написать
// expect(function(args)).toReturn('нужный мне ответ'), то выглядит логично и красиво, а мое решение что в самой функции,
// что тест(из-за мока) похож на костыль.
