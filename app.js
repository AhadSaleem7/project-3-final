// Application State
let currentLanguage = 'hi';
let conversationState = 'welcome';
let currentSymptomFlow = null;

// Translation data
const translations = {
    landing: {
        title: {
            hi: "ग्रामीण स्वास्थ्य सहायक",
            en: "Rural Healthcare Assistant",
            mr: "ग्रामीण आरोग्य सहायक"
        },
        subtitle: {
            hi: "आपका डिजिटल स्वास्थ्य साथी",
            en: "Your Digital Health Companion",
            mr: "तुमचा डिजिटल आरोग्य साथी"
        },
        startChat: {
            hi: "चैट शुरू करें",
            en: "Start Chat",
            mr: "चॅट सुरू करा"
        },
        supportedBy: {
            hi: "PMJAY और डिजिटल इंडिया पहल द्वारा समर्थित",
            en: "Supported by PMJAY & Digital India Initiative",
            mr: "PMJAY आणि डिजिटल इंडिया उपक्रमाद्वारे समर्थित"
        },
        features: [
            {
                title: {hi: "तुरंत सलाह", en: "Instant Advice", mr: "तत्काळ सल्ला"},
                desc: {hi: "लक्षणों की जांच करें", en: "Check your symptoms", mr: "लक्षणे तपासा"}
            },
            {
                title: {hi: "अपॉइंटमेंट", en: "Appointments", mr: "भेटी"},
                desc: {hi: "डॉक्टर से मिलें", en: "Meet doctors", mr: "डॉक्टरांना भेटा"}
            },
            {
                title: {hi: "आपातकाल", en: "Emergency", mr: "आपत्कालीन"},
                desc: {hi: "तुरंत मदद पाएं", en: "Get immediate help", mr: "तत्काळ मदत मिळवा"}
            },
            {
                title: {hi: "स्वास्थ्य शिक्षा", en: "Health Education", mr: "आरोग्य शिक्षण"},
                desc: {hi: "जानकारी पाएं", en: "Get information", mr: "माहिती मिळवा"}
            }
        ]
    },
    chat: {
        welcome: {
            hi: "नमस्ते! मैं आपका स्वास्थ्य सहायक हूँ। मैं आपकी कैसे मदद कर सकता हूँ?",
            en: "Hello! I'm your health assistant. How can I help you today?",
            mr: "नमस्कार! मी तुमचा आरोग्य सहायक आहे। मी तुम्हाला कशी मदत करू शकतो?"
        },
        symptoms: {
            fever: {
                question: {
                    hi: "बुखार कितने दिन से है?",
                    en: "How many days have you had fever?",
                    mr: "ताप किती दिवसांपासून आहे?"
                },
                options: {
                    hi: ["1 दिन", "2-3 दिन", "4+ दिन"],
                    en: ["1 day", "2-3 days", "4+ days"],
                    mr: ["1 दिवस", "2-3 दिवस", "4+ दिवस"]
                },
                responses: {
                    hi: [
                        "आराम करें और पानी पिएं। बुखार कम है। अगर 102°F से ज्यादा हो तो डॉक्टर से मिलें।",
                        "डॉक्टर से सलाह लें। 2-3 दिन का बुखार चिंता की बात है। पैरासिटामोल ले सकते हैं।",
                        "तुरंत अस्पताल जाएं! लंबे समय का बुखार गंभीर हो सकता है। ब्लड टेस्ट कराएं।"
                    ],
                    en: [
                        "Rest and drink plenty of water. Low fever. See doctor if above 102°F.",
                        "Consult a doctor. 2-3 days fever needs attention. You can take paracetamol.",
                        "Go to hospital immediately! Prolonged fever can be serious. Get blood test done."
                    ],
                    mr: [
                        "आराम करा आणि पाणी प्या। कमी ताप आहे. 102°F पेक्षा जास्त असल्यास डॉक्टरांना भेटा.",
                        "डॉक्टरांचा सल्ला घ्या। 2-3 दिवसांचा ताप चिंताजनक आहे. पॅरासिटामॉल घेऊ शकता.",
                        "ताबडतोब रुग्णालयात जा! दीर्घकाळचा ताप गंभीर असू शकतो. ब्लड टेस्ट करावा."
                    ]
                }
            },
            cough: {
                question: {
                    hi: "खांसी के साथ कोई और लक्षण है?",
                    en: "Any other symptoms with the cough?",
                    mr: "खोकल्यासोबत इतर लक्षणे आहेत का?"
                },
                options: {
                    hi: ["बुखार भी है", "सांस लेने में तकलीफ", "सिर्फ खांसी"],
                    en: ["Also have fever", "Breathing difficulty", "Only cough"],
                    mr: ["तापही आहे", "श्वासोच्छवासाची अडचण", "फक्त खोकला"]
                },
                responses: {
                    hi: [
                        "बुखार और खांसी - संक्रमण हो सकता है। डॉक्टर से तुरंत मिलें। गर्म पानी पिएं।",
                        "🚨 सांस की तकलीफ गंभीर है - तुरंत अस्पताल जाएं या 108 कॉल करें!",
                        "सामान्य खांसी - शहद-अदरक लें। 3 दिन में ठीक न हो तो डॉक्टर से मिलें।"
                    ],
                    en: [
                        "Fever with cough - might be infection. See doctor immediately. Drink warm water.",
                        "🚨 Breathing difficulty is serious - go to hospital immediately or call 108!",
                        "Normal cough - take honey-ginger. See doctor if not better in 3 days."
                    ],
                    mr: [
                        "ताप आणि खोकला - संक्रमण असू शकतो. डॉक्टरांना ताबडतोब भेटा. कोमट पाणी प्या.",
                        "🚨 श्वासाची अडचण गंभीर आहे - ताबडतोब रुग्णालयात जा किंवा 108 वर कॉल करा!",
                        "सामान्य खोकला - मध-आले घ्या. 3 दिवसात बरे न झाल्यास डॉक्टरांना भेटा."
                    ]
                }
            }
        }
    },
    ui: {
        botName: {
            hi: "ग्रामीण स्वास्थ्य सहायक",
            en: "Rural Healthcare Assistant",
            mr: "ग्रामीण आरोग्य सहायक"
        },
        online: {hi: "ऑनलाइन", en: "online", mr: "ऑनलाइन"},
        today: {hi: "आज", en: "Today", mr: "आज"},
        typing: {hi: "बॉट लिख रहा है...", en: "Bot is typing...", mr: "बॉट टाइप करत आहे..."},
        inputPlaceholder: {hi: "संदेश लिखें...", en: "Type a message...", mr: "संदेश टाइप करा..."},
        emergencyTitle: {hi: "🚨 आपातकालीन सहायता", en: "🚨 Emergency Help", mr: "🚨 आपत्कालीन मदत"},
        callImmediately: {hi: "तुरंत कॉल करें:", en: "Call immediately:", mr: "तत्काळ कॉल करा:"},
        ambulanceService: {hi: "एम्बुलेंस सेवा", en: "Ambulance Service", mr: "रुग्णवाहिका सेवा"},
        districtHospital: {hi: "जिला अस्पताल", en: "District Hospital", mr: "जिल्हा रुग्णालय"},
        nearbyFacilities: {hi: "📍 नजदीकी स्वास्थ्य केंद्र", en: "📍 Nearby Health Centers", mr: "📍 जवळील आरोग्य केंद्रे"},
        settingsTitle: {hi: "⚙️ सेटिंग्स", en: "⚙️ Settings", mr: "⚙️ सेटिंग्ज"},
        languageLabel: {hi: "भाषा:", en: "Language:", mr: "भाषा:"},
        quickActions: {
            symptoms: {hi: "लक्षण जांच", en: "Check Symptoms", mr: "लक्षणे तपासा"},
            appointment: {hi: "अपॉइंटमेंट", en: "Book Appointment", mr: "भेट बुक करा"},
            emergency: {hi: "आपातकाल", en: "Emergency", mr: "आपत्कालीन"},
            education: {hi: "स्वास्थ्य टिप्स", en: "Health Tips", mr: "आरोग्य टिप्स"}
        },
        facilities: [
            {
                name: {hi: "जिला अस्पताल", en: "District Hospital", mr: "जिल्हा रुग्णालय"},
                type: {hi: "सरकारी अस्पताल", en: "Government Hospital", mr: "सरकारी रुग्णालय"},
                hours: {hi: "24/7 खुला", en: "24/7 Open", mr: "24/7 उघडे"}
            },
            {
                name: {hi: "प्राथमिक स्वास्थ्य केंद्र", en: "Primary Health Center", mr: "प्राथमिक आरोग्य केंद्र"},
                type: {hi: "सरकारी केंद्र", en: "Government Center", mr: "सरकारी केंद्र"},
                hours: {hi: "8 AM - 6 PM", en: "8 AM - 6 PM", mr: "8 AM - 6 PM"}
            },
            {
                name: {hi: "आशा कार्यकर्ता", en: "ASHA Worker", mr: "आशा कार्यकर्ती"},
                type: {hi: "सामुदायिक स्वास्थ्य कार्यकर्ता", en: "Community Health Worker", mr: "सामुदायिक आरोग्य कार्यकर्ता"},
                hours: {hi: "9 AM - 5 PM", en: "9 AM - 5 PM", mr: "9 AM - 5 PM"}
            }
        ]
    }
};

