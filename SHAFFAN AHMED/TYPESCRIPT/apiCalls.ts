async function getData() {
    try {
        const [users, posts, comments] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/users"),
            fetch("https://jsonplaceholder.typicode.com/posts"),
            fetch("https://jsonplaceholder.typicode.com/comments")
        ]);

        const userData = await users.json();
        const postData = await posts.json();
        const commentData = await comments.json();

        console.log("Users:", userData);
        console.log("Posts:", postData);
        console.log("Comments:", commentData);
    } catch (error) {
        console.log("Error:", error);
    }
}

getData();
