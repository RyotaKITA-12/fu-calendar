<template>
    <v-app-bar app color="white" flat>
        <v-container class="py-0 fill-height">
            <v-img max-height="50" max-width="200" src="@/assets/logo.png"></v-img>

            <v-spacer></v-spacer>
            <v-btn v-for="[icon, text] in links" :key="icon" text>
                <v-icon>{{ icon }}</v-icon>
                {{ text }}
            </v-btn>

            <v-avatar class="mr-10" color="grey darken-1" size="32"></v-avatar>
        </v-container>
    </v-app-bar>
</template>
<script>
export default {
    name: 'App',
    data: () => ({
        links: [
            ['mdi-plus', 'Add'],
            ['mdi-magnify', 'Search'],
            ['mdi-bell', 'Notice'],
            ['mdi-logout', 'Logout'],
        ],
    }),
}
</script>