// Language configuration
const languageConfig = {
    hi: { flag: "🇮🇳", code: "हिं", name: "हिंदी" },
    en: { flag: "🇬🇧", code: "EN", name: "English" },
    mr: { flag: "🇮🇳", code: "मर", name: "मराठी" }
};

// Health education content
const healthEducationContent = {
    hi: [
        { title: "टीकाकरण का महत्व", content: "बच्चों के लिए समय पर टीकाकरण जरूरी है। सरकारी केंद्रों पर मुफ्त टीके उपलब्ध हैं।" },
        { title: "मातृत्व देखभाल", content: "गर्भावस्था में नियमित जांच, पौष्टिक आहार और आराम जरूरी है।" },
        { title: "स्वच्छता का महत्व", content: "हाथ धोना, साफ पानी पीना और स्वच्छ वातावरण बीमारियों से बचाता है।" },
        { title: "पोषण की जानकारी", content: "संतुलित आहार में दाल, सब्जी, फल और अनाज शामिल करें। बच्चों को स्तनपान कराएं।" }
    ],
    en: [
        { title: "Importance of Vaccination", content: "Timely vaccination for children is essential. Free vaccines are available at government centers." },
        { title: "Maternal Care", content: "Regular checkups, nutritious diet and rest are important during pregnancy." },
        { title: "Importance of Hygiene", content: "Hand washing, drinking clean water and clean environment prevents diseases." },
        { title: "Nutrition Information", content: "Include pulses, vegetables, fruits and grains in balanced diet. Breastfeed children." }
    ],
    mr: [
        { title: "लसीकरणाचे महत्त्व", content: "मुलांसाठी वेळेवर लसीकरण आवश्यक आहे. सरकारी केंद्रांवर मोफत लसी उपलब्ध आहेत." },
        { title: "मातृत्व काळजी", content: "गर्भावस्थेत नियमित तपासणी, पौष्टिक आहार आणि विश्रांती आवश्यक आहे." },
        { title: "स्वच्छतेचे महत्त्व", content: "हात धुणे, स्वच्छ पाणी पिणे आणि स्वच्छ वातावरण आजारांपासून वाचवते." },
        { title: "पोषणाची माहिती", content: "संतुलित आहारात डाळ, भाजी, फळे आणि धान्य समाविष्ट करा. मुलांना स्तनपान करावे." }
    ]
};

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    console.log('Rural Healthcare Assistant initialized');
    setupEventListeners();
    updateAllTexts();
});

