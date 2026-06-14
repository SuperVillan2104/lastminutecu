/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// ==========================================
// LASTMINUTE HIGH-YIELD COCKPIT ENGINE (JS)
// ==========================================

// THE CENTRAL HIGH-YIELD EXAM DISCIPLINE DATASTORE
const studySubjects = [
  {
    id: 'cs-os',
    name: 'Operating Systems & CPU Scheduling',
    code: 'CS 340',
    description: 'Kernel modes, CPU scheduling wait states, deadlock invariants, Page fault formulas, and disk arm algorithms.',
    estimatedPrepTime: '4 Hours',
    flashcards: [
      {
        id: 'cs-f1',
        topic: 'CPU Scheduling - SJF Optimality',
        concept: 'Shortest Job First (SJF) Invariant',
        definition: 'SJF is provably optimal, minimizing the average waiting time for a given set of processes. Problem: It is impossible to implement at the hardware level because the length of the next CPU burst is uncomputable. Preemptive SJF is also known as Shortest Remaining Time First (SRTF).',
        probability: 'GUARANTEED'
      },
      {
        id: 'cs-f2',
        topic: 'Deadlock Conditions (Coffman)',
        concept: 'The 4 Invariant Conditions',
        definition: 'Mutual Exclusion (exclusive access), Hold and Wait (holding while requesting), No Preemption (cannot force release), and Circular Wait (closed cycle of dependencies). ALL FOUR must hold simultaneously for deadlock to manifest. To prevent deadlocks, break at least one condition.',
        probability: 'CRITICAL'
      },
      {
        id: 'cs-f3',
        topic: 'Virtual Memory & Page Faults',
        concept: "Belady's Anomaly (FIFO Trap)",
        definition: 'For some FIFO page replacement algorithms, the page fault rate may INCREASE when more physical page frames are allocated. Stack-based algorithms like LRU (Least Recently Used) are mathematically immune to Belady\'s Anomaly.',
        probability: 'HIGH'
      },
      {
        id: 'cs-f4',
        topic: 'Kernel Synchronisation',
        concept: 'Mutex vs Counting Semaphore',
        definition: 'A Mutex is a locking mechanism with strict thread ownership (only the thread that locked the mutex can unlock it). A Semaphore is a signaling mechanism (counter-based, anyone can signal/V or wait/P). Semaphores are prone to deadlock if sequence orders are inverted.',
        probability: 'CRITICAL'
      }
    ],
    questions: [
      {
        id: 'cs-q1',
        question: 'Three processes arrive at time 0 with burst times: P1=24, P2=3, P3=3. Compare average waiting time between First-Come, First-Served (FCFS) and Shortest Job First (SJF).',
        answer: 'For FCFS (order P1, P2, P3): Waiting times are P1=0, P2=24, P3=27. Average = (0 + 24 + 27)/3 = 17ms. \nFor SJF (order P2, P3, P1): Waiting times are P2=0, P3=3, P1=6. Average = (0 + 3 + 6)/3 = 3ms. Correcting process sequence minimizes wait queues by 82.3%.',
        trap: 'Assuming scheduling overhead exists at calculation time. In classical exam theory, overhead is strictly zero unless predefined.',
        probabilityScore: 98,
        category: 'CPU Scheduling'
      },
      {
        id: 'cs-q2',
        question: 'Explain why the Banker\'s Algorithm might declare a state "Safe" but run slowly, and state its computational time complexity.',
        answer: 'The Banker\'s Algorithm calculates safety by finding an execution sequence that guarantees termination without deadlock. With n processes and m resource categories, the complexity is O(m * n²). It is too computationally slow for dynamic systems and relies on pre-allocating credit ceilings.',
        trap: 'Confusing "Unsafe state" with "Deadlock". An Unsafe state is NOT a deadlock; it is merely a state which MAY eventually lead to deadlock if worst-case allocation occurs.',
        probabilityScore: 94,
        category: 'Deadlock Avoidance'
      },
      {
        id: 'cs-q3',
        question: 'In demand paging, a system has a page fault service rate of 8ms. If memory accessed has a 100ns delay, what maximum page-fault rate is allowed to keep effective access time (EAT) under 200ns?',
        answer: 'EAT = (1 - p)*100ns + p*(8,000,000ns) <= 200ns. \n100 + p*7,999,900 <= 200 => p <= 100 / 7,999,900 ≈ 0.0000125. Thus, less than 1 page fault per 80,000 accesses is required.',
        trap: 'Failing to convert units. Standard units are critical: convert millisecond fault latency (8ms) directly into nanoseconds (8,000,000ns).',
        probabilityScore: 91,
        category: 'Virtual Memory'
      }
    ]
  },
  {
    id: 'chem-org',
    name: 'Organic Chemistry II Mechanisms',
    code: 'CHEM 202',
    description: 'Nucleophilic Substitution stereochemical constraints, electrophilic aromatic directive codes, and Carbonyl NAS pathways.',
    estimatedPrepTime: '6 Hours',
    flashcards: [
      {
        id: 'chem-f1',
        topic: 'Substitution Reactions',
        concept: 'SN1 vs SN2 Kinetic Limits',
        definition: 'SN2 is a concerted, single-step reaction with bimolecular kinetics (Rate = k[R-X][Nu]). It requires polar aprotic solvents and triggers a complete inversion of stereochemical configuration at carbon (Walden inversion). SN1 is a multi-step reaction with a carbocation intermediate, yielding racemization.',
        probability: 'GUARANTEED'
      },
      {
        id: 'chem-f2',
        topic: 'Aromaticity Invariants',
        concept: 'Hückel Rules of Cyclic Conjugation',
        definition: 'The compound must be: (1) Cyclic, (2) Planar (overlapping p-orbitals), (3) Fully conjugated, and (4) Possess exactly (4n + 2) pi-electrons (Hückel Rule). If it has 4n pi-electrons and fits the others, it is antiaromatic and intensely unstable.',
        probability: 'CRITICAL'
      },
      {
        id: 'chem-f3',
        topic: 'Carbonyl Chemistry',
        concept: 'Nucleophilic Acyl Substitution (NAS)',
        definition: 'Unlike aldehydes or ketones which undergo addition, carboxylic acid derivatives undergo NAS. The reaction follows a tetrahedral intermediate. The reactivity scale is: Acid Chloride > Acid Anhydride > Ester > Amide. A better leaving group means a faster reaction.',
        probability: 'HIGH'
      }
    ],
    questions: [
      {
        id: 'chem-q1',
        question: 'Why does reacting (R)-2-bromobutane with sodium iodide in dry acetone yield (S)-2-iodobutane with exceptionally high enantiomeric value?',
        answer: 'This is a classical SN2 mechanism. Acetone is a polar aprotic solvent, shielding the sodium cation while leaving the iodide anion completely "naked" and highly nucleophilic. The iodide nucleophile attacks the electrophilic carbon from the backside (180° away from the C-Br bond), fully inverting the chiral center from (R) to (S).',
        trap: 'Setting up SN1 carbocation steps. Since acetone is polar aprotic and iodide is a powerful nucleophile, a concerted SN2 pathway is strongly favored over carbocation release.',
        probabilityScore: 97,
        category: 'Substitution Mechanics'
      },
      {
        id: 'chem-q2',
        question: 'Predict the orientation of electrophilic aromatic substitution on benzaldehyde vs toluene, and detail the chemical reason.',
        answer: 'Benzaldehyde has a carbonyl group, which is strongly electron-withdrawing via resonance, making the ortho and para intermediates dangerously unstable—meaning it is a deactivated Meta-director. Toluene has a methyl group, which is electron-donating via hyperconjugation, stabilizing the carbocation at the ortho/para attack configurations.',
        trap: 'Unintentionally drawing steric hindrance as meta-directing. Electron density and resonance structures govern directive behavior, never physical size alone.',
        probabilityScore: 95,
        category: 'Electrophilic Aromatic Substitution'
      }
    ]
  },
  {
    id: 'math-calc',
    name: 'Calculus II: Power Series & Convergence',
    code: 'MATH 152',
    description: 'Integral test boundaries, Taylor series expansion limits, and Interval of Convergence validation.',
    estimatedPrepTime: '3 Hours',
    flashcards: [
      {
        id: 'math-f1',
        topic: 'Series Convergence',
        concept: 'The Ratio Test (Absolute Convergence)',
        definition: 'Let L = lim |a_{n+1} / a_n| as n -> infinity. If L < 1, the series converges absolutely. If L > 1, the series diverges. If L = 1, the test is strictly inconclusive and you must immediately pivot to another test (e.g. Limit Comparison or Integral Test).',
        probability: 'GUARANTEED'
      },
      {
        id: 'math-f2',
        topic: 'Taylor Expansion Thresholds',
        concept: 'Lagrange Error Bound',
        definition: 'The maximum remainder/error en when approximating f(x) with an nth degree Taylor polynomial is bounded by: |R_n(x)| <= [M * |x - c|^(n+1)] / (n+1)!, where M is the absolute maximum of the (n+1)th derivative of f between x and the center c.',
        probability: 'CRITICAL'
      },
      {
        id: 'math-f3',
        topic: 'Power Series Invariant',
        concept: 'Interval of Convergence Boundary Check',
        definition: 'When finding the Interval of Convergence using the Ratio Test, the calculated radius R dictates absolute convergence inside (c - R, c + R). However, you MUST manually check the exact endpoint values x = c - R and x = c + R using alternate series tools to finalize brackets.',
        probability: 'GUARANTEED'
      }
    ],
    questions: [
      {
        id: 'math-q1',
        question: 'Determine the interval of convergence of the power series: Σ (n=1 to ∞) [(-1)^n * (x - 3)^n] / [n * 4^n].',
        answer: 'Using the Ratio Test: |a_{n+1}/a_n| = |(x-3)/4| * [n/(n+1)]. Taking the limit as n -> ∞ gives |(x-3)/4| < 1 => |x - 3| < 4, so Radius R = 4, interval centers on ( -1, 7 ). \nEndpoint check at x = 7: yields Alternate Harmonic Series Σ [(-1)^n]/n which converges. \nEndpoint check at x = -1: yields Σ 1/n which diverges (Harmonic). \nFinal Interval: ( -1, 7 ].',
        trap: 'Assuming endpoints converge automatically or share state. Standard check is strictly individual.',
        probabilityScore: 99,
        category: 'Power Series'
      },
      {
        id: 'math-q2',
        question: 'Prove whether the infinite series Σ (n=1 to ∞) n² / e^n converges or diverges.',
        answer: 'Apply the Ratio Test: lim (n->∞) |[(n+1)²/e^{n+1}] * [e^n/n²]| = lim (n->∞) (1/e) * (n+1/n)² = 1/e. Since e ≈ 2.718, 1/e ≈ 0.368, which is strictly less than 1. The series converges absolutely.',
        trap: 'Pivoting immediately to integral test. Integral test is mathematically valid but requires complex Integration by Parts twice, costing valuable exam minutes. Check Ratio Test first!',
        probabilityScore: 92,
        category: 'Convergence Criteria'
      }
    ]
  }
];

