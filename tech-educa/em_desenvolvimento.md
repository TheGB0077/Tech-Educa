---
layout: home
---

<div class="image-container-in-dev">
    <img src="/img/todo.webp" style="max-width: 500px; min-width: 300px">
    <h1>Página em desenvolvimento!</h1>
</div>

<style lang="scss">
    .image-container-in-dev {
        margin-top: 4vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .image-container-in-dev > h1 {
        margin: 0;
        padding: 0;
        text-align: center;
        font-size: 2rem;
        font-weight: bolder;
    }

    @media (max-width: 1280px) {
        .image-container-in-dev {
            min-width: 300px;
            flex-direction: column;
        }

        .image-container-in-dev > img {
            padding: 0 40px 0 40px;
        }

        .image-container-in-dev > h1 {
            font-size: 1.5rem;
            font-weight: bold;
        }
    }

</style>
