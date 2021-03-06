class BookstoreService {
  constructor() {
    this.data = [
      {
        id: 1,
        title: 'Production-Ready Microservices',
        author: 'Susan J. Fowler',
        price: 32,
        coverImage:
          'https://images-na.ssl-images-amazon.com/images/I/51oxXEG6TRL._SX342_SY445_QL70_FMwebp_.jpg',
      },
      {
        id: 2,
        title: 'Release It!',
        author: 'Michael T. Nygard',
        price: 45,
        coverImage:
          'https://m.media-amazon.com/images/P/B079YWMY2V.01._SCLZZZZZZZ_SX500_.jpg',
      },
    ];
  }

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.75) {
          reject(new Error('Something bad happened'));
        } else {
          resolve(this.data);
        }
      }, 700);
    });
  }
}

export default BookstoreService;
