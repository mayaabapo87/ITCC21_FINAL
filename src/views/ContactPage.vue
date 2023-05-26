<template>
  <div class="contact-page">
    <div class="contact-container">
      <div class="contact-info">
        <h1 class="contact-title">Contact Information</h1>
        <div class="contact-item">
          <i class="fas fa-envelope"></i>
          <span>Email: </span>
          <a href="mailto:example@example.com"> 20200019568@my.xu.edu.ph</a>
        </div>
        <div class="contact-item">
          <i class="fas fa-phone"></i>
          <span>Phone: </span>
          <a href="tel:1234567890">123-456-7890</a>
        </div>
        <div class="contact-item">
          <i class="fas fa-map-marker-alt"></i>
          <span>Address: </span>
          <span>Misamis Oriental, CDOC</span>
        </div>
      </div>
      <div class="contact-form">
        <h1 class="contact-title">Get in Touch</h1>
        <form>
          <div class="form-group">
            <input type="text" placeholder="Your Name">
          </div>
          <div class="form-group">
            <input type="email" placeholder="Your Email">
          </div>
          <div class="form-group">
            <textarea placeholder="Your Message"></textarea>
          </div>
          <div class="form-group">
            <button class="submit-button">Send Message</button>
          </div>
        </form>
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
.contact-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #317873; /* Light gray background color */
  margin:100px;
}

.contact-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  max-width: 800px;
  width: 100%;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.contact-info {
  width: 50%;
  padding-right: 30px;
}

.contact-title {
  font-size: 32px;
  color: #333; /* Dark gray color */
  margin-bottom: 20px;
}

.contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.contact-item i {
  font-size: 20px;
  color: #ff6b6b; /* Coral color */
  margin-right: 10px;
}

.contact-item span {
  font-size: 18px;
  color: #333; /* Dark gray color */
}

.contact-item a {
  color: #007bff; /* Blue color */
  text-decoration: none;
}

.contact-item a:hover {
  text-decoration: underline;
}

.contact-form {
  width: 50%;
}

.contact-form h1 {
  font-size: 32px;
  color: #333; /* Dark gray color */
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  background-color: #F5F5F7; /* Light gray background color */
  border: none;
  border-radius: 5px;
  font-size: 16px;
  color: #333; /* Dark gray color */
}

.form-group textarea {
  height: 120px;
}

.submit-button {
  padding: 10px 20px;
  background-color: #007bff; /* Blue color */
  color: #fff; /* White color */
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #0056b3; /* Dark blue color */
}
</style>