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
                                    v-model="addGroup" label="add Group" type="text">
                                    <template v-slot:append-outer>
                                        <v-btn color="primary" @click="onSubmit">追加</v-btn>
                                    </template>
                                </v-text-field>
                                <v-list color="blue-grey lighten-5" style="height: 71vh; overflow-y: auto;">
                                    <v-list-item-group v-model="selectedGroup" color="primary">
                                        <v-list-item v-for="group in groups" :key="group" @click="selectGroup">
                                            <v-list-item-icon>
                                                <v-icon>mdi-account-multiple</v-icon>
                                            </v-list-item-icon>

                                            <v-list-item-content>
                                                <v-list-item-title>{{ group }}</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-list-item-group>
                                </v-list>
                            </v-card>
                        </v-col>
                        <v-col>
                            <v-list three-line>
                                <template v-for="(item, index) in members">
                                    <div v-if="item.header">
                                        <v-subheader :key="item.header">
                                            {{ item.header }}
                                            <v-spacer />
                                            <v-btn color="light-blue darken-1" class="white--text" @click="getMembers"
                                                style="margin-left: 10px;">
                                                <b>更新</b>
                                            </v-btn>
                                            <v-btn color="red darken-1" class="white--text" @click="deleteGroup"
                                                style="margin-left: 10px;">
                                                <b>削除</b>
                                            </v-btn>
                                        </v-subheader>
                                    </div>

                                    <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>

                                    <v-list-item v-else :key="item.title" style="width: 75%;">
                                        <v-list-item-avatar>
                                            <v-img :src="item.avatar"></v-img>
                                        </v-list-item-avatar>

                                        <v-list-item-content style="margin-top: -13px; margin-left: 20px;">
                                            <v-list-item-title v-html="item.title"></v-list-item-title>
                                        </v-list-item-content>
                                        <v-list-item-action>
                                            <v-btn icon @click="deleteMember(item.title)">
                                                <v-icon color="red darken-3">mdi-window-close</v-icon>
                                            </v-btn>
                                        </v-list-item-action>
                                    </v-list-item>
                                </template>
                            </v-list>
                            <div v-if="selectedGroup != null">
                                <v-list-item
                                    style="width: 70%; margin-top: 5px; margin-left: 12px; margin-right: 11px;">
                                    <v-list-item-content class="grey--text">
                                        <v-select v-model="member" :items="friends" dense color="blue darken-2"
                                            label="新規メンバーを追加" prepend-icon="mdi-account-multiple"
                                            append-outer-icon="mdi-send" @click:append-outer="addMember()" required>
                                        </v-select>
                                    </v-list-item-content>
                                </v-list-item>
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
import axios from 'axios'
import firebase from '@/firebase/firebase'

export default {
    components: {
        Nav,
    },
    data: () => ({
        selectedGroup: null,
        groups: [],
        addGroup: "",
        auth: null,
        memberNames: [],
        member: "",
        members: [
            { header: 'グループメンバー' },
        ],
        friends: [],
    }),
    mounted() {
        this.auth = JSON.parse(sessionStorage.getItem('user'))
        this.getFriends()
        this.getGroups()
        this.getMembers()
    },
    methods: {
        async getFriends() {
            await axios.post('/friends', {
                host_id: this.auth.displayName
            }).then((response) => {
                this.friends = response.data
            }).catch((error) => {
                console.log(error)
            })
        },
        async getGroups() {
            await axios.post('/groups', {
                host_id: this.auth.displayName
            }).then((response) => {
                this.groups = []
                response.data.forEach(elem => {
                    this.groups.push(elem.group_name)
                })
                this.addGroup = ""
            }).catch((error) => {
                console.log(error)
            })
        },
        selectGroup() {
            setTimeout(this.getMembers, 100)
        },
        async getMembers() {
            await axios.post('/group/members', {
                host_id: this.auth.displayName,
                group_name: this.groups[this.selectedGroup]
            }).then((response) => {
                this.memberNames = []
                response.data.forEach(elem => {
                    this.memberNames.push(elem.member_id)
                })
                this.getMemberImages()
            }).catch((_) => {
                pass
            })
        },
        async getMemberImages() {
            this.members = [
                { header: 'グループメンバー' },
            ]
            var storage = firebase.storage()
            for (const elem of this.memberNames) {
                const pathReference = storage.ref(`user/icon/${elem}`)
                await pathReference.getDownloadURL().then((url) => {
                    this.members.push(
                        {
                            avatar: url,
                            title: elem,
                        },
                    )
                    this.members.push(
                        { divider: true, inset: true },
                    )
                }).catch((_) => {
                    this.members.push(
                        {
                            avatar: 'https://firebasestorage.googleapis.com/v0/b/fu-calendar-9acef.appspot.com/o/user%2Ficon%2Fsample_avatar_image.png?alt=media&token=696040e4-13e7-4822-ad6a-fa0a268f77b3',
                            title: elem,
                        },
                    )
                    this.members.push(
                        { divider: true, inset: true },
                    )
                });
            }
        },
        async deleteGroup() {
            await axios.post('/delete/group', {
                host_id: this.auth.displayName,
                group_name: this.groups[this.selectedGroup]
            }).then((_) => {
                this.getGroups()
            }).catch((_) => {
                pass
            })
        },
        async deleteMember(member_id) {
            await axios.post('/delete/group/member', {
                host_id: this.auth.displayName,
                group_name: this.groups[this.selectedGroup],
                member_id: member_id
            }).then((_) => {
                this.getMembers()
            }).catch((_) => {
                pass
            })
        },
        async addMember() {
            if (!this.memberNames.includes(this.member)) {
                await axios.post('/register/group/member', {
                    host_id: this.auth.displayName,
                    group_name: this.groups[this.selectedGroup],
                    member_id: this.member
                }).then((_) => {
                    this.getMembers()
                }).catch((_) => {
                    pass
                })
            } else {
                this.member = ""
            }
        },
        async onSubmit() {
            await axios.post('/register/group', {
                host_id: this.auth.displayName,
                group_name: this.addGroup,
            }).then((_) => {
                this.getGroups()
            }).catch((_) => {
                pass
            })
            this.dialog = false
        }
    }
}
</script>

