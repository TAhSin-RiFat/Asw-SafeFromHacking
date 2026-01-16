// 15টি টিউটোরিয়াল ডেটাবেস
const tutorials = [
    { title: "Introduction to Ethical Hacking", content: "Ethical hacking holo permission niye system check kora..." },
    { title: "Phishing Attack theke Bachar Upay", content: "Kokhono suspicious link-e click korben na. URL check korun..." },
    { title: "Linux Basics for Hackers", content: "Terminal commands: ls, cd, mkdir, chmod shikhun..." },
    { title: "Nmap Network Scanning", content: "Nmap diye network-er open ports khuje ber kora jay..." },
    { title: "SQL Injection Protection", content: "User input input always sanitize kora uchit..." },
    { title: "Two-Factor Auth (2FA)", content: "Password-er pasapasi App-based OTP bebohar korun..." },
    { title: "Wi-Fi Security Basics", content: "WPA2/WPA3 password use korun, WPS off rakhun..." },
    { title: "Social Engineering Tactics", content: "Manush-er emotional weakness bebohar kore hack kora..." },
    { title: "Steganography", content: "Chobir bhetore file lukiye rakhar poddhoti..." },
    { title: "VPN vs Proxy", content: "VPN full tunnel encrypt kore, proxy shudhu browser..." },
    { title: "Android Security Tips", content: "Unknown source theke APK install korben na..." },
    { title: "Password Manager Use", content: "Bitwarden ba KeepassXC use kora shikhun..." },
    { title: "Dark Web Awareness", content: "Tor browser ebong .onion sites niye jante hobe..." },
    { title: "Firewall Configuration", content: "UFW ba IPtables diye traffic control kora..." },
    { title: "Data Breach Check", content: "HaveIBeenPwned use kore nijer email check korun..." }
];

// ১০০টি টুলের ডেটা (এখানে কিছু নমুনা দেওয়া হলো, তুমি ১০০টি অ্যাড করতে পারবে)
const tools = [
    { name: "Nmap", cat: "Scanner" }, { name: "Metasploit", cat: "Exploit" },
    { name: "Wireshark", cat: "Analysis" }, { name: "Burp Suite", cat: "Web" },
    { name: "Aircrack-ng", cat: "WiFi" }, { name: "John the Ripper", cat: "Cracker" },
    { name: "Hydra", cat: "Brute Force" }, { name: "Maltego", cat: "OSINT" },
    { name: "Sqlmap", cat: "Database" }, { name: "Sherlock", cat: "OSINT" },
    { name: "Autopsy", cat: "Forensics" }, { name: "ZAP", cat: "Web Proxy" },
    { name: "Bettercap", cat: "MITM" }, { name: "Responder", cat: "Network" },
    { name: "Ghidra", cat: "Reverse Eng" }, { name: "BeEF", cat: "Browser" }
    // এভাবেই ১০০টি নাম যোগ করা যাবে...
];

// Sidebar-এ টিউটোরিয়াল লিস্ট লোড করা
function init() {
    const list = document.getElementById('tutorial-list');
    tutorials.forEach((t, index) => {
        list.innerHTML += `<li><a href="#" onclick="loadTutorial(${index})">${t.title}</a></li>`;
    });
}

// টিউটোরিয়াল দেখানোর ফাংশন
function loadTutorial(id) {
    const main = document.getElementById('content');
    main.innerHTML = `
        <div class="card">
            <h1 style="color:var(--matrix-green)">${tutorials[id].title}</h1>
            <p>${tutorials[id].content}</p>
        </div>
    `;
}

// ১০০টি টুলের লিস্ট দেখানোর ফাংশন
function loadTools() {
    const main = document.getElementById('content');
    let toolHTML = tutorials.map(t => "").join(""); // clear old
    
    let gridHTML = tools.map(tool => `
        <div class="tool-item">
            <strong>${tool.name}</strong>
            <small>${tool.cat}</small>
        </div>
    `).join("");

    main.innerHTML = `
        <h1>🛡️ 100+ Professional Tools</h1>
        <div class="tool-grid">${gridHTML}</div>
    `;
}

window.onload = init;
