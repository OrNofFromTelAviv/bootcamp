class Video {
    constructor (title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time
    }

    watch () {
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}!`)
    }
    

}

//Instantiate a new Video instance and call the watch() method.
const video1 = new Video ("Borgen", "Or", 1500);
video1.watch();



//Instantiate a second Video instance with different values.
const video2 = new Video ("Downton Abbey", "Lisa", 600);
video2.watch();


//Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
//Think of the best data structure to save this information within the array.

let videos = [
    new Video ("Wonder Woman", "Moshe", 1000),
    new Video ("Law and Order", "John", 400),
    new Video ("Suits", "Nina", 200),
    new Video ("Seinfeld", "Jacob", 2000),
    new Video ("Friends", "George", 100)
]

//Bonus: Loop through the array to instantiate those instances.

let createVideos = ([title, uploader, time])=> {
    let toReturn = new Video (title, uploader, time)
    toReturn.watch()
    return toReturn
} 

let instantiateVideos = [
  ["Wonder Woman", "Moshe", 1000],
  ["Law and Order", "John", 400],
  ["Suits", "Nina", 200],
  ["Seinfeld", "Jacob", 2000],
  ["Friends", "George", 100],
].map(createVideos)

/*
instantiateVideos[0].watch();
instantiateVideos[1].watch();
instantiateVideos[2].watch();
instantiateVideos[3].watch();
instantiateVideos[4].watch();