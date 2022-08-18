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
                <v-form ref="form" v-model="valid" lazy-validation>
                    <v-text-field prepend-icon="mdi-account" label="User ID" v-model="user_id" :rules="userIdRules"
                        required />
                    <v-text-field prepend-icon="mdi-email" label="Email" v-model="email" :rules="emailRules" required />
                    <v-text-field v-bind:type="showPassword ? 'text' : 'password'" prepend-icon="mdi-lock"
                        v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" label="Password"
                        @click:append="showPassword = !showPassword" v-model="password" :rules="passwordRules"
                        required />
                    <v-card-actions class="justify-center">
                        <v-btn class="info" @click="submit" :disabled="!valid">登録</v-btn>
                    </v-card-actions>
                    <v-alert style="text-align: center; margin-top: 30px" dense outlined type="error" elevation="1"
                        v-if="errorMessage">
                        {{ errorMessage }}
                    </v-alert>
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
import firebase from 'firebase'

export default {
    name: 'Signup',
    data: function () {
        return {
            showPassword: false,
            user_id: '',
            userIdRules: [
                v => !!v || 'ユーザIDを入力してください',
                v => 6 <= v.length || '6文字以上で入力してください',
            ],
            email: '',
            emailRules: [
                v => !!v || 'メールアドレスを入力してください',
                v => /.+@.+/.test(v) || '不正なメールアドレスです',
            ],
            password: '',
            password_confirm: '',
            passwordRules: [
                v => !!v || 'パスワードを入力してください',
                v => 7 <= v.length || '8文字以上で入力してください',
            ],
            errorMessage: "",
        }
    },
    computed: {
    },
    methods: {
        submit() {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(async (result) => {
                await result.user.updateProfile({
                    displayName: this.user_id
                })
                localStorage.message = "ユーザの新規作成に成功しました"
                this.$router.push('/signin')
            }).catch((error) => {
                this.errorMessage = "ユーザの新規作成に失敗しました"
            })
        },
    }
}
</script>
