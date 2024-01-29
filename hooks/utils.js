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
  for (let i in subArray) {
    if (subArray.indexOf(item) != -1) {
      return true;
    }
    return false;
  }
};

const re = /(?:https?:\/\/)?(?:www\.)?(.*?)\//;

const produceDomains = (arr) => {
  let domains = [];
  arr.map((item) => domains.push(item.url.match(re)[1]));
  console.log(domains);
  const url = `https://newsapi.org/v2/everything?apiKey=677c9719571a45b9b1a86ed3bced6ab7&"domains=${domains.join()}`;
  return url;
};
