<template>
   
    <DetailCV v-if="isShow" @my-event="Close"/> 
    <nav>
      <div class="nav-img">
        <img src="../assets/image/logohce.png" alt="" />
      </div>
      <div class="nav-content">
        <div class="nav-left">
          <ul>
            <li><router-link to="/" class="login-link">Trang chủ</router-link></li>
            <li>
              Việc làm
            </li>
            <li>Hồ sơ & CV</li>
            <li>Công cụ</li>
            
          </ul>
        </div>
        <div class="nav-right">
          <div class="icon"><i class="fa-solid fa-bell"></i></div>
          
          <div class="icon"><i class="fa-solid fa-message"></i></div>
          <div class="info-user">
            
            <div class="name">
              <div class="nav_login"  @click="showLoginModal = true" v-if="!isLoggedIn">
          <p >Đăng Nhập</p>
        </div>
        <div class="nav_register" @click="showRegisterModal = true" v-if="!isLoggedIn">
          <p>Đăng Ký </p>
        </div>
        <div class="nav_register" @click="logout" v-else>
          <div class="avatar">
              <div class="icon">
                
                <router-link to="/login" class="icon" >
                  <i class="fa-solid fa-user"></i>
                </router-link>
                
              </div>
            </div>
          <p class="nav_register_first">{{ loginUsername }}</p>
          <span class="nav_register_mid">|</span>
          <p class="nav_register_last" @click="logout">Logout</p>
          
        </div>
        </div>
               </div>
          </div>
        </div>
    </nav>




    <main>
      <div class="top-banner">
        <div class="top-banner-content">
          <div class="top-banner-content-detail">
            <h1 class="title">
              Danh sách mẫu CV xin việc
              <br />
              tiếng Việt <img src="../assets/image/vn.png" alt="" /> / Anh
              <img src="../assets/image/us.png" alt="">/ Nhật
              <img src="../assets/image/jp.png" /> chuẩn 2024
            </h1>
            <p class="caption">
              Các mẫu CV được thiết kế chuẩn theo từng ngành nghề.
              <br />

              Phù hợp với cả sinh viên và người đi làm.
            </p>
          </div>
        </div>
      </div>

      <div class="main-container">
        <div class="box-version-tab">
          <ul class="container nav">
            <li class="active">Mẫu CV theo Style</li>
          </ul>
        </div>
       

 <!-- thay đổi chỗ này thành những mẫu khác nhau -->
 <div class="list-item">
  <div id="list-cv-style">
    <div class="row">
      <div class="col-md-3 col-sm-4 list-cv-style_item">
        <div class="template-cv-item box-shadow">
          <div class="cv-img">
            <div class="cv-img-tag">
              <div class="cv-img-tag_item tag-ver2">
                <i class="fa-solid fa-bolt-lightning"></i> Powered by CV Builder 2.0
              </div>
            </div>
            <img src="https://www.topcv.vn/images/cv/screenshots/thumbs/cv-template-thumbnails-v1.2/delicate_2_v2.png?v=1.0.6" alt="Mẫu CV tiếng Việt" title="Mẫu CV tiếng Việt" width="450" height="500" class="img-responsive lazy">
            <div class="cv-overlay">
              <a class="chooseCvData btn-use-now">
                <span class="create-cv-button">
                  <router-link to="cv" class="">Dùng mẫu</router-link>
                </span>
              </a>
              <a @click="showDialog" href="javascript:void(0)" class="btn-preview preview-cv-template-button">
                <span class="preview-button">
                  <i class="fa-solid fa-eye"></i> Xem trước
                </span>
              </a>
            </div>
            <div class="clearfix"></div>
          </div>
          <div class="template-cv-item_info">
            <div class="tag-list">
              Chuyên nghiệp
              Đơn giản
              <a href="javascript:void(0)" class="template-cv-item-tag">+8</a>
            </div>
            <div class="template-cv-title">
              <h2>Mẫu 1 </h2>
            </div>
          </div>
        </div>
      </div>


      <div class="col-md-3 col-sm-4 list-cv-style_item">
      <div class="template-cv-item box-shadow">
          <div class="cv-img">
            <div class="cv-img-tag">
              <div class="cv-img-tag_item tag-ver2">
                <i class="fa-solid fa-bolt-lightning"></i> Powered by CV Builder 2.0
              </div>
            </div>
            <img src="https://www.topcv.vn/images/cv/screenshots/thumbs/cv-template-thumbnails-v1.2/premium_v2.png?v=1.0.6" alt="Mẫu CV tiếng Việt" title="Mẫu CV tiếng Việt" width="450" height="500" class="img-responsive lazy">
            <div class="cv-overlay">
              <a class="chooseCvData btn-use-now">
                <span class="create-cv-button">
                  <router-link to="cv" class="">Dùng mẫu</router-link>
                  
                </span>
              </a>
              <a @click="showDialog" href="javascript:void(0)" class="btn-preview preview-cv-template-button">
                <span class="preview-button">
                  <i class="fa-solid fa-eye"></i> Xem trước
                </span>
              </a>
            </div>
            <div class="clearfix"></div>
          </div>
          <div class="template-cv-item_info">
            <div class="tag-list">
              Chuyên nghiệp
              Đơn giản
              <a href="javascript:void(0)" class="template-cv-item-tag">+8</a>
            </div>
            <div class="template-cv-title">
              <h2>Hiện đại</h2>
            </div>
          </div>
        </div>
        </div>

        <div class="col-md-3 col-sm-4 list-cv-style_item">
      <div class="template-cv-item box-shadow">
          <div class="cv-img">
            <div class="cv-img-tag">
              <div class="cv-img-tag_item tag-ver2">
                <i class="fa-solid fa-bolt-lightning"></i> Powered by CV Builder 2.0
              </div>
            </div>
            <img src="https://www.topcv.vn/images/cv/screenshots/thumbs/cv-template-thumbnails-v1.2/basic_4_v2.png?v=1.0.6" alt="Mẫu CV tiếng Việt" title="Mẫu CV tiếng Việt" width="450" height="500" class="img-responsive lazy">
            <div class="cv-overlay">
              <a class="chooseCvData btn-use-now">
                <span class="create-cv-button">
                  <router-link to="cv" class="">Dùng mẫu</router-link>
                </span>
              </a>
              <a @click="showDialog" href="javascript:void(0)" class="btn-preview preview-cv-template-button">
                <span class="preview-button">
                  <i class="fa-solid fa-eye"></i> Xem trước
                </span>
              </a>
            </div>
            <div class="clearfix"></div>
          </div>
          <div class="template-cv-item_info">
            <div class="tag-list">
              Chuyên nghiệp
              Đơn giản
              <a href="javascript:void(0)" class="template-cv-item-tag">+8</a>
            </div>
            <div class="template-cv-title">
              <h2>Mẫu 2</h2>
            </div>
          </div>
        </div>
        </div>

        <div class="col-md-3 col-sm-4 list-cv-style_item">
      <div class="template-cv-item box-shadow">
          <div class="cv-img">
            <div class="cv-img-tag">
              <div class="cv-img-tag_item tag-ver2">
                <i class="fa-solid fa-bolt-lightning"></i> Powered by CV Builder 2.0
              </div>
            </div>
            <img src="https://www.topcv.vn/images/cv/screenshots/thumbs/cv-template-thumbnails-v1.2/basic_5_v2.png?v=1.0.6" alt="Mẫu CV tiếng Việt" title="Mẫu CV tiếng Việt" width="450" height="500" class="img-responsive lazy">
            <div class="cv-overlay">
              <a class="chooseCvData btn-use-now">
                <span class="create-cv-button">
                  <router-link to="cv" class="">Dùng mẫu</router-link>
                </span>
              </a>
              <a @click="showDialog" href="javascript:void(0)" class="btn-preview preview-cv-template-button">
                <span class="preview-button">
                  <i class="fa-solid fa-eye"></i> Xem trước
                </span>
              </a>
            </div>
            <div class="clearfix"></div>
          </div>
          <div class="template-cv-item_info">
            <div class="tag-list">
              Chuyên nghiệp
              Đơn giản
              <a href="javascript:void(0)" class="template-cv-item-tag">+8</a>
            </div>
            <div class="template-cv-title">
              <h2>Tối giản</h2>
            </div>
          </div>
        </div>
        </div>

        

        
    </div>
  </div>
