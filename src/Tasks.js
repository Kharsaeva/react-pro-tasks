import React from "react";

export function Tasks() {
    /* 1 - Замена всех отрицательных чисел
      `[2, -2, 0.1, 0, 0, -10, -9.9, -0.5, 0.3, 0.003, 2]`
      Написать код, который все отрицательные значения элементов
      В итоге должно получиться:
      `[2, 0, 0.1, 0, 0, 0, 0, 0, 0.3, 0.003, 2]`*/

    const arr = [2, -2, 0.1, 0, 0, -10, -9.9, -0.5, 0.3, 0.003, 2];

    const newArr = arr.map((item) => {
        if (item < 0) {
            return 0;
        }
        return item;
    });

    console.log(newArr);

    /* 2 - Избавляемся от близнецов
    Обработать массив так, чтобы в итоге остались элементы,
    у которых значения свойств `a` и `b` не совпадают.*/

    const elements = [
        { a: 2, b: 12 },
        { a: 0.1, b: 0.1 },
        { a: 0, b: 1 },
        { a: 100, b: 1000 },
        { a: 4, b: 4 }
    ];

    const newElements = elements.filter((item) => {
        if (item.a === item.b) {
            return false;
        }
        return item;
    });

    console.log(newElements);

    /* 3 - Поиск близнеца
    Написать код, который в предыдущем массиве найдет
    какого-нибудь близнеца(объекта, у которого
    значения обеих свойств равны) и вернет сумму этих значений.
    */

    const sumElements = elements.find((item) => item.a === item.b);

    console.log(sumElements.a + sumElements.b);

  return (
    <div> </div>
  );
}

