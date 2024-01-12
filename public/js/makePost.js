const submitNewPost = async (event) => {
    event.preventDefault();
    const postTitle = document.querySelector('#newPostTitle').value.trim();
    const postContent = document.querySelector('#newPostBody').value.trim();
}

document
    .querySelector('#postbox-form')
    .addEventListener('submit', submitNewPost);
