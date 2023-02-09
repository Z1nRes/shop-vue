<template>
    <form method="POST" @submit.prevent="submit" class="form">
        <h1 class="headline">Login</h1>
        <div class="mb-3">
            <label for="email" class="form-label">email </label>
            <input type="text" class="form-control" id="email" required v-model="email">
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" required v-model="password">
        </div>
        <button type="submit" class="btn btn-primary">login</button>
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
                email: '',
                password: ''
            }
        },
        methods: {
            submit() {
                const userData = {
                    email: this.email,
                    password: this.password
                }
                this.$store
                    .dispatch('AUTH_REQUEST', userData)
                    .then(() => this.$router.push("/"))
            }
        }
    }
</script>