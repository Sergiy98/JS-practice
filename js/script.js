/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

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
    filmsList = document.querySelector('.promo__interactive-list'),
    btn = document.querySelector('button'),
    span = document.querySelector('[type="checkbox"]');

    function removeAds (arr) {
        arr.forEach(item => {
            item.remove();
        });
    }



    function someChanges (genr, bgPhoto) {
        genr.textContent = 'драма';

        bgPhoto.style.cssText = "background: url(../img/bg.jpg);";
    }



    function sorting (array) {
        array.sort();
    }

    

    function makeMovieList (oldList, currentList) {
        oldList.innerHTML = "";
        sorting(movieDB.movies);

        currentList.forEach((film, i) => {
            oldList.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });
        
        document.querySelectorAll('.delete').forEach((element, i) => {
            element.addEventListener('click', () => {
                element.parentElement.remove();
                movieDB.movies.splice(i, 1);

                makeMovieList(oldList, currentList);
            });
        });
    }

    

    btn.addEventListener('click', (e) => {
        e.preventDefault();

        let input = document.querySelector('.adding__input').value;
        if (input) {

            if (input.length > 21) {
                input = `${input.substring(0, 22)}...`;
            }

            if (span.checked) {
                console.log("Добавляем любимый фильм");
            }

            movieDB.movies.push(input);
            sorting(movieDB.movies);
            
            makeMovieList(filmsList, movieDB.movies);
        }
        

    });

        

    removeAds(ads);
    someChanges(genres, bg);
    sorting(movieDB.movies);
    makeMovieList(filmsList, movieDB.movies);

});