function setupEventListeners() {
    // Chat input enter key
    const chatInput = document.getElementById('chat-input');
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
            }
        });
    }
    
    // Close language menu when clicking outside
    document.addEventListener('click', function(e) {
        const langMenu = document.getElementById('language-menu');
        const langToggle = document.querySelector('.language-toggle');
        
        if (langMenu && !langMenu.contains(e.target) && 
            langToggle && !langToggle.contains(e.target)) {
            langMenu.classList.add('hidden');
        }
    });
    
    console.log('Event listeners setup complete');
}

// Language Functions
window.changeLanguage = function(lang) {
    console.log(`Changing language to: ${lang}`);
    if (lang === currentLanguage) return;
    
    currentLanguage = lang;
    updateLanguageUI();
    updateAllTexts();
    
    // Close any open modals/menus
    closeModal('settings-modal');
    const langMenu = document.getElementById('language-menu');
    if (langMenu) {
        langMenu.classList.add('hidden');
    }
    
    // Confirmation in chat if chat is open
    if (!document.getElementById('chat-interface').classList.contains('hidden')) {
        setTimeout(() => {
            const confirmMsg = {
                hi: `भाषा ${languageConfig[lang].name} में बदल गई है।`,
                en: `Language changed to ${languageConfig[lang].name}.`,
                mr: `भाषा ${languageConfig[lang].name} मध्ये बदलली आहे.`
            };
            addBotMessage(confirmMsg[currentLanguage]);
        }, 300);
    }
    
    console.log(`Language changed to: ${lang}`);
};

