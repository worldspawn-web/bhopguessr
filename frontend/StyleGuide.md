# TypeScript

## Именование

### Идентификаторы

- класс - `UpperCamelCase`
- интерфейс - `UpperCamelCase`, не добавляем в имя информацию говорящую о том, что это интерфейс. `interface Reader {}` - правильно, `interface IReader {}` - неправильно.
- тип - `UpperCamelCase`, не добавляем в имя информацию говорящую о том, что это тип. `type Reader {}` - правильно, `type TReader {}` - неправильно.
- enum - `UpperCamelCase`
- декоратор - `UpperCamelCase`
- параметры шаблона - `UpperCamelCase` или одна заглавная латинская буква.
- переменная - `lowerCamelCase`
- параметр - `lowerCamelCase`
- функция - `lowerCamelCase`
- метод - `lowerCamelCase`
- поле класса/объекта - `lowerCamelCase`
- "псевдоним" модуля (`import * as moduleAlias from "some/module"`) - `lowerCamelCase`
- константы - CONSTANT_CASE если примитивное нзначение - `const SOME_STRING = 'string'`. `UpperCamelCase` - Если ссылка на объект или массив то как `enum`.
- `static readonly` поля класса - `CONSTANT_CASE`
- значения enum - `CONSTANT_CASE`

### Пакеты

Для именования пакетов используем `lowerCamelCase`.

### Интерфейсы

Интерфейсы выносим в отдельный файл. Файл называем `*.interface.ts`, где `*` - название сущности (файла для, которого пишем интерфейсы). Для маленьких модулей с небольшим количеством интфейсов допустимо иметь один файл `interface.ts`.

## Аббревиатуры

Использование аббревиатур нежелательно, за исключением общепринятых, например: `SQL, HTTP, JSON`.  
Аббревиатуру рассматриваем, как слово в camel case. Например:
`loadHttpRequest` - правильно, `loadHTTPRequest` - неправильно.

## Imports

Включаем автоматическую сортировку для импортов

