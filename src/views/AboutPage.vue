<template>
  <div class="about-page">
    <div class="left-column">
      <div class="header">
        <p class="description">
          So, Who am I?
        </p>
      </div>
      <div class="content">
        <p class="about-text">
          I am Hans Czka Maya Abapo, a passionate computer science student with a strong interest in web development and design. I believe in the power of technology to make a positive impact in the world. My goal is to create user-friendly and visually stunning web experiences that leave a lasting impression.
        </p>
      </div>
    </div>
    <div class="right-column">
      <!-- Add your image here -->
      <img src="../assets/profile.png" alt="Profile Image" />
    </div>
  </div>
</template>

<script>
export default {
  // Add component logic here if needed
};
</script>

<style scoped>
.about-page {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.left-column {
  flex: 1;
  text-align: center;
}

.right-column {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.header {
  margin-bottom: 40px;
}

h1 {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 10px;
}

.description {
  font-size: 60px;
  color: #999;
  margin-bottom: 20px;
  font-weight: bold;
  color: #317873; 
  margin-left: 30px;
}

.content {
  margin-bottom: 40px;
  text-align: justify;
  margin-left: 30px;
}

.about-text {
  font-size: 18px;
  line-height: 1.6;
  color: #333;
}

img {
  max-width: 100%;
  max-height: 400px;
  background-color: #317873; 
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin:100px;
}
</style>