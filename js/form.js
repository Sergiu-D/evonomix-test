$(".newsletter_form").on("submit", (event) => {
  event.preventDefault();

  const destination = $("#destination").val();
  const budget = $("#budget").val();
  const fullName = $("#full_name").val();
  const email = $("#email").val();

  alert(
    `Sunt corecte informatiile? Destination: ${destination}, Budget: ${budget}, Numele: ${fullName}, Email: ${email} `
  );
});
