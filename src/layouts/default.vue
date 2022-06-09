<template>
<div>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <div id="nav" style="display: flex; gap: 8px;">
      <router-link to="/">Home</router-link>
    </div>
  </header>

  <div>
    <slot />
  </div>
</div>
</template>

<style>
</style>
