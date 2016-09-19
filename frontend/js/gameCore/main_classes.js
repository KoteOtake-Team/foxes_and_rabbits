/** ИГРОВАЯ КЛЕТКА */
function Cell(relief) {
    this.relief = relief;  // объект класса Relief
    this.animal = [];  // объекты животных на клетке
    this.weather = null;  // погода
    this.stock = null;  // количество запасов TODO требуется базовое значение на начало игры

    // изменение запасов в клетке
    this.changeStock = function (dayOfYear) {
        // изменение плодородности в зависимости от наличия осадков
        var fertility = this.weather != null ?
                        this.weather.fertilityAffect * this.relief.fertility(dayOfYear) :
                        this.relief.fertility(dayOfYear);
        this.stock = this.stock + fertility - this.relief.stock_behavior(dayOfYear);
    }
}


/** СОБЫТИЕ */
function GameEvent(features) {
    this.name = features.name;
    this.description = features.description;
    this.type = features.type;
    this.affect = features.affect;
}


/** ЖИВОТНОЕ */
function Animal() {

}


/** ЯДРО ИГРЫ */
// game = new Core(200, 50);
// game.initializeGame();
// *действия игрока*
// game.makeMove();
function Core(width, height) {
    /** ИНИЦИАЛИЗАЦИЯ ИГРЫ */
    this.initializeGame = function () {
        // создание карты, карты погоды, расстановка животных -> отрисовка
    };

    /**  КАРТА */
    this.map = function () {
        this.width = width;
        this.height = height;
        this.cells = [];  // объекты класса Cell
    };

    this.dayOfYear = 1;  // день года (0;360) (12 месяцев по 30 дней)
    this.totalDay = 1;  // общий день игры

    /** СДЕЛАТЬ ХОД */
    this.makeMove = function () {
        this.dayOfYear = (this.dayOfYear === 360) ? 1 : this.dayOfYear + 1;  // проверка на окончание года
        this.totalDay++;

        // изменение запасов в клетках
        for (var cell in this.map.cells) {
            if (!this.map.cells.hasOwnProperty(cell)) continue;
            cell.changeStock(this.dayOfYear);
        }
    }
}
