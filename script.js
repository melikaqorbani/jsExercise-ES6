const data = [
    {
      id: 1,
      title: "The Lord of the Rings",
      publicationDate: "1954-07-29",
      author: "J. R. R. Tolkien",
      genres: [
        "fantasy",
        "high-fantasy",
        "adventure",
        "fiction",
        "novels",
        "literature",
      ],
      hasMovieAdaptation: true,
      pages: 1216,
      translations: {
        spanish: "El señor de los anillos",
        chinese: "魔戒",
        french: "Le Seigneur des anneaux",
      },
      reviews: {
        goodreads: {
          rating: 4.52,
          ratingsCount: 630994,
          reviewsCount: 13417,
        },
        librarything: {
          rating: 4.53,
          ratingsCount: 47166,
          reviewsCount: 0,
        },
      },
    },
    {
      id: 2,
      title: "The Cyberiad",
      publicationDate: "1965-01-01",
      author: "Stanislaw Lem",
      genres: [
        "science fiction",
        "humor",
        "speculative fiction",
        "short stories",
        "fantasy",
      ],
      hasMovieAdaptation: false,
      pages: 295,
      translations: {},
      reviews: {
        goodreads: {
          rating: 4.16,
          ratingsCount: 11663,
          reviewsCount: 812,
        },
        librarything: {
          rating: 4.13,
          ratingsCount: 2434,
          reviewsCount: 0,
        },
      },
    },
    {
      id: 3,
      title: "Dune",
      publicationDate: "1965-01-01",
      author: "Frank Herbert",
      genres: ["science fiction", "novel", "adventure"],
      hasMovieAdaptation: true,
      pages: 658,
      translations: {
        spanish: "",
      },
      reviews: {
        goodreads: {
          rating: 4.25,
          ratingsCount: 1142893,
          reviewsCount: 49701,
        },
      },
    },
    {
      id: 4,
      title: "Harry Potter and the Philosopher's Stone",
      publicationDate: "1997-06-26",
      author: "J. K. Rowling",
      genres: ["fantasy", "adventure"],
      hasMovieAdaptation: true,
      pages: 223,
      translations: {
        spanish: "Harry Potter y la piedra filosofal",
        korean: "해리 포터와 마법사의 돌",
        bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
        portuguese: "Harry Potter e a Pedra Filosofal",
      },
      reviews: {
        goodreads: {
          rating: 4.47,
          ratingsCount: 8910059,
          reviewsCount: 140625,
        },
        librarything: {
          rating: 4.29,
          ratingsCount: 120941,
          reviewsCount: 1960,
        },
      },
    },
    {
      id: 5,
      title: "A Game of Thrones",
      publicationDate: "1996-08-01",
      author: "George R. R. Martin",
      genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
      hasMovieAdaptation: true,
      pages: 835,
      translations: {
        korean: "왕좌의 게임",
        polish: "Gra o tron",
        portuguese: "A Guerra dos Tronos",
        spanish: "Juego de tronos",
      },
      reviews: {
        goodreads: {
          rating: 4.44,
          ratingsCount: 2295233,
          reviewsCount: 59058,
        },
        librarything: {
          rating: 4.36,
          ratingsCount: 38358,
          reviewsCount: 1095,
        },
      },
    },
  ];
  
  function getBooks() {
    return data;
  }
  
  function getBook(id) {
    return data.find((d) => d.id === id);
  }
  
  //Destructuring
  
  const book = getBook(2);

  // const title = book.title;
  // const author = book.author;
  
  const {title,author,pages,publicationDate,genres,hasMovieAdaptation} = book;

  console.log(author,title,genres);
  const updateBook={
    ...book,
    moviePublicationDat:'2001-12-19',
    pages:101 //just beacuse you create a new property form an existing property you can also overwriting the existing propery in objects
    }; //spread oprator is so common,
  //The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
  console.log(updateBook);

  // const primaryGenre = genres[0];
  // const secondaryGenre = genres[1];
  const [primaryGenre, secondaryGenre, ...otherGenres] = genres; //we can only palce ...otherGenres in the end {rest oprator: not that common}
  console.log(primaryGenre, secondaryGenre,otherGenres);

  const newGnres=[...genres , "epic fantasy"];
  const newGnres2=[ "epic fantasy",...genres];  //spread oprator is so common
  //The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.


  //If we only want the car and suv we can simply leave out the truck but keep the comma:
  const vehicles = ['mustang', 'f-150', 'expedition'];
  const [car,, suv] = vehicles;

  

  
  const people = [
    { name: 'Alice', age: 25, city: 'New York' },
    { name: 'Bob', age: 30, city: 'San Francisco' },
    { name: 'Charlie', age: 35, city: 'Los Angeles' }
  ];
  
  //  const firstPerson=people[0];
  //  const secondPerson=people[1];

  const [firstPerson, secondPerson , thirdPerson] = people;

  // console.log(firstPerson,secondPerson,thirdPerson);

  formatPeople(secondPerson);

  function formatPeople ({name,age,city}){
    const message=  "my friend " + name + " is happy with his "+ age +" and his city : "+ city;
    document.getElementById("demo").innerHTML = message;
  }


  // the olad way: function decloration
  // function getYear(str){
  //   return str.split("-")[0];
  // }
  // console.log(getYear(publicationDate));

  //arrow function //function expretion 
  const getYear = (str) => str.split("-")[0];
   
  const getYear2 = (str) => { //if we had multiply conditoins we should use "return" in the end
    return str.split("-")[0]
  };


  const summary = `${title}, a ${pages} - page long book, was writen by ${author} and published in ${
    getYear(publicationDate)
  }. The book has ${hasMovieAdaptation ? "" : "not"} been adatped as a movie `; //conditional
  console.log(summary);
  const resualt = pages > 1000 ? "over a thousend" : "less than 1000";
  console.log(resualt);



  console.log(true && "some string"); //"some string"
  console.log(false && "some string"); //false
  console.log(hasMovieAdaptation && "this book has a movie");
