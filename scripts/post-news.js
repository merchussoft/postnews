document.addEventListener('DOMContentLoaded', () => {
    const main_contaner = document.getElementById('main-contenedor');
    fetch('https://api-post-news-basic.vercel.app/api/news')
        .then(response => response.json())
        .then(data_response => {
            console.log(data_response);

            if(data_response.code === 200) {
                data_response.data.forEach(post => {
                    const sections = document.createElement('section');
                    sections.classList.add('contenedor');
                    sections.classList.add('post-news');

                    const alink = document.createElement('a');
                    alink.setAttribute('href', post.url_img);
                    //alink.setAttribute('target', '_blank');

                    const titulo = document.createElement('h1');
                    titulo.classList.add('titulo');
                    titulo.textContent = post.title;

                    const contenedor_descriptions = document.createElement('div');
                    contenedor_descriptions.classList.add('contenedor-descriptions');

                    const descriptions = document.createElement('p');
                    descriptions.textContent = post.description;

                    const created_date = document.createElement('span');
                    created_date.classList.add('created-date');
                    created_date.textContent = `Post news - ${post.created_at}`;

                    contenedor_descriptions.appendChild(descriptions);

                    sections.appendChild(titulo);
                    sections.appendChild(contenedor_descriptions);
                    sections.appendChild(created_date);
                    alink.appendChild(sections);
                    main_contaner.appendChild(alink);
                })
            }
        })

})