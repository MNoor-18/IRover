import { AboutCarDescription, CarProps } from '@/types';

export const luxury: AboutCarDescription = {
   title: "Luxury",
   description: "Range Rover redefines luxury with an exquisite blend of comfort and technology. From massaging leather seats with cooling and heating functions to a panoramic sunroof that brings the outside in, every detail is crafted for indulgence. The immersive Meridian sound system, ambient interior lighting, and dual touchscreens ensure a premium in-cabin experience. Intelligent driver-assist features and air suspension deliver a smooth, serene ride—elevating every journey with elegance and sophistication."
}

export const specs: AboutCarDescription = {
   title: "Specs",
   description: "Engineered for power and precision, Range Rover’s performance specs deliver thrilling capability. A 4.4L V8 engine with 523 horsepower and 8-speed automatic transmission enables rapid acceleration from 0–100 km/h in just 4.6 seconds. Its all-wheel drive system and advanced terrain control adapt to any surface. With an impressive 295mm ground clearance and cutting-edge safety systems, this SUV offers both strength and intelligence—ready for city roads or rugged trails alike."
}

export const yearsOfProduction = [
   { title: "All", value: "all" },
   { title: "2015", value: "2015" },
   { title: "2016", value: "2016" },
   { title: "2017", value: "2017" },
   { title: "2018", value: "2018" },
   { title: "2019", value: "2019" },
   { title: "2020", value: "2020" },
   { title: "2021", value: "2021" },
   { title: "2022", value: "2022" },
   { title: "2023", value: "2023" },
   { title: "2024", value: "2024" },
];

export const carByYear: { [year: string]: CarProps } = {
  "2015": {
    city_mpg: "14",
    class: "SUV",
    combination_mpg: "16",
    cylinders: 8,
    displacement: 5.0,
    drive: "AWD",
    fuel_type: "gasoline",
    highway_mpg: "19",
    make: "Land Rover",
    model: "Range Rover",
    transmission: "automatic",
    year: 2015,
    price: 83000
  },
  "2016": {
    city_mpg: "14",
    class: "SUV",
    combination_mpg: "17",
    cylinders: 8,
    displacement: 5.0,
    drive: "AWD",
    fuel_type: "gasoline",
    highway_mpg: "20",
    make: "Land Rover",
    model: "Range Rover",
    transmission: "automatic",
    year: 2016,
    price: 86000
  },
  "2017": {
    city_mpg: "15",
    class: "SUV",
    combination_mpg: "17",
    cylinders: 8,
    displacement: 5.0,
    drive: "AWD",
    fuel_type: "gasoline",
    highway_mpg: "21",
    make: "Land Rover",
    model: "Range Rover",
    transmission: "automatic",
    year: 2017,
    price: 88000
  },
  "2018": {
    city_mpg: "15",
    class: "SUV",
    combination_mpg: "18",
    cylinders: 8,
    displacement: 5.0,
    drive: "AWD",
    fuel_type: "gasoline",
    highway_mpg: "22",
    make: "Land Rover",
    model: "Range Rover",
    transmission: "automatic",
    year: 2018,
    price: 91000
  },
  "2019": {
    city_mpg: "16",
    class: "SUV",
    combination_mpg: "19",
    cylinders: 8,
    displacement: 5.0,
    drive: "AWD",
    fuel_type: "gasoline",
    highway_mpg: "23",
    make: "Land Rover",
    model: "Range Rover",
    transmission: "automatic",
    year: 2019,
    price: 95000
  },
  "2020": {
    city_mpg: "20",
    class: "SUV",
    combination_mpg: "23",
    cylinders: 6,
    displacement: 3.0,
    drive: "AWD",
    fuel_type: "diesel",
    highway_mpg: "27",
    make: "Land Rover",
    model: "Range Rover Sport",
    transmission: "automatic",
    year: 2020,
    price: 97000
  },
  "2021": {
    city_mpg: "23",
    class: "SUV",
    combination_mpg: "26",
    cylinders: 4,
    displacement: 2.0,
    drive: "AWD",
    fuel_type: "gasoline",
    highway_mpg: "28",
    make: "Land Rover",
    model: "Range Rover Evoque",
    transmission: "automatic",
    year: 2021,
    price: 62000
  },
  "2022": {
    city_mpg: "22",
    class: "SUV",
    combination_mpg: "25",
    cylinders: 4,
    displacement: 2.0,
    drive: "AWD",
    fuel_type: "gasoline",
    highway_mpg: "27",
    make: "Land Rover",
    model: "Range Rover Velar",
    transmission: "automatic",
    year: 2022,
    price: 71000
  },
  "2023": {
    city_mpg: "19",
    class: "SUV",
    combination_mpg: "22",
    cylinders: 6,
    displacement: 3.0,
    drive: "AWD",
    fuel_type: "mild hybrid",
    highway_mpg: "26",
    make: "Land Rover",
    model: "Range Rover Sport",
    transmission: "automatic",
    year: 2023,
    price: 99000
  },
  "2024": {
    city_mpg: "21",
    class: "SUV",
    combination_mpg: "24",
    cylinders: 6,
    displacement: 3.0,
    drive: "AWD",
    fuel_type: "plug-in hybrid",
    highway_mpg: "28",
    make: "Land Rover",
    model: "Range Rover",
    transmission: "automatic",
    year: 2024,
    price: 106000
  }
};

export const footerLinks = [
   {
      title: "About",
      links: [
         { title: "Developer", url: "#" },
         { title: "Featured", url: "/" },
         { title: "Partnership", url: "/" },
         { title: "Business Relation", url: "/" },
      ],
   },
   {
      title: "Company",
      links: [
         { title: "Events", url: "/" },
         { title: "Blog", url: "/" },
         { title: "Podcast", url: "/" },
         { title: "Invite a friend", url: "/" },
      ],
   },
   {
      title: "Socials",
      links: [
         { title: "Discord", url: "/" },
         { title: "Instagram", url: "/" },
         { title: "Twitter", url: "/" },
         { title: "Facebook", url: "/" },
      ],
   },
];  