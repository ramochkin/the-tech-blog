async function updatePost(event) {
    event.preventDefault()
    const postId = document.getElementById('post-id').value
    const post_title = document.getElementById('postTitle').value
    const content = document.getElementById('textInput').value
    console.log(content)


    const response = await fetch(`/api/posts/${postId}`, {
        method: 'PUT',
        body: JSON.stringify({ content, post_title}),
        headers: { 'Content-Type': 'application/json' },
    });
    console.log(response)

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('comment not updated');
    }

};

async function deletePost(event) {
    event.preventDefault()

    const postId = document.getElementById('post-id').value
    console.log(postId.value)
    const response = await fetch(`/api/posts/${postId}`, {
        method: 'DELETE'
    })

    if (response) {
        document.location.replace('/dashboard');
    } else {
        alert('Post not deleted');
    }

};




document.querySelector('#delete-btn').addEventListener('click', deletePost)
document.querySelector('.update-btn').addEventListener('click', updatePost)
