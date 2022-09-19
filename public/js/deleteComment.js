const formHandler = async (event) => {
  event.preventDefault();

  const commentID = document.querySelector("#lblCommentID").textContent.trim();
   const articleID = document.querySelector("#hdnArticleID").value.trim();

  if (commentID && articleID) {
    const response = await fetch(`/api/comments/${commentID}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace(`/editArticle/${articleID}`);
    } else {
      alert("Failed to delete comment.");
    }
  }
};

document
  .querySelector("#deleteCommentForm")
  .addEventListener("submit", formHandler);
