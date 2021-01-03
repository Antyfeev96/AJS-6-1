const object = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

const sortFunc = (obj, [a, b]) => {
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
};

sortFunc({
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
}, ['name', 'level']);

export default sortFunc;