const mockChatRoom = [
  {
    id: 'msg-1',
    user: 'Kev_Stats',
    message: 'Wait, does SJF scheduling have preemptive modes? I kept getting 8ms wrong in the back of the book.',
    timestamp: 'T-MINUS 12:45'
  },
  {
    id: 'msg-2',
    user: 'Sarah_Med7',
    message: 'Yes! Preemptive SJF is Shortest Remaining Time First. The queue updates every time a new process drops in.',
    timestamp: 'T-MINUS 12:44'
  },
  {
    id: 'msg-3',
    user: 'D_Cal',
    message: 'Anyone cramming for Calculus 2 Power Series? I still have 3 chapters of notes and my exam is at 8:00 AM.',
    timestamp: 'T-MINUS 12:43',
    isUrgent: true
  },
  {
    id: 'msg-4',
    user: 'System_Sentinel',
    message: 'ATTENTION: OS & Data Structures study session starting in virtual war room 04. Timer set to 45 mins. No laptops on social media.',
    timestamp: 'T-MINUS 12:42'
  },
  {
    id: 'msg-5',
    user: 'Nikki_O_Chem',
    message: 'BACKSIDE ATTACK. Remember: SN2 means Walden inversion. Solvents must be polar APROTIC. Do not let polar protic solvents form hydrogen shells around your nucleophile!',
    timestamp: 'T-MINUS 12:39'
  }
];

