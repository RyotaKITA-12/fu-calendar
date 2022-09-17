<template>
    <v-app id="inspire">
        <Nav />
        <v-main class="grey lighten-3">
            <v-container>
                <v-sheet max-height="80vh" rounded="lg">
                    <v-row no-gutters>
                        <v-col cols="3">
                            <v-card class="mx-auto white" max-height="52vh" style="padding-top: 10px;">
                                <v-text-field style="padding-top: 20px; padding-left: 10px; padding-right: 10px"
                                    v-model="addUser" label="add UserID" type="text">
                                    <template v-slot:append-outer>
                                        <v-btn color="primary" @click="onSubmit">追加</v-btn>
                                    </template>
                                </v-text-field>
                                <v-list color="blue-grey lighten-5" style="height: 42vh; overflow-y: auto;">
                                    <v-list-item-group v-model="selectedUser" color="primary">
                                        <v-list-item v-for="user in users" :key="user" @click="selectUser">
                                            <v-list-item-icon>
                                                <v-icon>mdi-account</v-icon>
                                            </v-list-item-icon>

                                            <v-list-item-content>
                                                <v-list-item-title>{{ user }}</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-list-item-group>
                                </v-list>
                            </v-card>
                            <v-divider></v-divider>
                            <v-card class="mx-auto" color="grey lighten-5" max-height="33vh" style="padding-top: 10px;">
                                <h3 style="padding-top: 10px; padding-bottom: 10px;" class="text-center indigo--text">
                                    もしかして友達かも...?
                                </h3>
                                <v-list color="blue-grey lighten-5" style="height: 23vh; overflow-y: auto;">
                                    <v-list-item v-for="user in followers" :key="user">
                                        <v-list-item-icon>
                                            <v-icon>mdi-account</v-icon>
                                        </v-list-item-icon>

                                        <v-list-item-content>
                                            <v-list-item-title>{{ user }}</v-list-item-title>
                                        </v-list-item-content>
                                        <v-btn outlined color="primary" @click="addFriend(user)">追加</v-btn>
                                    </v-list-item>
                                </v-list>
                            </v-card>
                        </v-col>
                        <v-col style="height: 80vh; overflow-y: auto;">
                            <div v-for="app in applications" style="margin-top: 15px;">
                                <div v-if="app.host_id == auth.displayName">
                                    <v-alert dense outlined text :color="category_colors[app.category]" class="mr-auto"
                                        style="border-radius: 30px; width: 70%; margin-left: 15px;"
                                        :key="app.application_id">
                                        <h4 class="text-h5">
                                            <v-icon :color="category_colors[app.category]"
                                                style="margin-bottom: 5px; margin-right: 20px;">
                                                {{ category_icons[app.category] }}
                                            </v-icon>
                                            <b>{{ app.title }}</b>
                                        </h4>
                                        <v-divider class="my-1"></v-divider>
                                        <div>
                                            <b> {{ app.content }} </b>
                                            <br>
                                            START　: {{ formatDate(app.start_date) }}
                                            <br>
                                            END　　: {{ formatDate(app.end_date) }}
                                        </div>

                                        <v-divider class="my-2"></v-divider>

                                        <v-row align="center" no-gutters>
                                            <v-col cols="2">
                                                {{ app.user_id }} :
                                            </v-col>
                                            <v-col>
                                                {{ app.comment }}
                                            </v-col>
                                            <v-spacer></v-spacer>
                                            <v-col class="shrink">
                                                <v-btn v-if="!app.approved" color="info" outlined
                                                    @click="applySchedule(app.application_id)">
                                                    <b>承認</b>
                                                </v-btn>
                                                <v-btn v-else disabled color="info" outlined>
                                                    <b>承認済</b>
                                                </v-btn>
                                            </v-col>
                                        </v-row>
                                    </v-alert>
                                </div>
                                <div v-else>
                                    <v-alert dense outlined text :color="category_colors[app.category]" class="ml-auto"
                                        style="border-radius: 30px; width: 70%; margin-left: 15px;"
                                        :key="app.application_id">
                                        <h4 class="text-h5">
                                            <v-icon :color="category_colors[app.category]"
                                                style="margin-bottom: 5px; margin-right: 20px;">
                                                {{ category_icons[app.category] }}
                                            </v-icon>
                                            <b>{{ app.title }}</b>
                                        </h4>
                                        <v-divider class="my-1"></v-divider>
                                        <div>
                                            <b> {{ app.content }} </b>
                                            <br>
                                            START　: {{ formatDate(app.start_date) }}
                                            <br>
                                            END　　: {{ formatDate(app.end_date) }}
                                        </div>

                                        <v-divider class="my-2"></v-divider>

                                        <v-row align="center" no-gutters>
                                            <v-col cols="2">
                                                あなた :
                                            </v-col>
                                            <v-col>
                                                {{ app.comment }}
                                            </v-col>
                                            <v-spacer></v-spacer>
                                            <v-col class="shrink">
                                                <v-btn v-if="!app.approved" disabled color="info" outlined
                                                    @click="applySchedule(app.application_id)">
                                                    <b>未承認</b>
                                                </v-btn>
                                                <v-btn v-else disabled color="info" outlined>
                                                    <b>承認済</b>
                                                </v-btn>
                                            </v-col>
                                        </v-row>
                                    </v-alert>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                </v-sheet>
            </v-container>
        </v-main>
    </v-app>
