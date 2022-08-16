<template>
    <v-app style="margin-top: 50px;">
        <div style="text-align: center;">
            <br>
            <img width="200px" src="../assets/logo.png" />
            <br>
            <br>
        </div>
        <v-card width="400px" class="mx-auto mt-5  blue-grey--text text--darken-2">
            <v-card-title class="justify-center">
                <h1 class="display-1">新規登録</h1>
            </v-card-title>
            <v-divider />
            <v-card-text>
                <v-form>
                    <v-text-field prepend-icon="mdi-account" label="User ID" v-model="user_id" />
                    <v-text-field prepend-icon="mdi-email" label="Email" v-model="email" />
                    <v-text-field v-bind:type="showPassword ? 'text' : 'password'" prepend-icon="mdi-lock"
                        v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" label="Password"
                        @click:append="showPassword = !showPassword" v-model="password" />
                    <v-text-field v-bind:type="showPassword ? 'text' : 'password'" prepend-icon="mdi-lock"
                        v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" label="Confirm Password"
                        @click:append="showPassword = !showPassword" v-model="password_confirm" />
                    <v-card-actions class="justify-center">
                        <v-btn class="info" @click="signUp">登録</v-btn>
                    </v-card-actions>
                </v-form>
            </v-card-text>
            <v-divider />
            <br>
            <p class="text-center">すでにアカウントを<br>お持ちの方は<router-link to="/signin">こちら</router-link>
            </p>
        </v-card>
    </v-app>
</template>
<script>
/* import firebase from 'firebase' */
import 'firebase/auth'

export default {
    name: 'Signup',
    data: function () {
        return {
            showPassword: false,
            user_id: '',
            email: '',
            password: '',
            password_confirm: ''
        }
    },
    methods: {
        signUp: function () {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(res => {
                console.log('Create account: ', res.user.email)
                this.$router.push('/signin')
            }).catch(error => {
                console.log(error.message)
            })
        }
    }
}
</script>
