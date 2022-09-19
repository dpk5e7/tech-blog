const formHandler = async (event) => {
  event.preventDefault();

  const content = document.querySelector("#txtContent").value.trim();
  const articleID = document.querySelector("#hdnArticleID").value.trim();

  if (content) {
    const response = await fetch(`/api/comments/`, {
      method: "POST",
      body: JSON.stringify({
        content,
        articleID,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace(`/article/${articleID}`);
    } else {
      alert("Failed to create comment.");
    }
  }
};

document
  .querySelector("#createCommentForm")
  .addEventListener("submit", formHandler);