// STATE STORAGE
let selectedSubjectId = 'cs-os';
let hoursSliderValue = 24;
let selectedPanicState = 'HIGH_PULSE';

// Workspace specific active sub-tab state
let activeCramTab = 'notes';

// Timer values
let timerInterval = null;
let timerSecondsLeft = 25 * 60;
let isTimerActive = false;

// Breathing guide state
let breatherInterval = null;
let isBreatherActive = false;
let breatherStep = 0; // 0: Inhale, 1: Hold, 2: Exhale, 3: Hold
let breatherSeconds = 4;

// Chats state
let localMessagesList = [...mockChatRoom];


// ==========================================
// SCROLL ANIMATION SYSTEM
// ==========================================
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        // Optional: Stop observing after animation plays
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements with scroll-animate class
  document.querySelectorAll('.scroll-animate').forEach(el => {
    observer.observe(el);
  });

  // Observe stagger items
  document.querySelectorAll('.stagger-item').forEach(el => {
    observer.observe(el);
  });
}

// ==========================================
// PAGE TRANSITION EFFECTS
// ==========================================
function initPageTransitions() {
  // Add fade-in animation to main content on page load
  const main = document.querySelector('main');
  if (main) {
    main.style.animation = 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
  }

  // Smooth page exit animation on link clicks
  document.querySelectorAll('a:not([href^="#"]):not([target])').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && !href.includes(window.location.pathname)) {
        // Add transition effect
        const pageOut = document.createElement('div');
        pageOut.style.cssText = `
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(11, 15, 25, 0.1);
          z-index: 9999;
          animation: fadeIn 0.4s ease forwards;
        `;
        document.body.appendChild(pageOut);
      }
    });
  });
}

