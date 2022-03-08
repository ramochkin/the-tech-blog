async function createPost(event) {
    event.preventDefault()
    const post_title = document.getElementById('post-title').value

    const content = document.getElementById('new-post-content').value


    if (post_title && content) {
        const response = await fetch('/api/posts/', {
            method: 'POST',
            body: JSON.stringify({ post_title, content }),
            headers: { 'Content-Type': 'application/json' },
        });
        

        if (response) {
            document.location.replace('/dashboard');
        } else {
            alert('Post not created');
        }
    }
};



document.querySelector('#create').addEventListener('click', createPost)