<script>
export default {
    name: 'CategoryQuestion',
    props: ['category'],
    methods: {
        sortQuestion() {
            this.$router.push({ path: `/question`, query: { categoryPost: this.category.kategori } }) // search
        }
    },
}
</script>

<template>
    <div class="card rounded shadow-sm card-category d-flex flex-column justify-content-center align-items-center p-3" @click="sortQuestion">
        <div class="img-category rounded-circle">
            <img src="https://cdn0.iconfinder.com/data/icons/category-of-words-and-phrases/128/All-512.png" alt="">
        </div>
        <span class="mt-2 fw-medium">{{category.kategori}}</span>
    </div>
</template>

<style scoped>
.img-category {
    width: 75px;
    height: 75px;
    overflow: hidden;
    transition: .2s;
}

.img-category>img {
    width: 100%;
    height: auto;
    filter: grayscale(100%);
    transition: .2s;
}

.card-category {
    transition: .2s;
}

.card-category:hover .img-category>img {
    filter: grayscale(0%);
    transition: .2s;
}

.card-category:hover {
    cursor: pointer;
    transform: translateY(-5px);
    transition: .2s;
}

@media (max-width: 575.98px)  {
    span.mt-2.fw-medium {
        font-size: 12px !important;
    }

    .img-category {
        width: 55px;
        height: 55px;
    }
}
</style>