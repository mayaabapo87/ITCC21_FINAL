<template>
  <div class="nav-header">
    <div class="logo-container">
      <img src="../assets/logo.png" alt="Logo" class="logo" />
    </div>
    <div class="nav-buttons">
      <button class="nav-button" @click="navigate('/')">Home</button>
      <button class="nav-button" @click="navigate('/about')">About</button>
      <button class="nav-button" @click="navigate('/skills')">Skills</button>
      <button class="nav-button" @click="navigate('/contact')">Contact</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    navigate(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style scoped>
.nav-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: white;
}

.logo-container {
  display: flex;
  align-items: center;
  margin-left: 100px;
}

.logo {
  width: 40px; /* Adjust the width and height to match your logo size */
  height: 40px;
}

.nav-buttons {
  display: flex;
  gap: 10px;
}

.nav-button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: transparent;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: color 0.3s, border-bottom-color 0.3s;
  margin-right: 40px;
}

.nav-button:hover {
  color: #317873; /* Change the color on hover */
  border-bottom: 2px solid #333; /* Add a line beneath the button on hover */
}

.nav-button:focus {
  outline: none;
  background-color: #ddd;
}

.nav-button:active {
  background-color: #bbb;
}
</style>