// ==========================================
// BUTTON RIPPLE EFFECT ENHANCEMENT
// ==========================================
function initRippleEffects() {
  const buttons = document.querySelectorAll('button, a[role="button"]');
  
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const rect = btn.getBoundingClientRect();
      const ripple = document.createElement('span');
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: rgba(255, 222, 26, 0.5);
        border-radius: 50%;
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
        animation: rippleOut 0.6s ease-out;
      `;
      
      if (!btn.style.position || btn.style.position === 'static') {
        btn.style.position = 'relative';
      }
      btn.appendChild(ripple);
      
      setTimeout(() => ripple.remove(), 600);
    });
  });
}

// ==========================================
// ANIMATED COUNTER UTILITY
// ==========================================
function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;
  
  const updateCounter = () => {
    current += increment;
    if (current < target) {
      element.textContent = Math.floor(current);
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target;
    }
  };
  
  updateCounter();
}

// ==========================================
// FLOATING ELEMENT ANIMATION
// ==========================================
function initFloatingElements() {
  const floatingElements = document.querySelectorAll('.floating-blob, [data-float]');
  floatingElements.forEach((el, index) => {
    const delay = index * 0.2;
    el.style.animation = `float 6s ease-in-out ${delay}s infinite`;
  });
}

// ==========================================
// HOVER STATE TRACKING
// ==========================================
function initHoverEffects() {
  const hoverElements = document.querySelectorAll('.lift-on-hover, .scale-on-hover, .glow-on-hover');
  
  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      el.classList.add('active-hover');
    });
    
    el.addEventListener('mouseleave', () => {
      el.classList.remove('active-hover');
    });
  });
}

// ==========================================
// FORM ANIMATIONS
// ==========================================
function initFormAnimations() {
  const inputs = document.querySelectorAll('input, textarea, select');
  
  inputs.forEach(input => {
    // Add focus animation
    input.addEventListener('focus', () => {
      input.parentElement?.classList.add('focused');
    });
    
    input.addEventListener('blur', () => {
      input.parentElement?.classList.remove('focused');
    });
  });
}

// ==========================================
// SYSTEM LIFE CYCLE INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // Core animations
  initScrollAnimations();
  initPageTransitions();
  initRippleEffects();
  initFloatingElements();
  initHoverEffects();
  initFormAnimations();

  // Existing initialization
  initGlobalCountdown();
  initMobileMenu();

  // Route-Specific Init checks
  if (document.getElementById('view-home-indicator')) {
    initCalculatorListeners();
    updateStrategicMatrix();
  }

  if (document.getElementById('view-services-indicator')) {
    initCockpitControls();
    initBreatherControls();
    initChatSystem();
    // Default workspace loading state
    triggerSubjectShift(selectedSubjectId);
    switchSubCramTab('notes');
  }

  if (document.getElementById('view-contact-indicator')) {
    initContactForm();
  }
});

// 1. DYNAMIC SYSTEM COUNTDOWN
function initGlobalCountdown() {
  const bannerText = document.getElementById('banner-text');
  if (!bannerText) return;

  // Let's create a real, decreasing timestamp starting from 47 hours, 59 mins
  let offsetSeconds = 47 * 3600 + 59 * 60 + 58;

  setInterval(() => {
    if (offsetSeconds > 0) {
      offsetSeconds--;
      const hours = Math.floor(offsetSeconds / 3600);
      const minutes = Math.floor((offsetSeconds % 3600) / 60);
      const secs = offsetSeconds % 60;
      
      const formattedHours = hours.toString().padStart(2, '0');
      const formattedMinutes = minutes.toString().padStart(2, '0');
      const formattedSecs = secs.toString().padStart(2, '0');
      
      bannerText.textContent = `T-MINUS ${formattedHours}:${formattedMinutes}:${formattedSecs} UNTIL EXAM DEADLINE`;
    }
  }, 1000);
}

// 2. MOBILE MENU DRAWER TOGGLE
function initMobileMenu() {
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const hamburgerIcon = document.getElementById('menu-icon-hamburger');
  const closeIcon = document.getElementById('menu-icon-close');

  if (!mobileToggle || !mobileDrawer) return;

  mobileToggle.addEventListener('click', () => {
    const isHidden = mobileDrawer.classList.contains('hidden');
    if (isHidden) {
      mobileDrawer.classList.remove('hidden');
      hamburgerIcon?.classList.add('hidden');
      closeIcon?.classList.remove('hidden');
    } else {
      mobileDrawer.classList.add('hidden');
      hamburgerIcon?.classList.remove('hidden');
      closeIcon?.classList.add('hidden');
    }
  });
}

// 3. CRISIS STRATEGY CALCULATOR ALGORITHMS
function initCalculatorListeners() {
  const subjectButtons = document.querySelectorAll('.calc-subject-btn');
  const hoursSlider = document.getElementById('calc-hours-slider');
  const hoursDisplay = document.getElementById('calc-hours-display');
  const panicButtons = document.querySelectorAll('.calc-panic-btn');
  const lockInBtn = document.getElementById('calc-lock-in-cta');

  if (!hoursSlider) return;

  // Subject code triggers
  subjectButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      subjectButtons.forEach(b => {
        b.className = "calc-subject-btn p-4 border text-left font-mono transition-all border-zinc-200 bg-zinc-50 text-stone-700 hover:bg-zinc-100 cursor-pointer rounded-none";
      });
      btn.className = "calc-subject-btn p-4 border text-left font-mono transition-all border-black bg-zinc-950 text-white cursor-pointer rounded-none";
      
      const subId = btn.getAttribute('data-subject');
      if (subId) {
        selectedSubjectId = subId;
        updateStrategicMatrix();
      }
    });
  });

  // Slider change trigger
  hoursSlider.addEventListener('input', (e) => {
    const val = parseInt(e.target.value);
    hoursSliderValue = val;
    if (hoursDisplay) hoursDisplay.innerText = `${val} HOURS`;
    updateStrategicMatrix();
  });

  // Panic triggers
  panicButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      panicButtons.forEach(b => {
        b.className = "calc-panic-btn p-3 text-center border font-mono text-[11px] font-bold transition-colors border-zinc-200 bg-zinc-50 text-zinc-650 hover:bg-zinc-100 cursor-pointer rounded-none";
      });
      btn.className = "calc-panic-btn p-3 text-center border font-mono text-[11px] font-bold transition-colors border-black bg-brand-yellow text-black font-extrabold cursor-pointer rounded-none shadow-sm";
      
      const panicType = btn.getAttribute('data-panic');
      if (panicType) {
        selectedPanicState = panicType;
        updateStrategicMatrix();
      }
    });
  });

  // Lock-In trigger runs and routes to cockpit
  lockInBtn?.addEventListener('click', () => {
    // Save selection in session storage to load in services.html
    sessionStorage.setItem('selectedSubjectId', selectedSubjectId);
    window.location.href = 'services.html?tab=cockpit';
  });
}

function updateStrategicMatrix() {
  const blueprintFocus = document.getElementById('blueprint-focus');
  const blueprintPoints = document.getElementById('blueprint-points');
  const stepsContainer = document.getElementById('blueprint-steps-container');

  if (!blueprintFocus) return;

  let focusPercent = 0;
  let expectedPoints = 0;
  let sequenceSteps = [];

  if (hoursSliderValue <= 12) {
    focusPercent = 95;
    if (selectedPanicState === 'MELTDOWN') {
      expectedPoints = 78;
      sequenceSteps = [
        "Do a 15-Min Focused Study Sprint on invariants and ignore footnotes.",
        "Open 'Expected Replica Models' & ignore everything except traps.",
        "Read core Kernel Synchronisation / Ratio Test model proofs."
      ];
    } else {
      expectedPoints = 85;
      sequenceSteps = [
        "Review first 2 priority cards with GUARANTEED probability flags.",
        "Practice Model Exam Question 1 & disregard theoretical derivations.",
        "Activate high pulse coping breathing tracker to balance attention."
      ];
    }
  } else if (hoursSliderValue <= 24) {
    focusPercent = 85;
    if (selectedPanicState === 'MELTDOWN') {
      expectedPoints = 88;
      sequenceSteps = [
        "Initiate 25-Min Focus Sprint immediately on core equations.",
        "Reveal definitions on all 3 priority concept summaries.",
        "Compare Model Exam Answers for the highest score targets."
      ];
    } else {
      expectedPoints = 94;
      sequenceSteps = [
        "Systematically review 100% of selected subject distilled notes.",
        "Self-evaluate using 2 representative sample replica questions.",
        "Access active peer classroom chat to secure high-hit codes."
      ];
    }
  } else {
    focusPercent = 65;
    expectedPoints = 98;
    sequenceSteps = [
      "Process full concept files tagged Critical / High probability.",
      "Verify step proofs for all expected models twice.",
      "Participate in mock classroom war room discussion feeds."
    ];
  }

  // Set metrics text
  blueprintFocus.textContent = `-${focusPercent}%`;
  blueprintPoints.textContent = `~${expectedPoints}%`;

  // Draw steps
  if (stepsContainer) {
    stepsContainer.innerHTML = sequenceSteps.map((step, index) => `
      <div class="flex gap-3.5 items-start bg-white border border-zinc-200 p-3.5 rounded-none shadow-sm">
        <span class="font-mono font-bold bg-zinc-950 text-brand-yellow w-5.5 h-5.5 rounded-none flex items-center justify-center shrink-0 text-xs">
          ${index + 1}
        </span>
        <span class="font-sans text-xs text-stone-700 font-medium leading-relaxed">
          ${step}
        </span>
      </div>
    `).join('');
  }
}

// ==========================================
// 4. ACTIVE COCKPIT WORKSPACE SYSTEMS
// ==========================================
function initCockpitControls() {
  const selectEl = document.getElementById('workspace-subject-select');
  const tabNotesBtn = document.getElementById('cram-tab-notes');
  const tabQuesBtn = document.getElementById('cram-tab-questions');
  const tabGroupBtn = document.getElementById('cram-tab-groups');

  if (!selectEl) return;

  // Retrieve saved calculator state if any
  const savedSubjectId = sessionStorage.getItem('selectedSubjectId');
  if (savedSubjectId) {
    selectedSubjectId = savedSubjectId;
    sessionStorage.removeItem('selectedSubjectId'); // clean setup
  }

  // Populate Dropdown selector
  selectEl.innerHTML = studySubjects.map(sub => `
    <option value="${sub.id}">${sub.code} - ${sub.name.split(':')[0]}</option>
  `).join('');

  selectEl.value = selectedSubjectId;

  selectEl.addEventListener('change', (e) => {
    triggerSubjectShift(e.target.value);
  });

  // Tab trigger bindings
  tabNotesBtn?.addEventListener('click', () => switchSubCramTab('notes'));
  tabQuesBtn?.addEventListener('click', () => switchSubCramTab('questions'));
  tabGroupBtn?.addEventListener('click', () => switchSubCramTab('groups'));

  // Preset countdown timers listener
  document.querySelectorAll('.timer-preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const minsAttr = btn.getAttribute('data-time');
      if (minsAttr) {
        setPresetTimer(parseInt(minsAttr));
        // Remap CSS focus active state
        document.querySelectorAll('.timer-preset-btn').forEach(b => {
          b.className = "timer-preset-btn font-mono text-[10px] font-bold uppercase tracking-wider text-black border border-zinc-300 hover:border-black px-2.5 py-1.5 cursor-pointer bg-white rounded-none";
        });
        btn.className = "timer-preset-btn font-mono text-[10px] font-bold uppercase tracking-wider text-black border border-black bg-zinc-100 px-2.5 py-1.5 cursor-pointer rounded-none";
      }
    });
  });

  // Timer play toggle
  const timerToggleBtn = document.getElementById('timer-toggle-btn');
  timerToggleBtn?.addEventListener('click', () => {
    toggleCramTimer();
  });

  // Also open the Cockpit automatically if requested in the URL queries
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('tab') === 'cockpit') {
    launchInteractiveCockpit();
  }
}

function triggerSubjectShift(subjectId) {
  selectedSubjectId = subjectId;
  const selectEl = document.getElementById('workspace-subject-select');
  if (selectEl) selectEl.value = subjectId;
  renderActiveSubjectWorkspace();
}

function switchSubCramTab(target) {
  activeCramTab = target;
  
  const tabNotesBtn = document.getElementById('cram-tab-notes');
  const tabQuesBtn = document.getElementById('cram-tab-questions');
  const tabGroupBtn = document.getElementById('cram-tab-groups');

  const containerNotes = document.getElementById('cram-notes-view');
  const containerQues = document.getElementById('cram-questions-view');
  const containerGroups = document.getElementById('cram-groups-view');

  // Reset tab button states classes
  const tabBtns = [tabNotesBtn, tabQuesBtn, tabGroupBtn];
  tabBtns.forEach(btn => {
    if (btn) {
      btn.className = "cram-sub-tab flex-1 py-3 text-center font-display text-xs font-bold uppercase transition-all duration-150 flex items-center justify-center gap-2 border-r border-zinc-100 cursor-pointer text-zinc-500 hover:bg-zinc-50 rounded-none";
    }
  });

  // Activate CSS class mapping
  const activeBtn = target === 'notes' ? tabNotesBtn : (target === 'questions' ? tabQuesBtn : tabGroupBtn);
  if (activeBtn) {
    activeBtn.className = "cram-sub-tab flex-1 py-3 text-center font-display text-xs font-bold uppercase transition-all duration-150 flex items-center justify-center gap-2 border-r border-zinc-100 cursor-pointer bg-black text-white rounded-none";
  }

  // Toggle View sheets
  if (containerNotes) {
    if (target === 'notes') containerNotes.classList.remove('hidden');
    else containerNotes.classList.add('hidden');
  }

  if (containerQues) {
    if (target === 'questions') containerQues.classList.remove('hidden');
    else containerQues.classList.add('hidden');
  }

  if (containerGroups) {
    if (target === 'groups') containerGroups.classList.remove('hidden');
    else containerGroups.classList.add('hidden');
  }
}

function renderActiveSubjectWorkspace() {
  const subjectNameHeader = document.getElementById('cram-subject-name');
  const flashcardsBox = document.getElementById('cram-flashcards-list');
  const questionsBox = document.getElementById('cram-questions-list');

  const subject = studySubjects.find(s => s.id === selectedSubjectId) || studySubjects[0];

  if (subjectNameHeader) {
    subjectNameHeader.textContent = `Active Subject: ${subject.name}`;
  }

  // 1. Render priority notes/flashcards
  if (flashcardsBox) {
    flashcardsBox.innerHTML = subject.flashcards.map((f) => {
      let pillBg = 'bg-red-50 text-red-700 border-red-200';
      if (f.probability === 'GUARANTEED') {
        pillBg = 'bg-yellow-50 text-yellow-850 border-yellow-300 font-extrabold';
      } else if (f.probability === 'HIGH') {
        pillBg = 'bg-slate-50 text-slate-700 border-slate-200';
      }

      return `
        <div class="border border-zinc-200 p-5 bg-white relative hover:border-black transition-all shadow-sm rounded-none" id="card-${f.id}">
          <div class="flex flex-col sm:flex-row justify-between items-start gap-3 pb-3 mb-3 border-b border-zinc-100">
            <div>
              <span class="font-mono text-[9px] uppercase tracking-widest text-zinc-400 font-bold block">${f.topic}</span>
              <h4 class="font-display text-sm font-black uppercase text-black mt-1">${f.concept}</h4>
            </div>
            <span class="font-mono text-[9px] uppercase tracking-wide border px-2.5 py-1 shrink-0 ${pillBg} rounded-none">
              ${f.probability} KEY
            </span>
          </div>

          <div id="card-desc-${f.id}" class="hidden py-1 text-xs text-stone-700 font-sans leading-relaxed pt-2 border-t border-dashed border-zinc-100 mt-2 animate-fade-in">
            ${f.definition}
          </div>

          <div class="flex justify-end mt-4">
            <button onclick="toggleCardReveal('${f.id}')" id="card-btn-${f.id}" class="font-display text-[10px] font-bold uppercase border border-black px-4 py-2 hover:bg-neutral-50 cursor-pointer active:scale-97 bg-white rounded-none">
              Reveal Formulation
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  // 2. Render realistic replicas
  if (questionsBox) {
    questionsBox.innerHTML = subject.questions.map((q, index) => {
      return `
        <div class="border border-zinc-200 p-6 bg-slate-50 select-text transition-all hover:border-black shadow-sm rounded-none" id="quest-${q.id}">
          <div class="flex justify-between items-center pb-3 border-b border-zinc-200 mb-4 select-none">
            <span class="font-mono text-[10px] bg-black text-brand-yellow px-2 py-1 font-bold rounded-none">REPLICA MODEL ${index + 1}</span>
            <span class="font-mono text-[10px] text-zinc-450 font-bold uppercase tracking-wider">${q.category}</span>
          </div>

          <p class="font-sans text-xs sm:text-sm font-bold text-black mb-4 select-text">
            ${q.question}
          </p>

          <div id="quest-answer-${q.id}" class="hidden space-y-4 pt-4 border-t border-dashed border-zinc-200 animate-fade-in">
            <div class="bg-white border-l-4 border-green-600 p-4 font-sans text-xs sm:text-[13px] text-zinc-800 leading-relaxed whitespace-pre-wrap select-text shadow-sm">
              <strong class="font-display text-[10px] uppercase font-bold text-green-700 tracking-wide block mb-1">PROVEN MODEL ANSWER:</strong>
              ${q.answer}
            </div>

            <div class="bg-red-50 border border-red-200 p-4 flex gap-3 select-none rounded-none">
              <svg class="w-5 h-5 text-red-600 shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
              <div>
                <strong class="font-mono text-[10px] text-red-850 uppercase tracking-widest block font-bold">THE EXAM TRAP ZONE:</strong>
                <p class="font-sans text-[11px] text-stone-700 leading-relaxed mt-0.5">${q.trap}</p>
              </div>
            </div>
          </div>

          <div class="flex justify-between items-center mt-5 select-none">
            <div class="text-[10px] text-zinc-400 font-mono uppercase tracking-wide">
              PROBABILITY WEIGHT: <span class="font-extrabold text-black font-mono">${q.probabilityScore}%</span>
            </div>
            <button onclick="toggleQuestReveal('${q.id}')" id="quest-btn-${q.id}" class="font-display text-[10px] font-bold uppercase bg-white border border-black px-4 py-2 hover:bg-neutral-50 cursor-pointer active:scale-97 rounded-none">
              Compare Model Answer
            </button>
          </div>
        </div>
      `;
    }).join('');
  }
}

