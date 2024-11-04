// script.js

document.addEventListener('DOMContentLoaded', () => {
    const newsFeed = document.getElementById('news-feed');
    const announcements = [
      { title: 'Spring Semester Registration', date: '2024-04-15', description: 'Register for Spring 2024 classes.' },
      { title: 'Annual Science Fair', date: '2024-05-20', description: 'Join us for the Annual Science Fair on campus.' },
      { title: 'Graduation Ceremony', date: '2024-06-12', description: 'Celebrate our graduates on June 12.' }
    ];
  
    announcements.forEach(item => {
      const announcement = document.createElement('div');
      announcement.className = 'announcement';
      announcement.innerHTML = `<h3>${item.title}</h3><p>Date: ${item.date}</p><p>${item.description}</p>`;
      newsFeed.appendChild(announcement);
    });
  });
  