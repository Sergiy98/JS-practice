/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
},
    ads = document.querySelectorAll('.promo__adv img'),
    genres = document.querySelector('.promo__genre'),
    bg = document.querySelector('.promo__bg'),
    filmsList = bg.querySelectorAll('.promo__interactive-item');

    ads.forEach(item => {
        item.remove();
    });

    genres.textContent = 'драма';

    bg.style.cssText = "background: url(../img/bg.jpg);";

    movieDB.movies.sort();

    filmsList.forEach((item, i) => {
        item.textContent = `${i + 1}. ${movieDB.movies[i]}`;

    });

