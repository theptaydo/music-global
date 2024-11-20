let songs = [];
let currentSongIndex = 0;
let startTime = null;
let endTime = null;

const audioPlayer = document.getElementById("audioPlayer");

// Hàm xử lý khi người dùng tải file nhạc lên
function handleFileUpload(event) {
    const files = event.target.files;
    songs = [];

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const url = URL.createObjectURL(file);
        songs.push(url);
    }

    if (songs.length > 0) {
        alert("Files uploaded successfully! Schedule the start and end time to play.");
    }
}

// Hàm đặt lịch phát nhạc với giờ, phút và giây
function scheduleMusic() {
    startTime = document.getElementById("startTime").value;
    endTime = document.getElementById("endTime").value;

    if (startTime && endTime && songs.length > 0) {
        alert(`Nhạc sẽ phát từ ${startTime} đến ${endTime}`);
        checkScheduledTime();
    } else if (songs.length === 0) {
        alert("Please upload music files first.");
    } else {
        alert("Vui lòng chọn thời gian bắt đầu và kết thúc.");
    }
}

// Kiểm tra thời gian hiện tại với cả giờ, phút và giây
function checkScheduledTime() {
    setInterval(() => {
        const now = new Date();
        const currentTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;

        if (currentTime === startTime) {
            playMusic();
        } else if (currentTime === endTime) {
            stopMusic();
        }
    }, 1000); // Kiểm tra mỗi giây
}

// Hàm phát nhạc
function playMusic() {
    if (songs.length > 0) {
        audioPlayer.src = songs[currentSongIndex];
        audioPlayer.play().catch(error => {
            console.error("Error playing audio:", error);
        });
    } else {
        alert("No music files available. Please upload some.");
    }
}

// Chuyển bài tiếp theo
function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playMusic();
}

// Quay lại bài trước
function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    playMusic();
}

// Dừng nhạc
function stopMusic() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    URL.revokeObjectURL(songs[currentSongIndex]);
}