</div>


        

        <!-- mẫu cv ứng tuyển -->
        <div class="box-slide">
          <div class="box-slide-header">
            <h2 class="title">Mẫu CV ứng tuyển các vị trí phổ biến</h2>
            <div class="action">
              <div class="btn-location left slick-arrow" id="btn-pre-list-category" style="display: flex;">
                <i class="fa-solid fa-chevron-left"></i>
                </div>
                <div class="btn-location left slick-arrow" id="btn-pre-list-category" style="display: flex;">
                  <i class="fa-solid fa-chevron-right"></i>
                  </div>
            </div>
          </div>
        </div>
        <div class="box-slide-item">
          <div class="slider-item">
            <div class="item-image">
              <img src="../assets/image/case.png" alt="" />
            </div>
            <div class="item-title">Nhân viên lễ tân hành chính</div>
                <router-link to="/login" class="icon">
                  <i class="fa-solid fa-user"></i>
                </router-link>
          </div>
          <div class="slider-item">
            <div class="item-image">
              <img src="../assets/image/case.png" alt="" />
            </div>
            <div class="item-title">Nhân viên lễ tân hành chính</div>
          </div>
          <div class="slider-item">
            <div class="item-image">
              <img src="../assets/image/conversation.png" alt="" />
            </div>
            <div class="item-title">Nhân viên bán hàng</div>
          </div>
          <div class="slider-item">
            <div class="item-image">
              <img src="../assets/image/marketing.webp" alt="" />
            </div>
            <div class="item-title">Chuyên viên marketing</div>
          </div>
          <div class="slider-item">
            <div class="item-image">
              <img src="../assets/image/money_ticket.webp" alt="" />
            </div>
            <div class="item-title">Giám đốc quan hệ khách hàng</div>
          </div>
          <div class="slider-item">
            <div class="item-image">
              <img src="../assets/image/case.png" alt="" />
            </div>
            <div class="item-title">Nhân viên lễ tân hành chính</div>
          </div>
        </div>
        <div class="img-desktop">
          <img src="../assets/image/banner_new.png" alt="" />
        </div>

 <!-- bài viết được đề xuất -->
        <div class="box-slide">
          <div class="box-slide-header">
            <h2 class="title">Bài viết được đề xuất</h2>
            <div class="action">
              <div class="btn-location left slick-arrow" id="btn-pre-list-category" style="display: flex;">
                <i class="fa-solid fa-chevron-left"></i>
                </div>
                <div class="btn-location left slick-arrow" id="btn-pre-list-category" style="display: flex;">
                  <i class="fa-solid fa-chevron-right"></i>
                  </div>
            </div>
          </div>
        </div>
        <div class="box-slide-item">
          <div class="article-item">
            <div class="article-image">
              <img
                src="../assets/image/cach-viet-cv-cho-sinh-vien-chua-tot-nghiep-topcv.jpg63f32239a08d3 (1).jpg"
                alt=""
              />
            </div>
            <div class="item-title">
              CV cho sinh viên chưa tốt nghiệp nên viết như nào
            </div>
          </div>
          <div class="article-item">
            <div class="article-image">
              <img
                src="../assets/image/related_post_default.webp"
                alt=""
              />
            </div>
            <div class="item-title">
              CV SV THPT
            </div>
          </div>
          <div class="article-item">
            <div class="article-image">
              <img
                src="../assets/image/cv-la-gi.png"
                alt=""
              />
            </div>
            <div class="item-title">
              CV là gì? Những lưu ý khi viết CV xin việc
            </div>
          </div>
          <div class="article-item">
            <div class="article-image">
              <img
                src="../assets/image/cv-tieng-han-thumb-fb.webp"
                alt=""
              />
            </div>
            <div class="item-title">
              Hướng dẫn viết CV xin việc bằng tiếng hàn chuẩn 2024
            </div>
          </div>
        </div>     
      </div>
    </main>
    <footer id="footer-desktop">
      <div class="footer-common-search-keywords">
      </div>
      <div class="footer-main">
        <div class="container">
          <div class="box-main">
            <div class="column">
                <img
                  src="../assets/image/logoheader.webp"
                  id="img-logo-footer"
                />
              <div class="box-contact">
                <p class="title">Liên hệ</p>
                <span>Hotline:</span
                ><a href="tel:02466805588">(024) 6680 5588 (Giờ hành chính)</a
                ><br />
                <span>Email:</span
                ><a href="mailto:hotro@topcv.vn">huykit@gmail.com</a>
              </div>
              <div class="box-download">
                <p class="title">Ứng dụng tải xuống</p>
                <div class="btn-download-app">
                  <a
                    target="_blank"
                    ><img
                      class="img-responsive"
                      src="https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/welcome/download/app_store.png"
                      alt="Tai app TopCV tai App Store"
                      title="Tải app TopCV tại App Store"
                  /></a>
                  <a
                    target="_blank"
                    ><img
                      class="img-responsive"
                      src="https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/welcome/download/chplay.png"
                      alt="Tai app TopCV tai Google Play"
                      title="Tải app TopCV tại Google Play"
                  /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-info">
          <div class="container">
          </div>
        </div>
      </div>
    </footer>
 <!-- form cmt -->
 <div class="all-form" >
  <div class="feedback-container">
  <h1 class="title">Hãy góp ý với chung tôi</h1>
  <ul class="post-list">
    <li v-for="post in posts" :key="post.id" class="post-item">
      <div class="post-content-wrapper">
        <h3 class="post-title">{{ post.title }}</h3>
        <p class="post-content">{{ post.content }}</p>
      </div>

      <div class="post-actions" v-if="post.showActions">
        <button @click="editPost(post)" class="icon-button">
          <i class="fas fa-edit"></i>
        </button>
        <button @click="deletePost(post.id)" class="icon-button delete-button">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
      <div class="post-actions" v-else>
        <button @click="toggleActions(post.id)" class="icon-button">
          <i class="fas fa-ellipsis-h"></i>
        </button>
      </div>
    </li>
  </ul>
  <form @submit.prevent="addPost" class="form">
    <input v-model="newPost.title" placeholder="User" class="input" />
    <textarea v-model="newPost.content" placeholder="Nội dung" class="input"></textarea>
    <button type="submit" class="button">đăng bài viết</button>
  </form>

  <div v-if="editingPost" class="edit-modal">
    <h2>Chỉnh sửa bài viết</h2>
    <form @submit.prevent="saveEdit">
    
      <textarea v-model="editingPost.content" placeholder="Nội dung" class="input"></textarea>
      <button type="submit" class="button">Lưu thay đổi</button>
      <button type="button" @click="cancelEdit" class="button">Hủy</button>
    </form>
  </div>
