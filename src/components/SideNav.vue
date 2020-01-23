<template>
    <v-navigation-drawer
        absolute
        class="light-blue darken-4 elevation-10 sidenav"
        app
        width="200"
    >
      
        <v-list
          nav
          class="pa-0"
          flat
        >
            <v-list-item class="pl-4 ">
                <div class="d-flex align-center" >
                    <v-img
                    alt="Vuetify Logo"
                    class="shrink mr-2"
                    contain
                    src="../assets/claruslogo.png"
                    transition="scale-transition"
                    width="90"
                    />
                </div>
            </v-list-item>
            <v-list-item-group
                active-class="light-blue accent-2 "
                mandatory
                class="pa-0"
            >
                <v-list-item dense v-for="option in options" :key="option" class="pl-4 list-item" tile="true">
                <v-list-item-title dense class="body-2 white--text">{{ option }}</v-list-item-title>
                </v-list-item>

            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    name:'Sidenav',
    data() {
        return {
            options: ['Offer history','Awarded NDC','Inactive Awards', 'Price Change', 'Pending Actions' , 'Usage', 'Invoice'] 

        }
    },
}
</script>

<style scoped>
.list-item{
    border-radius: 0 
}
</style>