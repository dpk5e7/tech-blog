const formHandler = async (event) => {
  event.preventDefault();

  const articleID = document.querySelector("#lblArticleID").textContent.trim();

  if (articleID) {
    const response = await fetch(`/api/articles/${articleID}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to delete article.");
    }
  }
};

document
  .querySelector("#deleteArticleForm")
  .addEventListener("submit", formHandler);