</template>
<script>
import Nav from '@/components/layouts/Nav'
import firebase from 'firebase'
import axios from 'axios'

export default {
    components: {
        Nav,
    },
    data: () => ({
        selectedUser: null,
        users: [],
        followers: [],
        addUser: "",
        auth: null,
        messages: [{ message: "こんにちは" }],
        applications: [],
        category_icons: {
            "指定なし": "mdi-note",
            "遊び": "mdi-golf",
            "ゲーム": "mdi-controller",
            "作業": "mdi-desk",
            "散歩": "mdi-walk",
            "仕事": "mdi-office-building",
            "食事": "mdi-food",
            "ショッピング": "mdi-shopping",
            "スポーツ": "mdi-baseball-bat",
            "通話": "mdi-phone",
            "デート": "mdi-heart-multiple",
            "ドライブ": "mdi-car",
            "飲み": "mdi-glass-wine",
            "博物館": "mdi-palette",
            "旅行": "mdi-train",
            "その他": "mdi-dots-horizontal"
        },
        category_colors: {
            "指定なし": "yellow",
            "遊び": "deep-orange",
            "ゲーム": "light-blue",
            "作業": "purple",
            "散歩": "green",
            "仕事": "black",
            "食事": "red",
            "ショッピング": "amber",
            "スポーツ": "cyan",
            "通話": "lime",
            "デート": "pink",
            "ドライブ": "indigo",
            "飲み": "brown",
            "博物館": "deep-purple",
            "旅行": "teal",
            "その他": "blue-grey"
        },
        members: [],
    }),
    mounted() {
        this.auth = JSON.parse(sessionStorage.getItem('user'))
        this.getFriends()
        this.getFollowers()
    },
    methods: {
        async getFriends() {
            await axios.post('/friends', {
                host_id: this.auth.displayName
            }).then((response) => {
                this.users = response.data
            }).catch((error) => {
                console.log(error)
            })

        },
        async getFollowers() {
            await axios.post('/friends/follower', {
                host_id: this.auth.displayName
            }).then((response) => {
                this.followers = response.data
            }).catch((error) => {
                console.log(error)
            })

        },
        selectUser() {
            setTimeout(this.getInvitedSchedule, 100)
        },
        async applySchedule(appId) {
            console.log("ok")
            await axios.post('/apply/schedule', {
                application_id: String(appId),
            }).then((_) => {
                console.log("ok")
                this.getInvitedSchedule()
            }).catch((error) => {
                console.log(error)
            })
        },
        async getInvitedSchedule() {
            await axios.post('/applications', {
                host_id: this.auth.displayName,
                user_id: this.users[this.selectedUser]
            }).then((response) => {
                this.applications = response.data
            }).catch((error) => {
                console.log(error)
            })
        },
        async addFriend(member) {
            await axios.post('/register/friend', {
                host_id: this.auth.displayName,
                member_id: member
            }).then((_) => {
                this.getFriends()
                this.getFollowers()
            }).catch((error) => {
                console.log(error)
            })
        },
        onSubmit() {
            if (this.addUser != this.auth.displayName) {
                const usersref = firebase.firestore().collection('users').doc("W6LJd07uAg2umoTzmXUL")
                usersref.get().then(async (doc) => {
                    if (doc.data()["userIds"].includes(this.addUser)) {
                        await axios.post('/register/friend', {
                            host_id: this.auth.displayName,
                            member_id: this.addUser,
                        }).then((response) => {
                            this.getFriends()
                        }).catch((error) => {
                            console.log(error)
                        })
                    } else {
                        console.log("不正なユーザIDです")
                    }
                })
            } else {
                console.log("不正なユーザIDです")
            }
        },
        formatDate(in_date) {
            var format = 'YYYY/MM/DD hh:mm:ss'
            var date = new Date(in_date)
            date.setHours(date.getHours() - 9)

            format = format.replace(/YYYY/g, date.getFullYear());
            format = format.replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2));
            format = format.replace(/DD/g, ('0' + date.getDate()).slice(-2));
            format = format.replace(/hh/g, ('0' + date.getHours()).slice(-2));
            format = format.replace(/mm/g, ('0' + date.getMinutes()).slice(-2));
            format = format.replace(/ss/g, ('0' + date.getSeconds()).slice(-2));

            return format
        },
        async getMemberImages(user_id) {
            var storage = firebase.storage()
            const pathReference = storage.ref(`user/icon/${user_id}`)
            await pathReference.getDownloadURL().then((url) => {
                return url
            }).catch((_) => {
                return 'https://firebasestorage.googleapis.com/v0/b/fu-calendar-9acef.appspot.com/o/user%2Ficon%2Fsample_avatar_image.png?alt=media&token=696040e4-13e7-4822-ad6a-fa0a268f77b3'
            });
        },
    }
}
</script>

