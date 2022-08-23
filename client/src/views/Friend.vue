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
                                    v-model="addUser" label="add Email" type="text">
                                    <template v-slot:append-outer>
                                        <v-btn color="primary">追加</v-btn>
                                    </template>
                                </v-text-field>
                                <v-list color="blue-grey lighten-5" style="height: 71vh; overflow-y: auto;">
                                    <v-list-item-group v-model="selectedUser" color="primary">
                                        <v-list-item v-for="[icon, user] in users" :key="icon">
                                            <v-list-item-icon>
                                                <v-icon>{{ icon }}</v-icon>
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

export default {
    components: {
        Nav,
    },
    data: () => ({
        selectedUser: 1,
        users: [
            ['mdi-account', 'user1'],
            ['mdi-account', 'user2'],
            ['mdi-account', 'user3'],
            ['mdi-account', 'user4'],
            ['mdi-account', 'user5'],
            ['mdi-account', 'user6'],
            ['mdi-account', 'user7'],
            ['mdi-account', 'user8'],
            ['mdi-account', 'user9'],
            ['mdi-account', 'user10'],
            ['mdi-account', 'user11'],
            ['mdi-account', 'user12'],
            ['mdi-account', 'user13'],
            ['mdi-account', 'user14'],
            ['mdi-account', 'user15'],
            ['mdi-account', 'user16'],
            ['mdi-account', 'user17'],
            ['mdi-account', 'user18'],
            ['mdi-account', 'user19'],
            ['mdi-account', 'user20'],
            ['mdi-account', 'user21'],
            ['mdi-account', 'user22'],
            ['mdi-account', 'user23'],
            ['mdi-account', 'user24'],
            ['mdi-account', 'user25'],
        ],
    })
}
</script>

