<template>
    <v-app-bar app color="white" flat>
        <v-container class="py-0 fill-height">
            <v-img max-height="50" max-width="200" src="@/assets/logo.png" lazy-src="@/assets/logo_small.png"></v-img>

            <v-spacer></v-spacer>
            <v-btn to="/" text>
                <v-icon>mdi-home-account</v-icon>
                MYPAGE
            </v-btn>
            <div class="text-center">
                <v-menu open-on-hover offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn v-bind="attrs" v-on="on" text>
                            <v-icon>mdi-account-cog</v-icon>
                            FRIEND
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item-group>
                            <v-list-item v-for="(item, index) in friends" :key="index" :to="item.link">
                                <v-list-item-icon>
                                    <v-icon v-text="item.icon"></v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title v-text="item.text"></v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </v-menu>
            </div>
            <div class="text-center">
                <v-menu open-on-hover offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn v-bind="attrs" v-on="on" text>
                            <v-icon>mdi-magnify</v-icon>
                            SEARCH
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item-group>
                            <v-list-item v-for="(item, index) in searchs" :key="index" :to="item.link">
                                <v-list-item-icon>
                                    <v-icon v-text="item.icon"></v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title v-text="item.text"></v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </v-menu>
            </div>
            <v-btn color="red" text @click="signOut">
                <v-icon>mdi-logout</v-icon>
                LOGOUT
            </v-btn>
            <v-avatar class="mr-10" style="margin-left: 20px;" color="grey darken-1" size="48">
                <input type="file" ref="fileInput" @change="updateIcon" style="display: none"
                    accept="image/jpg, image/jpeg, image/png">
                <v-icon v-if="!photoUrl" dark @click="changeIcon">
                    mdi-account-circle
                </v-icon>
                <img :src="photoUrl" v-if="photoUrl" @click="changeIcon">
            </v-avatar>
        </v-container>
    </v-app-bar>
</template>
<script>
import firebase from '@/firebase/firebase'

export default {
    name: 'App',
    data: () => ({
        friends: [
            { icon: 'mdi-account', text: '友達の管理', link: '/friend' },
            { icon: 'mdi-account-multiple', text: 'グループの管理', link: '/group' },
        ],
        searchs: [
            { icon: 'mdi-clock', text: '日時から検索', link: '/search/date' },
            { icon: 'mdi-account-search', text: '友達から検索', link: '/search/friend' },
        ],
        auth: null,
        photoUrl: ''
    }),
    mounted() {
        this.auth = JSON.parse(sessionStorage.getItem('user'))
        console.log(this.auth.photoURL)
        this.photoUrl = this.auth.photoURL
    },
    methods: {
        signOut() {
            firebase.auth().signOut().then(() => {
                localStorage.message = "ログアウトに成功しました"
                this.$router.push('/signin')
            })
        },
        changeIcon() {
            this.$refs.fileInput.click()
        },
        getAuth() {
            return firebase.auth().onAuthStateChanged((user) => { return user })
        },
        updateIcon() {
            const user = this.getAuth()
            if (!user) {
                sessionStorage.removeItem('user')
                this.$router.push('/signin')
            }
            const file = this.$refs.fileInput.files[0]
            const auth = JSON.parse(sessionStorage.getItem('user'))
            const filePath = `/user/icon/${auth.email}`
            firebase.storage().ref().child(filePath).put(file).then(async snapshot => {
                const photoUrl = await snapshot.ref.getDownloadURL()
                firebase.auth().onAuthStateChanged((user) => {
                    if (user) {
                        user.updateProfile({
                            photoURL: photoUrl
                        })
                    }
                })
                this.auth.photoURL = photoUrl
                sessionStorage.setItem('user', JSON.stringify(this.auth))

                this.photoUrl = photoUrl
            })
        },
    }
}
</script>

