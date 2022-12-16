<template>
  <div>
    <!-- NAVBAR -->
    <header class="header">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item has-text-white is-size-2 has-text-weight-bold" href="#">
              {{ title }}
            </a>
            <span role="button" tabindex="0" class="navbar-burger burger has-text-white" data-target="navbar-menu">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbar-menu" class="navbar-menu">
            <div class="navbar-end">
              <!-- Loop through the navigation items -->
              <a 
              v-for="item in items"
              :key="item.text"
              :href="item.link"
              class="navbar-item nav-web" 
              > {{ item.text }}
            </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
    <!-- NAVBAR END -->
  </div>
</template>

<script>

export default {
  name: 'NavBar',
  props: {
    title: {
      type: String
    },
    items: {
      type: Array,
    }
  }
}

</script>