</div>
</div>
    <!-- /form đăng kí -->
    <div class="modal" v-if="showRegisterModal" @click="closeModalOnClickOutside">
    <div class="modal_main">
      <form action="" method="POST" class="form" id="register-form" @submit.prevent="register">
        <div>
    
    <form  >
      <input v-model="Email" placeholder="Email" />
      <input v-model="password" placeholder="password" />
      <button type="submit">Add Post</button>
    </form>
    
  </div>
      </form>
    </div>
  </div>


  <!-- form đăng nhập -->
  <div class="modal_login" v-if="showLoginModal" @click="closeModalOnClickOutside">
    <div class="modal_main_login">
      <form @submit.prevent="login" class="form" id="login-form">
        <div class="modal_close_login" @click="showLoginModal = false"><i class="fa-solid fa-x" ></i></div>
        <h3 class="heading">Đăng Nhập</h3>
        <div class="spacer"></div>
        <div class="form-group">
          <label for="username" class="form-label">Tên Đăng Nhập</label>
          <input v-model="loginUsername" @focus="clearError('loginUsername')" id="username" type="text" placeholder="VD: abc@gmail.com" class="form-control">
          <span class="form-message" v-if="loginUsernameError">{{ loginUsernameError }}</span>
        </div>
        <div class="form-group">
          <label for="password_login" class="form-label">Mật khẩu</label>
          <input v-model="loginPassword" @focus="clearError('loginPassword')" id="password_login" type="password" placeholder="Nhập mật khẩu" class="form-control">
          <span class="form-message" v-if="loginPasswordError">{{ loginPasswordError }}</span>
        </div>
        <button type="submit" class="form-submit">Đăng Nhập</button>
      </form>
    </div>
  </div>
 
 
