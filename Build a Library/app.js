class Media {
    constructor(title){
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = []
    }
    get title() {
      return this._title
    }
    get isCheckedOut() {
      return this._isCheckedOut
    }
    get ratings() {
      return this._ratings
    }
    set isCheckedOut(checkOut) {
      this._isCheckedOut = checkOut
    }
  
    getAverageRating() {
      let sum = this._ratings.reduce(function(a,b){
        return a+ b
      },0)
      return sum/this.ratings.length    
    }
  
    toggleCheckOutStatus(){
      this.isCheckedOut = !this.isCheckedOut
    }
  
    addRating(num){
      this.ratings.push(num)
    }
  }
  
  class Book extends Media {
    constructor(title,author,pages){
      super(title)
      this._author = author
      this._pages = pages
    } 
    get author(){
      return this.author
    }
    get pages(){
      return this.pages
    }
  }
  
  class Movie extends Media{
    constructor(title,director,runTime){
      super(title)
      this._director = director
      this._runTime = runTime
    }
    get director(){
      return this._director
    }
    get runTime(){
      return this._runtime
    }
  }
  
  class Cd extends Media{
    constructor(title,artist,songs){
      super(title)
      this._artist = artist
      this._songs = songs
    }
    get artist(){
      return this._artist
    }
    get songs(){
      return this._songs
    }
  }
  const historyOfEverything = new Book('A Short History of Nearly Everything','Bill Bryson',544)
  historyOfEverything.toggleCheckOutStatus()
  console.log(historyOfEverything.isCheckedOut)
  historyOfEverything.addRating(4)
  historyOfEverything.addRating(5)
  historyOfEverything.addRating(5)
  console.log(historyOfEverything.getAverageRating())
  const speed = new Movie('Speed','Jan de Bont',116)
  speed.toggleCheckOutStatus()
  console.log(speed.isCheckedOut)
  speed.addRating(1)
  speed.addRating(1)
  speed.addRating(5)
  console.log(speed.getAverageRating())