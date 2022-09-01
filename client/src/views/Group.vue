<template>
    <v-app id="inspire">
        <Nav />
        <v-main class="grey lighten-3">
            <v-container>
                <v-sheet min-height="80vh" rounded="lg">
                    <v-row no-gutters>
                        <v-col cols="3">
                            <v-card class="mx-auto white" style="padding-top: 10px;">
                                <div class="text-center">
                                    <v-btn block depressed color="primary">

                                    </v-btn>
                                </div>
                                <v-list color="blue-grey lighten-5" style="height: 71vh; overflow-y: auto;">
                                    <v-list-item-group v-model="selectedGroup" color="primary">
                                        <v-list-item v-for="[icon, group] in groups" :key="icon">
                                            <v-list-item-icon>
                                                <v-icon>{{ icon }}</v-icon>
                                            </v-list-item-icon>

                                            <v-list-item-content>
                                                <v-list-item-title>{{ group }}</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-list-item-group>
                                </v-list>
                            </v-card>
                        </v-col>
                    </v-row>
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
        selectedGroup: 1,
        groups: [
            ['mdi-account-multiple', 'Group1'],
            ['mdi-account-multiple', 'Group2'],
            ['mdi-account-multiple', 'Group3'],
        ],
    })
}
</script>

