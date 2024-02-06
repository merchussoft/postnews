document.addEventListener('DOMContentLoaded', () => {
    const postInicioContaner = document.getElementById('post_inicial');

    fetch('https://api-post-news-basic.vercel.app/api/news')
        .then(response => response.json())
        .then(data => {
            if(data.code === 200) {
                data.data.forEach(post_response => {
                    const main_card = document.createElement('main');

                    const titulo = document.createElement('h2');
                    titulo.textContent = post_response.title;

                    const descriptions = document.createElement('p');
                    descriptions.textContent = post_response.description

                    const date_created = document.createElement('p');
                    date_created.classList.add('date_created')
                    date_created.textContent = `Post news - ${post_response.created_at}`

                    main_card.appendChild(titulo);
                    main_card.appendChild(descriptions);
                    main_card.appendChild(date_created);
                    postInicioContaner.appendChild(main_card);
                })
            }
        })
})