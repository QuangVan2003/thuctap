const slides = document.querySelectorAll('.home-banner-sec');
const dots = document.querySelectorAll('.dot');

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    const slideIndex = dot.getAttribute('data-slide-index');
    
    // Xóa lớp active khỏi tất cả các dots
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Thêm lớp active cho dot hiện tại
    dot.classList.add('active');
    
    // Chuyển slide tới slideIndex tương ứng
    slides.forEach(slide => {
      slide.style.transform = `translateX(-${slideIndex * 100}%)`;
    });
  });

});
let currentSlide = 0;
const intervalTime = 5000; // Thời gian chuyển slide (5 giây)

function nextSlide() {
  // Tính toán slideIndex của slide kế tiếp
  const nextSlideIndex = (currentSlide + 1) % slides.length;
  
  // Chuyển slide tới slide kế tiếp
  slides.forEach(slide => {
    slide.style.transform = `translateX(-${nextSlideIndex * 100}%)`;
  });
  
  // Xóa lớp active khỏi dot hiện tại
  dots[currentSlide].classList.remove('active');
  
  // Thêm lớp active cho dot kế tiếp
  if(dots[nextSlideIndex].classList.add('active')){
    
  }
  dots[nextSlideIndex].classList.add('home-banner-title');
 
  // Cập nhật currentSlide
  currentSlide = nextSlideIndex;
}

// Tự động chuyển slide sau khoảng thời gian intervalTime
const slideInterval = setInterval(nextSlide, intervalTime);

// Dừng chuyển slide tự động khi người dùng tương tác
dots.addEventListener('click', () => {
  clearInterval(slideInterval);
});

// Tiếp tục chuyển slide tự động khi không có tương tác
slider.addEventListener('mouseout', () => {
  slideInterval = setInterval(nextSlide, intervalTime);
});
// Thêm class "show-anim" vào các phần tử chữ trong slide khi slide chuyển đổi








