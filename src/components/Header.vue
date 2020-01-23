<template>
<div>
     <v-app-bar
      color="white"
     max-height="64"
    >
  
    <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="../assets/claruslogo.png"
          transition="scale-transition"
          width="90"
        />
    </div>

         <v-spacer></v-spacer>
       <router-link to="/createoffer">
          <p class="pa-1 mb-0"><v-icon size="small" color="blue">mdi-plus</v-icon>
          Create Offer</p>
        </router-link>
        <v-divider
            class="mx-4"
            inset
            vertical
        >
        </v-divider>

        <a>Logout</a>
    
    </v-app-bar>
    
</div> 
</template>
<script>
export default {
    name: 'Header'
}
</script>
<style scoped>
p{
    
    font-size: 12px
}
a{  
    padding-left: 5px;
    font-size: 12px;
    text-decoration: none;
}

</style>