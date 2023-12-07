
const renderpost = async () => {
    const teste = window.location.href.split("id=") 
    console.log(teste[1])
    const response = await fetch(`http://localhost:8000/profile/${teste[1]}`)
    const posts = await response.json()
    const postconteiner = document.querySelector(".lista-de-post")
    posts.forEach(post =>{
        const postElement = document.createElement('div')
        postElement.classList.add("post")
        
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
        `
        postconteiner.appendChild(postElement)
    })
}

renderpost()

document.addEventListener('DOMContentLoaded', function () {
    var simplemde = new SimpleMDE({ element: document.getElementById("markdownInput") });
});

function openModal() {
    var dialog = document.getElementById('myModal');
    dialog.showModal();
}

function closeModal() {
    var dialog = document.getElementById('myModal');
    dialog.close();
}

async function submitPost(event) {
    event.preventDefault()
    var markdownContent = document.getElementById("markdownInput").value;
    try { const dados = await fetch('http://localhost:8000/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({userId: 13, title: "sodiajio", content: markdownContent}),
    })
    const post = await dados.json()
    console.log(post)
    } catch (error){
        console.error(error)
    }

}

const formpost = document.getElementById("qualquer")
formpost.addEventListener("submit", submitPost)
console.log(formpost)