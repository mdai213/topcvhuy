<template>
  <nav>
      <div class="nav-img">
        <img src="../assets/image/logohce.png" alt="" />
      </div>
      <div class="nav-content">
        <div class="nav-left">
          <ul>
            <li>
              Việc làm
            </li>
            <li>Hồ sơ & CV</li>
            <li>Công cụ</li>
            <li><router-link to="/" class="login-link">Đtrang chur</router-link></li>
          </ul>
        </div>
        <div class="nav-right">
          <div class="icon"><i class="fa-solid fa-bell"></i></div>
          
          <div class="icon"><i class="fa-solid fa-message"></i></div>
          <div class="info-user">
            <div class="avatar">
              <div class="icon">
                
                <router-link to="/login" class="icon">
                  <i class="fa-solid fa-user"></i>
                </router-link>
                
              </div>
            </div>
            <div class="name">Nguyễn Văn A </div>
            
          </div>
        </div>
      </div>
    </nav>
  <div id="app">
    <div class="wrapper">
      <div class="form-login">
        <form id="loginForm" @submit.prevent="login">
          <h2>Chào mừng bạn đến với trang CV của tụi mình</h2>
          <div class="input-group input">
            <input type="text" v-model="username" required>
            <label for="username">Tên tài khoản</label>
          </div>
          <div class="input-group">
            <input type="password" v-model="password" required>
            <label for="password">Mật khẩu</label>
          </div>
          <div class="remember">
            <input type="checkbox" v-model="remember" id="remember">
            <label for="remember">Nhớ tài khoản của tôi</label>
          </div>
          <button class="btnLogin" type="submit">Đăng nhập</button>
          <div class="signupLink">
            <p>Bạn quên mật khẩu ? <a class="login-link" href="#" @click="showRecoveryForm">Khôi phục tài khoản</a></p>
            <p>Bạn không có tài khoản ? <router-link to="/signup" class="signupbtn-link">Đăng ký</router-link></p>
          </div>
        </form>

        <form id="signupForm" style="display: none;" @submit.prevent="signup">
          <div class="input-group">
            <input type="text" v-model="newUsername" required>
            <label for="newUsername">Tên đăng nhập mới</label>
          </div>
          <div class="input-group">
            <input type="email" v-model="newEmail" required>
            <label for="newEmail">Email</label>
          </div>
          <div class="input-group">
            <input type="password" v-model="newPassword" required>
            <label for="newPassword">Mật khẩu mới</label>
          </div>
          <div class="Agree">
            <input type="checkbox" v-model="agree" id="Agree">
            <label for="Agree">Tôi đồng ý với các điều khoán và tiếp tục</label>
          </div>
          <button class="btnLogin" type="submit">Đăng ký</button>
          <div class="signupLink">
            <p>Bạn quên mật khẩu? <a class="login-link" href="#" @click="showRecoveryForm">Khôi phục tài khoản</a></p>
            <p>Bạn đã có tài khoản <a class="login-link" href="#" @click="showLoginForm">Đăng nhập</a></p>
          </div>
        </form>
      </div>
    </div>
  </div>
  
</template>

<script>
import '/src/assets/css/login.css'

export default {
  data() {
    return {
      username: '',
      password: '',
      remember: false,
      newUsername: '',
      newEmail: '',
      newPassword: '',
      agree: false,
      signupFormVisible: false
    };
  },
  methods: {
    login() {
      var username = this.username;
      var password = this.password;

      if (username === 'admin' && password === '123') {
        alert('Đăng nhập thành công');
      } else {
        alert('Nhập sai tài khoản hoặc mật khẩu.');
      }
    },
    signup() {
      var newUsername = this.newUsername.trim();
      var newEmail = this.newEmail.trim();
      var newPassword = this.newPassword.trim();
      var agreeCheckbox = this.agree;

      if (newUsername === '' || newEmail === '' || newPassword === '' || !agreeCheckbox) {
        alert('Vui lòng điền đầy đủ thông tin và đồng ý với các điều khoản.');
      } else {
        alert('Đăng ký thành công. Bạn có thể sử dụng tài khoản mới để đăng nhập.');
      }
    },
    showRecoveryForm() {
      // Hiển thị form khôi phục mật khẩu
    },
    showLoginForm() {
      // Hiển thị form đăng nhập
    }
  }
};
</script>
