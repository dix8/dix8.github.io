document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    
    // 检查本地存储中的主题设置
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') {
            themeToggle.checked = true;
        }
    }

    // 切换主题
    themeToggle.addEventListener('change', (e) => {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });

    // 微信二维码弹窗功能
    const modal = document.getElementById('wechat-modal');
    const wechatLink = document.getElementById('wechat-link');
    const closeBtn = document.getElementsByClassName('close')[0];

    // 点击微信图标显示弹窗
    wechatLink.onclick = function(e) {
        e.preventDefault();
        modal.style.display = "block";
    }

    // 点击关闭按钮关闭弹窗
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    // 点击弹窗外部关闭弹窗
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}); 