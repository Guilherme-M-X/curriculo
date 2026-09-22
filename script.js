document.getElementById("year").textContent = new Date().getFullYear();

function copyEmail() {
  const email = "Guilherme.m.xavier@outlook.com";

  navigator.clipboard
    .writeText(email)
    .then(() => {
      const toast = document.getElementById("toast");
      toast.classList.add("show");

      setTimeout(() => {
        toast.classList.remove("show");
      }, 2500);
    })
    .catch(() => {
      window.location.href = `mailto:${email}`;
    });
}
