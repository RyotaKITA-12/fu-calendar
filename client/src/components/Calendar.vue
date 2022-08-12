<template>
    <div>
        <v-sheet tile height="6vh" color="grey lighten-3" class="d-flex align-center">
            <v-btn icon @click="$refs.calendar.prev()">
                <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn outlined small class="ma-4" @click="setToday">
                TODAY
            </v-btn>
            <v-btn icon @click="$refs.calendar.next()">
                <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
        </v-sheet>
        <v-toolbar-title>{{ title }}</v-toolbar-title>
        <v-sheet height="94vh">
            <v-calendar ref="calendar" v-model="value" :events="events" :event-color="getEventColor" locale="ja-jp"
                :day-format="(timestamp) => new Date(timestamp.date).getDate()"
                :month-format="(timestamp) => (new Date(timestamp.date).getMonth() + 1) + ' /'" @change="getEvents"
                @click:event="showEvent" @click:date="viewDay"> </v-calendar>
        </v-sheet>
    </div>
</template>

<script>
import moment from 'moment';

export default {
    data: () => ({
        events: [],
        value: moment().format('yyyy-MM-DD'),
    }),
    computed: {
        title() {
            return moment(this.value).format('yyyy年 M月');
        }
    },
    methods: {
        getEvents() {
            const events = [
                {
                    name: '会議',
                    start: new Date('2022-08-03T01:00:00'), // 開始時刻
                    end: new Date('2022-08-03T02:00:00'), // 終了時刻
                    color: 'blue',
                    timed: true, // 終日ならfalse
                },
            ];
            this.events = events;
        },
        getEventColor(event) {
            return event.color;
        },
        setToday() {
            this.value = moment().format('yyyy-MM-DD');
        },
        showEvent({ event }) {
            alert(`clicked ${event.name}`);
        },
        viewDay({ date }) {
            alert(`date: ${date}`);
        },
    },
};
</script>
