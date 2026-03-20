// 导航菜单交互
 document.addEventListener('DOMContentLoaded', function() {
     // 移动端导航切换
     const navToggle = document.getElementById('navToggle');
     const navMobile = document.getElementById('navMobile');
     
     if (navToggle && navMobile) {
         navToggle.addEventListener('click', function() {
             navMobile.classList.toggle('active');
         });
         
         // 点击移动菜单外部关闭菜单
         document.addEventListener('click', function(event) {
             if (!navToggle.contains(event.target) && !navMobile.contains(event.target)) {
                 navMobile.classList.remove('active');
             }
         });
     }
     
     // 平滑滚动
     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
         anchor.addEventListener('click', function(e) {
             e.preventDefault();
             
             const targetId = this.getAttribute('href');
             if (targetId === '#') return;
             
             const targetElement = document.querySelector(targetId);
             if (targetElement) {
                 window.scrollTo({
                     top: targetElement.offsetTop - 80,
                     behavior: 'smooth'
                 });
                 
                 // 关闭移动菜单
                 if (navMobile) {
                     navMobile.classList.remove('active');
                 }
             }
         });
     });
     
     // 导航栏滚动效果
     const header = document.querySelector('.header');
     let lastScrollTop = 0;
     
     window.addEventListener('scroll', function() {
         const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
         
         if (scrollTop > lastScrollTop && scrollTop > 100) {
             // 向下滚动
             header.style.transform = 'translateY(-100%)';
         } else {
             // 向上滚动
             header.style.transform = 'translateY(0)';
         }
         
         lastScrollTop = scrollTop;
     });
     
     // 服务卡片悬停效果
     const serviceCards = document.querySelectorAll('.service-card');
     serviceCards.forEach(card => {
         card.addEventListener('mouseenter', function() {
             this.style.transform = 'translateY(-10px)';
         });
         
         card.addEventListener('mouseleave', function() {
             this.style.transform = 'translateY(0)';
         });
     });
     
     // 产品卡片悬停效果
     const productCards = document.querySelectorAll('.product-card');
     productCards.forEach(card => {
         card.addEventListener('mouseenter', function() {
             this.style.transform = 'translateY(-10px)';
         });
         
         card.addEventListener('mouseleave', function() {
             this.style.transform = 'translateY(0)';
         });
     });
     
     // 联系卡片悬停效果
     const contactItems = document.querySelectorAll('.contact-item');
     contactItems.forEach(item => {
         item.addEventListener('mouseenter', function() {
             this.style.transform = 'translateY(-10px)';
         });
         
         item.addEventListener('mouseleave', function() {
             this.style.transform = 'translateY(0)';
         });
     });
     
     // 客户反馈卡片悬停效果
     const testimonialCards = document.querySelectorAll('.testimonial-card');
     testimonialCards.forEach(card => {
         card.addEventListener('mouseenter', function() {
             this.style.transform = 'translateY(-10px)';
         });
         
         card.addEventListener('mouseleave', function() {
             this.style.transform = 'translateY(0)';
         });
     });
     
     // 响应式菜单处理
     function handleResize() {
         if (window.innerWidth > 768) {
             if (navMobile) {
                 navMobile.classList.remove('active');
             }
         }
     }
     
     window.addEventListener('resize', handleResize);
     
     // 初始化页面
     handleResize();
     
     // 添加加载动画
     window.addEventListener('load', function() {
         document.body.style.opacity = '0';
         document.body.style.transition = 'opacity 0.5s ease';
         
         setTimeout(() => {
             document.body.style.opacity = '1';
         }, 100);
     });
     
     // 手风琴效果
     const accordionItems = document.querySelectorAll('.accordion-item');
     
     accordionItems.forEach(item => {
         const header = item.querySelector('.accordion-header');
         
         header.addEventListener('click', function() {
             // 关闭其他所有手风琴项
             accordionItems.forEach(otherItem => {
                 if (otherItem !== item) {
                     otherItem.classList.remove('active');
                 }
             });
             
             // 切换当前手风琴项的状态
             item.classList.toggle('active');
         });
     });
     
     // 联系表单提交
     const contactForm = document.getElementById('contactForm');
     if (contactForm) {
         contactForm.addEventListener('submit', function(e) {
             e.preventDefault();
             
             // 模拟表单提交
             const submitButton = this.querySelector('button[type="submit"]');
             const originalText = submitButton.textContent;
             
             submitButton.textContent = '发送中...';
             submitButton.disabled = true;
             
             setTimeout(() => {
                 alert('消息已成功发送！我们会尽快与您联系。');
                 contactForm.reset();
                 submitButton.textContent = originalText;
                 submitButton.disabled = false;
             }, 1500);
         });
     }
 });