var budget = prompt('Сколько Вы зарабатываете?', '50.000 рублей');

alert(budget + ' хорошая сумма!')

var nameStore = prompt('Введите название Вашего магазина', 'Успех');

alert(nameStore + ' интересное название!')

const mainList = {
    budget: 1000000,
    nameStore: 'Успех',
    shopGoods: ['vest', 'shorts', 'trainers'],
    employers: { // почему объект?
      john: {
        name: 'John',
        age: 23
      },
      rast: {
        name: 'Rast',
        age: 28
      }
    },
    open: true // видимо, открыт магазин или нет
  }