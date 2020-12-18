class Menu {
    constructor() {
        this.buttons = [];
        this.set();
    }
    set() {
        var ind = 0;
        for (var x = 0; x < 5; x++) {
            for (var y = 0; y < 2; y++) {
                this.buttons[ind] = new Button(x * width / 5, y * height / 2, 100, 100, 2, ind);
                ind++;
            }
        }
    }

    display() {
        for (var i = 0; i < this.buttons.length; i++) {
            this.buttons[i].display();
            this.buttons[i].activated(cursorPosition.x, cursorPosition.y);
        }
    }

}