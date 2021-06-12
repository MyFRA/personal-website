// Clicked nav
const navLinks = document.querySelector('ul.nav-links');
navLinks.addEventListener('click', (e) => {
    if(e.target.tagName == 'A') {
        navLinks.querySelectorAll('li').forEach(e => e.classList.contains('active') ? e.classList.remove('active') : '' );
        e.target.parentElement.classList.add('active');

        const sidebar = document.querySelector('ul.nav-links');
        sidebar.classList.toggle('sidebar-active');
        sidebar.classList.toggle('sidebar-not-active');
    }
});

// Achievemnt clicked
const listAchievments = document.querySelector('ul.list-achievments');
listAchievments.addEventListener('click', (e) => {
    if( e.target.classList.contains('achievment') ) {
        const achievmentDetail = Array.from(e.target.children).find(e => e.classList.contains('achievment-detail'));
        const listAchievmentsDetail = listAchievments.querySelectorAll('li.achievment .achievment-detail');
        listAchievmentsDetail.forEach((e) => {
            if( e != achievmentDetail && !e.classList.contains('d-none') ) {
                e.classList.add('d-none');
            } 
        });
        (achievmentDetail != null) ? achievmentDetail.classList.toggle('d-none') : '';
    } else if(e.target.tagName == 'SPAN') {
        const achievmentDetail = Array.from(e.target.parentElement.children).find(e => e.classList.contains('achievment-detail'));
        const listAchievmentsDetail = listAchievments.querySelectorAll('li.achievment .achievment-detail');
        listAchievmentsDetail.forEach((e) => {
            if( e != achievmentDetail && !e.classList.contains('d-none') ) {
                e.classList.add('d-none');
            } 
        });
        (achievmentDetail != null) ? achievmentDetail.classList.toggle('d-none') : '';
    }
});

// Hamburger
const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', () => {
    const sidebar = document.querySelector('ul.nav-links');
    sidebar.classList.toggle('sidebar-active');
    sidebar.classList.toggle('sidebar-not-active');
});