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
                <h1 class="display-1">ログイン</h1>
            </v-card-title>
            <v-divider />
            <v-card-text>
                <v-form ref="form" v-model="valid" lazy-validation>
                    <v-text-field prepend-icon="mdi-email" label="Email" v-model="email" :rules="emailRules" required />
                    <v-text-field v-bind:type="showPassword ? 'text' : 'password'" prepend-icon="mdi-lock"
                        v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" label="Password"
                        @click:append="showPassword = !showPassword" v-model="password" :rules="passwordRules"
                        required />
                    <v-card-actions class="justify-center">
                        <v-btn class="info" @click="submit" :disabled="!valid">ログイン</v-btn>
                    </v-card-actions>
                    <v-alert style="text-align: center; margin-top: 30px" dense text type="success" v-if="message">
                        {{ message }}
                    </v-alert>
                    <v-alert style="text-align: center; margin-top: 30px" dense outlined type="error" elevation="1"
                        v-if="errorMessage">
                        {{ errorMessage }}
                    </v-alert>
                </v-form>
            </v-card-text>
            <v-divider />
            <br>
            <p class="text-center">アカウントを<br>お持ちでない方は<router-link to="/signup">こちら</router-link>
            </p>
        </v-card>
    </v-app>
</template>
<script>
import firebase from '@/firebase/firebase'

export default {
    name: 'Signin',
    data: function () {
        return {
            showPassword: false,
            email: '',
            emailRules: [
                v => !!v || 'メールアドレスを入力してください',
                v => /.+@.+/.test(v) || '不正なメールアドレスです',
            ],
            password: '',
            passwordRules: [
                v => !!v || 'パスワードを入力してください',
                v => 7 <= v.length || '8文字以上で入力してください',
            ],
            message: '',
            errorMessage: '',
        }
    },
    mounted() {
        if (localStorage.message) {
            this.message = localStorage.message
            localStorage.message = ''
        }
    },
    computed: {
    },
    methods: {
        submit() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((result) => {
                const auth = {
                    displayName: result.user.displayName,
                    email: result.user.email,
                    uid: result.user.uid,
                    refreshToken: result.user.refreshToken,
                    photoURL: result.user.photoURL
                }
                sessionStorage.setItem('user', JSON.stringify(auth))
                this.$router.push('/')
            }).catch((error) => {
                console.log("fail")
                this.errorMessage = "ログインに失敗しました"
            })
        },
    }
}
</script>
