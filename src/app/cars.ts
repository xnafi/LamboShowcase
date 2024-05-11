export interface allCarData {
  id: number;
  model: string;
  yearOfMake: number;
  fuelType: string;
  topSpeed: string;
  price: string;
  details: string;
  image: string;
  category: string;
}

export const lamborghiniCars: allCarData[] = [
  {
    id: 1,
    model: "Urus",
    yearOfMake: 2021,
    fuelType: "Petrol",
    topSpeed: "190 mph",
    price: "$218,009",
    details:
      "The Lamborghini Urus is a luxury SUV that redefines performance and versatility. Powered by a twin-turbocharged V8 engine producing 641 horsepower, it can accelerate from 0 to 60 mph in just 3.6 seconds. The Urus features advanced driving dynamics, including all-wheel drive and active torque vectoring, making it equally capable on and off the road.",
    image: "/assets/1.png",
    category: "SUV",
  },
  {
    id: 2,
    model: "Aventador S",
    yearOfMake: 2018,
    fuelType: "Petrol",
    topSpeed: "217 mph",
    price: "$417,650",
    details:
      "The Lamborghini Aventador S is a powerful and dynamic supercar designed for extreme performance. Its naturally aspirated V12 engine delivers 730 horsepower, allowing it to accelerate from 0 to 60 mph in just 2.9 seconds. The Aventador S features Lamborghini's signature design elements, including sharp angles and aggressive styling, making it a true icon of automotive excellence.",
    image: "/assets/AventadorS.png",
    category: "Supercar",
  },
  {
    id: 3,
    model: "Huracan Performante",
    yearOfMake: 2019,
    fuelType: "Petrol",
    topSpeed: "202 mph",
    price: "$311,771",
    details:
      "The Lamborghini Huracan Performante is a track-focused supercar that pushes the boundaries of performance and agility. Its 5.2-liter V10 engine produces 631 horsepower, allowing it to sprint from 0 to 60 mph in just 2.9 seconds. The Performante features advanced aerodynamics, including active aerodynamic elements and the ALA system, making it a formidable force on the track.",
    image: "/assets/3.png",
    category: "Supercar",
  },
  {
    id: 4,
    model: "Aventador LP 700-4",
    yearOfMake: 2016,
    fuelType: "Petrol",
    topSpeed: "217 mph",
    price: "$393,695",
    details:
      "The Lamborghini Aventador LP 700-4 is a true icon of automotive engineering, combining raw power with breathtaking design. Its 6.5-liter V12 engine delivers 691 horsepower, propelling it from 0 to 60 mph in just 2.9 seconds. The Aventador LP 700-4 features advanced technology, including a lightweight carbon fiber monocoque chassis and a seven-speed ISR transmission.",
    image: "/assets/4.png",
    category: "Supercar",
  },
  {
    id: 5,
    model: "Huracan LP 610-4",
    yearOfMake: 2015,
    fuelType: "Petrol",
    topSpeed: "202 mph",
    price: "$282,692",
    details:
      "The Lamborghini Huracan LP 610-4 is a high-performance supercar that offers exhilarating performance and stunning design. Its 5.2-liter V10 engine produces 602 horsepower, allowing it to accelerate from 0 to 60 mph in just 3.2 seconds. The Huracan LP 610-4 features a lightweight construction and advanced aerodynamics, making it a joy to drive on both the road and the track.",
    image: "/assets/5.png",
    category: "Supercar",
  },
  {
    id: 6,
    model: "Gallardo LP 570-4 Superleggera",
    yearOfMake: 2014,
    fuelType: "Petrol",
    topSpeed: "202 mph",
    price: "$266,326",
    details:
      "The Lamborghini Gallardo LP 570-4 Superleggera is a lightweight and high-performance supercar that offers blistering speed and precise handling. Its 5.2-liter V10 engine produces 562 horsepower, allowing it to reach a top speed of 202 mph. The Gallardo LP 570-4 Superleggera features a carbon fiber body and aerodynamic enhancements, making it one of the most exhilarating cars to drive.",
    image: "/assets/6.png",
    category: "Supercar",
  },
  {
    id: 7,
    model: "Reventon Roadster",
    yearOfMake: 2013,
    fuelType: "Petrol",
    topSpeed: "205 mph",
    price: "$1.56 million",
    details:
      "The Lamborghini Reventon Roadster is a limited-edition supercar that offers unparalleled performance and exclusivity. Its 6.5-liter V12 engine produces 661 horsepower, allowing it to accelerate from 0 to 60 mph in just 3.3 seconds. The Reventon Roadster features a striking design inspired by fighter jets, with sharp angles and aggressive styling that turn heads wherever it goes.",
    image: "/assets/7.png",
    category: "Supercar",
  },
  {
    id: 8,
    model: "Murcielago LP 670-4 SV",
    yearOfMake: 2012,
    fuelType: "Petrol",
    topSpeed: "209 mph",
    price: "$483,928",
    details:
      "The Lamborghini Murcielago LP 670-4 SV is a high-performance supercar that combines power, precision, and exclusivity. Its 6.5-liter V12 engine produces 661 horsepower, allowing it to reach a top speed of 209 mph. The Murcielago LP 670-4 SV features lightweight construction and advanced aerodynamics, making it a formidable force on both the road and the track.",
    image: "/assets/8.png",
    category: "Supercar",
  },
  {
    id: 9,
    model: "Diablo VT 6.0",
    yearOfMake: 2011,
    fuelType: "Petrol",
    topSpeed: "205 mph",
    price: "$349,789",
    details:
      "The Lamborghini Diablo VT 6.0 is a modern classic that offers timeless design and exhilarating performance. Its 6.0-liter V12 engine produces 550 horsepower, allowing it to accelerate from 0 to 60 mph in just 3.5 seconds. The Diablo VT 6.0 features iconic scissor doors and aggressive styling, making it a true icon of automotive excellence.",
    image: "/assets/9.png",
    category: "Supercar",
  },
  {
    id: 10,
    model: "Countach 25th Anniversary",
    yearOfMake: 2010,
    fuelType: "Petrol",
    topSpeed: "183 mph",
    price: "$407,988",
    details:
      "The Lamborghini Countach 25th Anniversary is a legendary supercar that celebrates 25 years of automotive excellence. Its 5.2-liter V12 engine produces 455 horsepower, allowing it to reach a top speed of 183 mph. The Countach 25th Anniversary features iconic wedge-shaped styling and signature scissor doors, making it one of the most recognizable cars in automotive history.",
    image: "/assets/10.png",
    category: "Supercar",
  },
  {
    id: 11,
    model: "LM002",
    yearOfMake: 2009,
    fuelType: "Petrol",
    topSpeed: "130 mph",
    price: "$312,988",
    details:
      "The Lamborghini LM002 is a one-of-a-kind luxury SUV that offers unmatched performance and capability. Its 5.2-liter V12 engine produces 444 horsepower, allowing it to tackle any terrain with ease. The LM002 features a rugged yet refined design, with luxurious amenities and advanced technology that make it equally at home on the road or off the beaten path.",
    image: "/assets/11.png",
    category: "SUV",
  },
  {
    id: 12,
    model: "Jalpa",
    yearOfMake: 2008,
    fuelType: "Petrol",
    topSpeed: "155 mph",
    price: "$157,292",
    details:
      "The Lamborghini Jalpa is a classic sports car that offers timeless design and exhilarating performance. Its 3.5-liter V8 engine produces 255 horsepower, allowing it to reach a top speed of 155 mph. The Jalpa features iconic wedge-shaped styling and a luxurious interior, making it a true icon of automotive excellence.",
    image: "/assets/12.png",
    category: "Sports Car",
  },
  {
    id: 13,
    model: "Silhouette",
    yearOfMake: 2007,
    fuelType: "Petrol",
    topSpeed: "162 mph",
    price: "$206,478",
    details:
      "The Lamborghini Silhouette is a rare and exotic sports car that offers breathtaking performance and stunning design. Its 3.0-liter V8 engine produces 265 horsepower, allowing it to reach a top speed of 162 mph. The Silhouette features sleek lines and aggressive styling, making it a true collector's item for automotive enthusiasts.",
    image: "/assets/notFound.png",
    category: "Sports Car",
  },
  {
    id: 14,
    model: "Urraco P250",
    yearOfMake: 2006,
    fuelType: "Petrol",
    topSpeed: "155 mph",
    price: "$92,554",
    details:
      "The Lamborghini Urraco P250 is a classic sports car that offers timeless design and thrilling performance. Its 2.5-liter V8 engine produces 217 horsepower, allowing it to reach a top speed of 155 mph. The Urraco P250 features iconic wedge-shaped styling and a luxurious interior, making it a true icon of automotive excellence.",
    image: "/assets/14.jpg",
    category: "Sports Car",
  },
  {
    id: 15,
    model: "Islero",
    yearOfMake: 2005,
    fuelType: "Petrol",
    topSpeed: "154 mph",
    price: "$247,892",
    details:
      "The Lamborghini Islero is a classic grand tourer that offers luxurious comfort and exhilarating performance. Its 4.0-liter V12 engine produces 325 horsepower, allowing it to reach a top speed of 154 mph. The Islero features elegant lines and timeless styling, making it a true icon of automotive elegance.",
    image: "/assets/notFound.png",
    category: "Grand Tourer",
  },
  {
    id: 16,
    model: "400 GT",
    yearOfMake: 2004,
    fuelType: "Petrol",
    topSpeed: "167 mph",
    price: "$158,236",
    details:
      "The Lamborghini 400 GT is a classic grand tourer that offers timeless design and exhilarating performance. Its 4.0-liter V12 engine produces 320 horsepower, allowing it to reach a top speed of 167 mph. The 400 GT features elegant lines and luxurious amenities, making it a true icon of automotive excellence.",
    image: "/assets/16.png",
    category: "Grand Tourer",
  },
  {
    id: 17,
    model: "Miura P400",
    yearOfMake: 2003,
    fuelType: "Petrol",
    topSpeed: "171 mph",
    price: "$389,726",
    details:
      "The Lamborghini Miura P400 is a legendary supercar that redefined automotive design and performance. Its 4.0-liter V12 engine produces 350 horsepower, allowing it to reach a top speed of 171 mph. The Miura P400 features iconic styling and innovative engineering, making it a true icon of automotive history.",
    image: "/assets/notFound.png",
    category: "Supercar",
  },
  {
    id: 18,
    model: "350 GT",
    yearOfMake: 2002,
    fuelType: "Petrol",
    topSpeed: "152 mph",
    price: "$247,813",
    details:
      "The Lamborghini 350 GT is a classic grand tourer that offers timeless design and exhilarating performance. Its 3.5-liter V12 engine produces 280 horsepower, allowing it to reach a top speed of 152 mph. The 350 GT features elegant lines and luxurious amenities, making it a true icon of automotive excellence.",
    image: "/assets/notFound.png",
    category: "Grand Tourer",
  },
  {
    id: 19,
    model: "Espada",
    yearOfMake: 2001,
    fuelType: "Petrol",
    topSpeed: "155 mph",
    price: "$213,879",
    details:
      "The Lamborghini Espada is a classic grand tourer that offers luxurious comfort and thrilling performance. Its 3.9-liter V12 engine produces 350 horsepower, allowing it to reach a top speed of 155 mph. The Espada features elegant lines and spacious accommodations, making it a true icon of automotive elegance.",
    image: "/assets/19.png",
    category: "Grand Tourer",
  },
  {
    id: 20,
    model: "Islero",
    yearOfMake: 2000,
    fuelType: "Petrol",
    topSpeed: "154 mph",
    price: "$247,892",
    details:
      "The Lamborghini Islero is a classic grand tourer that offers luxurious comfort and exhilarating performance. Its 4.0-liter V12 engine produces 325 horsepower, allowing it to reach a top speed of 154 mph. The Islero features elegant lines and timeless styling, making it a true icon of automotive elegance.",
    image: "/assets/notFound.png",
    category: "Grand Tourer",
  },
];
