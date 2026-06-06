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
