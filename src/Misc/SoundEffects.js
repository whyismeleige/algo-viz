const audioContext = new (window.AudioContext || window.webkitAudioContext)();

const gainNode = audioContext.createGain();
gainNode.gain.value = 0.1;
gainNode.connect(audioContext.destination);

const maxValue = 600;

export function createBeep(value) {
    const oscillator = audioContext.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.value = 200 + (value/maxValue) * 800;
    oscillator.connect(gainNode);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.005);
}