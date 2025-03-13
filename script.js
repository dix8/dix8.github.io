document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    
    // 检查是否应该使用夜间模式
    function shouldUseDarkMode() {
        const hour = new Date().getHours();
        return hour >= 18 || hour < 6;
    }

    // 设置主题
    function setTheme(isDark, updateToggle = true) {
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        if (updateToggle) {
            themeToggle.checked = isDark;
        }
    }

    // 初始化主题
    function initializeTheme() {
        // 检查本地存储中是否有手动设置的主题
        const storedTheme = localStorage.getItem('theme');
        const isManuallySet = localStorage.getItem('isManuallySet');

        if (isManuallySet === 'true' && storedTheme) {
            // 如果用户手动设置过主题，使用存储的设置
            setTheme(storedTheme === 'dark');
        } else {
            // 否则根据时间自动设置
            setTheme(shouldUseDarkMode());
        }
    }

    // 监听主题切换
    themeToggle.addEventListener('change', (e) => {
        setTheme(e.target.checked);
        // 标记为手动设置
        localStorage.setItem('isManuallySet', 'true');
    });

    // 初始化主题
    initializeTheme();

    // 每分钟检查一次时间（如果没有手动设置主题）
    setInterval(() => {
        if (localStorage.getItem('isManuallySet') !== 'true') {
            setTheme(shouldUseDarkMode());
        }
    }, 60000); // 每分钟检查一次

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
