<template>
    <form method="POST" @submit.prevent="submit" class="form">
        <h1 class="headline">Login</h1>
        <div class="mb-3">
            <label for="email" class="form-label">email </label>
            <input type="text" class="form-control" id="email" v-model="email" :class="{'border border-danger': this.emailError.length != 0}">
            <div v-if="this.emailError.length != 0" id="emailError" class="form-text text-danger">{{ this.emailError }}</div>
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" v-model="password" :class="{'border border-danger': this.passwordError.length != 0}">
            <div v-if="this.passwordError.length != 0" id="emailError" class="form-text text-danger">{{ this.passwordError }}</div>
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
                password: '',
                url: 'login',
                emailError: '',
                passwordError: ''
            }
        },
        methods: {
            submit() {
                if (this.email && this.password) {
                    this.emailError = ''
                    this.passwordError = ''
                    const userData = {
                        email: this.email,
                        password: this.password
                    }
                    this.$store
                        .dispatch('AUTH_REQUEST', {user: userData, url: this.url})
                        .then(() => this.$router.push("/"))
                } else {
                    this.emailError = ''
                    this.passwordError = ''
                    if (!this.email) this.emailError = 'Invalid or empty email!'
                    if (!this.password) this.passwordError = 'Invalid or empty password!'
                }
                
            }
        }
    }
</script>