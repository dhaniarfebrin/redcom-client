<script>
export default {
    name: 'NavBar'
}
</script>

<template>
    <nav class="navbar navbar-expand-lg fixed-top py-3">
        <div class="container">
            <router-link class="navbar-brand fw-bold text-danger position-relative" to="/">
                RedCom
            </router-link>
            <div class="position-absolute top-50 start-50 translate-middle">
                <div class="input-group rounded-pill">
                    <span class="input-group-text bg-white rounded-start-pill" id="search"><i
                            class="bi bi-search"></i></span>
                    <input type="text" class="form-control rounded-end-pill" placeholder="Search the question"
                        aria-label="search" aria-describedby="search">
                </div>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <router-link to="#" class="nav-link me-3">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="#" class="btn btn-dark rounded-pill px-4">Register</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
input {
    width: 50vh !important;
}
</style>