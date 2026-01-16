// Database of Content
const topics = {
    intro: `<h1>Welcome to CyberGuard</h1>
            <p>Hacking isn't just about computers; it's about people.</p>
            <div class="card"><h2>Start Your Journey</h2><p>Select a topic from the sidebar to begin learning.</p></div>`,
    
    passwords: `<h1>1. Strong Passwords</h1>
                <p>The first line of defense is a password that cannot be guessed.</p>
                <div class="card">
                    <h2>The Rules:</h2>
                    <ul>
                        <li>At least 12 characters long.</li>
                        <li>Mix of numbers, symbols, and letters.</li>
                        <li><strong>Never</strong> use the same password twice.</li>
                    </ul>
                </div>`,
    
    phishing: `<h1>2. Spotting Phishing</h1>
               <p>Hackers try to trick you into clicking fake links.</p>
               <div class="card">
                   <h2>Red Flags:</h2>
                   <ul>
                       <li>Urgent language ("Act Now!").</li>
                       <li>Suspicious sender email (support@amaz0n.com).</li>
                       <li>Generic greetings ("Dear Customer").</li>
                   </ul>
               </div>`
};

// Handle Navigation
function loadTopic(topicKey) {
    const contentDiv = document.getElementById('content');
    
    // Check if topic exists
    if (topics[topicKey]) {
        contentDiv.innerHTML = topics[topicKey];
    } else {
        contentDiv.innerHTML = "<h1>Topic Coming Soon</h1>";
    }

    // Update active link styling (Optional polish)
    document.querySelectorAll('#sidebar a').forEach(link => link.classList.remove('active'));
    event.target.classList.add('active');
    
    // Close sidebar on mobile after clicking
    if (window.innerWidth <= 768) {
        document.getElementById('sidebar').classList.remove('active');
    }
}

// Mobile Menu Toggle
document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('active');
});