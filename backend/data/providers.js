import bcrypt from 'bcryptjs';
const providers = [
  {
    name: 'Admin',
    title: 'Admin',
    address: '123 Admin St',
    city: 'Admin',
    state: 'Admin',
    country: 'Admin',
    email: 'admin@gmail.com',
    phone: "11223344",
    password: bcrypt.hashSync('admin', 10),
    imageFilename: "file.jpg",
    individual: "yes",
    totalRating: 0, 
    ratingPopulation: 0,
    isAdmin: true,
  },
  {
    name: 'John Smith',
    title: 'Nail Technician',
    address: '123 Smith St',
    city: 'New York',
    state: 'NY',
    country: 'USA',
    email: 'john_smith@gmail.com',
    phone: "2222222",
    password: bcrypt.hashSync('123456', 10),
    imageFilename: "file1.jpg",
    individual: "no",
    totalRating: 50, 
    ratingPopulation: 10,
    isAdmin: false,
  },
  {
    name: 'Jane Doe',
    title: 'Hair Stylist',
    address: '123 Doe St',
    city: 'Toronto',
    state: 'ON',
    country: 'Canad',
    email: 'jane_doe@gmail.com',
    phone: "33333333",
    password: bcrypt.hashSync('123456', 10),
    imageFilename: "file2.jpg",
    individual: "yes",
    totalRating: 40, 
    ratingPopulation: 10,
    isAdmin: false,
  },
  {
    name: 'John Doe',
    title: 'Nail Technician',
    address: '123 Doe St',
    city: 'Richmond',
    state: 'BC',
    country: 'Canada',
    email: 'john_doe@gmail.com',
    phone: "333333",
    password: bcrypt.hashSync('123456', 10),
    imageFilename: "file3.jpg",
    individual: "yes",
    totalRating: 0, 
    ratingPopulation: 0,
    isAdmin: false,
  },
  {
    name: 'Mckinley Myers',
    title: 'Eyelash Tech',
    address: '123 Doe St',
    city: 'Richmond',
    state: 'BC',
    country: 'Canada',
    email: 'Mckinley@gmail.com',
    phone: "44444",
    password: bcrypt.hashSync('123456', 10),
    imageFilename: "file4.jpg",
    individual: "yes",
    totalRating: 300, 
    ratingPopulation: 50,
    isAdmin: false,
  },
  {
    name: 'Gustavo Cooke',
    title: 'Hairdressing',
    address: '123 Doe St',
    city: 'Richmond',
    state: 'BC',
    country: 'Canada',
    email: 'Gustavo@gmail.com',
    phone: "5555",
    password: bcrypt.hashSync('123456', 10),
    imageFilename: "file5.jpg",
    individual: "yes",
    totalRating: 30, 
    ratingPopulation: 10,
    isAdmin: false,
  },

  {
    name: 'Rudy Palmer',
    title: 'House Cleaning',
    address: '123 Doe St',
    city: 'Richmond',
    state: 'BC',
    country: 'Canada',
    email: 'Palmer@gmail.com',
    phone: "666666",
    password: bcrypt.hashSync('123456', 10),
    imageFilename: "file6.jpg",
    individual: "yes",
    totalRating: 6, 
    ratingPopulation: 3,
    isAdmin: false,
  },
  {
    name: 'Malaki Barry',
    title: 'Landscaping',
    address: '123 Doe St',
    city: 'Richmond',
    state: 'BC',
    country: 'Canada',
    email: 'Malaki@gmail.com',
    phone: "777777",
    password: bcrypt.hashSync('123456', 10),
    imageFilename: "file7.jpg",
    individual: "yes",
    totalRating: 7, 
    ratingPopulation: 7,
    isAdmin: false,
  },
  {
    name: 'Hamza Lester',
    title: 'Makeup',
    address: '123 Doe St',
    city: 'Richmond',
    state: 'BC',
    country: 'Canada',
    email: 'Lester@gmail.com',
    phone: "888888",
    password: bcrypt.hashSync('123456', 10),
    imageFilename: "file8.jpg",
    individual: "no",
    totalRating: 80, 
    ratingPopulation: 16,
    isAdmin: false,
  },
  {
    name: 'Brock Bautista',
    title: 'Massage',
    address: '123 Doe St',
    city: 'Richmond',
    state: 'BC',
    country: 'Canada',
    email: 'Bautista@gmail.com',
    phone: "999999",
    password: bcrypt.hashSync('123456', 10),
    imageFilename: "file9.jpg",
    individual: "yes",
    totalRating: 11, 
    ratingPopulation: 8,
    isAdmin: false,
  },
  {
    name: 'Braeden Gilmore',
    title: 'Nail Technician',
    address: '123 Doe St',
    city: 'Richmond',
    state: 'BC',
    country: 'Canada',
    email: 'Gilmore@gmail.com',
    phone: "1010101010",
    password: bcrypt.hashSync('123456', 10),
    imageFilename: "file10.jpg",
    individual: "yes",
    totalRating: 100, 
    ratingPopulation: 60,
    isAdmin: false,
  },
  {
    name: 'Grace Fitzpatrick',
    title: 'Barbering',
    address: '123 Doe St',
    city: 'Richmond',
    state: 'BC',
    country: 'Canada',
    email: 'Fitzpatrick@gmail.com',
    phone: "110110110",
    password: bcrypt.hashSync('123456', 10),
    imageFilename: "file11.jpg",
    individual: "no",
    totalRating: 14, 
    ratingPopulation: 4,
    isAdmin: false,
  },
  {
    name: 'Arturo Shepherd',
    title: 'Eyelash Tech',
    address: '123 Doe St',
    city: 'Richmond',
    state: 'BC',
    country: 'Canada',
    email: 'Shepherd@gmail.com',
    phone: "1213124",
    password: bcrypt.hashSync('123456', 10),
    imageFilename: "file12.jpg",
    individual: "yes",
    totalRating: 60, 
    ratingPopulation: 50,
    isAdmin: false,
  },
  {
    name: 'Noe Winters',
    title: 'Hairdressing',
    address: '123 Doe St',
    city: 'Richmond',
    state: 'BC',
    country: 'Canada',
    email: 'vWinters@gmail.com',
    phone: "11223344",
    password: bcrypt.hashSync('123456', 10),
    imageFilename: "file13.jpg",
    individual: "yes",
    totalRating: 130, 
    ratingPopulation: 100,
    isAdmin: false,
  },
  {
    name: 'Brendan Park',
    title: 'House Cleaning',
    address: '123 Doe St',
    city: 'Richmond',
    state: 'BC',
    country: 'Canada',
    email: 'johnPark_doe@gmail.com',
    phone: "141414",
    password: bcrypt.hashSync('123456', 10),
    imageFilename: "file14.jpg",
    individual: "yes",
    totalRating: 100, 
    ratingPopulation: 80,
    isAdmin: false,
  },
  {
    name: 'Miya Werner',
    title: 'Landscaping',
    address: '123 Doe St',
    city: 'Richmond',
    state: 'BC',
    country: 'Canada',
    email: 'Werner@gmail.com',
    phone: "1515",
    password: bcrypt.hashSync('123456', 10),
    imageFilename: "file15.jpg",
    individual: "yes",
    totalRating: 15, 
    ratingPopulation: 3,
    isAdmin: false,
  },
  {
    name: 'Kristina Luna',
    title: 'Makeup',
    address: '123 Doe St',
    city: 'Richmond',
    state: 'BC',
    country: 'Canada',
    email: 'johnLuna_doe@gmail.com',
    phone: "16161616",
    password: bcrypt.hashSync('123456', 10),
    imageFilename: "file16.jpg",
    individual: "yes",
    totalRating: 0, 
    ratingPopulation: 0,
    isAdmin: false,
  },
  {
    name: 'Adrienne Muellern',
    title: 'Massage',
    address: '123 Doe St',
    city: 'Richmond',
    state: 'BC',
    country: 'Canada',
    email: 'Muellern@gmail.com',
    phone: "17171717",
    password: bcrypt.hashSync('123456', 10),
    imageFilename: "file17.jpg",
    individual: "yes",
    totalRating: 17, 
    ratingPopulation: 5,
    isAdmin: false,
  },
  {
    name: 'Kailey Vasquez',
    title: 'Nail Technician',
    address: '123 Doe St',
    city: 'Richmond',
    state: 'BC',
    country: 'Canada',
    email: 'Vasquez@gmail.com',
    phone: "1818",
    password: bcrypt.hashSync('123456', 10),
    imageFilename: "file18.jpg",
    individual: "yes",
    totalRating: 0, 
    ratingPopulation: 0,
    isAdmin: false,
  },
  {
    name: 'Philip Orozco',
    title: 'Nail Technician',
    address: '123 Doe St',
    city: 'Richmond',
    state: 'BC',
    country: 'Canada',
    email: 'Orozco@gmail.com',
    phone: "11223344",
    password: bcrypt.hashSync('123456', 10),
    imageFilename: "file.jpg",
    individual: "yes",
    totalRating: 0, 
    ratingPopulation: 0,
    isAdmin: false,
  },
  {
    name: 'Mariah Huber',
    title: 'Makeup',
    address: '123 Doe St',
    city: 'Richmond',
    state: 'BC',
    country: 'Canada',
    email: 'jHuberohn_doe@gmail.com',
    phone: "11223344",
    password: bcrypt.hashSync('123456', 10),
    imageFilename: "file.jpg",
    individual: "yes",
    totalRating: 0, 
    ratingPopulation: 0,
    isAdmin: false,
  },
  {
    name: 'Annie Brock',
    title: 'Massage',
    address: '123 Doe St',
    city: 'Richmond',
    state: 'BC',
    country: 'Canada',
    email: 'Brock@gmail.com',
    phone: "11223344",
    password: bcrypt.hashSync('123456', 10),
    imageFilename: "file.jpg",
    individual: "yes",
    totalRating: 0, 
    ratingPopulation: 0,
    isAdmin: false,
  },
  {
    name: 'Stephen Greer',
    title: 'Landscaping',
    address: '123 Doe St',
    city: 'Richmond',
    state: 'BC',
    country: 'Canada',
    email: 'Greer@gmail.com',
    phone: "11223344",
    password: bcrypt.hashSync('123456', 10),
    imageFilename: "file.jpg",
    individual: "yes",
    totalRating: 0, 
    ratingPopulation: 0,
    isAdmin: false,
  },
  {
    name: 'Winston Cowan',
    title: 'Nail Technician',
    address: '123 Doe St',
    city: 'Richmond',
    state: 'BC',
    country: 'Canada',
    email: 'Cowan@gmail.com',
    phone: "11223344",
    password: bcrypt.hashSync('123456', 10),
    imageFilename: "file.jpg",
    individual: "yes",
    totalRating: 0, 
    ratingPopulation: 0,
    isAdmin: false,
  },
  {
    name: 'Mariyah Boyd',
    title: 'House Cleaning',
    address: '123 Doe St',
    city: 'Richmond',
    state: 'BC',
    country: 'Canada',
    email: 'Boyd@gmail.com',
    phone: "11223344",
    password: bcrypt.hashSync('123456', 10),
    imageFilename: "file.jpg",
    individual: "yes",
    totalRating: 0, 
    ratingPopulation: 0,
    isAdmin: false,
  },
  {
    name: 'Layton Booth',
    title: 'House Cleaning',
    address: '123 Doe St',
    city: 'Richmond',
    state: 'BC',
    country: 'Canada',
    email: 'johBoothn_doe@gmail.com',
    phone: "11223344",
    password: bcrypt.hashSync('123456', 10),
    imageFilename: "file.jpg",
    individual: "yes",
    totalRating: 0, 
    ratingPopulation: 0,
    isAdmin: false,
  },
  {
    name: 'Kailee Mcpherson',
    title: 'Layton Booth',
    address: '123 Doe St',
    city: 'Richmond',
    state: 'BC',
    country: 'Canada',
    email: 'Mcpherson@gmail.com',
    phone: "11223344",
    password: bcrypt.hashSync('123456', 10),
    imageFilename: "file.jpg",
    individual: "yes",
    totalRating: 0, 
    ratingPopulation: 0,
    isAdmin: false,
  },
  {
    name: 'Stephany Hensley',
    title: 'Hairdressing',
    address: '123 Doe St',
    city: 'Richmond',
    state: 'BC',
    country: 'Canada',
    email: 'Hensley@gmail.com',
    phone: "11223344",
    password: bcrypt.hashSync('123456', 10),
    imageFilename: "file.jpg",
    individual: "yes",
    totalRating: 0, 
    ratingPopulation: 0,
    isAdmin: false,
  },
  {
    name: 'Marlie Hanson',
    title: 'Eyelash Tech',
    address: '123 Doe St',
    city: 'Richmond',
    state: 'BC',
    country: 'Canada',
    email: 'Hanson@gmail.com',
    phone: "11223344",
    password: bcrypt.hashSync('123456', 10),
    imageFilename: "file.jpg",
    individual: "yes",
    totalRating: 0, 
    ratingPopulation: 0,
    isAdmin: false,
  },
  {
    name: 'Yael Hines',
    title: 'Eyelash Tech',
    address: '123 Doe St',
    city: 'Richmond',
    state: 'BC',
    country: 'Canada',
    email: 'Hines@gmail.com',
    phone: "11223344",
    password: bcrypt.hashSync('123456', 10),
    imageFilename: "file.jpg",
    individual: "yes",
    totalRating: 0, 
    ratingPopulation: 0,
    isAdmin: false,
  },
  {
    name: 'Laura Conley',
    title: 'Barbering',
    address: '123 Doe St',
    city: 'Richmond',
    state: 'BC',
    country: 'Canada',
    email: 'Conley@gmail.com',
    phone: "11223344",
    password: bcrypt.hashSync('123456', 10),
    imageFilename: "file.jpg",
    individual: "yes",
    totalRating: 0, 
    ratingPopulation: 0,
    isAdmin: false,
  },
  {
    name: 'Crystal Rich',
    title: 'Barbering',
    address: '123 Doe St',
    city: 'Richmond',
    state: 'BC',
    country: 'Canada',
    email: 'Rich@gmail.com',
    phone: "11223344",
    password: bcrypt.hashSync('123456', 10),
    imageFilename: "file.jpg",
    individual: "yes",
    totalRating: 0, 
    ratingPopulation: 0,
    isAdmin: false,
  },
  {
    name: 'Cailyn Burns',
    title: 'Barbering',
    address: '123 Doe St',
    city: 'Richmond',
    state: 'BC',
    country: 'Canada',
    email: 'Burns@gmail.com',
    phone: "989898",
    password: bcrypt.hashSync('123456', 10),
    imageFilename: "file98.jpg",
    individual: "no",
    totalRating: 30, 
    ratingPopulation: 7,
    isAdmin: false,
  },
  {
    name: 'Thalia Bradley',
    title: 'Makeup',
    address: '123 Doe St',
    city: 'Richmond',
    state: 'BC',
    country: 'Canada',
    email: 'Bradley@gmail.com',
    phone: "999999",
    password: bcrypt.hashSync('123456', 10),
    imageFilename: "filelast.jpg",
    individual: "yes",
    totalRating: 99, 
    ratingPopulation: 50,
    isAdmin: false,
  },
];

export default providers;
