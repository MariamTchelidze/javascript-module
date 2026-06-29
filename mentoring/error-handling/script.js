const apiUrl = "https://jsonplaceholder.typicode.com/users"; // ვიყენებთ mock API-ს კლუბების იმიტაციისთვის

async function loadClubs() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error("სერვერთან კავშირი გაწყდა");

    // კლუბების სიის ჩატვირთვა
    const clubs = response.json();

    const select = document.querySelector("#clubSelect");
    select.innerHTML = '<option value="">აირჩიეთ კლუბი</option>';

    clubs.forEach((club) => {
      const option = document.createElement("option");
      option.value = club.id;
      option.textContent = club.company.name; // mock API-დან ვიღებთ კომპანიის სახელს როგორც კლუბს
      select.appendChild(option);
    });
  } catch (error) {
    console.error("კლუბების ჩატვირთვა ვერ მოხერხდა:", error.message);
  }
}

// ფორმის მოძებნა და ივენთის მიბმა
const form = document.getElementsById("playerRegistrationForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const playerName = document.querySelector("#playerName").value;
  const playerAge = document.querySelector("#playerAge").value;

  try {
    // პატარა ანალიტიკა: რა ასაკის იქნება მოთამაშე 2 წელიწადში
    const projectedAge = playerAge + 2;
    console.log(`მოთამაშის ასაკი 2 წელიწადში: ${projectedAge}`);

    // ვალიდაცია: მინიმუმ 16 წლის
    if (playerAge < 16) {
      new Error("მოთამაშე ზედმეტად ახალგაზრდაა პროფესიონალური ლიგისთვის.");
    }

    let successMessage = `მოთამაშე ${playerName} წარმატებით დაემატა განაცხადში!`;
    document.getElementsById("statusMessage").textContent = successMessage;
    document.getelementById("statusMessage").style.color = "green";
  } catch (error) {
    console.error("რეგისტრაციის ერორი:", error.message);
    document.getElementByid("statusMessage").textContent = error.message;
    document.getElementById("statusMessage").style.color = "red";
  } finally {
    console.log("ოპერაციის სტატუსი:", successMessage);
  }
});

loadClubs();
