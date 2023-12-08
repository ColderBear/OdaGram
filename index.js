const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
];

// Function to render posts
function renderPosts(posts) {
    const postsContainer = document.getElementById("postsContainer");

    // Loop through each post and create HTML elements
    posts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.className = "post";

        postElement.innerHTML = `
            <div class = "title-section">
                <img src="${post.avatar}" alt="${post.name} Avatar" class="avatar">
                <p><span class="bold-text">${post.name}</span><br/>${post.location}</p>
            </div>
            <img src="${post.post}" alt="${post.name}'s Post" class="post-img">
            <div class= "icon-sets">
                    <img class="icon" id ="like-icon" src="images/icon-heart.png">
                    <img class="icon" src="images/icon-comment.png">
                    <img class="icon" src="images/icon-dm.png">
            </div>
            <p class="bold-text">${post.likes} Likes</p>
            <p class="comment"> <span class="bold-text" id="username-text">${post.username}</span> ${post.comment}</p>
        `;

        // Append the post element to the container
        postsContainer.appendChild(postElement);
    });
}

// Call the function to render posts
renderPosts(posts);

