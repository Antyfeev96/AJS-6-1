/* eslint-disable max-len */
/* eslint-disable one-var */
export default function sortFunc(object, table) {
  const arrayByTable = [],
    arrayByName = [];

  // eslint-disable-next-line guard-for-in
  for (const prop in object) { // предполагается отсутствие перечисляемых свойств у прототипа, поэтому отдельной проверки нет
    const keyValue = { key: prop, value: object[prop] },
      index = table.indexOf(prop);

    if (index !== -1) {
      arrayByTable[index] = keyValue;
    } else {
      arrayByName.push(keyValue);
    }
  }

  if (table.length !== arrayByTable.length) {
    throw new Error('В таблице есть неверные свойства');
  }

  arrayByName.sort((a, b) => (a.key > b.key ? 1 : -1)); // 0, думаю, необязателен, т. к. одинаковых свойств быть не может

  const concatedArray = arrayByTable.concat(arrayByName);
  return concatedArray;
}
