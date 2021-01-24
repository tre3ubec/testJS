let string = 'Демонстрация методов строк в JS.'

// Метод: charAr
// Действие: Возвращает символ по указанному индексу.
// Перевод: char - символьный тип, at - в
// Пример:

console.log(string.charAt(5)) // c
console.log(string.charCodeAt(5)) // значение символа в Юникоде

// Метод: concat
// Действие: Объединяет текст двух строк и возвращает новую строку.
// Перевод: concatenation - объединение
// Пример:

console.log(string.concat(' Объединение строк')) // Демонстрация методов строк в JS. Объединение строк

// Метод: includes
// Действие: Определяет, находится ли строка внутри другой строки.
// Перевод: включает
// Пример:

console.log(string.includes('Демон')) // true

// Метод: endsWith()
// Действие: Определяет, заканчивается ли строка символами другой строки.
// Перевод: заканчивается с участием
// Пример:

console.log(string.endsWith('JS.')) // true

// Метод: indexOf()
// Действие: Возвращает индекс первого вхождения указанного значения в объекте String, на котором был вызван этот метод, или -1, если вхождений нет.
// Перевод: индекс из
// Пример:

console.log(string.indexOf('строк', 0)) // 21
console.log(string.lastIndexOf('строк')) // 21

// Метод: localeCompare()
// Действие: Возвращает число, указывающее, находится ли образцовая строка до, после или на том же самом месте, что и указанная строка в порядке сортировки.
// Перевод: локальное сравнение
// Пример:

console.log('b'.localeCompare('a'))  // 1

// Метод: match()
// Действие: Используется для сопоставления строке регулярного выражения.
// Перевод: соответсвие
// Пример:

console.log('ololo'.match(/\w{5}/g)) // ["ololo"]

// Метод: normalize()
// Действие: Возвращает форму нормализации Юникода для строкового значения.
// Перевод: нормализация
// Пример:



// Метод: repeat()
// Действие: Возвращает строку. состоящую из элементов объекта, повторённых указанное количество раз.
// Перевод: повторить
// Пример:

console.log('hello '.repeat(5)) // hello hello hello hello hello

// Метод: replace()
// Действие: Используется для сопоставления строке регулярного выражения и для замены совпавшей подстроки на новую подстроку.
// Перевод: заменить
// Пример:

console.log('hello, my name is Kirill'.replace(/\w{6}/g, 'Ivan')) // hello, my name is Ivan

// Метод: search()
// Действие: Выполняет поиск совпадения регулярного выражения со строкой. При успехе метод search() возвращает индекс первого сопоставления с регулярным выражением внутри строки. В противном случае метод вернёт -1.
// Перевод: поиск
// Пример:

console.log('Kirill'.search(/\w{6}/)) // 0

// Метод: slice()
// Действие: Извлекает часть строки и возвращает новую строку
// Перевод: ломтик, часть, доля
// Пример:

console.log("Hello, I'll be in Moscow tomorrow".slice(0, 5)) // Hello
// аргументы: 0 - начальный индекс, 5 - конечный индекс

// Метод: split()
// Действие: Разбивает объект String на массив строк, разделёных указанной строкой на подстроки
// Перевод: разрыв
// Пример:

console.log(string.split(' ')) // ["Демонстрация", "методов", "строк", "в", "JS."]

// Метод: startsWith()
// Действие: Определяет, начинается ли строка символами другой строки.
// Перевод: начинается с
// Пример:

console.log(string.startsWith('Демонстрация')) // true

// Метод: substr()
// Действие: Возвращает указанное количество символов в строке, начинающихся с указанной позиции.
// Перевод: подчинение строкой
// Пример:

console.log(string.substr(13)) // методов строк в JS.

// Метод: substring()
// Действие: Возвращает символы в строке между двумя индексами.
// Перевод:
// Пример:

console.log(string.substring(0, 12)) // Демонстрация

// Метод: toLowerCase() & toUpperCase
// Действие: Возвращает строковое значение с символами в нижнем регистре
// Перевод: lower - низкий
// Пример:

console.log('HELLO'.toLowerCase()) // hello
console.log('hello'.toUpperCase())


// Метод: trim() & trimLeft() & trimRight()
// Действие: Обрезает пробелы в начале и конце строки
// Перевод: обрезка
// Пример:

console.log(' Hello world! '.trim())