</template>
<script setup>
import { ref, onMounted } from 'vue';
import DetailCV from '../components/DetailCV.vue';
// import { Email, password } from 'vue';
import db  from '@/firebase'; 
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';

const posts = ref([]);
const newPost = ref({
  title: '',
  content: ''
});
const editingPost = ref(null);

onMounted(async () => {
  await getPosts();
});

const getPosts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'posts'));
    posts.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data(), showActions: false })); // Set showActions to false initially
  } catch (error) {
    console.error('Error getting documents: ', error);
  }
};

const toggleActions = (postId) => {
  posts.value = posts.value.map(post => 
    post.id === postId ? { ...post, showActions: !post.showActions } : { ...post, showActions: false } // Toggle showActions for the clicked post, and set to false for others
  );
};

const addPost = async () => {
  try {
    await addDoc(collection(db, 'posts'), newPost.value);
    newPost.value = { title: '', content: '' };
    await getPosts();
  } catch (error) {
    console.error('Error adding document: ', error);
  }
};

const editPost = (post) => {
  editingPost.value = { ...post }; // Clone the post object to editingPost
};

const saveEdit = async () => {
  if (editingPost.value) {
    try {
      await updateDoc(doc(db, 'posts', editingPost.value.id), {
        title: editingPost.value.title,
        content: editingPost.value.content
      });
      editingPost.value = null; // Clear editingPost after saving
      await getPosts();
    } catch (error) {
      console.error('Error updating document: ', error);
    }
  }
};

