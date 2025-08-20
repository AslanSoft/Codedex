### I'm Started CodeDex

### First question is:

```

Create some variables for your favorite company with the following data types:

companyName, a string.
foundingYear, a number.
isActive, a Boolean.
fundingAmount, undefined.
Print them out using console.log().

```

### my answer 

```

let companyName = "Aslan";
let foundingYear = 2025;
let isActive = true;
let fundingAmount;

console.log(companyName);
console.log(foundingYear);
console.log(isActive);
console.log(fundingAmount);

```

### 2-question

```

Let's put these operators to use!

Create a temperature.js program that converts a temperature from Fahrenheit (°F) to Celsius (°C).

Google the current temperature of Brooklyn, NY (where Codédex is based) in °F.

Use the following formula and write it out in JavaScript:


Celsius= 
1.8
(Fahrenheit−32)
​
Print out the converted temperature using console.log().

```

### my answer

```

const fahrenheit = 70;
const celcius = 32;

let tip = (fahrenheit - celcius) / 1.8;

console.log(tip)

```

### 3-question 

```

The body mass index (BMI) was created by a Belgian mathematician in the 1850s and it's used by health and nutrition professionals to estimate human body fat in certain populations.

It is computed by taking an individual's weight (mass) in kilograms and dividing it by the square of their height in meters.


bmi= 
height 
2
 
mass
​
 

Create a program that calculates your own BMI.

Author's note: Psst. BMI is an archaic and oversimplified way to measure personal health. It was created by a mathematician — not a doctor! 💡

```

### my answer 

```

let mass = 85;
let height = 1.75;

let bmi = mass / (height * height);

console.log(bmi);

```

### 4-question 

```

The year is 2099... we can now take a vacation on the moon or Mars! 🚀



Create a weight conversion program that:

Takes your weight on Earth.
Converts it to your weight on either the moon or Mars.
To calculate your weight on Mars:


destination_weight=earth_weight×0.38

The output of the program should look like this:

Your weight on Earth is 210 pounds.
Your weight on Mars is 79.8 pounds.

Once you are done, post a screenshot of your code to Twitter by clicking the icon below, and then go to #CodedexPlanetWeight to review another learner's work. Be supportive! :)

```

### my answer 

```

let destination_weight = 75 * 0.38;
console.log(destination_weight);

```