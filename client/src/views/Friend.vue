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
                        </v-col>
                    </v-row>
                </v-sheet>
            </v-container>
        </v-main>
    </v-app>
</template>
<script>
import Nav from '@/components/layouts/Nav'
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
        async onSubmit() {
            await axios.post('/register/friend', {
                host_id: this.auth.displayName,
                member_id: this.addUser,
            }).then((response) => {
                console.log(response)
                this.getFriends()
            }).catch((error) => {
                console.log(error)
            })
            this.dialog = false
        }
    }
}
</script>