// 5. FLASHCARD REVEAL UTILITIES
function toggleCardReveal(cardId) {
  const desc = document.getElementById(`card-desc-${cardId}`);
  const btn = document.getElementById(`card-btn-${cardId}`);
  if (desc && btn) {
    const isHidden = desc.classList.contains('hidden');
    if (isHidden) {
      desc.classList.remove('hidden');
      btn.textContent = "Collapse Axiom";
      btn.className = "font-display text-[10px] font-bold uppercase bg-black text-white border border-black px-4 py-2 cursor-pointer rounded-none";
    } else {
      desc.classList.add('hidden');
      btn.textContent = "Reveal Formulation";
      btn.className = "font-display text-[10px] font-bold uppercase bg-white border border-black px-4 py-2 hover:bg-neutral-50 cursor-pointer rounded-none";
    }
  }
}

function toggleQuestReveal(questId) {
  const answer = document.getElementById(`quest-answer-${questId}`);
  const btn = document.getElementById(`quest-btn-${questId}`);
  if (answer && btn) {
    const isHidden = answer.classList.contains('hidden');
    if (isHidden) {
      answer.classList.remove('hidden');
      btn.textContent = "Collapse Answers";
      btn.className = "font-display text-[10px] font-bold uppercase bg-black text-white border border-black px-4 py-2 cursor-pointer rounded-none";
    } else {
      answer.classList.add('hidden');
      btn.textContent = "Compare Model Answer";
      btn.className = "font-display text-[10px] font-bold uppercase bg-white border border-black px-4 py-2 hover:bg-neutral-50 cursor-pointer rounded-none";
    }
  }
}