window.changeLanguageFromChat = function(lang) {
    changeLanguage(lang);
};

function updateLanguageUI() {
    // Update language selector buttons
    document.querySelectorAll('.language-option').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === currentLanguage) {
            btn.classList.add('active');
        }
    });
    
    // Update setting buttons
    document.querySelectorAll('.language-setting-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.onclick && btn.onclick.toString().includes(`'${currentLanguage}'`)) {
            btn.classList.add('active');
        }
    });
    
    // Update header language toggle
    const currentFlag = document.getElementById('current-flag');
    const currentLangCode = document.getElementById('current-lang-code');
    if (currentFlag && currentLangCode) {
        currentFlag.textContent = languageConfig[currentLanguage].flag;
        currentLangCode.textContent = languageConfig[currentLanguage].code;
    }
}

function updateAllTexts() {
    console.log(`Updating texts for language: ${currentLanguage}`);
    
    // Landing page
    updateElementById('main-title', translations.landing.title[currentLanguage]);
    updateElementById('main-subtitle', translations.landing.subtitle[currentLanguage]);
    updateElementById('start-chat-btn', translations.landing.startChat[currentLanguage]);
    updateElementById('supported-text', translations.landing.supportedBy[currentLanguage]);
    
    // Features
    translations.landing.features.forEach((feature, index) => {
        updateElementById(`feature-${index}-title`, feature.title[currentLanguage]);
        updateElementById(`feature-${index}-desc`, feature.desc[currentLanguage]);
    });
    
    // Chat UI
    updateElementById('bot-name', translations.ui.botName[currentLanguage]);
    updateElementById('bot-status-text', translations.ui.online[currentLanguage]);
    updateElementById('today-label', translations.ui.today[currentLanguage]);
    updateElementById('typing-text', translations.ui.typing[currentLanguage]);
    
    // Update placeholder
    const chatInput = document.getElementById('chat-input');
    if (chatInput) {
        chatInput.placeholder = translations.ui.inputPlaceholder[currentLanguage];
    }
    
    // Quick actions
    updateElementById('quick-symptoms', translations.ui.quickActions.symptoms[currentLanguage]);
    updateElementById('quick-appointment', translations.ui.quickActions.appointment[currentLanguage]);
    updateElementById('quick-emergency', translations.ui.quickActions.emergency[currentLanguage]);
    updateElementById('quick-education', translations.ui.quickActions.education[currentLanguage]);
    
    // Modals
    updateElementById('emergency-title', translations.ui.emergencyTitle[currentLanguage]);
    updateElementById('call-immediately', translations.ui.callImmediately[currentLanguage]);
    updateElementById('ambulance-service', translations.ui.ambulanceService[currentLanguage]);
    updateElementById('district-hospital', translations.ui.districtHospital[currentLanguage]);
    updateElementById('nearby-facilities', translations.ui.nearbyFacilities[currentLanguage]);
    updateElementById('settings-title', translations.ui.settingsTitle[currentLanguage]);
    updateElementById('language-label', translations.ui.languageLabel[currentLanguage]);
    
    // Facilities
    translations.ui.facilities.forEach((facility, index) => {
        updateElementById(`facility-name-${index}`, facility.name[currentLanguage]);
        updateElementById(`facility-type-${index}`, facility.type[currentLanguage]);
        updateElementById(`facility-hours-${index}`, facility.hours[currentLanguage]);
    });
}

function updateElementById(id, text) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = text;
    }
}

// Chat Functions
window.startChat = function() {
    console.log('Starting general chat');
    startChatInterface();
    
    // Send welcome message
    setTimeout(() => {
        addBotMessage(translations.chat.welcome[currentLanguage]);
    }, 500);
};

