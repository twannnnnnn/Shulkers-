const films = [
    {
      title: "Short Christmas Movie",
      desc: "A short christmas movie made by the Shulkers. Elf on the shelf finds out the fire was still on so he decides to help Santa so that he can deliver the presents!",
      file: "videos/short-christmas-movie.mp4",
      image: "images/christmas-movie.jpg"
    }
  ];
  
  const grid = document.getElementById("filmGrid");
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");
  const modalVideo = document.getElementById("modalVideo");
  const modalImage = document.getElementById("modalImage");
  const playButton = document.getElementById("playButton");
  const close = document.getElementById("close");
  const backToInfo = document.getElementById("backToInfo");
  
  let currentFilm = null;
  
  films.forEach(film => {
    const card = document.createElement("div");
    card.className = "card";
  
    card.innerHTML = `
      <img src="${film.image}" alt="${film.title}">
      <div class="play-overlay">
        <div class="play-button"></div>
      </div>
      <p>${film.title}</p>
    `;
  
    card.onclick = () => {
      console.log("FILM CLICKED", film.title);
      currentFilm = film;
      modalTitle.textContent = film.title;
      modalDesc.textContent = film.desc;
      modalImage.src = film.image;
  
      modalVideo.style.display = "none";
      modalVideo.pause();
      modalVideo.innerHTML = "";
  
      backToInfo.style.display = "none";
      modal.style.display = "block";
    };
  
    grid.appendChild(card);
  });
  
  // Play knop: fullscreen video
  playButton.onclick = () => {
    if (!currentFilm) return;
  
    modalVideo.innerHTML = `<source src="${currentFilm.file}" type="video/mp4">`;
    modalVideo.style.display = "block";
    modalVideo.load();
    modalVideo.play();
  
    backToInfo.style.display = "block";
  
    if (modalVideo.requestFullscreen) modalVideo.requestFullscreen();
  };
  
  // Back to info knop
  backToInfo.onclick = () => {
    modalVideo.pause();
    modalVideo.style.display = "none";
    modalVideo.innerHTML = "";
    backToInfo.style.display = "none";
  };
  
  // Close modal
  close.onclick = () => {
    modal.style.display = "none";
    modalVideo.pause();
    modalVideo.style.display = "none";
    modalVideo.innerHTML = "";
    backToInfo.style.display = "none";
  };
  
  // Click buiten modal sluit ook
  window.onclick = e => {
    if (e.target === modal) {
      modal.style.display = "none";
      modalVideo.pause();
      modalVideo.style.display = "none";
      modalVideo.innerHTML = "";
      backToInfo.style.display = "none";
    }
  };
  