<template>
  <div class="skills-page">
    <h1 class="title">My Skills</h1>
    <div class="skills-container">
      <div class="row">
        <!-- First row of skills -->
        <div class="skill">
          <div class="progress-bar">
            <div class="progress" style="width: 90%;">
              <span class="skill-name">HTML5</span>
              <span class="percentage">90%</span>
            </div>
          </div>
        </div>
        <div class="skill">
          <div class="progress-bar">
            <div class="progress" style="width: 80%;">
              <span class="skill-name">CSS3</span>
              <span class="percentage">80%</span>
            </div>
          </div>
        </div>
        <div class="skill">
          <div class="progress-bar">
            <div class="progress" style="width: 75%;">
              <span class="skill-name">JavaScript</span>
              <span class="percentage">75%</span>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <!-- Second row of skills -->
        <div class="skill">
          <div class="progress-bar">
            <div class="progress" style="width: 70%;">
              <span class="skill-name">Vue.js</span>
              <span class="percentage">70%</span>
            </div>
          </div>
        </div>
        <div class="skill">
          <div class="progress-bar">
            <div class="progress" style="width: 65%;">
              <span class="skill-name">React.js</span>
              <span class="percentage">65%</span>
            </div>
          </div>
        </div>
        <div class="skill">
          <div class="progress-bar">
            <div class="progress" style="width: 60%;">
              <span class="skill-name">Node.js</span>
              <span class="percentage">60%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // Add component logic here if needed
};
</script>

<style scoped>
.skills-page {
  text-align: center;
}

.skills-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
.title{
  margin-top:100px;
}

.skill {
  width: 300px;
  background-color: #f2f2f2;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin: 20px;
}

.progress-bar {
  width: 100%;
  height: 30px;
  background-color: #e0e0e0;
  overflow: hidden;
  background-color: white;
  border: 2px solid #317873; /* Add border color */
  margin: 20px;
}

.progress {
  position: relative;
  height: 100%;
  background-color: #317873;
}

.skill-name {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
}

.percentage {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
}

/* Add additional styling for the skills page as needed */
</style>
