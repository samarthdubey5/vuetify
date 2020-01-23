<template>
<div>
  <Header />
  <Sidenav />
  
</div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header'
import Sidenav from '../components/SideNav'

export default {
  name: 'home',
  components: {
    Header,
    Sidenav
  }

}
</script>
