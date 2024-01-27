export const truncateString = function (str, len) {
  if (str.length >= len) {
    return str.substring(0, len) + "…";
  }

  return str;
};

export const getAllData = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys(); // Получаем все ключи
    const data = await AsyncStorage.multiGet(keys); // Получаем данные по всем ключам
    console.log(data); // Выводим все данные в консоль
  } catch (error) {
    // Обработка ошибки
    console.log(error);
  }
};
export const contains = (item, subArray) => {
  for (let i = 0; i < subArray.length; i++) {
    if (subArray.indexOf(item) != 1) {
      return true;
    }
    return false;
  }
};
