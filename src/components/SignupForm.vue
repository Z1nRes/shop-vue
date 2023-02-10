<template>
    <form method="POST" @submit.prevent="submit" class="form">
        <h1 class="headline">Signup</h1>
        <div class="mb-3">
            <label for="fio" class="form-label">FIO </label>
            <input type="text" class="form-control" id="fio" v-model="fio" :class="{'border border-danger': this.fioError.length != 0}">
            <div v-if="this.fioError.length != 0" id="emailError" class="form-text text-danger">{{ this.fioError }}</div>
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">email </label>
            <input type="email" class="form-control" id="email" v-model="email" :class="{'border border-danger': this.emailError.length != 0}">
            <div v-if="this.emailError.length != 0" id="emailError" class="form-text text-danger">{{ this.emailError }}</div>
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" v-model="password" :class="{'border border-danger': this.passwordError.length != 0}">
            <div v-if="this.passwordError.length != 0" id="emailError" class="form-text text-danger">{{ this.passwordError }}</div>
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
                url: 'signup',
                fioError: '',
                emailError: '',
                passwordError: ''
            }
        },
        methods: {
            submit() {
                if (this.fio && this.email && this.password) {
                    this.fioError = ''
                    this.emailError = ''
                    this.passwordError = ''
                    const userData = {
                        fio: this.fio,
                        email: this.email,
                        password: this.password
                    }
                    this.$store
                        .dispatch('AUTH_REQUEST', {user: userData, url: this.url})
                        .then(() => this.$router.push("/"))
                } else {
                    this.fioError = ''
                    this.emailError = ''
                    this.passwordError = ''
                    if (!this.fio) this.fioError = 'Invalid or empty fio!'
                    if (!this.email) this.emailError = 'Invalid or empty email!'
                    if (!this.password) this.passwordError = 'Invalid or empty password!'
                }
            }
        }
    }
</script>