// Export reveal triggers to global window namespace so inline onlicks on dynamic code work immediately
window.toggleCardReveal = toggleCardReveal;
window.toggleQuestReveal = toggleQuestReveal;

// 6. FOCUS SPRINT POMODORO TIMER WORKSPACE
function setPresetTimer(minutes) {
  if (isTimerActive) {
    toggleCramTimer();
  }
  timerSecondsLeft = minutes * 60;
  updateTimerVisualDisplay();
}

function toggleCramTimer() {
  const btn = document.getElementById('timer-toggle-btn');
  if (!btn) return;

  const label = btn.querySelector('span');
  const iconHolder = btn.querySelector('svg');

  if (isTimerActive) {
    isTimerActive = false;
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
    if (label) label.textContent = "Resynchronize Sprint";
    if (iconHolder) {
      iconHolder.setAttribute('class', "w-3.5 h-3.5 fill-black");
      iconHolder.innerHTML = `<polygon points="5 3 19 12 5 21 5 3"></polygon>`;
    }
  } else {
    isTimerActive = true;
    if (label) label.textContent = "Pause Current Block";
    if (iconHolder) {
      iconHolder.setAttribute('class', "w-3.5 h-3.5");
      iconHolder.innerHTML = `<rect x="6" y="4" width="4" height="16" fill="black"></rect><rect x="14" y="4" width="4" height="16" fill="black"></rect>`;
    }

    timerInterval = setInterval(() => {
      if (timerSecondsLeft > 0) {
        timerSecondsLeft--;
        updateTimerVisualDisplay();
      } else {
        isTimerActive = false;
        if (timerInterval) {
          clearInterval(timerInterval);
          timerInterval = null;
        }
        if (label) label.textContent = "Sprint Completed! Restart";
        if (iconHolder) {
          iconHolder.setAttribute('class', "w-3.5 h-3.5 fill-black");
          iconHolder.innerHTML = `<polygon points="5 3 19 12 5 21 5 3"></polygon>`;
        }
        alert("Focus block completed successfully! Take a brief cognitive intermission of 5 minutes.");
      }
    }, 1000);
  }
}

