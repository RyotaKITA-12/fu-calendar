<template>
    <v-app id="inspire">
        <Nav />
        <v-main class="grey lighten-3">
            <v-container>
                <v-expansion-panels multiple v-model="panel">
                    <v-expansion-panel>
                        <v-expansion-panel-header v-slot="{ open }">
                            <v-row no-gutters>
                                <v-col cols="8" class="text--secondary">
                                    <v-fade-transition leave-absolute>
                                        <span v-if="open">検索するフレンドを入力してください</span>
                                        <div v-else>
                                            <v-row no-gutters style="width: 100%">
                                                <v-col cols="4">
                                                    対象：
                                                </v-col>
                                            </v-row>
                                            <v-row style="width: 100%; margin-top: 20px;">
                                                <v-col>
                                                    <b>フレンド　：</b>
                                                    <v-chip-group column active-class="primary--text">
                                                        <div v-for="value in value_friends" :key="value">
                                                            <div v-if="value != 'すべて選択'">
                                                                <v-chip x-small color="primary">
                                                                    {{ value }}
                                                                </v-chip>
                                                            </div>
                                                        </div>
                                                    </v-chip-group>
                                                </v-col>
                                            </v-row>
                                            <v-row style="width: 100%">
                                                <v-col>
                                                    <b>カテゴリー：</b>
                                                    <v-chip-group column active-class="primary--text">
                                                        <div v-for="value in value_categorys" :key="value">
                                                            <div v-if="value != 'すべて選択'">
                                                                <v-chip x-small dark :color="category_colors[value]">
                                                                    {{ value }}
                                                                </v-chip>
                                                            </div>
                                                        </div>
                                                    </v-chip-group>
                                                </v-col>
                                            </v-row>
                                        </div>
                                    </v-fade-transition>
                                </v-col>
                            </v-row>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content style="margin-left: 20%;">
                            <v-row justify="space-around" no-gutters>
                                <v-col cols="8">
                                    <v-autocomplete v-model="value_friends" :items="users" dense filled small-chips
                                        multiple label="Frieds" @change="selectFriend()">
                                    </v-autocomplete>
                                </v-col>
                                <v-spacer />
                            </v-row>
                            <v-row justify="space-around" no-gutters>
                                <v-col cols="8">
                                    <v-autocomplete v-model="value_categorys" :items="categorys" dense filled
                                        small-chips multiple label="Categorys" @change="selectCategory()">
                                    </v-autocomplete>
                                </v-col>
                                <v-btn style="margin-left: 60px;" color="primary" x-large @click="onSubmit">検索</v-btn>
                                <v-spacer />
                            </v-row>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
                <v-sheet min-height="70vh" rounded="lg">
                    <v-sheet tile height="64" class="d-flex">
                        <v-toolbar flat>
                            <v-btn outlined class="mr-4" color="grey darken-2" @click="setToday">
                                Today
                            </v-btn>
                            <v-btn fab text small color="grey darken-2" @click="prev">
                                <v-icon small>
                                    mdi-chevron-left
                                </v-icon>
                            </v-btn>
                            <v-btn fab text small color="grey darken-2" @click="next">
                                <v-icon small>
                                    mdi-chevron-right
                                </v-icon>
                            </v-btn>
                            <v-toolbar-title v-if="$refs.calendar">
                                {{ $refs.calendar.title }}
                            </v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-menu bottom right>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn outlined color="grey darken-2" v-bind="attrs" v-on="on">
                                        <span>{{ typeToLabel[type] }}</span>
                                        <v-icon right>
                                            mdi-menu-down
                                        </v-icon>
                                    </v-btn>
                                </template>
                                <v-list>
                                    <v-list-item @click="type = 'day'">
                                        <v-list-item-title>Day</v-list-item-title>
                                    </v-list-item>
                                    <v-list-item @click="type = 'week'">
                                        <v-list-item-title>Week</v-list-item-title>
                                    </v-list-item>
                                    <v-list-item @click="type = 'month'">
                                        <v-list-item-title>Month</v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </v-toolbar>
                    </v-sheet>
                    <v-sheet height="600">
                        <v-calendar ref="calendar" v-model="focus" :type="type" :events="events"
                            :event-overlap-mode="mode" :event-overlap-threshold="30" @click:event="showEvent">
                        </v-calendar>
                        <v-menu v-model="selectedOpen" :close-on-content-click="false" :activator="selectedElement"
                            offset-x>
                            <v-card color="grey lighten-4" min-width="350px" flat>
                                <v-toolbar :color="selectedEvent.color" dark>
                                    <v-icon style="margin-bottom: 3px; margin-right: 20px;">{{
                                            category_icons[selectedEvent.category]
                                    }}</v-icon>
                                    <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
                                    <v-spacer></v-spacer>
                                    <h5 v-html="selectedEvent.user_id"></h5>
                                </v-toolbar>
                                <v-card-text>
                                    <b> {{ selectedEvent.content }} </b>
                                    <br>
                                    START　: {{ formatDate(selectedEvent.start) }}
                                    <br>
                                    END　　: {{ formatDate(selectedEvent.end) }}
                                </v-card-text>
                                <v-card-actions>
                                    <v-textarea v-model="comment" class="mx-2" label="comment" rows="1"
                                        prepend-icon="mdi-comment">
                                    </v-textarea>
                                    <v-btn :disabled="scheduleValid" color="primary"
                                        @click="inviteSchedule(selectedEvent.id)">
                                        <v-icon style="margin-right: 10px;">mdi-send-circle</v-icon>
                                        <b>誘う</b>
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-menu>
                    </v-sheet>
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
        panel: [0],
        focus: '',
        type: 'month',
        typeToLabel: {
            month: 'Month',
            week: 'Week',
            day: 'Day',
        },
        mode: 'column',
        value_friends: null,
        value_friends_before: [],
        value_categorys: null,
        value_categorys_before: [],
        users: ["すべて選択"],
        selectedEvent: {},
        selectedElement: null,
        selectedOpen: false,
        categorys: ["すべて選択", "指定なし", "遊び", "ゲーム", "作業", "散歩", "仕事", "食事", "ショッピング", "スポーツ",
            "通話", "デート", "ドライブ", "飲み", "博物館", "旅行", "その他"],
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
        events: [],
        auth: null,
        scheduleValid: false,
        comment: "",
    }),
    mounted() {
        this.$refs.calendar.checkChange()
        this.auth = JSON.parse(sessionStorage.getItem('user'))
        this.getFriends()
    },
    methods: {
        async getFriends() {
            await axios.post('/friends', {
                host_id: this.auth.displayName
            }).then((response) => {
                this.users.push(...response.data)
            }).catch((error) => {
                console.log(error)
            })
        },
        setToday() {
            this.focus = ''
        },
        prev() {
            this.$refs.calendar.prev()
        },
        next() {
            this.$refs.calendar.next()
        },
        selectFriend() {
            if (this.value_friends.indexOf("すべて選択") !== -1
                & this.value_friends_before.indexOf("すべて選択") === -1) {
                this.value_friends = this.users
            }
            if (this.value_friends.indexOf("すべて選択") === -1
                & this.value_friends_before.indexOf("すべて選択") !== -1) {
                this.value_friends = []
            }
            if (this.value_friends.indexOf("すべて選択") !== -1
                & this.value_friends_before.length === this.users.length) {
                this.value_friends = this.value_friends.filter(item => item !== "すべて選択");
            }
            this.value_friends_before = this.value_friends
        },
        selectCategory() {
            if (this.value_categorys.indexOf("すべて選択") !== -1
                & this.value_categorys_before.indexOf("すべて選択") === -1) {
                this.value_categorys = this.categorys
            }
            if (this.value_categorys.indexOf("すべて選択") === -1
                & this.value_categorys_before.indexOf("すべて選択") !== -1) {
                this.value_categorys = []
            }
            if (this.value_categorys.indexOf("すべて選択") !== -1
                & this.value_categorys_before.length === this.categorys.length) {
                this.value_categorys = this.value_categorys.filter(item => item !== "すべて選択");
            }
            this.value_categorys_before = this.value_categorys
        },
        showEvent({ nativeEvent, event }) {
            const open = () => {
                this.selectedEvent = event
                this.getApproved(this.selectedEvent.id)
                this.selectedElement = nativeEvent.target
                requestAnimationFrame(() => requestAnimationFrame(() => this.selectedOpen = true))
            }

            if (this.selectedOpen) {
                this.selectedOpen = false
                requestAnimationFrame(() => requestAnimationFrame(() => open()))
            } else {
                open()
            }

            nativeEvent.stopPropagation()
        },
        formatDate(in_date) {
            var format = 'YYYY/MM/DD hh:mm:ss'
            var date = new Date(in_date)

            format = format.replace(/YYYY/g, date.getFullYear());
            format = format.replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2));
            format = format.replace(/DD/g, ('0' + date.getDate()).slice(-2));
            format = format.replace(/hh/g, ('0' + date.getHours()).slice(-2));
            format = format.replace(/mm/g, ('0' + date.getMinutes()).slice(-2));
            format = format.replace(/ss/g, ('0' + date.getSeconds()).slice(-2));

            return format
        },
        async onSubmit() {
            if (this.value_friends.indexOf("すべて選択") !== -1) {
                var friends = this.value_friends.slice(1)
            } else {
                var friends = this.value_friends
            }
            if (this.value_categorys.indexOf("すべて選択") !== -1) {
                var categorys = this.value_categorys.slice(1)
            } else {
                var categorys = this.value_categorys
            }
            await axios.post('/schedules/invited', {
                host_id: this.auth.displayName,
                members: friends,
                categorys: categorys,
            }).then((response) => {
                this.events = []
                response.data.forEach(elem => {
                    var e = {
                        id: elem.ID,
                        user_id: elem.user_id,
                        name: elem.title,
                        start: new Date(elem.start.slice(0, -1)),
                        end: new Date(elem.end.slice(0, -1)),
                        group: elem.group,
                        category: elem.category,
                        content: elem.content,
                        color: this.category_colors[elem.category],
                        timed: true,
                    }
                    this.events.push(e)
                })
            }).catch((error) => {
                console.log(error)
            })
            this.panel = [1]
        },
        async getApproved(schedule_id) {
            await axios.post('application/status', {
                schedule_id: String(schedule_id),
                user_id: this.auth.displayName,
            }).then((response) => {
                if (response.data.ID == 0) {
                    this.scheduleValid = false
                } else {
                    this.scheduleValid = true
                }
            }).catch((error) => {
                console.log(error)
            })
        },
        async inviteSchedule(schedule_id) {
            await axios.post('invite/schedule', {
                schedule_id: String(schedule_id),
                user_id: this.auth.displayName,
                comment: this.comment,
            }).then((_) => {
                this.selectedOpen = false
                this.comment = ""
            }).catch((error) => {
                console.log(error)
            })
        },
    }
}
</script>