window.startChatWithAction = function(action) {
    console.log(`Starting chat with action: ${action}`);
    startChatInterface();
    
    // Send welcome message and immediately trigger action
    setTimeout(() => {
        addBotMessage(translations.chat.welcome[currentLanguage]);
        setTimeout(() => {
            handleQuickAction(action);
        }, 1000);
    }, 500);
};

function startChatInterface() {
    document.getElementById('landing-page').classList.add('hidden');
    document.getElementById('chat-interface').classList.remove('hidden');
    
    // Clear previous messages
    const messagesContainer = document.getElementById('messages-container');
    messagesContainer.innerHTML = `
        <div class="welcome-message">
            <div class="date-separator" id="today-label">${translations.ui.today[currentLanguage]}</div>
        </div>
    `;
}

window.goBack = function() {
    console.log('Going back to landing page');
    document.getElementById('chat-interface').classList.add('hidden');
    document.getElementById('landing-page').classList.remove('hidden');
    
    // Reset conversation state
    conversationState = 'welcome';
    currentSymptomFlow = null;
};

window.toggleLanguageMenu = function() {
    const langMenu = document.getElementById('language-menu');
    if (langMenu) {
        langMenu.classList.toggle('hidden');
    }
};

window.showSettings = function() {
    document.getElementById('settings-modal').classList.remove('hidden');
};

window.sendMessage = function() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    
    if (message === '') return;
    
    console.log(`User message: ${message}`);
    addUserMessage(message);
    input.value = '';
    
    // Process bot response
    setTimeout(() => {
        processBotResponse(message);
    }, 800);
};

window.selectOption = function(option) {
    console.log(`Option selected: ${option}`);
    addUserMessage(option);
    
    setTimeout(() => {
        handleOptionResponse(option);
    }, 800);
};

window.closeModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
    }
};

window.handleQuickAction = function(action) {
    console.log(`Quick action: ${action}`);
    
    switch(action) {
        case 'symptoms':
            handleSymptomsAction();
            break;
        case 'appointment':
            handleAppointmentAction();
            break;
        case 'emergency':
            handleEmergencyAction();
            break;
        case 'education':
            handleEducationAction();
            break;
    }
};

window.toggleVoice = function() {
    const voiceBtn = document.getElementById('voice-btn');
    
    if (voiceBtn.classList.contains('recording')) {
        // Stop recording
        voiceBtn.classList.remove('recording');
        voiceBtn.textContent = '🎤';
        
        // Simulate voice message
        setTimeout(() => {
            const voiceMsg = {
                hi: "🎵 वॉइस मैसेज (3 सेकंड)",
                en: "🎵 Voice message (3 seconds)",
                mr: "🎵 व्हॉइस मेसेज (3 सेकंड)"
            };
            
            addUserMessage(voiceMsg[currentLanguage]);
            
            setTimeout(() => {
                const response = {
                    hi: "मैंने आपका वॉइस मैसेज सुना। कृपया टेक्स्ट में भी बता सकते हैं?",
                    en: "I heard your voice message. Can you please also type it?",
                    mr: "मी तुमचा व्हॉइस मेसेज ऐकला. कृपया मजकूरातही सांगू शकता का?"
                };
                addBotMessage(response[currentLanguage]);
            }, 800);
        }, 500);
        
    } else {
        // Start recording
        voiceBtn.classList.add('recording');
        voiceBtn.textContent = '⏹️';
    }
};

function addUserMessage(text) {
    const messagesContainer = document.getElementById('messages-container');
    const messageDiv = createMessageElement('user', text);
    messagesContainer.appendChild(messageDiv);
    scrollToBottom();
}

function addBotMessage(text, options = null) {
    showTypingIndicator();
    
    setTimeout(() => {
        hideTypingIndicator();
        const messagesContainer = document.getElementById('messages-container');
        const messageDiv = createMessageElement('bot', text, options);
        messagesContainer.appendChild(messageDiv);
        scrollToBottom();
    }, 1000);
}

function createMessageElement(sender, text, options = null) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    
    const time = new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });
    
    let optionsHtml = '';
    if (options && options.length > 0) {
        optionsHtml = `
            <div class="message-options">
                ${options.map(option => `
                    <button class="option-btn" onclick="selectOption('${option.replace(/'/g, "\\'")}')">
                        ${option}
                    </button>
                `).join('')}
            </div>
        `;
    }
    
    messageDiv.innerHTML = `
        <div class="message-bubble">
            <div class="message-content">${text}</div>
            ${optionsHtml}
            <div class="message-time">${time}</div>
        </div>
    `;
    
    return messageDiv;
}

function processBotResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();
    
    // Detect symptoms and keywords
    if (detectSymptom(lowerMessage, 'fever')) {
        handleSymptomFlow('fever');
    } else if (detectSymptom(lowerMessage, 'cough')) {
        handleSymptomFlow('cough');
    } else if (detectKeyword(lowerMessage, 'headache')) {
        handleHeadacheFlow();
    } else if (detectKeyword(lowerMessage, 'stomach')) {
        handleStomachFlow();
    } else if (detectKeyword(lowerMessage, 'appointment') || detectKeyword(lowerMessage, 'doctor')) {
        handleAppointmentAction();
    } else if (detectKeyword(lowerMessage, 'emergency')) {
        handleEmergencyAction();
    } else {
        handleGenericResponse();
    }
}

function detectSymptom(message, symptom) {
    const keywords = {
        fever: ['बुखार', 'fever', 'ताप', 'तापमान', 'गर्मी'],
        cough: ['खांसी', 'cough', 'खोकला', 'कफ']
    };
    
    return keywords[symptom]?.some(keyword => message.includes(keyword)) || false;
}

function detectKeyword(message, category) {
    const keywords = {
        headache: ['सिरदर्द', 'headache', 'डोकेदुखी', 'सिर दर्द', 'head'],
        stomach: ['पेट दर्द', 'stomach', 'पोट दुखी', 'pet', 'पेट'],
        appointment: ['डॉक्टर', 'doctor', 'वैद्य', 'अपॉइंटमेंट', 'appointment', 'भेट'],
        emergency: ['आपातकाल', 'emergency', 'आपत्कालीन', 'help', 'मदद', 'urgent']
    };
    
    return keywords[category]?.some(keyword => message.includes(keyword)) || false;
}

function handleSymptomFlow(symptom) {
    console.log(`Handling symptom flow: ${symptom}`);
    const symptomData = translations.chat.symptoms[symptom];
    if (symptomData) {
        const message = symptomData.question[currentLanguage];
        const options = symptomData.options[currentLanguage];
        addBotMessage(message, options);
        currentSymptomFlow = symptom;
    }
}

function handleOptionResponse(option) {
    if (currentSymptomFlow === 'fever') {
        handleFeverResponse(option);
    } else if (currentSymptomFlow === 'cough') {
        handleCoughResponse(option);
    } else {
        // Handle general options
        if (option.includes('केंद्र देखें') || option.includes('View Centers') || option.includes('केंद्रे पहा')) {
            document.getElementById('facilities-modal').classList.remove('hidden');
        } else if (option.includes('ASHA') || option.includes('आशा')) {
            handleASHAWorkerInfo();
        } else if (option.includes('और बताएं') || option.includes('tell more') || option.includes('आणखी सांगा')) {
            handleEducationAction();
        } else if (option.includes('धन्यवाद') || option.includes('Thank you')) {
            handleThankYou();
        } else if (option === 'बुखार' || option === 'Fever' || option === 'ताप') {
            handleSymptomFlow('fever');
        } else if (option === 'खांसी' || option === 'Cough' || option === 'खोकला') {
            handleSymptomFlow('cough');
        } else if (option.includes('सिरदर्द') || option.includes('Headache') || option.includes('डोकेदुखी')) {
            handleHeadacheFlow();
        } else if (option.includes('पेट दर्द') || option.includes('Stomach') || option.includes('पोट')) {
            handleStomachFlow();
        } else {
            handleGenericResponse();
        }
    }
    
    // Reset symptom flow after handling
    if (currentSymptomFlow && (option.includes('धन्यवाद') || option.includes('Thank you') || option.includes('नहीं') || option.includes('No'))) {
        currentSymptomFlow = null;
    }
}

