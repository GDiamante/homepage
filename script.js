function initializeNote() {
    const noteText = localStorage.getItem('note') || "";
    document.getElementById('note-text').value = noteText;

    var notePad = document.getElementById('note-text');
    if (notePad.addEventListener) {
        notePad.addEventListener('input', function() {
            localStorage.setItem("note", notePad.value);
        }, false);
    }
}

initializeNote();