const cancelEdit = () => {
  editingPost.value = null; // Clear editingPost if edit is cancelled
};

const deletePost = async (id) => {
  try {
    await deleteDoc(doc(db, 'posts', id));
    await getPosts();
  } catch (error) {
    console.error('Error removing document: ', error);
  }
};

    // const isShow = ref(false);

    // const showDialog = () => {
    //   isShow.value = true;
    // }

    // const close = () => {
    //   isShow.value = false;
    // };

//register
const showModal = ref(false);
const showLoginModal = ref(false);
const showRegisterModal = ref(false);
const fullname = ref('');
const email = ref('');
const password = ref('');
const passwordConfirmation = ref('');
const loginUsername = ref('');
const loginPassword = ref('');
const isLoggedIn = ref(false);
const fullnameError = ref('');
const emailError = ref('');
const passwordError = ref('');
const passwordConfirmationError = ref('');
const loginUsernameError = ref('');
const loginPasswordError = ref('');

const closeModalOnClickOutside = (event) => {
  if (!event.target.closest('.form') && !event.target.closest('.register-info')) {
    showModal.value = false;
    showLoginModal.value = false;
    showRegisterModal.value = false;
  }
};

const login = () => {
  validateLoginForm();

  // Lấy thông tin đăng nhập từ localStorage
  const storedUsername = localStorage.getItem('username');
  const storedPassword = localStorage.getItem('password');

  // Lấy thông tin đăng nhập từ form
  const username = loginUsername.value;
  const password = loginPassword.value;

  // Kiểm tra thông tin đăng nhập
  if (!username.trim() || !password.trim()) {
    alert('Vui lòng nhập đầy đủ tài khoản và mật khẩu');
    return;
  }
  if (username === storedUsername && password === storedPassword) {
    
    showLoginModal.value = false;
    isLoggedIn.value = true;
  } 
};

const validateRegisterForm = () => {
  fullnameError.value = '';
  emailError.value = '';
  passwordError.value = '';
  passwordConfirmationError.value = '';

  if (!fullname.value.trim()) {
    fullnameError.value = 'Vui lòng nhập tên đầy đủ';
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.trim()) {
    emailError.value = 'Vui lòng nhập email';
  } else if (!emailPattern.test(email.value)) {
    emailError.value = 'Email không hợp lệ';
  }
  if (!password.value.trim()) {
    passwordError.value = 'Vui lòng nhập mật khẩu';
  } else if (password.value.length < 6) {
    passwordError.value = 'Mật khẩu phải chứa ít nhất 6 kí tự';
  }
  if (passwordConfirmation.value !== password.value) {
    passwordConfirmationError.value = 'Mật khẩu nhập lại không khớp';
  }
};

const register = () => {
  validateRegisterForm();
  if (!fullnameError.value && !emailError.value && !passwordError.value && !passwordConfirmationError.value) {
    // Lưu thông tin đăng nhập vào localStorage
    localStorage.setItem('username', email.value);
    localStorage.setItem('password', password.value);
    // Cập nhật thông tin đăng nhập cho form đăng nhập
    loginUsername.value = email.value;
    loginPassword.value = password.value;

    fullname.value = '';
    email.value = '';
    password.value = '';
    passwordConfirmation.value = '';
    showModal.value = false;
    isLoggedIn.value = true;
    showRegisterModal.value = false; 
  }
};

const validateLoginForm = () => {
  loginUsernameError.value = '';
  loginPasswordError.value = '';
  if (!loginUsername.value.trim()) {
    loginUsernameError.value = 'Vui lòng nhập tên đăng nhập';
  }
  if (!loginPassword.value.trim()) {
    loginPasswordError.value = 'Vui lòng nhập mật khẩu';
  }
  if (!loginPassword.value.trim() && !loginUsername.value.trim()) {
    alert("Vui lòng nhập đầy đủ tài khoản và mật khẩu")
  }
};



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url(/src/assets/css/style.css);
@import url(/src/assets/css/cmt.css);
</style>