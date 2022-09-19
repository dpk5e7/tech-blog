const formHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#txtTitle").value.trim();
  const content = document.querySelector("#txtContent").value.trim();

  if (title && content) {
    // attempt to create an article
    const response = await fetch(`/api/articles/`, {
      method: "POST",
      body: JSON.stringify({
        title,
        content,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to create article.");
    }
  }
};

document
  .querySelector("#createArticleForm")
  .addEventListener("submit", formHandler);