function handleFeverResponse(option) {
    console.log(`Handling fever response: ${option}`);
    let responseIndex = 0;
    
    if (option.includes('1') || (option.includes('day') && !option.includes('2-3')) || (option.includes('दिन') && !option.includes('2-3')) || (option.includes('दिवस') && !option.includes('2-3'))) {
        responseIndex = 0;
    } else if (option.includes('2-3')) {
        responseIndex = 1;
    } else {
        responseIndex = 2;
    }
    
    const response = translations.chat.symptoms.fever.responses[currentLanguage][responseIndex];
    addBotMessage(response);
    
    // Offer to show facilities after advice
    setTimeout(() => {
        const facilityMsg = {
            hi: "नजदीकी स्वास्थ्य केंद्र देखना चाहते हैं?",
            en: "Would you like to see nearby health centers?",
            mr: "जवळील आरोग्य केंद्रे पाहू इच्छिता?"
        };
        const options = [
            {hi: 'हाँ, दिखाएं', en: 'Yes, show me', mr: 'होय, दाखवा'}[currentLanguage],
            {hi: 'नहीं, धन्यवाद', en: 'No, thank you', mr: 'नाही, धन्यवाद'}[currentLanguage]
        ];
        addBotMessage(facilityMsg[currentLanguage], options);
    }, 2000);
}

function handleCoughResponse(option) {
    console.log(`Handling cough response: ${option}`);
    let responseIndex = 0;
    
    if (option.includes('बुखार') || option.includes('fever') || option.includes('तापही')) {
        responseIndex = 0;
    } else if (option.includes('सांस') || option.includes('breathing') || option.includes('श्वास')) {
        responseIndex = 1;
    } else {
        responseIndex = 2;
    }
    
    const response = translations.chat.symptoms.cough.responses[currentLanguage][responseIndex];
    addBotMessage(response);
}

function handleSymptomsAction() {
    const message = {
        hi: "आपको कौन सा लक्षण है? बताएं:",
        en: "What symptoms do you have? Please tell me:",
        mr: "तुम्हाला कोणती लक्षणे आहेत? कृपया सांगा:"
    };
    const options = [
        {hi: 'बुखार', en: 'Fever', mr: 'ताप'}[currentLanguage],
        {hi: 'खांसी', en: 'Cough', mr: 'खोकला'}[currentLanguage],
        {hi: 'सिरदर्द', en: 'Headache', mr: 'डोकेदुखी'}[currentLanguage],
        {hi: 'पेट दर्द', en: 'Stomach Pain', mr: 'पोटदुखी'}[currentLanguage]
    ];
    addBotMessage(message[currentLanguage], options);
}

function handleAppointmentAction() {
    const message = {
        hi: "नजदीकी स्वास्थ्य केंद्र देखने के लिए 'केंद्र देखें' दबाएं।",
        en: "Press 'View Centers' to see nearby health facilities.",
        mr: "'केंद्रे पहा' दाबून जवळील आरोग्य सुविधा पहा."
    };
    const options = [
        {hi: 'केंद्र देखें', en: 'View Centers', mr: 'केंद्रे पहा'}[currentLanguage],
        {hi: 'ASHA कार्यकर्ता से बात करें', en: 'Talk to ASHA Worker', mr: 'ASHA कार्यकर्त्याशी बोला'}[currentLanguage]
    ];
    addBotMessage(message[currentLanguage], options);
}

function handleEmergencyAction() {
    const message = {
        hi: "🚨 आपातकाल की स्थिति में तुरंत 108 पर कॉल करें!",
        en: "🚨 In emergency, immediately call 108!",
        mr: "🚨 आपत्कालीन परिस्थितीत तत्काळ 108 वर कॉल करा!"
    };
    addBotMessage(message[currentLanguage]);
    
    setTimeout(() => {
        document.getElementById('emergency-modal').classList.remove('hidden');
    }, 1000);
}

function handleEducationAction() {
    const tips = healthEducationContent[currentLanguage];
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    
    const message = `
        <div class="health-tip-card">
            <div class="health-tip-title">${randomTip.title}</div>
            <div class="health-tip-content">${randomTip.content}</div>
        </div>
    `;
    
    addBotMessage(message);
    
    setTimeout(() => {
        const moreMsg = {
            hi: "और कोई स्वास्थ्य जानकारी चाहिए?",
            en: "Do you need more health information?",
            mr: "आणखी आरोग्य माहिती हवी आहे का?"
        };
        const options = [
            {hi: 'हाँ, और बताएं', en: 'Yes, tell more', mr: 'होय, आणखी सांगा'}[currentLanguage],
            {hi: 'धन्यवाद', en: 'Thank you', mr: 'धन्यवाद'}[currentLanguage]
        ];
        addBotMessage(moreMsg[currentLanguage], options);
    }, 2000);
}