- для vscode: [статья: How to: Enable automatic import sorting in VS Code ](https://dev.to/shanesc/how-to-sort-and-cleanup-imports-on-save-in-vs-code-52p1)

Порядок импортов разделяем (пустой строкой) по категориям для удобства

- Импорты библиотек
- Абсолютные пути внутри проектов
- Все остальные относительные пути

Правильно:

```ts
import { useState } from "react";
import { twMerge } from "tailwind-merge";

import { Dropdown } from "@common";

import { Input, Label } from "../ui";
import type { TextFieldProps } from "./textField.interface";
```

Неправильно:

```ts
import { useState } from "react";
import { Input, Label } from "../ui";
import { Dropdown } from "@common";
import { twMerge } from "tailwind-merge";
import type { TextFieldProps } from "./textField.interface";
```

## \_ префикс

Для неиспользуемых переменных используем `_` префикс.

## Длинные строки

Правильно:

```ts
const LONG_STRING =
  "This is a very long string that far exceeds the " +
  "column limit. It does not contain long stretches of spaces since " +
  "the concatenated strings are cleaner.";
```

Неправильно:

```ts
const LONG_STRING =
  "This is a very long string that far exceeds the \
    column limit. It unfortunately contains long stretches of spaces due \
    to how the continued lines are indented.";
```

## Использование {} в `if, for, while, switch, try catch`

В `if, for, while, switch, try catch` ненужно опускать `{}` для экономии строк.

Правильно:

```ts
if (condition) {
  return value;
}
```

Неправильно:

```ts
if (condition) return value;
```

Правильно:

```ts
while (condition) {
  doSomething();
}
```

Неправильно:

```ts
while (condition) doSomething();
```

## Переменные

Всегда используем `let` и `const` для объявления переменных. По умолчанию используем `const`, используем `let` только если значение переменной или ссылка будет меняться. Не используем `var`.

## Сравнение

Всегда используем `===` и `!==` вместо `==` и `!=`

## Комментарии

Для документации используем `/** JSDoc */`.
Для деталей реализации используем `// line comments`

## Видимость

Стараемся ограничивать видимость идентификаторов на столько на сколько это возможно.
Идентификаторы в TypeScript публичные по умолчанию, не нужно использовать модификатор `public` для публичных не `readonly` свойств.

## Конструкторы

Вызовы конструктора должны использовать скобки.

Правильно: `const foo = new Foo();`
Неправильно: `const foo = new Foo;`

## Поля классов

### `#private` поля

Не используем `#private` поля

Правильно:

```ts
class MyClass {
  private myField = 0;
}
```

Неправильно:

```ts
class MyClass {
  #myField = 0;
}
```

### Parameter properties

Вместо написания очевидной инициализации полей класса параметрами конструктора используйте `parameter properties`.

Правильно:

```ts
class Foo {
  constructor(private readonly bar: number) {}
}
```

Неправильно:

```ts
class Foo {
    private readony bar: number;

    constructor(bar: number) {
        this.bar = bar;
    }
}
```

### Инициализаторы полей

Если поле класса не является параметром, инициализируйте его в месте объявления.

Правильно:

```ts
class Foo {
  private readonly bar: number = 0;
}
```

Неправильно:

```ts
class Foo {
  private readonly bar: number;

  constructor() {
    this.bar = 0;
  }
}
```

### Геттеры и сеттеры

Геттеры и сеттеры должны быть чистыми функциями.

Хотя бы один из пары геттер/сеттер должен быть логику отличную от просто вернуть/присвоить приватное значение.

Правильно:

```ts
class Foo {
  private wrappedBar = "";
  get bar() {
    return this.wrappedBar || "bar";
  }

  set bar(wrapped: string) {
    this.wrappedBar = wrapped.trim();
  }
}
```

Неправильно:

```ts
class Bar {
  private barInternal = "";

  get bar() {
    return this.barInternal;
  }

  set bar(value: string) {
    this.barInternal = value;
  }
}
```

## Примитивные типы и классы-обертки

Не стоит использовать в TypeScript коде классы-обертки для примитивных типов (`String`, `Boolean`, `Number`). Это может приводить к неожиданному поведению. Например `new Boolean(false)` будет считаться как `true`.

Правильно:

```ts
const s = "hello";
const b = false;
const n = 5;
```

Неправильно:

```ts
const s = new String("hello");
const b = new Boolean(false);
const n = new Number(5);
```

## Конструктор Array

Не нужно использовать конструктор Array. Он имеет сбивающее с толку поведение:

```ts
const a = new Array(2); // [undefined, undefined]
const b = new Array(2, 3); // [2, 3];
```

Вместо этого всегда используйте `[]` для инициализации массивов или `Array.from` для инициализации массива определенного размера:

```ts
const a = [2];
const b = [2, 3];

// Equivalent to Array(2):
const c = [];
c.length = 2;

// [0, 0, 0, 0, 0]
Array.from<number>({ length: 5 }).fill(0);
```

## Преобразования типов

Для парсинга чисел нужно использовать `Number()` и проверять возвращаемое значение на `NaN`, за исключением случаев когда ошибка при парсинге не возможна в данном контексте.

_Примечание `Number('')`, `Number(' ')`, и `Number('\t')` вернут `0` вместо `NaN`. `Number('Infinity')` и `Number('-Infinity')` вернут `Infinity` и `-Infinity` сответсвтенно. Дополнительно экспоненциальная нотация такая как `Number('1e+309')` and `Number('-1e+309')` и могут перетекать в `Infinity`. Эти случаи могут требовать специальной обработки._

Правильно:

```ts
let f = Number(someString);
if (isNaN(f)) {
  handleError();
};
f = Math.floor(f);
```

В коде не должен использоваться унарный плюс (`+`) для преобразования строк в числа. Парсинг чисел может выполняться с ошибками и имеет неожиданное поведение в некоторых случаях, а унарный плюс очень легко пропустить на код ревью.

Неправильно:
```ts
const x = +y;
```

В коде так же не должны использоваться `parseInt` и `parseFloat`, за исключением парсинга не десятеричных строк. Парсинг строк с недесятеричными числами должен включать проверку, что входные данные содержат только поддерживаемые символы для данного основания.

Правильно:

```ts
if (!/^[a-fA-F0-9]+$/.test(someString)) throw new Error(...);
// Needed to parse hexadecimal.
const n = parseInt(someString, 16);  // Only allowed for radix != 10
```

## Исключения

Всегда используйте `new Error()` для инициализации ошибок вместо просто вызова `Error()`:
Правильно:
```ts
throw new Error("some error");
```
Неправильно:
```ts
throw Error("some error");
```

Бросая исключение всегда используйте `Error` или его подклассы.
Правильно:
```ts
throw new Error("some error");
```
Не правильно:
```ts
throw "some error";
```

## Итерирование по объектам

Не использует `for (... in ...)` выражения без фильтров.

Правильно:

```ts
for (const x in someObj) {
  if (!someObj.hasOwnProperty(x)) {
    continue;
  }
  // now x was definitely defined on someObj
}
for (const x of Object.keys(someObj)) {
  // note: for _of_!
  // now x was definitely defined on someObj
}
for (const [key, value] of Object.entries(someObj)) {
  // note: for _of_!
  // now key was definitely defined on someObj
}
```

Неправильно:

```ts
for (const x in someObj) {
  // x could come from some parent prototype!
}
```

## Итерация по контейнерам

Не используйте `for (... in ...)` для итерации по массивам. Этот способ даст вам индексы массива (ввиде строк) а не элементы:

```ts
for (const x in someArray) {
  // x is the index!
}
```

Для итерации по элементам массива используйте `for (... of someArr)`. `Array.prototype.forEach` и традиционные циклы `for` так же допустимы.

```ts
for (const x in someObj) {
  if (!someObj.hasOwnProperty(x)) {
    continue;
  }
  // now x was definitely defined on someObj
}
for (const x of Object.keys(someObj)) {
  // note: for _of_!
  // now x was definitely defined on someObj
}
for (const [key, value] of Object.entries(someObj)) {
  // note: for _of_!
  // now key was definitely defined on someObj
}
```

## spread оператор

При использовании spread оператора, декомпозируемое значение должно соответствовать создаваемому. Т.е., когда создаем объект, только объекты могут использоваться в spread операторе. Когда создаем массив, только итерируемые объекты могут быть использованы для декомпозиции. Примитивные типы включая `null` и `undefined` не должны использоваться для декомпозиции.

Правильно:

```ts
const foo = shouldUseFoo ? { num: 7 } : {};
const bar = { num: 5, ...foo };
const fooStrings = ["a", "b", "c"];
const ids = [...fooStrings, "d", "e"];
```

Неправильно:

```ts
const foo = { num: 7 };
const bar = { num: 5, ...(shouldUseFoo && foo) }; // might be undefined

// Creates {0: 'a', 1: 'b', 2: 'c'} but has no length
const fooStrings = ["a", "b", "c"];
const ids = { ...fooStrings };
```

## Функции

Используйте стрелочные функции в выражениях:

Правильно:

```ts
bar(() => {
  this.doSomething();
});
```

Неправильно:

```ts
bar(function() {
  this.doSomething();
});
```

Используйте стрелочные функции с телом в виде выражения только тогда, когда результат стрелочной функции используется.

Правильно:

```ts
const names = myArray.map((value) => value.name);
```

Неправильно:

```ts
myPromise.then(v => console.log(v));
```

Оборачивайте аргументы функции в скобки

Правильно:

```ts
myArray.map((value) => value.name);
```

Неправильно:

```ts
myArray.map(value => value.name);
```

## Type assertions

Используйте аннотации типов (`: Foo`) вместо types assertions (`as Foo`), что бы объявить тип объекта. Это позволить находить ошибки рефакторинга, когда поля интерфейса изменяются с течением времени.

Правильно:

```ts
interface Foo {
  bar: number;
  baz?: string;
}

const foo: Foo = {
  bar: 123,
  bam: "abc", // complains about "bam" not being defined on Foo.
};
```

Неправильно:

```ts
interface Foo {
  bar: number;
  baz?: string; // was "bam", but later renamed to "baz".
}

const foo = {
  bar: 123,
  bam: "abc", // no error!
} as Foo;
```

## Экспорт

Не используйте `export default`, используйте именованный экспорт.
Не экспортируйте мутабельные объекты. Другими словами `export let` запрещен.

## React

### props компонент

Необходимо проводить деструктуризацию props компонент в начале функции. Это поможет линтеру выявлять неиспользуемые props.

Правильно:

```ts
interface ComponentProps {
  a: number;
  b: number;
}

const MyComponent = ({a, b}: ComponentProps) => {...};
```

Тоже правильно:

```ts
interface ComponentProps {
  a: number;
  b: number;
}

const MyComponent = (props: ComponentProps) => {
  const {a, b} = props;
};
```

Неправильно:

```ts
interface ComponentProps {
  a: number;
  b: number;
}

const MyComponent = (props: ComponentProps) => {
};
```

### Компоненты

Один файл содержит одну компоненту.