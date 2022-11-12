# Currency Converter

## About project
**The Currency Converter** is my homework after *module 4*. 

Demo: [click here!](https://siedemus.github.io/Currency-Converter/)

## Currencies
In my converter you can convert PLN to:
- GPB
- USD
- EURO
- CHF

Each currency has been taken from [xe.com](https://www.xe.com/)

## How it works

![gif](images/Animation.gif)

## Some code

This script convert PLN to currency set by user

```
    switch(select) {
        case "USD":
            operation = field * USD;
            break;
        case "GPB":
            operation = field * GPB;
            break;
        case "EUR":
            operation = field * EUR
            break;
        case "CHF":
            operation = field * CHF
            break;
    }
```
Here, we have JS variables which contains prices of currencies

`let USD = 0.21245696;`

`let EUR = 0.21287202;`

`let GPB = 0.18693312;`

`let CHF = 0.21159223;`

    
