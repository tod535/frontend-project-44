
[![Actions Status](https://github.com/tod535/frontend-project-44/workflows/hexlet-check/badge.svg)](https://github.com/tod535/frontend-project-44/actions)
<a href="https://codeclimate.com/github/tod535/frontend-project-44/maintainability"><img src="https://api.codeclimate.com/v1/badges/bfaeedba81eb07a0ac10/maintainability" /></a>
(после создания игры прописывать в терминале sudo npm link для запуска игры без make)### Hexlet tests and linter status:
Игры разума (JavaScript)
«Игры разума» — набор из пяти консольных игр, построенных по принципу популярных мобильных приложений для прокачки мозга. Каждая игра задает вопросы, на которые нужно дать правильные ответы. После трех правильных ответов считается, что игра пройдена. Неправильные ответы завершают игру и предлагают пройти ее заново.

Игры:

Определение четного числа.
Определение простого числа.
Калькулятор. Арифметические выражения, которые необходимо вычислить.
Прогрессия. Поиск пропущенных чисел в последовательности чисел.
Определение наибольшего общего делителя.
Установка
$ sudo npm link 
Игра: "Проверка на четность"
Суть игры в следующем: игрокe показывается случайное число. Ему нужно ответить yes, если число чётное, или no — если нечётное.

Запуск игры
$ brain-even
Пример игры
<a href="https://asciinema.org/a/gM9Csy7ZWuHpPksmibcxe58Sl" target="_blank"><img src="https://asciinema.org/a/gM9Csy7ZWuHpPksmibcxe58Sl.svg" /></a>
Игра: "Калькулятор"
Суть игры в следующем: игроку показывается случайное математическое выражение, например <strong>35 + 16</strong>, которое нужно вычислить и записать правильный ответ.

Запуск игры
$ brain-calc
Пример игры
<a href="https://asciinema.org/a/Ea5TdQqCJxzCLL2poKUTjw7Rr" target="_blank"><img src="https://asciinema.org/a/Ea5TdQqCJxzCLL2poKUTjw7Rr.svg" /></a>
Игра: "НОД"
Суть игры в следующем: игроку показывается два случайных числа, например, 25 50. Игрок должен вычислить и ввести наибольший общий делитель этих чисел.

Запуск игры
$ brain-gcd
<a href="https://asciinema.org/a/hpRoI4O6DifHxmXZfeTwKtJHk" target="_blank"><img src="https://asciinema.org/a/hpRoI4O6DifHxmXZfeTwKtJHk.svg" /></a>
Игра: "Арифметическая прогрессия"
Суть игры в следующем: игроку показывается ряд чисел, образующий арифметическую прогрессию. Игрок должен отгадать число, которое находится за точками.

Запуск игры
$ brain-progression
Пример игры
<a href="https://asciinema.org/a/2pqf0RJ7GvwrTUAdz5XV1MhFx" target="_blank"><img src="https://asciinema.org/a/2pqf0RJ7GvwrTUAdz5XV1MhFx.svg" /></a>
Игра: "Простое ли число?"
Суть игры в следующем: игроку показывается случайное число. Ему нужно ответить yes, если число простое, или no — если нет.

Запуск игры
$ brain-prime
Пример игры
<a href="https://asciinema.org/a/Guga3MP4F6N7iEyBAWcbRxiK0" target="_blank"><img src="https://asciinema.org/a/Guga3MP4F6N7iEyBAWcbRxiK0.svg" /></a>