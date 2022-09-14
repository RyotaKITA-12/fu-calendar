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
                                                    <v-chip-group active-class="primary--text">
                                                        <v-chip x-small v-for="value in value_friends" :key="value"
                                                            color="primary">
                                                            {{ value }}
                                                        </v-chip>
                                                    </v-chip-group>
                                                </v-col>
                                            </v-row>
                                            <v-row style="width: 100%">
                                                <v-col>
                                                    <b>カテゴリー：</b>
                                                    <v-chip-group active-class="primary--text">
                                                        <v-chip x-small v-for="value in value_categorys" :key="value"
                                                            dark :color="category_colors[value]">
                                                            {{ value }}
                                                        </v-chip>
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
                                        multiple label="Frieds">
                                    </v-autocomplete>
                                </v-col>
                                <v-spacer />
                            </v-row>
                            <v-row justify="space-around" no-gutters>
                                <v-col cols="8">
                                    <v-autocomplete v-model="value_categorys" :items="categorys" dense filled
                                        small-chips multiple label="Categorys">
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
                                    <v-btn icon>
                                        <v-icon>mdi-pencil</v-icon>
                                    </v-btn>
                                    <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
                                    <v-spacer></v-spacer>
                                    <v-btn icon>
                                        <v-icon>mdi-heart</v-icon>
                                    </v-btn>
                                    <v-btn icon>
                                        <v-icon>mdi-dots-vertical</v-icon>
                                    </v-btn>
                                </v-toolbar>
                                <v-card-text>
                                    {{ selectedEvent.category }}
                                    START　: {{ formatDate(selectedEvent.start) }}
                                    <br>
                                    END　　: {{ formatDate(selectedEvent.end) }}
                                    <br>
                                    ID　　: {{ selectedEvent.id }}
                                    <br>
                                    ID　　: {{ selectedEvent.content }}
                                    <span v-html="selectedEvent.content"></span>
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn text color="secondary" @click="selectedOpen = false">
                                        Cancel
                                    </v-btn>
                                    <v-spacer />
                                    <v-btn color="primary" dark @click="selectedOpen = false">
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
        values_friends: null,
        value_categorys: null,
        users: [],
        selectedEvent: {},
        selectedElement: null,
        selectedOpen: false,
        categorys: ["指定なし", "遊び", "ゲーム", "作業", "散歩", "仕事", "食事", "ショッピング", "スポーツ",
            "通話", "デート", "ドライブ", "飲み", "博物館", "旅行", "その他"],
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
                this.users = response.data
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
        showEvent({ nativeEvent, event }) {
            const open = () => {
                this.selectedEvent = event
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
            await axios.post('/schedules/invited', {
                host_id: this.auth.displayName,
                members: this.value_friends,
                categorys: this.value_categorys,
            }).then((response) => {
                console.log(response)
                this.events = []
                response.data.forEach(elem => {
                    var e = {
                        name: elem.title,
                        start: new Date(elem.start.slice(0, -1)),
                        end: new Date(elem.end.slice(0, -1)),
                        color: this.category_colors[elem.category],
                        id: elem.ID,
                        content: elem.Content,
                        timed: true,
                    }
                    this.events.push(e)
                })
            }).catch((error) => {
                console.log(error)
            })
            this.dialog = false
        }
    }
}
</script>