//falsy : 0,'',null,undifiend
  console.log('me'); //it's a truthy value
  console.log('me' && "some string"); //immedietly go for the some string because it a truthy value 
  console.log( 0 && "some string"); //immedietly go for the 0 because it a falsy value 


  console.log(true || "some string"); //true
  console.log(false || "some string"); //"some string"

  
  console.log(book.translations.spanish); //undifiend
  //if we want to set a difault value in case there is none:
  const spanishTranlation = book.translations.spanish || "NOT TRANSLATED";
  console.log(spanishTranlation);

  console.log(book.reviews.librarything.reviewsCount); //0
  const Wrongcount = book.reviews.librarything.reviewsCount || "no data";
  console.log(Wrongcount); //no data

  const correctCount = books.reviews.librarything.reviewsCount ?? "no data"; // ?? it only works when there is null and undifiend not when it is 0 or any number
  console.log(correctCount); //0

  function getTotalReviewCount(book){
    const goodreads = book.reviews.goodreads?.reviewsCount ?? 0; //in the second part ?? we say if we have an Undefiend variebl than return zero so we dont get any error
    const librarything = book.reviews.librarything?.reviewsCount ?? 0; //some books only have goodreads and not the librarything as a resault we get an error and the solution is the OPTIONAL CHANGING : ? we're not sure all the value exist in an object
    return goodreads+librarything;

  }
  console.log(getTotalReviewCount(book));

  // map

  const books = getBooks();

  const x = [1,2,3,4,5].map((el)=>el*2);
  console.log(x);

  const titles = books.map((book) => book.title);

  const essentionalData = books.map((book) => ({
    title: book.title,
    author: book.author,
  }));

  //filter
  const longBooksWithMovie = books
  .filter((book) => book.pages > 500)
  .filter((book)=>book.hasMovieAdaptation);

  const adventureBooks = books.filter((books) =>books
  .genres.includes("adventure") //it will create an array and u can map on a array
).map((book)=>book.title);


//reduce is so powerfull
const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);// 0 is an accumulator

//sort method
const arr = [3,5,6,8,9];
const sorted = arr.sort((a,b)=>a-b); //the arr itself will be muted, change. for prevention we will add slice:
const sorted2 = arr.slice().sort((a,b)=>a-b); 


const sortedByPages = arr.slice().sort((a,b) => b.pages - a.pages); 
