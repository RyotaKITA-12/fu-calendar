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
                                        <span v-if="open">検索する日時を入力してください</span>
                                        <v-row v-else no-gutters style="width: 100%">
                                            <v-col cols="4">
                                                対象：
                                            </v-col>
                                            <v-col cols="8">
                                                {{ date_search.start || '0000-00-00' }}
                                                　
                                                {{ time_search.start || '00:00' }}
                                                　〜　
                                                {{ date_search.end || '0000-00-00' }}
                                                　
                                                {{ time_search.end || '00:00' }}
                                            </v-col>
                                        </v-row>
                                    </v-fade-transition>
                                </v-col>
                            </v-row>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-row justify="space-around" no-gutters>
                                <v-col cols="3">
                                    <v-menu ref="dateStartMenu" :close-on-content-click="false"
                                        :return-value.sync="date_search.start" offset-y min-width="290px">
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-text-field v-model="date_search.start" label="Start date"
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
                                <v-col cols="2">
                                    <v-menu ref="timeStartMenu" :close-on-content-click="false"
                                        :return-value.sync="time_search.start" offset-y min-width="290px">
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-text-field v-model="time_search.start" label="Start time"
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
                                <v-spacer></v-spacer>
                                <div style="padding-top: 25px;">〜</div>
                                <v-spacer></v-spacer>
                                <v-col cols="3">
                                    <v-menu ref="dateEndMenu" :close-on-content-click="false"
                                        :return-value.sync="date_search.end" offset-y min-width="290px">
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-text-field v-model="date_search.end" label="End date"
                                                prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on">
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
                                <v-col cols="2">
                                    <v-menu ref="timeEndMenu" :close-on-content-click="false"
                                        :return-value.sync="time_search.end" offset-y min-width="290px">
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-text-field v-model="time_search.end" label="End time"
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
                            </v-row>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
                <v-sheet min-height="70vh" rounded="lg">
                </v-sheet>
            </v-container>
        </v-main>
    </v-app>
</template>
<script>
import Nav from '@/components/layouts/Nav'

export default {
    components: {
        Nav,
    },
    data: () => ({
        panel: [0],
        date: null,
        date_search: {
            start: null,
            end: null,
        },
        time_search: {
            start: null,
            end: null,
        }
    }),
    methods: {
        allowedStep: m => m % 15 === 0,
    }
}
</script>

