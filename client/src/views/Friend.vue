<template>
    <v-app id="inspire">
        <Nav />
        <v-main class="grey lighten-3">
            <v-container>
                <v-sheet min-height="80vh" rounded="lg">
                    <v-row no-gutters>
                        <v-col cols="3">
                            <v-card class="mx-auto white" style="padding-top: 10px;">
                                <v-text-field style="padding-top: 20px; padding-left: 10px; padding-right: 10px"
                                    v-model="addUser" label="add UserID" type="text">
                                    <template v-slot:append-outer>
                                        <v-btn color="primary" @click="onSubmit">追加</v-btn>
                                    </template>
                                </v-text-field>
                                <v-list color="blue-grey lighten-5" style="height: 71vh; overflow-y: auto;">
                                    <v-list-item-group v-model="selectedUser" color="primary">
                                        <v-list-item v-for="user in users" :key="user">
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
                        </v-col>
                        <v-col>
                            <v-alert border="right" outlined type="success">
                                I'm a shaped alert with a outline option
                            </v-alert>
                            <v-alert border="left" outlined type="success">
                                I'm a shaped alert with a outline option
                            </v-alert>
                            <v-alert outlined text color="info" type="success" style="border-radius: 30px;">
                                <h3 class="text-h5">
                                    あそび
                                </h3>
                                <div>Maecenas nec odio et ante tincidunt tempus. Sed mollis, eros et ultrices tempus,
                                    mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Proin viverra, ligula
                                    sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac
                                    eros. Curabitur turpis.</div>

                                <v-divider class="my-4 info" style="opacity: 0.22"></v-divider>

                                <v-row align="center" no-gutters>
                                    <v-col class="grow">
                                        Proin magna. Vivamus in erat ut urna cursus vestibulum. Etiam imperdiet
                                        imperdiet orci.
                                    </v-col>
                                    <v-spacer></v-spacer>
                                    <v-col class="shrink">
                                        <v-btn color="info" outlined>
                                            Okay
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-alert>
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
        selectedUser: 1,
        users: [],
        addUser: "",
        auth: null,
        messages: [{ message: "こんにちは" }],
    }),
    mounted() {
        this.auth = JSON.parse(sessionStorage.getItem('user'))
        this.getFriends()
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
        onSubmit() {
            const usersref = firebase.firestore().collection('users').doc("W6LJd07uAg2umoTzmXUL")
            usersref.get().then(async (doc) => {
                if (doc.data()["userIds"].includes(this.addUser)) {
                    await axios.post('/register/friend', {
                        host_id: this.auth.displayName,
                        member_id: this.addUser,
                    }).then((response) => {
                        console.log(response)
                        this.getFriends()
                    }).catch((error) => {
                        console.log(error)
                    })
                }
            })
        }
    }
}
</script>

