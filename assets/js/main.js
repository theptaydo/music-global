// Danh sách các bài hát (đường dẫn đến các src nhạc trong thư mục "music")
const songs = [
  { title: "Song 1", src: "../audio/(FREE) Lo-fi Type Beat - I Need a Girl.mp3" },
  { title: "Song 1", src: "../audio/_An Coong Piano Cover_ Đã lỡ yêu em nhiều - JustaTee - Piano Tutorial.mp3" },
  { title: "Song 1", src: "../audio/Alec Benjamin - Let Me Down Slowly _ Piano Cover by Pianella Piano.mp3" },
  { title: "Song 1", src: "../audio/Always With Me - Spirited Away (Piano).mp3" },
  { title: "Song 1", src: "../audio/Beat Ghé Qua - Tofu Dick PC.mp3" },
  { title: "Song 1", src: "../audio/BINZ   HIT ME UP ft  NOMOVODKA Cover + Sheet Piano - Piano Tutorial.mp3" },
  { title: "Song 1", src: "../audio/buồn thì cứ khóc đi.mp3" },
  { title: "Song 1", src: "../audio/Bèo Dạt Mây Trôi - Anh Khang x Quang Thắng _ Piano Cover.mp3" },
  { title: "Song 1", src: "../audio/Chuyện Đôi Ta - Emcee L (Da LAB) ft Muộii _ Yuriko Piano Cover.mp3" },
  { title: "Song 1", src: "../audio/CHẠY NGAY ĐI _ RUN NOW _ SƠN TÙNG M-TP __ PIANO COVER #ANCOONG.mp3" },
  { title: "Song 1", src: "../audio/dhruv - double take _ Piano Cover with Strings (with Lyrics & PIANO SHEET).mp3" },
  { title: "Song 1", src: "../audio/Ed Sheeran - Shape of You (Piano Cover).mp3" },
  { title: "Song 1", src: "../audio/Ex's Hate Me part 2 - B Ray & AMEE - Piano Cover + Sheet Piano - Piano Tutorial.mp3" },
  { title: "Song 1", src: "../audio/HARU HARU(하루하루) Piano - BIGBANG _ Sheet Free.mp3" },
  { title: "Song 1", src: "../audio/HỒNG NHAN - JACK __ PIANO COVER __ BICH X LE.mp3" },
  { title: "Song 1", src: "../audio/Jeremy Zucker(제레미 주커) - comethru _ 4hands piano.mp3" },
  { title: "Song 1", src: "../audio/La La La__ Naughty Boy ft. Sam Smith (Piano Cover).mp3" },
  { title: "Song 1", src: "../audio/Lindsey Stirling - Senbonzakura (Kurousa Cover).mp3" },
  { title: "Song 1", src: "../audio/LẠC TRÔI - Sơn Tùng MTP _ Piano Cover Tutorial _ Sheet PDF _ Lê Trangg _.mp3" },
  { title: "Song 1", src: "../audio/Melanie Martinez - Play Date _ Piano Tutorial & Cover _ Piano Notes.mp3" },
  { title: "Song 1", src: "../audio/NƠI NÀY CÓ ANH - SƠN TÙNG M-TP __ PIANO COVER __ AN COONG PIANO.mp3" },
  { title: "Song 1", src: "../audio/Sorry, I Like You.mp3" },
  { title: "Song 1", src: "../audio/Sparkle - Your Name. (Kimi no Na wa.) OST [Piano] _ RADWIMPS.mp3" },
  { title: "Song 1", src: "../audio/Spirited Away (2001) - The Name of Life (Instrumental piano) Inochi No Namae いのちの名前.mp3" },
  { title: "Song 1", src: "../audio/SƠN TÙNG M TP HÃY TRAO CHO ANH ft Snoop Dogg Cover + Sheet Piano Piano Tutorial.mp3" },
  { title: "Song 1", src: "../audio/SƠN TÙNG M-TP _ CHÚNG TA CỦA HIỆN TẠI _ PIANO COVER  _ AN COONG.mp3" },
  { title: "Song 1", src: "../audio/Tại Vì Sao_ (Ballad Version) - RPT MCK (Piano).mp3" },
  { title: "Song 1", src: "../audio/Thiên Lý Ơi - Jack _ Piano Cover.mp3" },
  { title: "Song 1", src: "../audio/TÌNH ĐẦU QUÁ CHÉN _Anh Trai Say Hi_ _ Piano For Beginner.mp3" },
  { title: "Song 1", src: "../audio/Túy Âm - Xesi x Masew x Nhatnguyen _ Sheet Free.mp3" },
  { title: "Song 1", src: "../audio/vài câu nói có khiến người thay đổi (Grey D x tlinh) - Piano cover.mp3" },
  { title: "Song 1", src: "../audio/Đừng Làm Trái Tim Anh Đau - Sơn Tùng Mtp _ Piano Cover.mp3" },
];

let currentSongIndex = 0;
const audioPlayer = document.getElementById("audioPlayer");
const currentSongDisplay = document.getElementById("currentSong");

// Khởi tạo danh sách bài hát
function loadSongList() {
  const songList = document.getElementById("song-list");
  songs.forEach((song, index) => {
    const button = document.createElement("button");
    button.textContent = song.title;
    button.onclick = () => playSong(index);
    songList.appendChild(button);
  });
}

// Phát bài hát theo chỉ số trong danh sách
function playSong(index) {
  currentSongIndex = index;
  audioPlayer.src = songs[currentSongIndex].src;
  audioPlayer.play();
  document.getElementById("playPauseButton").textContent = "⏸️";
  updateSongDisplay();
}

// Cập nhật thông tin bài hát đang phát
function updateSongDisplay() {
  currentSongDisplay.textContent = `Now playing: ${songs[currentSongIndex].title}`;
}

// Chuyển sang bài hát tiếp theo
function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  playSong(currentSongIndex);
}

// Quay lại bài hát trước
function previousSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  playSong(currentSongIndex);
}

// Phát hoặc dừng nhạc
function togglePlayPause() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    document.getElementById("playPauseButton").textContent = "⏸️";
  } else {
    audioPlayer.pause();
    document.getElementById("playPauseButton").textContent = "▶️";
  }
}

// Tải danh sách bài hát khi trang được mở
loadSongList();

// Sự kiện khi bài hát kết thúc để tự động chuyển bài
audioPlayer.onended = nextSong;
