<template>
    <v-row justify="end">
        <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on, attrs }">
                <div style="padding-bottom: 20px; padding-right: 20px;">
                    <v-btn v-bind="attrs" v-on="on" fab large dark right color="indigo"
                        class="text-center v-btn--example">
                        <v-icon>mdi-plus</v-icon>
                    </v-btn>
                </div>
            </template>
            <v-card>
                <v-card-title>
                    <span class="text-h5">New Event</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row justify="center">
                            <v-col cols="10">
                                <v-text-field v-model="title" label="Title" prepend-icon="mdi-pencil" required>
                                </v-text-field>
                            </v-col>
                            <v-col cols="5">
                                <v-menu ref="dateStartMenu" :close-on-content-click="false"
                                    :return-value.sync="addDate.start" transition="scale-transition" offset-y
                                    min-width="auto">
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field v-model="addDate.start" label="Start Date"
                                            prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on">
                                        </v-text-field>
                                    </template>
                                    <v-date-picker v-model="date" no-title scrollable>
                                        <v-spacer></v-spacer>
                                        <v-btn text color="primary" @click="$refs.dateStartMenu.isActive = false">
                                            Cancel
                                        </v-btn>
                                        <v-btn text color="primary" @click="$refs.dateStartMenu.save(date)">
                                            OK
                                        </v-btn>
                                    </v-date-picker>
                                </v-menu>
                            </v-col>
                            <v-col cols="5">
                                <v-menu ref="timeStartMenu" :close-on-content-click="false"
                                    :return-value.sync="addTime.start" offset-y min-width="290px">
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field v-model="addTime.start" label="Start time"
                                            prepend-icon="mdi-clock-time-four-outline" readonly v-bind="attrs"
                                            v-on="on">
                                        </v-text-field>
                                    </template>
                                    <v-time-picker v-model="timeStep" :allowed-minutes="allowedStep" class="mt-4"
                                        format="24hr">
                                        <v-spacer></v-spacer>
                                        <v-btn text color="primary" @click="$refs.timeStartMenu.isActive = false">
                                            Cancel
                                        </v-btn>
                                        <v-btn text color="primary" @click="$refs.timeStartMenu.save(timeStep)">
                                            OK
                                        </v-btn>
                                    </v-time-picker>
                                </v-menu>
                            </v-col>
                            <v-col cols="5">
                                <v-menu ref="dateEndMenu" :close-on-content-click="false"
                                    :return-value.sync="addDate.end" transition="scale-transition" offset-y
                                    min-width="auto">
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field v-model="addDate.end" label="End Date" prepend-icon="mdi-calendar"
                                            readonly v-bind="attrs" v-on="on">
                                        </v-text-field>
                                    </template>
                                    <v-date-picker v-model="date" no-title scrollable>
                                        <v-spacer></v-spacer>
                                        <v-btn text color="primary" @click="$refs.dateEndMenu.isActive = false">
                                            Cancel
                                        </v-btn>
                                        <v-btn text color="primary" @click="$refs.dateEndMenu.save(date)">
                                            OK
                                        </v-btn>
                                    </v-date-picker>
                                </v-menu>
                            </v-col>
                            <v-col cols="5">
                                <v-menu ref="timeEndMenu" :close-on-content-click="false"
                                    :return-value.sync="addTime.end" offset-y min-width="290px">
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field v-model="addTime.end" label="End time"
                                            prepend-icon="mdi-clock-time-four-outline" readonly v-bind="attrs"
                                            v-on="on">
                                        </v-text-field>
                                    </template>
                                    <v-time-picker v-model="timeStep" :allowed-minutes="allowedStep" class="mt-4"
                                        format="24hr">
                                        <v-spacer></v-spacer>
                                        <v-btn text color="primary" @click="$refs.timeEndMenu.isActive = false">
                                            Cancel </v-btn>
                                        <v-btn text color="primary" @click="$refs.timeEndMenu.save(timeStep)">
                                            OK
                                        </v-btn>
                                    </v-time-picker>
                                </v-menu>
                            </v-col>
                            <v-col cols="10">
                                <v-select v-model="group" :items="groups" label="Group"
                                    prepend-icon="mdi-account-multiple" dense>
                                </v-select>
                            </v-col>
                            <v-col cols="10">
                                <v-select v-model="category" :items="categorys" label="Category"
                                    prepend-icon="mdi-shape" dense>
                                </v-select>
                            </v-col>
                            <v-col cols="10">
                                <v-textarea filled auto-grow rows="2" label="Content" :rules="rules" v-model="content">
                                </v-textarea>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="dialog = false">
                        Close
                    </v-btn>
                    <v-btn color="blue darken-1" text @click="onSubmit">
                        Save
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>
<script>
import firebase from '@/firebase/firebase'
import axios from 'axios'

export default {
    data: () => ({
        dialog: false,
        title: "",
        addDate: {
            start: null,
            end: null,
        },
        addTime: {
            start: null,
            end: null,
        },
        timeStep: null,
        group: [],
        groups: [],
        category: null,
        categorys: ["指定なし", "遊び", "ゲーム", "作業", "散歩", "仕事", "食事", "ショッピング", "スポーツ",
            "通話", "デート", "ドライブ", "飲み", "博物館", "旅行", "その他"],
        content: "",
        events: [],
        auth: null
    }),
    mounted() {
        this.auth = JSON.parse(sessionStorage.getItem('user'))
        this.getGroups()
    },
    methods: {
        allowedStep: m => m % 15 === 0,
        async getGroups() {
            await axios.post('/groups', {
                host_id: this.auth.displayName
            }).then((response) => {
                this.groups = []
                response.data.forEach(elem => {
                    this.groups.push(elem.group_name)
                })
            }).catch((error) => {
                console.log(error)
            })

        },
        async onSubmit() {
            var startDateTime = new Date(this.addDate.start + 'T' + this.addTime.start)
            var str_start = `${startDateTime}`
            console.log(str_start)
            var endDateTime = new Date(this.addDate.end + 'T' + this.addTime.end)
            var str_end = `${endDateTime}`
            await axios.post('/register/schedule', {
                user_id: this.auth.displayName,
                title: this.title,
                group: this.group,
                category: this.category,
                content: this.content,
                start: str_start,
                end: str_end,
            }).then((_) => {
                this.$emit('getSchedule')
            }).catch((error) => {
                console.log(error)
            })
            this.dialog = false
        }
    }
}
</script>
