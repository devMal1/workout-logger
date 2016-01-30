//Global constants
int HEIGHT = 500; //window.innerHeight;
int WIDTH = 500; //window.innerWidth;
int MARGIN = 10;
int ROW_MAX = 8;
int COL_MAX = 4;
int CELL_WIDTH = (WIDTH - (MARGIN*2))/COL_MAX;
int CELL_HEIGHT = 300/ROW_MAX;
/*int TABLE_COORDSX = [];
int TABLE_COORDSY = [];
    int temp = [];
    int temp2 = [];
    for (int r = 0; r <= ROW_MAX; r ++) {
        for (int c = 0; c <= COL_MAX; c ++) {
            temp[c] = MARGIN + c*CELL_WIDTH;
            temp2[c] = 100-20 + r*CELL_HEIGHT;
        }
        TABLE_COORDSX[r] = temp;
        TABLE_COORDSY[r] = temp2;
        println(TABLE_COORDSX[0][0] + " cell coord x");
        println(TABLE_COORDSY[0][0] + " cell coord y");
    }*/
int TABLE_COORDSX = {
    MARGIN + 0*CELL_WIDTH,
    MARGIN + 1*CELL_WIDTH,
    MARGIN + 2*CELL_WIDTH,
    MARGIN + 3*CELL_WIDTH,
    MARGIN + 4*CELL_WIDTH
};
int TABLE_COORDSY = {
    100-20 + 0*CELL_HEIGHT,
    100-20 + 1*CELL_HEIGHT,
    100-20 + 2*CELL_HEIGHT,
    100-20 + 3*CELL_HEIGHT,
    100-20 + 4*CELL_HEIGHT,
    100-20 + 5*CELL_HEIGHT,
    100-20 + 6*CELL_HEIGHT,
    100-20 + 7*CELL_HEIGHT,
    100-20 + 8*CELL_HEIGHT,
};
String HEADERS = {
    "Exercise Name",
    "# of Sets",
    "# of Reps",
    "Weight"
};
String TODAYS_DATE = month() + "." + day() + "." + year();


//Global variables
String logNames = [];
    for (int i = 0; i < ROW_MAX; i ++) {
        logNames[i] = "";
    }
int logData = [];
temp = [];
    for (int r = 0; r < ROW_MAX; r ++) {
        for (int c = 0; c < COL_MAX-1; c ++) {
            temp[c] = 0;
        }
        logData[r] = temp;
    }
int numOfRows = 0;
boolean clickedCell = false;
int clickedCell_row = -1;
int clickedCell_col = -1;

//Setup intial drawingboard conditions
void setup() {  // this is run once.
    // canvas size (Integers only, please.)
    size(WIDTH, HEIGHT);

    // smooth edges
    smooth();

    // limit the number of frames per second
    frameRate(30);
}

class Button {
    int x, y, width, height;
    String label, shape;

    Button(x, y, width, height, label, shape) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.label = label;
        this.shape = shape;
    }

    boolean mouseHere() {
        if (mouseX > this.x && mouseX < this.x + this.width &&
            mouseY > this.y && mouseY < this.y + this.height) {
                return true;
        } else {
            return false;
        }
    }

    void drawShape() {
        if (this.shape == "triangle") {
            triangle(this.x, this.y, this.x, this.y+this.height, this.x+this.width, this.y+this.height);
        } else if (this.shape == "circle") {
            ellipseMode(CORNER);
            ellipse(this.x, this.y, this.width, this.height);
        } else if (this.shape == "arrow") {
            int x_offset = this.width/2;
            int y_offset = this.height/2;
            rect(this.x - 5, this.y, this.width, this.height, 10);
            triangle(this.x, this.y-y_offset, this.x, this.y+this.height+y_offset,
                this.x-x_offset, this.y+(this.height/2));
        } else {//rectangle
            rect(this.x, this.y, this.width, this.height, 3);
        }
    }

    void draw() {
        textSize(HEIGHT/20);
        textAlign(CENTER, CENTER);
        noStroke();
        //highlight if mouse is over button
        if (this.mouseHere()) {
            fill(255, 255, 255);
            this.drawShape();
            fill(60, 219, 250);
        } else {
            fill(0, 0, 0);
            this.drawShape();
            fill(255, 255, 255);
        }
        stroke(0,0,0);
        text(this.label, this.x + this.width/2, this.y + this.height/2);
        textAlign(LEFT, TOP);
    }// end draw funtion

    boolean onClick() {
        if (this.mouseHere()) {
            return true;
        }
    }//end onClick funtion

}//end button class

//BUTTONS!!//
//Button(x, y, width, height, label, shape)
Button newExercise = new Button(MARGIN, 440, 50, 50, ">_ ", "triangle");
Button sync = new Button(200, 390, 100, 100, "SYNC", "circle");
Button increaseNum = new Button(WIDTH-MARGIN-50, 440, 50, 25, "+", "rectangle");
Button decreaseNum = new Button(WIDTH-MARGIN-50, 465, 50, 25, "-", "rectangle");
Button savedLogs = new Button(25 + 25, MARGIN + 10, 40, 10, "", "arrow");

