document.getElementById("calculateButton").addEventListener("click", () => {
  let name = document.getElementById("name").value;
  let price = Number(document.getElementById("startingBid").value);
  let loveLetter = document.getElementById("loveLetter").value;

  if (!name || !price) {
    alert("Please enter both name and starting bid.");
    return;
  }

  price *= Number(document.getElementById("education").value);
  price *= Number(document.getElementById("netWorth").value);
  price += Number(document.getElementById("caste").value);

  document.getElementsByName("age").forEach((age) => {
    if (age.checked) {
      price *= Number(age.value);

      const skills = document.querySelectorAll(".skills:checked");
      price += Array.from(skills).reduce(
        (acc, skill) => acc + Number(skill.value),
        0
      );
    }
  });

  const reputations = document.querySelectorAll(".reputation:checked");
  for (let rep of reputations) {
    if (Number(rep.value) < 0) {
      price += Number(rep.value);
    } else {
      price *= Number(rep.value);
    }
  }

  const result = `
      <p>Your calculated dowry for <strong>${name}</strong> is <strong>$${price.toFixed(
    2
  )}</strong>.</p>
      <p>Your love letter:</p>
      <p>${loveLetter}</p>
    `;
  document.getElementById("result").innerHTML = result;
});
