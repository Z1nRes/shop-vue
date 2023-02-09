<template>
    <form method="POST" @submit.prevent="submit" class="form">
        <h1 class="headline">Signup</h1>
        <div class="mb-3">
            <label for="fio" class="form-label">FIO </label>
            <input type="text" class="form-control" id="fio" required v-model="fio">
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">email </label>
            <input type="text" class="form-control" id="email" required v-model="email">
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" required v-model="password">
        </div>
        <button type="submit" class="btn btn-primary">Signup</button>
    </form>
</template>

<style>
    .headline {
        text-align: center;
    }
    .form {
        width: 30vw;
    }
</style>

<script>
    export default {
        data() {
            return {
                fio: '',
                email: '',
                password: '',
                url: 'signup'
            }
        },
        methods: {
            submit() {
                const userData = {
                    fio: this.fio,
                    email: this.email,
                    password: this.password
                }
                this.$store
                    .dispatch('AUTH_REQUEST', {user: userData, url: this.url})
                    .then(() => this.$router.push("/"))
            }
        }
    }
</script>