void drawLoggerScene() {
    strokeWeight(5);
    textSize(HEIGHT/20);
    textAlign(CENTER, TOP);
    fill(255,255,255);
    text("WORKOUT LOGGER", WIDTH/2, MARGIN);
    fill(0,0,0);
    line(0, (HEIGHT/20) + MARGIN + 5, WIDTH, (HEIGHT/20) + MARGIN + 5);

    noFill();
    strokeWeight(3);
    rect(WIDTH - MARGIN - 90, MARGIN, MARGIN + 90 + 5, HEIGHT/20 + 5);
    fill(0,0,0);
    textSize(HEIGHT/30);
    textAlign(CENTER, CENTER);
    text(TODAYS_DATE, WIDTH - MARGIN - 90 + (MARGIN + 90)/2, MARGIN + (HEIGHT/20)/2);

    strokeWeight(1);
}

void drawTable(numOfRows) {
    int x_spacing = CELL_WIDTH;
    int y_spacing = CELL_HEIGHT;

    fill(255, 255, 255);
    int offset = 20;
    int x_init = MARGIN;
    int y_init = 100 - offset;
    rect(x_init, y_init, WIDTH - MARGIN*2, y_spacing*numOfRows);

    stroke(0,0,0);
    strokeWeight(3);
    fill(0,0,0);
    textAlign(CENTER, TOP);
    textSize(HEIGHT/40);
    int header_y = 60;
    for (int i = 0; i <= COL_MAX; i++) {//vertical lines
        text(HEADERS[i], (x_init + x_spacing/2) + i*x_spacing, header_y);
        line(x_init + i*x_spacing, y_init, x_init + i*x_spacing, y_init + numOfRows*y_spacing);
    }
    for (int i = 0; i <= numOfRows; i++) {//horizontal lines
        line(x_init, y_init + i*y_spacing, WIDTH - MARGIN, y_init + i*y_spacing);
    }
    if (numOfRows == ROW_MAX) { line(x_init, y_init + numOfRows*y_spacing, WIDTH - MARGIN, y_init + numOfRows*y_spacing); }

    fill(60, 219, 250);
    textAlign(CENTER, CENTER);
    for (int r = 0; r < numOfRows; r++) {//cell rows
        for (int c = 0; c < COL_MAX-1; c++) {//cell columns
            if (c == 0) {
                textSize(HEIGHT/40);
                text(logNames[r], x_init + x_spacing/2, (y_init + y_spacing/2) + r*y_spacing);
            }
            textSize(HEIGHT/20);
            text(logData[r][c], (x_init + x_spacing/2) + (c+1)*x_spacing, (y_init + y_spacing/2) + r*y_spacing);
        }
    }
}

int[] mouseHereCells() {
    int mouseHereCoords = [];
    mouseHereCoords[0] = -1;
    mouseHereCoords[1] = -1;
    for (int r = 0; r < numOfRows; r ++) {
        for (int c = 0; c < COL_MAX; c ++) {
            if (mouseX > TABLE_COORDSX[c] && mouseX < TABLE_COORDSX[c+1] &&
            mouseY > TABLE_COORDSY[r] && mouseY < TABLE_COORDSY[r+1]) {
                mouseHereCoords[0] = r;
                mouseHereCoords[1] = c;
                return mouseHereCoords;
            }
        }
    }
    return mouseHereCoords;
}

void numericValuePopUp() {
    fill(0,0,0);
    rect(0, 150, WIDTH, 200);
    fill(60, 219, 250);
    textSize(HEIGHT/20);
    textAlign(CENTER, CENTER);
    text(logData[clickedCell_row][clickedCell_col-1], WIDTH/2, HEIGHT/2);
    strokeWeight(3);
    //TODO fix the position of the underline vv
    line(WIDTH - 20, HEIGHT - 15, WIDTH + 20, HEIGHT - 15);
}

void draw() {  // this is run repeatedly.
    background(60, 219, 250);

    newExercise.draw();
    sync.draw();
    increaseNum.draw();
    decreaseNum.draw();
    savedLogs.draw();

    drawLoggerScene();

    drawTable(numOfRows);

    if (clickedCell && clickedCell_col >= 1) {//clicked inside numeric-value cell
        numericValuePopUp();
    } else if (clickedCell && clickedCell_col == 0) {//clicked inside string-value cell

    } else { clickedCell = false; }

}

void mouseClicked() {
    if (newExercise.onClick()) {//add a new row
        numOfRows ++;
        if (numOfRows > ROW_MAX) { numOfRows = ROW_MAX; }
    } else if (sync.onClick()) {//syncs todays logs with DB
        /*temporary, until add actual sync function*/
        clickedCell = false;
        clickedCell_row = -1;
        clickedCell_col = -1;
    } else if (increaseNum.onClick()) {//increse value of item in table
        if (clickedCell && clickedCell_col >= 1) {
            logData[clickedCell_row][clickedCell_col-1] += 1;
        }
    } else if (decreaseNum.onClick()) {//decrease value of item in table
        if (clickedCell && clickedCell_col >= 1) {
            logData[clickedCell_row][clickedCell_col-1] -= 1;
        }
    } else if (savedLogs.onClick()) {//displays logs from DB

    } else { //check if clicked on table
        int cell_coords = mouseHereCells();
        clickedCell_row = cell_coords[0];
        clickedCell_col = cell_coords[1];
        if (clickedCell_row == -1) { clickedCell = false; }
        else { clickedCell = true; }
    }
}
