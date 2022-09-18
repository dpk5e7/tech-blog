const formHandler = async (event) => {
  event.preventDefault();

  const articleID = document.querySelector("#lblArticleID").textContent.trim();
  const title = document.querySelector("#txtTitle").value.trim();
  const content = document.querySelector("#txtContent").value.trim();
  const dateCreated = document.querySelector("#txtDateCreated").value.trim();

  if (articleID && title && content && dateCreated) {
    const response = await fetch(`/api/articles/${articleID}`, {
      method: "PUT",
      body: JSON.stringify({
        title,
        dateCreated,
        content,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to update article.");
    }
  }
};

document
  .querySelector("#editArticleForm")
  .addEventListener("submit", formHandler);
