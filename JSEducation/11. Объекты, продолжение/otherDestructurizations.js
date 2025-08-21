// Деструктуризация в параметрах функции
// Можно сделать внутри функции, первый способ.
const logAddress1 = (address) => {
  const {
    city,
    street,
    houseNumber,
    apartmentNumber
  } = address;
  console.log(`
    Адрес:
    г. ${city}, ул. ${street}
    д. ${houseNumber}, ${apartmentNumber}
  `);
}

addressVova = {
  city: "Москва",
  street: "Пушкина",
  houseNumber: 10,
  apartmentNumber: 123,
}

logAddress1(addressVova);

// Второй вариант, более сокращённый. Прописать деструктуризацию в скобках в следующем виде:
const logAddress2 = ({
  city,
  street,
  houseNumber,
  apartmentNumber,
}) => {
  console.log(`
    Адрес:
    г. ${city}, ул. ${street}
    д. ${houseNumber}, ${apartmentNumber}
  `);
}

// Деструктуризация со значением по умолчанию
// Также можно сделать комбо: с переименованием и значением по умолчанию.
const {city: vovaCity = "Неизвестен", street, housNumber, apartmentNumber, staysFrom = "Не указано", staysTo = "Не указано"} = addressVova;

console.log(staysFrom);

// Остаточные параметры при деструктуризации: если они будут, то они перенесутся в объект otherInfo
// Если остаточных параметров не будет, то otherInfo будет undefined. Остаточные параметры при деструктуризации
// ДОЛЖНЫ ПРОПИСЫВАТЬСЯ В КОНЦЕ. Поэтому они и называются остаточными.
const logUser = ({
  name,
  age,
  city,
  ...otherInfo // Для переноса оставшихя свойств, используем spread operator.
}) => {
  console.log(`
  Имя: ${name}, возраст: ${age},
  Город: ${city}.
  `);
  console.log("Дополнительная информация", otherInfo);
}

// Все совпадения являются случайностью
const user = {
  name: "Кристина",
  age: 27,
  city: "Санкт-Петербург",
  isDeveloper: true,
  developerType: "Frontend",
}

logUser(user);
