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
                                        format="24hr" no-title scrollable>
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
                                        format="24hr" no-title scrollable>
                                        <v-spacer></v-spacer>
                                        <v-btn text color="primary" @click="$refs.timeEndMenu.isActive = false">
                                            Cancel
                                        </v-btn>
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
                                <v-text-field v-model="locate" label="Location" prepend-icon="mdi-map-marker" required>
                                </v-text-field>
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

export default {
    data: () => ({
        dialog: false,
        title: "",
        locate: "",
        group: [],
        groups: ["G1", "G2", "G3"],
        addDate: {
            start: null,
            end: null,
        },
        addTime: {
            start: null,
            end: null,
        },
        timeStep: null,
        events: [],
    }),
    methods: {
        allowedStep: m => m % 15 === 0,
        onSubmit() {
            this.events.push({
                name: this.title,
                start: new Date(this.addDate.start + ' ' + this.addTime.start),
                end: new Date(this.addDate.end + ' ' + this.addTime.end),
                color: 'blue',
                timed: true,
            })
            console.log(this.events)
            this.dialog = false
        }
    }
}
</script>

