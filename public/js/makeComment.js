async function submitNewComment(event) {
    event.preventDefault()

    const post_id = event.target.id.replace(/\D/g, '')
    const comment_body = document.querySelector('.newCommentBody').value.trim();

    if (comment_body && post_id) {
        const response = await fetch('/api/comments/newComment', {
            method: 'POST',
            body: JSON.stringify({ comment_body, post_id }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            alert('Comment created!');
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
}

document
    .querySelector('.postComment-form')
    .addEventListener('submit', submitNewComment);