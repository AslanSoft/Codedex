# I'm Started CodeDex

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

let earthWeight = 75
let result = destination_weight = earthWeight * 0.38;
console.log("Your weight on Earth is " + earthWeight + " pounds.");
console.log("Your weight on Mars is " + result + " pounds.");


```

### 5-question 

```

All you need to know is that this program simulates a coin toss:

≈ 50% of the time, it's "Heads".
≈ 50% of the time, it's "Tails".

```

### my answer

```

let num = Math.random();

if (num > 0.5) {
  console.log("Heads");
} else {
  console.log("Tails");
}

```


### 6-question

```

Create a good-morning.js program that prints a message if it's early in the day.

Define an hour variable and give it the current time of day.

Write an if statement for the following:

If hour < 12, print “Good morning 🌞” and some of your morning routines.
After you run the code, change hour's value and run it again. Do this a few times to make sure the program is working as intended.

```

### my answer

```

let hour = 9;
if(hour < 12){
  console.log("Xayrli tong 🌞")
}

```

### 7-question

```
Go back to your if statement from the previous exercise and turn it into an if/else for the following:

If hour < 12, then print “Good morning 🌞” and some of your morning routines.
Else, print “Good afternoon ☁️” and some of your afternoon rituals.
After you run the code, change hour's value and run it again. Do this a few times to make sure the program is working as intended.

```

### my answer

```

let hour = 9;
if(hour < 12){
  console.log("Xayrli tong 🌞")
}
else{
  console.log("Xayrli kun ☁️")
}

```

### 8-question

```

In chemistry, pH is a scale used to specify the acidity or basicity of a fluid.

Create a ph-levels.js program that checks whether a pH level is basic, acidic, or neutral.

First, create a variable called ph and give it a value between 0 and 14.

Write an if/else if/else statement that:

If ph is greater than 7, output “Basic”.
Else if ph is less than 7, output “Acidic”.
Else, output “Neutral”.

```

### my answer

```

let ph = 6;
if(ph > 7){
  console.log("Basic")
}else if(ph < 7){
  console.log("Kislotali")
}
else{
  console.log("Neytral")
}

```