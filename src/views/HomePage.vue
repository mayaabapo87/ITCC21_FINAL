<template>
  <div class="container">
    <div class="header">
      <h1 class="maya-text">
        <span class="highlight">Hi!</span> I'm <br /> <span class="highlight">Maya Abapo</span>
      </h1>
      <img src="../assets/profile.png" alt="Your Image" class="image" />
    </div>
    <div class="content">
      <p class="description">Welcome to my <span class="highlight">creative</span> world!</p>
      <button class="cta-button">Get Inspired</button>
    </div>
  </div>
</template>

<script>
export default {
  // Add your component logic here
};
</script>

<style>
/* Add your styling for the home page here */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f9f9f9;
}

.header {
  display: flex;
  align-items: center;
}

.maya-text {
  font-family: "Roboto", sans-serif;
  font-size: 50px;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-right: 30px;
}

.highlight {
  color: #317873;
}

.image {
  width: 200px;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.content {
  margin-top: 50px;
  text-align: center;
}

.description {
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  color: #555;
  margin-bottom: 30px;
  line-height: 1.4;
}

.cta-button {
  padding: 12px 30px;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background-color: #317873;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.cta-button:hover {
  background-color: #317873;
  transform: scale(1.05);
}
</style>
