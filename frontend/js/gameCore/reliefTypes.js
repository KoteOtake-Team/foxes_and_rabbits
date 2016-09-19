// ТИПЫ РЕЛЬЕФА
//
// name - название для отображения
// description (String) - описание
// texture - текстура поверхности (ссылка)
// surface - тип поверхности (solid, liquid)
// fertility - плодородность (образование единиц/ход) (функция от времения года). Поступает в stock
// stock_behavior - поведение запасов (естественная убыль единиц/ход) (функция от времения года)

var reliefTypes = {
    taiga : {
        name: 'Тайга',
        description : '',
        texture: null,
        surface: 'solid',
        fertility: function (dayOfYear) {
            // day == (1;360)
            if ((dayOfYear < 60) || (dayOfYear > 300)) {
                return 0;
            }
            else {
                return 1;
            }
        },
        stock_behavior: function () {}
    }
};
