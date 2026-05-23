Your Objective:1:
Write a clean, vanilla JavaScript function named calculateFinalScore that accepts exactly three parameters: basePoints, bonusPoints, and penalty.

However, the function needs to handle the following real-world scenarios gracefully:

Missing Arguments: If bonusPoints or penalty are not passed when the function is called, they should default to 0 inside the logic without using ES6 default parameter syntax (handle it inside the function body).

Extra Arguments: If someone passes more than three arguments into the function, any additional numbers should be added together and subtracted from the final score as an "excess penalty".

---

Your Objective:
Write a clean, vanilla JavaScript function named calculateFinalScore that accepts exactly three parameters: basePoints, bonusPoints, and penalty.

However, the function needs to handle the following real-world scenarios gracefully:

Missing Arguments: If bonusPoints or penalty are not passed when the function is called, they should default to 0 inside the logic without using ES6 default parameter syntax (handle it inside the function body).

Extra Arguments: If someone passes more than three arguments into the function, any additional numbers should be added together and subtracted from the final score as an "excess penalty".

პირობა:
დაწერე JavaScript ფუნქცია სახელით calculateTotalPrice, რომელიც მიიღებს 3 პარამეტრს: price (პროდუქტის ფასი), deliveryFee (მიტანის საფასური) და discount (ფასდაკლება).
ფუნქციამ უნდა გაითვალისწინოს შემდეგი რეალური სცენარები:
გამოტოვებული არგუმენტები: თუ ფუნქციის გამოძახებისას მიტანის საფასურს (deliveryFee) ან ფასდაკლებას (discount) არ გადასცემენ, მათი საწყისი მნიშვნელობა ფუნქციის შიგნით უნდა გახდეს 0.
უფასო მიტანა: თუ პროდუქტის ფასი (price) არის 100 ლარი ან მეტი, მიტანის საფასური ავტომატურად გახდეს 0 (უფასოა).
საბოლოო ფასი: ფუნქციამ უნდა შეკრიბოს ფასი და მიტანის საფასური, გამოაკლოს ფასდაკლება და დააბრუნოს საბოლოო თანხა.

აი, 3 მარტივი დავალება, რომლებიც სპეციალურად ფუნქციის საწყისი არგუმენტების (default arguments) შესასწავლადაა შექმნილი.
შეგიძლია თითოეული დავალება შეასრულო როგორც ES6 სინტაქსით (პირდაპირ პარამეტრებში param = value), ისე ძველი მეთოდით (ფუნქციის შიგნით if პირობით), რათა ორივე მიდგომა კარგად გაიგო.

1. მისალმების გენერატორი (greetUser)
   აღწერა: დაწერე ფუნქცია, რომელიც მომხმარებელს სახელით ესალმება. თუ სახელი ცნობილი არ არის, ფუნქციამ სტანდარტული სახელი უნდა გამოიყენოს.
   პარამეტრები: name (სახელი).
   ლოგიკა: თუ name არ არის გადაცემული, მისი საწყისი მნიშვნელობა უნდა იყოს "სტუმარო".
   შედეგი: ფუნქციამ უნდა დააბრუნოს ტექსტი: "გამარჯობა, [სახელი]!".
   მაგალითი:
   greetUser("ანი") -> "გამარჯობა, ანი!"
   greetUser() -> "გამარჯობა, სტუმარო!"
2. მართკუთხედის ფართობი (calculateArea)
   აღწერა: დაწერე ფუნქცია, რომელიც ითვლის მართკუთხედის ფართობს. თუ მეორე გვერდი არ არის მითითებული, ფუნქციამ ფართობი ისე უნდა გამოთვალოს, თითქოს ეს კვადრატია.
   პარამეტრები: length (სიგრძე) და width (სიგანე).
   ლოგიკა: თუ width არ არის გადაცემული, ის ავტომატურად გაუტოლდეს length-ს (რადგან კვადრატს ტოლი გვერდები აქვს).
   შედეგი: ფუნქციამ უნდა დააბრუნოს გვერდების ნამრავლი.
   მაგალითი:
   calculateArea(5, 4) -> 20 (მართკუთხედი: 5 _ 4)
   calculateArea(6) -> 36 (კვადრატი: 6 _ 6)
3. სესხის პროცენტის კალკულატორი (calculateInterest)
   აღწერა: დაწერე ფუნქცია, რომელიც ითვლის თუ რამდენი იქნება პროცენტის თანხა აღებულ სესხზე. ბანკს აქვს სტანდარტული საპროცენტო განაკვეთი, თუმცა ზოგჯერ აქციის ფარგლებში დაბალ პროცენტსაც სთავაზობს მომხმარებელს.
   პარამეტრები: amount (სესხის ძირითადი თანხა) და rate (საპროცენტო განაკვეთი პროცენტებში).
   ლოგიკა: თუ საპროცენტო განაკვეთი (rate) არ არის მითითებული, ის ავტომატურად გახდეს 5 (ანუ 5%).
   შედეგი: ფუნქციამ უნდა დააბრუნოს გამოსათვლელი ფორმულის პასუხი: (amount \* rate) / 100.
   მაგალითი:
   calculateInterest(1000, 10) -> 100 (1000-ის 10%)
   calculateInterest(2000) -> 100 (2000-ის სტანდარტული 5%)
   რომელი დავალებით გსურს დაწყება? დაწერე კოდი რომელიმე მათგანისთვის, გამოაგზავნე აქ და ერთად განვიხილოთ, როგორ მუშაობს ის!
