// File: style.js

// Menambahkan gaya pada tombol
const captureButton = document.getElementById('capture');
const sendButton = document.getElementById('send');

captureButton.addEventListener('mouseover', () => {
  captureButton.style.backgroundColor = 'green';
  captureButton.style.color = 'white';
});

captureButton.addEventListener('mouseout', () => {
  captureButton.style.backgroundColor = 'white';
  captureButton.style.color = 'black';
});

sendButton.addEventListener('mouseover', () => {
  sendButton.style.backgroundColor = 'blue';
  sendButton.style.color = 'white';
});

sendButton.addEventListener('mouseout', () => {
  sendButton.style.backgroundColor = 'white';
  sendButton.style.color = 'black';
});

// Menambahkan animasi pada video
const video = document.getElementById('video');

video.addEventListener('play', () => {
  video.style.transform = 'scale(1.1)';
});

video.addEventListener('pause', () => {
  video.style.transform = 'scale(1)';
});

// Menambahkan efek pada halaman web
const body = document.body;

body.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  body.style.backgroundPosition = `${x}px ${y}px`;
});





