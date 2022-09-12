<template>
    <v-app id="inspire">
        <Nav />
        <v-main class="grey lighten-3">
            <v-container>
                <AddSchedule />
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
import axios from 'axios'
import Nav from '@/components/layouts/Nav'
import AddSchedule from '@/components/modals/AddSchedule'

export default {
    components: {
        Nav,
        AddSchedule,
    },
    data: () => ({
        focus: '',
        type: 'month',
        typeToLabel: {
            month: 'Month',
            week: 'Week',
            day: 'Day',
        },
        mode: 'column',
        value: '',
        events: [],
        auth: null,
        selectedEvent: {},
        selectedElement: null,
        selectedOpen: false,
        category_colors: {
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
            "暇つぶし": "yellow",
            "旅行": "teal",
            "その他": "blue-grey"
        },
    }),
    mounted() {
        this.$refs.calendar.checkChange()
        this.auth = JSON.parse(sessionStorage.getItem('user'))
        this.getSchedule()
    },
    methods: {
        setToday() {
            this.focus = ''
        },
        prev() {
            this.$refs.calendar.prev()
        },
        next() {
            this.$refs.calendar.next()
        },
        async getSchedule() {
            this.events = []
            await axios.post('/schedules', {
                user_id: this.auth.displayName
            }).then((response) => {
                response.data.forEach(elem => {
                    var e = {
                        name: elem.title,
                        start: new Date(elem.start.slice(0, -1)),
                        end: new Date(elem.end.slice(0, -1)),
                        group: elem.group,
                        cateory: elem.category,
                        content: elem.content,
                        color: this.category_colors[elem.category],
                        timed: true,
                    }
                    this.events.push(e)
                })
            }).catch((error) => {
                console.log(error)
            })
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
    }
}
</script>
