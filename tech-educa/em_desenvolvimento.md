<div class="image-container">
    <img src="/img/todo.webp" style="max-width: 500px; min-width: 300px">
    <h1>Página em desenvolvimento!</h1>
</div>

<style scoped>
    .image-container {
        display: flex;
        align-items: center;
    }

    .image-container > h1 {
        margin: 0;
        padding: 0;
        text-align: center;
    }

    @media (max-width: 1280px) {
        .image-container {
                min-width: 300px;
                flex-direction: column;
        }

        .image-container > img {
            padding: 0 40px 0 40px;
        }

        .image-container > h1 {
            font-size: 1.5rem;
        }
    }

</style>
