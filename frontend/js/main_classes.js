/** ТИП РЕЛЬЕФА */
// Пример создания объекта рельефа:
// taiga = new Relief(reliefTypes.taiga);
function Relief(features) {
    this.name = features.name;
    this.texture = features.texture;
    this.surface = features.surface;
    this.fertility = features.fertility;  // вызывается каждый ход с параметром dayOfYear
    this.stock_behavior = features.stock_behavior;  // вызывается каждый ход с параметром dayOfYear
}


/** ИГРОВАЯ КЛЕТКА */
function Cell(relief) {
    this.relief = relief;  // объект класса Relief
    this.unit = null;  // объект юнита на клетке
    this.weather = null;  // погода
    this.stock = null;  // количество запасов TODO требуется базовое значение на начало игры

    // изменение запасов в клетке
    this.changeStock = function (dayOfYear) {
        this.stock = this.stock + this.relief.fertility(dayOfYear) - this.relief.stock_behavior(dayOfYear);
    }
}


/** ЯДРО ИГРЫ */
// game = new GameCore(200, 50);
// game.initializeGame();
// *действия игрока*
// game.makeMove();
function GameCore(width, height) {
    /** ИНИЦИАЛИЗАЦИЯ ИГРЫ */
    this.initializeGame = function () {
        // создание карты, карты погоды, расстановка юнитов -> отрисовка
    };
    
    this.map = function () {
        this.width = width;
        this.height = height;
        this.cells = [];  // объекты класса Cell
    };

    this.dayOfYear = 1;  // день года (0;360) (12 месяцев по 30 дней)
    this.totalDay = 1;  // общий день игры

    /** СДЕЛАТЬ ХОД */
    this.makeMove = function () {
        this.dayOfYear = (this.dayOfYear === 360) ? 1 : this.dayOfYear + 1;
        this.totalDay++;

        // изменение запасов в клетках
        for (var cell in this.map.cells) {
            if (!this.map.cells.hasOwnProperty(cell)) continue;
            cell.changeStock(this.dayOfYear);
        }
    }
}