function handleASHAWorkerInfo() {
    const message = {
        hi: "आशा कार्यकर्ता सुनीता देवी से संपर्क करें:\n📞 9876543210\n\n• टीकाकरण\n• गर्भावस्था की देखभाल\n• बच्चों का स्वास्थ्य\n• परिवार नियोजन",
        en: "Contact ASHA Worker Sunita Devi:\n📞 9876543210\n\n• Vaccination\n• Pregnancy care\n• Child health\n• Family planning",
        mr: "आशा कार्यकर्ता सुनीता देवी यांच्याशी संपर्क साधा:\n📞 9876543210\n\n• लसीकरण\n• गर्भावस्थेची काळजी\n• मुलांचे आरोग्य\n• कुटुंब नियोजन"
    };
    addBotMessage(message[currentLanguage]);
}

function handleHeadacheFlow() {
    const message = {
        hi: "सिरदर्द कितने दिन से है? आराम करने से कम हो जाता है?",
        en: "How many days have you had headache? Does it reduce with rest?",
        mr: "डोकेदुखी किती दिवसांपासून आहे? आराम केल्याने कमी होते का?"
    };
    const options = [
        {hi: 'आज से', en: 'Since today', mr: 'आजपासून'}[currentLanguage],
        {hi: '2-3 दिन', en: '2-3 days', mr: '2-3 दिवस'}[currentLanguage],
        {hi: 'तेज़ दर्द', en: 'Severe pain', mr: 'तीव्र वेदना'}[currentLanguage]
    ];
    addBotMessage(message[currentLanguage], options);
}

function handleStomachFlow() {
    const message = {
        hi: "पेट दर्द कैसा है? खाना खाने के बाद बढ़ता है?",
        en: "How is the stomach pain? Does it increase after eating?",
        mr: "पोटदुखी कशी आहे? जेवणानंतर वाढते का?"
    };
    const options = [
        {hi: 'हल्का दर्द', en: 'Mild pain', mr: 'हलका दर्द'}[currentLanguage],
        {hi: 'तेज़ दर्द', en: 'Severe pain', mr: 'तीव्र दर्द'}[currentLanguage],
        {hi: 'खाने के बाद', en: 'After eating', mr: 'जेवणानंतर'}[currentLanguage]
    ];
    addBotMessage(message[currentLanguage], options);
}

function handleThankYou() {
    const message = {
        hi: "आपका स्वागत है! कोई और मदद चाहिए तो पूछें। स्वस्थ रहें! 🙏",
        en: "You're welcome! Ask if you need more help. Stay healthy! 🙏",
        mr: "तुमचे स्वागत आहे! आणखी मदत हवी असल्यास विचारा. निरोगी राहा! 🙏"
    };
    addBotMessage(message[currentLanguage]);
}

function handleGenericResponse() {
    const responses = {
        hi: [
            "मैं समझ गया। क्या आप अपने लक्षणों के बारे में और बता सकते हैं?",
            "अधिक जानकारी के लिए नीचे दिए गए विकल्पों में से चुनें।",
            "यदि यह गंभीर है तो कृपया तुरंत डॉक्टर से मिलें।"
        ],
        en: [
            "I understand. Can you tell me more about your symptoms?",
            "Please choose from the options below for more information.",
            "If this is serious, please see a doctor immediately."
        ],
        mr: [
            "मला समजले. तुम्ही तुमच्या लक्षणांबद्दल अधिक सांगू शकता का?",
            "अधिक माहितीसाठी खालील पर्यायांमधून निवडा.",
            "हे गंभीर असल्यास कृपया तत्काळ डॉक्टरांना भेटा."
        ]
    };
    
    const randomResponse = responses[currentLanguage][Math.floor(Math.random() * responses[currentLanguage].length)];
    addBotMessage(randomResponse);
}

function showTypingIndicator() {
    const indicator = document.getElementById('typing-indicator');
    if (indicator) {
        indicator.classList.remove('hidden');
        scrollToBottom();
    }
}

function hideTypingIndicator() {
    const indicator = document.getElementById('typing-indicator');
    if (indicator) {
        indicator.classList.add('hidden');
    }
}

function scrollToBottom() {
    const container = document.getElementById('messages-container');
    if (container) {
        container.scrollTop = container.scrollHeight;
    }
}

console.log('Rural Healthcare Assistant loaded successfully!');