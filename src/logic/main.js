class Book{
    constructor(title, year, author){
        this.title = title
        this.year = year;
        this.author = author;
        this.rfid = crypto.randomUUID();
        this.read = false;
    }

    changeRead(){
        this.read = !this.read;
    }
}
export default Book;