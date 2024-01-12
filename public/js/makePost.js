const submitNewPost = async (event) => {
    event.preventDefault();
    const post_title = document.querySelector('#newPostTitle').value.trim();
    const post_body = document.querySelector('#newPostBody').value.trim();

    if (post_title && post_body) {
        const response = await fetch('/api/posts/newPost', {
            method: 'POST',
            body: JSON.stringify({ post_title, post_body }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            alert('Post created!');
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }

}

document
    .querySelector('#postbox-form')
    .addEventListener('submit', submitNewPost);
