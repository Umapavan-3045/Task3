document.addEventListener('DOMContentLoaded', (event) => {
  const popup = document.getElementById('popup');
  const openPopupBtn = document.getElementById('openPopupBtn');
  const closeBtn = document.querySelector('.close');

  let pic =document.getElementById("pic");
  let inputFile=document.getElementById("input-file");
  let postinsta = document.getElementById("postinsta");
  postinsta.onclick = function(){
    alert("posted successfully in Instagram");
    popup.style.display = 'none';
  }
  let postface = document.getElementById("postface");
  postface.onclick = function(){
    alert("posted successfully in Facebook");
    popup.style.display = 'none';
  }
  let posttwit = document.getElementById("posttwit");
  posttwit.onclick = function(){
    alert("posted successfully in twitter");
    popup.style.display = 'none';
  }
  let postlink = document.getElementById("postlink");
  postlink.onclick = function(){
    alert("posted successfully in linkedIn");
    popup.style.display = 'none';
  }
  inputFile.onchange = function(){
    pic.display = "block";
    pic.src =URL.createObjectURL(inputFile.files[0]);
  }

  openPopupBtn.addEventListener('click', () => {
      popup.style.display = 'block';
  });

  closeBtn.addEventListener('click', () => {
      popup.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
      if (event.target == popup) {
          popup.style.display = 'none';
      }
  });
});

let sidebarOpen = false;
const sidebar = document.getElementById('sidebar');

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}