function updateTimerVisualDisplay() {
  const displayNumbers = document.getElementById('timer-numbers-display');
  const progressBar = document.getElementById('timer-progress-bar');

  if (!displayNumbers) return;

  const mins = Math.floor(timerSecondsLeft / 60);
  const secs = timerSecondsLeft % 60;
  
  const formattedMins = mins.toString().padStart(2, '0');
  const formattedSecs = secs.toString().padStart(2, '0');
  
  displayNumbers.textContent = `${formattedMins}:${formattedSecs}`;

  // Calculate proportional width
  let denominator = 25 * 60;
  if (timerSecondsLeft > 25 * 60) denominator = 45 * 60;
  else if (timerSecondsLeft <= 10 * 60) denominator = 10 * 60;

  const pct = Math.min(100, Math.max(0, (timerSecondsLeft / denominator) * 100));
  if (progressBar) progressBar.style.width = `${pct}%`;
}


// 7. NEURO CALMING BOX BREATHER
function initBreatherControls() {
  const toggleBtn = document.getElementById('breather-toggle-btn');
  toggleBtn?.addEventListener('click', toggleBreatherGuide);
}

function toggleBreatherGuide() {
  const toggleBtn = document.getElementById('breather-toggle-btn');
  const activeSpace = document.getElementById('breather-active-space');
  const staticSpace = document.getElementById('breather-static-space');

  if (!toggleBtn) return;

  if (isBreatherActive) {
    isBreatherActive = false;
    if (breatherInterval) {
      clearInterval(breatherInterval);
      breatherInterval = null;
    }
    
    activeSpace?.classList.add('hidden');
    staticSpace?.classList.remove('hidden');

    toggleBtn.textContent = "Activate Box Breathing";
    toggleBtn.className = "w-full font-display text-xs font-bold uppercase py-3.5 bg-white text-black border-2 border-dashed border-black hover:bg-neutral-50 cursor-pointer text-center rounded-none shadow-sm";
  } else {
    isBreatherActive = true;
    breatherStep = 0;
    breatherSeconds = 4;
    
    activeSpace?.classList.remove('hidden');
    staticSpace?.classList.add('hidden');

    toggleBtn.textContent = "Abort Calming Guide";
    toggleBtn.className = "w-full font-display text-xs font-black uppercase py-3.5 bg-white text-red-600 border-2 border-dashed border-red-500 hover:bg-red-50 cursor-pointer text-center rounded-none shadow-sm";

    updateBreatherDisplay();

    breatherInterval = setInterval(() => {
      breatherSeconds--;
      if (breatherSeconds <= 0) {
        breatherStep = (breatherStep + 1) % 4;
        breatherSeconds = 4; // reset cycle
      }
      updateBreatherDisplay();
    }, 1000);
  }
}

function updateBreatherDisplay() {
  const secDisplay = document.getElementById('breather-seconds-display');
  const stepLabel = document.getElementById('breather-instructions-step');
  const stepSubtext = document.getElementById('breather-instructions-subtext');
  const circleBg = document.getElementById('breather-circle-bg');

  if (secDisplay) secDisplay.textContent = breatherSeconds.toString();

  let stepText = '';
  let subText = '';
  let ringClasses = '';

  if (breatherStep === 0) {
    stepText = "Inhale deeply 🌬️";
    subText = "Fill your lungs calmly";
    ringClasses = "w-28 h-28 bg-yellow-400/25 border-yellow-500 breathing-pulse";
  } else if (breatherStep === 1) {
    stepText = "Hold steady ⏳";
    subText = "Relax your shoulders";
    ringClasses = "w-28 h-28 bg-yellow-400/40 border-black border-2";
  } else if (breatherStep === 2) {
    stepText = "Exhale slowly 💨";
    subText = "Release academic pressure";
    ringClasses = "w-16 h-16 bg-yellow-450/10 border-yellow-300";
  } else {
    stepText = "Hold lungs empty 🧘";
    subText = "Reset the cognitive stack";
    ringClasses = "w-14 h-14 bg-zinc-200 border-zinc-400";
  }

  if (stepLabel) stepLabel.textContent = stepText;
  if (stepSubtext) stepSubtext.textContent = subText;
  if (circleBg) {
    circleBg.className = `absolute rounded-full border transition-all duration-1000 flex items-center justify-center ${ringClasses}`;
  }
}


