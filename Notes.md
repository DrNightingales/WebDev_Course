
- [Week 1](#week-1)
  - [Группирующие элементы](#группирующие-элементы)
    - [`<main>`](#main)
    - [`<p>`](#p)
    - [`<pre>`](#pre)
    - [`<blockquote>`](#blockquote)
    - [`<ol>`](#ol)
    - [`<ul>`](#ul)
    - [`<figure>` и `<figcaption>`](#figure-и-figcaption)
    - [`<div>`](#div)
  - [Таблицы](#таблицы)
    - [`<table>`](#table)
    - [`<tr>`](#tr)
    - [`<td>`](#td)
    - [`<thead>` и `<th>`](#thead-и-th)
    - [`<tfoot>`](#tfoot)
    - [`<caption>`](#caption)
  - [Текстовые элементы](#текстовые-элементы)
    - [`<em>`](#em)
    - [`<strong>`](#strong)
    - [`<mark>`](#mark)
    - [`<small>`](#small)
    - [`<q>`](#q)
    - [`<ruby>`, `<rt>`](#ruby-rt)
    - [`<samp>`, `<kbd>`](#samp-kbd)
    - [`<code>`](#code)
    - [`<sup>`, `<sub>`](#sup-sub)
    - [`<br>`](#br)
    - [`<wbr>`](#wbr)
    - [`<span>`](#span)
  - [Ссылки](#ссылки)
- [Week 2](#week-2)
  - [Семантическая разметка](#семантическая-разметка)
    - [`<article>`](#article)
    - [`<section>`](#section)
    - [`<nav>`](#nav)
    - [`<aside>`](#aside)
    - [`<header>`](#header)
    - [`<footer>`](#footer)
    - [`<address>`](#address)
    - [`<hX>`](#hx)
    - [`<hgroup>`](#hgroup)
    - [Микроразметка](#микроразметка)
    - [Визуальная разметка](#визуальная-разметка)
  - [Ссылочные элементы](#ссылочные-элементы)
    - [`<a>`](#a)
  - [Встраиваемые элементы](#встраиваемые-элементы)
    - [`<img>`](#img)
    - [`<iframe>`](#iframe)
    - [`<video>`](#video)
    - [`<audio>`](#audio)
    - [`<track>`](#track)
  - [Формы](#формы)
  - [i18n](#i18n)
  - [Ссылки](#ссылки-1)
# Week 1
## Группирующие элементы
### `<main>` 
главное содержимое страницы (отличия в спец.)
### `<p>`
параграф текста 
```html
<p>First paragraph <p>Second paragraph</p></p>
```
преобразуется в 
```html
<p>First paragraph</p><p>Second paragraph</p>
```
`<hr>` - добавляет горизонтальную линию
### `<pre>`
Создает параграф преформатированного текста, например для ASCII
### `<blockquote>`
Создание длинной цитаты
Аттрибут `cite` указывает источник
### `<ol>`
Создает упорядоченный список
`reversed` для родительского э-та инвертирует нумерацию<br>
`type` для родительского э-та меняет тип нумерации
Пример вложенного списка
```html
<ol type="I">
    <li> Первый элемет</li> <!-- Можно не закрывать li -->
    <li> Вложенный список:
        <ol> <!-- Не действует type -->
            <li> Вложенный э-т <li>
        </ol>
    </li>
</ol>
```

<ol type="I">
    <li> Первый элемет</li> <!-- Можно не закрывать li -->
    <li> Вложенный список:
        <ol> <!-- Не действует type -->
            <li> Вложенный э-т </li>
        </ol>
    </li>
</ol>

### `<ul>`
Маркированный список
### `<figure>` и `<figcaption>`
Первый группирует, второй созадет подпись, например: 
```html
<figure>
    <figcaption>Listing 5.3. Function definiton</figcaption>
    <pre>
        <code>
            def func(a, b):
                return a**b - a*b + a + b
        </code>
    </pre>
</figure>
```

<figure>
    <figcaption>Listing 5.3. Function definiton</figcaption>
    <pre>
        <code>
def func(a, b):
    return a**b - a*b + a + b
        </code>
    </pre>
</figure>

### `<div>`
Универсальный группирующий э-т, не несет семантической нагрузки, нужен для объединения кода по стилю/функционалу

## Таблицы
### `<table>`
Задает таблицу
### `<tr>`
Задает горизотальный ряд
### `<td>`
Задает ячейку в ряду
```html
<table>
    <tr> <!--First row-->
        <td> Some data in the fisrt row, first column </td>
        <td> Some data in the fisrt row, second column </td>
    </tr>
    <tr> <!--Second row-->
        <td> Some data in the second row, first column </td>
        <td> Some data in the second row, second column </td>
    </tr>
</table>
```
<table>
    <tr> <!--First row-->
        <td> Some data in the fisrt row, first column </td>
        <td> Some data in the fisrt row, second column </td>
    </tr>
    <tr> <!--Second row-->
        <td> Some data in the second row, first column </td>
        <td> Some data in the second row, second column </td>
    </tr>
</table>

Объединение ячеек по горизонтали с помощью аттрибута `colspan`:
```html
<table>
    <tr> <!--First row-->
        <td colspan=2> Some data in the fisrt row, first and second column </td>
    </tr>
    <tr> <!--Second row-->
        <td> Some data in the second row, first column </td>
        <td> Some data in the second row, second column </td>
    </tr>
</table>
```

<table>
    <tr> <!--First row-->
        <td colspan=2> Some data in the fisrt row, first and second column united</td>
    </tr>
    <tr> <!--Second row-->
        <td> Some data in the second row, first column </td>
        <td> Some data in the second row, second column </td>
    </tr>
</table>

Объединение ячеек по горизонтали с помощью аттрибута `rowspan`:
```html
<table>
    <tr> <!--First row-->
        <td rowspan=2> Some data in the fisrt and second row united, first column </td>
        <td> Some data in the fisrt row, second column </td>
    </tr>
    <tr> <!--Second row-->
        <td> Some data in the second row, second column </td>
    </tr>
</table>
```

<table>
    <tr> <!--First row-->
        <td rowspan=2> Some data in the fisrt and second row united, first column </td>
        <td> Some data in the fisrt row, second column </td>
    </tr>
    <tr> <!--Second row-->
        <td> Some data in the second row, second column </td>
    </tr>
</table>

### `<thead>` и `<th>`
Заголовок таблицы (по умолчанию - **bold**)
### `<tfoot>` 
Подвал таблицы, должен идти строго после `<thead>` (при наличии), в качестве ячеек используется `<td>`
### `<caption>`
Создает подпись к таблице

## Текстовые элементы
Не создают разрыва до/после себя
### `<em>`
Emphasis - акцентирование внимания (по умолчанию - курсив)
### `<strong>`
Сообщает важную инфу (по умолчанию - жирный)
### `<mark>`
Выделение текста (по умолчанию - желтый фон)
### `<small>`
Доп. инфа, уточнение
### `<q>`
Цитата внутри текста (оборачивает в кавычки по умолчанию)
### `<ruby>`, `<rt>`
Небольшая аннотация сверху/снизу от заданного текста, например, транскрипцию, фуригану или перевод
```html
<ruby>日本語<rt>にほんご</rt>が難<rt>むずか</rt>しいけど、とても面白<rt>おもしろ</rt>いと思<rt>おも</rt>います。</ruby>
```
<ruby>日本語<rt>にほんご</rt>が難<rt>むずか</rt>しいけど、とても面白<rt>おもしろ</rt>いと思<rt>おも</rt>います。</ruby>

### `<samp>`, `<kbd>`
Sample output and keyboard (monospace by default)
### `<code>`
Программный код
### `<sup>`, `<sub>`
Верхний и нижний индексы
### `<br>`
Принудительный перенос строки
### `<wbr>`
word breek opportunity - указывает, где в длинном слове возможно сделать перенос
### `<span>`
Аналогичен `<div>`
## Ссылки
* [WhatWG](https://whatwg.org/)
  * [Спецификация HTML 5.1](https://html.spec.whatwg.org/multipage/)
  * [Спецификация WHATWG](https://html.spec.whatwg.org/multipage/embedded-content.html)
  * [Список э-тов без закр. тега](https://html.spec.whatwg.org/multipage/syntax.html#optional-tags)
  * [REl](https://html.spec.whatwg.org/multipage/links.html#linkTypes)
  * [Html entity](https://html.spec.whatwg.org/multipage/named-characters.html#named-character-references)
* [W3C](https://www.w3.org/)
  * [Отслеживание разработки спецификаций](https://www.w3.org/participate/discussion.html)
  * [Валидатор](https://validator.w3.org/)
* [Справочник](https://webref.ru/html)
  * [Основы HTML](https://webref.ru/course/html-basics)
* [RSS](https://cyber.harvard.edu/rss/rss.html)
* [OpenGraph](https://cyber.harvard.edu/rss/rss.html)
* [HTML5 BOOK](https://html5book.ru/)
# Week 2
## Семантическая разметка
Названия элементов сооствествуют их смысловой нагрузке
### `<article>`
Обозначает законченную самодостаточную часть документа, например 
* пост на форуме
* новостную статью
* виджет
### `<section>`
Определяет тематическую группу, например:
* комментарии к посту
* главы в статье
* список постов
### `<nav>`
Определяет блок с навигацией
### `<aside>`
Определяет блок, в котором содержится сопутствующее содержимое страницы
### `<header>`
Шапка всего докмента или секции
### `<footer>`
Подвал всего документа или секции
### `<address>`
Контактная информация для ближайшего `<article>` или `<body>`, часто размещается в `<footer>`
### `<hX>`
Первый заголовок в body/section/article влияет на поисковую выдачу <br>
X = 1-6, Заголовок
### `<hgroup>`
Элемент для группирования заголовков, например, заголовок и подзаголовок фильма
Считается устаревшим
### Микроразметка
* [Open graph](https://ogp.me/) - Стандарт от фейсбук для взаимодействия с соц. сетями
* [Schema.org](https://schema.org/) - Разметка для поисковых запросов
* [Микроформаты](https://microformats.org/) - Аналогично shema.org
### Визуальная разметка
Теги `<i>`,`<b>`,`<s>`,`<u>`, `<center>` считаются устаревшими 
## Ссылочные элементы
### `<a>`
Встраивает ссылку в документ, аттрибут `href="..."` указывает адрес. <br>
URL ссылка имеют вид протокол+домен+путь<br>
Виды ссылок: 
* абсолютные 
* относительные 
Якорь через `id="..."` и `#...`<br>
`target` принимает два значения `_blank`(в новом окне/вкладке), `_self`(в текущем окне)
## Встраиваемые элементы
### `<img>`
Встраивает картинку на сайт. `<title>` - подпись при наведении мыши. `<alt>` - альтернативный текст (должен быть всегда, так как его зачитывает screen reader). `<alt>` для декоративных картинок должен быть, но пустым. <br>
Аттрибуты `<width>` и `<height>` настраивают размер картинки в пикселях. Если есть только один из двух, то второй параметр устанавливается пропорционально, если указаны оба, то соотношение может быть разрушено.
### `<iframe>`
Позволяется загружать в область заданных размеров любой другой независимый документ. Аттрибут `src` указывает источник.
### `<video>`
Встраивает видео на страницу, но так как разные браузеры поддерживают разные форматы, то лучше встраивать альтернативные форматы:
```html
<video width="400" height="300" poster="video/rabbit.jpg" controls autoplay loops>
    <source src="video/rabbit.mp4" type="video/mp4">
    <source src="video/rabbit.ogv" type="video/ogg">
    Элемент не поддерживается вашим браузером.
    <a href="video/rabbit.mp4">Скачайте видео</a>
    </video>
```

* `autoplay` Видео начинает воспроизводиться автоматически после загрузки страницы.
* `controls` Добавляет панель управления к видеоролику.
* `loop` Повторяет воспроизведение видео с начала после его завершения.
* `poster` Указывает адрес картинки, которая будет отображаться, пока видео не доступно или не воспроизводится. 
* `preload` Используется для загрузки видео вместе с загрузкой веб-страницы.
* `src` Указывает путь к воспроизводимому видеоролику.
* `height` Задаёт высоту области для воспроизведения видеоролика.
* `width` Задаёт ширину области для воспроизведения видеоролика. 
### `<audio>`
```html
  <audio controls>
    <source src="audio/music.ogg" type="audio/ogg; codecs=vorbis">
    <source src="audio/music.mp3" type="audio/mpeg">
    Тег audio не поддерживается вашим браузером. 
    <a href="audio/music.mp3">Скачайте музыку</a>.
  </audio>
```
Аттрибуты:
* `autoplay` Звук начинает играть сразу после загрузки страницы.
* `controls` Добавляет панель управления к аудиофайлу.
* `loop` Повторяет воспроизведение звука с начала после его завершения.
* `muted` Отключает звук при воспроизведении музыки.
* `preload` Используется для предварительной загрузки аудиофайла или его данных вместе с загрузкой веб-страницы.
* `src` Указывает путь к воспроизводимому файлу.
### `<track>`
Укаывает текстовую дорожку для `<audio>`, `<video>`<br>
Аттрибуты:
* `kind` Указывает тип дорожки.
* `src` Путь к файлу с дорожкой.
* `srclang` Язык дорожки.
* `label` Отображаемое название дорожки. Если этот атрибут не указан, браузер станет использовать значение, которое применяется у него по умолчанию, например «untitled1».
* `default` Наличие этого атрибута указывает, что данная дорожка предпочтительна и должна быть выбрана по умолчанию. Только одна дорожка может иметь атрибут default.
## Формы
## i18n
## Ссылки
* [Про заголовки](https://webdesign.tutsplus.com/articles/the-truth-about-multiple-h1-tags-in-the-html5-era--webdesign-16824)