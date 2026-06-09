console.log("This is the first line\nAnd this is the second");
console.log('A newline character is written like \n"\\n".');
console.log("con" + "cat" + "e" + "nate");
console.log(`half of 10 is ${10 / 2}`); // Backtick-quoted strings are usually called: template literals

// Typeof operator
console.log(typeof 5);
console.log(typeof "Marimai");
console.log(typeof [1, 2, 3, 4, 5]);
console.log(
  typeof function () {
    1 + 2;
  },
);
console.log(-(10 - 2));

// Comparisons:
console.log("Aardvark" < "Zoroaster");
console.log("Cat" < "Dog");
console.log("Zoo" < "apple");
console.log("Apple" < "Application");
//სტრინგის შედარების დროს ჯავასკრიპტი არ უყურებს რამდენად გრძელია თითოეული მათგანი, არამედ უყურებს ლექსიკოგრაფიულად
/* 
ანუ შეგვიძლია ასე ვთქვათ: სტრინგი არ ედარება ერთმანეტს სიგრძის მიხედვით, არამედ თითეული ასოს უნიკოდის მიხედვით, 
ასევე თუ სიტყვა იწყება დიდი ასოთი, შესაბამისად შეიძლება შეიცვალოს შედარების მნიშვნელობაც, 
რადგან დიდი ასოს უნიკოდი უფრო მცირეა. თუ სტრინგები ერთნაირი ასოებით იწყება, გადადის მეორე ასოზე და ა.შ 
იმის მიხედვით თუ სადამდე ემტხვევა ასოები, როგორც კი სხვადასხვა ასო შეხვდება ამოწმებს რომელს უფრო დიდი მნიშვნელობა აქვს 
და მაშინვე გამოაქვს შედეგი, აღარ აგრძელებს შემოწმებას. 
თუ განსხვავებული ასოთი იწყება, მაშინ პირველივე ასოების უნიკოდების შედარების შედეგი გამოაქვს. თუ ვადარებთ :


"abc" < "abcd"

რადგან პირველი უფრო მოკლეა და მეოტხეს აქვს დამატებითი სიმბოლო, პირდაპირ გამოვა true
*/

console.log("Garnet" != "Ruby"); //ეს იქნება true რადგან მართლაც, პირველივე ქერექთერებიც კი არ უდრის ერთმანეთს
// Nullish operators
let score1 = 0;
console.log(score1 || 100); //ზოგჯერ 0 სრულიად ნორმალური და სწორი მნიშვნელობაა. და მაინც 100 დააბრუნებს ||  operator ამიტომ:
let score2 = 0;
console.log(score2 ?? 100); //ვიყენებთ Nullish ოპერატორს, რომ შეამოწმოს, 0 არის თუ არა null / undefined. რადგან არ არის დაგვიბრუნებს  0-ს და არა 100-ს

/*  0 ის გარდა არის კიდევ: false, ცარიელი სტრინგი - "", NaN,*/