// 8. CRASH GROUP ACTIVE CHATS (SIMULATED DUPLEX FEEDS)
function initChatSystem() {
  const form = document.getElementById('cockpit-chat-form');
  const inputEl = document.getElementById('cockpit-chat-input');

  if (!form || !inputEl) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const txt = inputEl.value.trim();
    if (txt) {
      submitUserChat(txt);
      inputEl.value = '';
    }
  });

  renderChatRoomUpdates();
}

function submitUserChat(message) {
  const userMsg = {
    id: `u-msg-${Date.now()}`,
    user: 'Student_Hero (You)',
    message: message,
    timestamp: 'JUST NOW'
  };

  localMessagesList.push(userMsg);
  renderChatRoomUpdates();

  // Automatic peer simulated replies based on keyword mapping
  setTimeout(() => {
    let responseText = "Agreed! Keep studying. Reviewing the priority notes will help secure crucial marks.";
    const low = message.toLowerCase();

    if (low.includes('sjf') || low.includes('burst') || low.includes('schedule')) {
      responseText = "Right! Remember average wait time for SJF starts at 0 for the first process only in non-preemptive setups. Check arrival times carefully.";
    } else if (low.includes('deadlock') || low.includes('coffman') || low.includes('banker')) {
      responseText = "Exactly. Hold and Wait is broken by pre-allocating. Unsafe is NOT deadlock on the exam paper, that is a classic trick.";
    } else if (low.includes('sn1') || low.includes('sn2') || low.includes('organic')) {
      responseText = "Acetone makes SN2 fly. No hydrogen shields around iodide! Frontside is blocked so it is always backside Walden inversion.";
    } else if (low.includes('series') || low.includes('ratio') || low.includes('converge')) {
      responseText = "Yes, endpoints can fail individually even if radius L < 1 bounds convergence. Always test endpoints c - R and c + R individually.";
    }

    const peerMsg = {
      id: `p-msg-${Date.now()}`,
      user: 'OS_God_Pro',
      message: responseText,
      timestamp: 'JUST NOW'
    };

    localMessagesList.push(peerMsg);
    renderChatRoomUpdates();
  }, 1600);
}

function renderChatRoomUpdates() {
  const feed = document.getElementById('cockpit-chat-feed');
  if (!feed) return;

  feed.innerHTML = localMessagesList.map(m => {
    const isMe = m.user.includes('You');
    const borderStyle = isMe ? 'bg-zinc-950 text-white self-end border border-black' : 'bg-white text-stone-850 border border-zinc-200';
    const alignStyle = isMe ? 'items-end ml-auto' : 'items-start';
    const userStyle = isMe ? 'text-brand-yellow font-extrabold' : 'text-stone-900 font-extrabold';

    return `
      <div class="flex flex-col gap-1 w-full max-w-[85%] animate-fade-in ${alignStyle}">
        <div class="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-wider text-zinc-400">
          <span class="${userStyle}">${m.user}</span>
          <span>•</span>
          <span>${m.timestamp}</span>
        </div>
        <div class="p-3 text-xs leading-relaxed font-sans ${borderStyle} rounded-none shadow-sm">
          ${m.message}
        </div>
      </div>
    `;
  }).join('');

  // Push to bottom
  feed.scrollTop = feed.scrollHeight;
}


// ==========================================
// 9. CONTACT FORM INTERCEPTOR & RECEIPT ENGINE
// ==========================================
function initContactForm() {
  const form = document.getElementById('emergency-contact-form');
  const configGrid = document.getElementById('contact-form-container');
  const receiptGrid = document.getElementById('contact-success-container');

  const nameReceipt = document.getElementById('receipt-sender');
  const subjReceipt = document.getElementById('receipt-topic');
  const hashReceipt = document.getElementById('receipt-hash');
  const revertBtn = document.getElementById('contact-reset-btn');

  if (!form || !configGrid || !receiptGrid) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('c-name').value.trim();
    const email = document.getElementById('c-email').value.trim();
    const urgency = document.getElementById('c-urgency').value;
    const subject = document.getElementById('c-theme').value;

    // Fill the Simulated Diagnostic output slips
    if (nameReceipt) nameReceipt.textContent = `RECIPENT DISPATCHER: ${name.toUpperCase()} <${email.toUpperCase()}>`;
    if (subjReceipt) subjReceipt.textContent = `CRITICAL FOCUS CODE: ${subject} (${urgency} RISK)`;
    if (hashReceipt) hashReceipt.textContent = `SECURE FLOW SEQUENCE: #LM-${Math.floor(100000 + Math.random() * 900000)}`;

    configGrid.classList.add('hidden');
    receiptGrid.classList.remove('hidden');
  });

  revertBtn?.addEventListener('click', () => {
    configGrid.classList.remove('hidden');
    receiptGrid.classList.add('hidden');
    form.reset();
  });
}


// ==========================================
// 10. LAUNCHER DECOUPLED TAB TOGGLE (COMPACT CABIN)
// ==========================================
function launchInteractiveCockpit() {
  const defaultHeader = document.getElementById('services-default-overview');
  const cabinWorkspace = document.getElementById('services-cabin-workspace');
  if (defaultHeader && cabinWorkspace) {
    defaultHeader.classList.add('hidden');
    cabinWorkspace.classList.remove('hidden');
    // Scroll cleanly to cockpit workspace anchor
    cabinWorkspace.scrollIntoView({ behavior: 'smooth' });
  }
}

function exitInteractiveCockpit() {
  const defaultHeader = document.getElementById('services-default-overview');
  const cabinWorkspace = document.getElementById('services-cabin-workspace');
  if (defaultHeader && cabinWorkspace) {
    defaultHeader.classList.remove('hidden');
    cabinWorkspace.classList.add('hidden');
    // Scroll cleanly to the services overview top
    defaultHeader.scrollIntoView({ behavior: 'smooth' });
  }
}

// Bind globals for toggle calls in HTML buttons
window.launchInteractiveCockpit = launchInteractiveCockpit;
window.exitInteractiveCockpit = exitInteractiveCockpit;
