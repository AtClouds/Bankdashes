 const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

btn.addEventListener('click', () => {
    btn.classList.toggle('open'); 
    nav.classList.toggle('flex'); 
    nav.classList.toggle('hidden'); 
});
 
 

 
 // SLIDER
 document.querySelectorAll('.slider').forEach(slider => {
  const slides = slider.querySelectorAll('div');
  const totalSlides = slides.length;
  let current = 0, startX = 0, endX = 0;

  function updateSlide() {
    slider.style.transform = `translateX(-${current * 100}%)`;
  }

  slider.addEventListener('touchstart', (e) => startX = e.touches[0].clientX);
  slider.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) current = (current + 1) % totalSlides;
    else if (endX - startX > 50) current = (current - 1 + totalSlides) % totalSlides;
    updateSlide();
  });
});

 // SLIDER-TWO
 document.querySelectorAll('.sliding').forEach(slider => {
  const slides = slider.querySelectorAll('div');
  const totalSlides = slides.length;
  let current = 0, startX = 0, endX = 0;

  function updateSlide() {
    slider.style.transform = `translateX(-${current * 100}%)`;
  }

  slider.addEventListener('touchstart', (e) => startX = e.touches[0].clientX);
  slider.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) current = (current + 1) % totalSlides;
    else if (endX - startX > 50) current = (current - 1 + totalSlides) % totalSlides;
    updateSlide();
  });
});




    // Scroll Reveal
 const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));



// Active Indicator
const tabs = document.querySelectorAll('.tab-bar');

tabs.forEach(tab => {
  tab.addEventListener('click', (e) => {
    e.preventDefault();
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});



// Country
const countries = [
    "Afghanistan","Albania","Algeria","Andorra","Angola","Argentina","Armenia","Australia","Austria","Azerbaijan",
    "Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia",
    "Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon",
    "Canada","Cape Verde","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo (Democratic Republic)",
    "Congo (Republic)","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic",
    "Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland","France",
    "Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana",
    "Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy",
    "Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyzstan",
    "Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg",
    "Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco",
    "Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Zealand",
    "Nicaragua","Niger","Nigeria","North Korea","North Macedonia","Norway","Oman","Pakistan","Palau","Panama",
    "Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda",
    "Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino",
    "Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore",
    "Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain",
    "Sri Lanka","Sudan","Suriname","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand",
    "Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine",
    "United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu",
    "Vatican City","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"
  ];

  const countryInput = document.getElementById('countryInput');
  const countryDropdown = document.getElementById('countryDropdown');
  const countryList = document.getElementById('countryList');
  const countrySearch = document.getElementById('countrySearch');

  // Populate list
  countries.forEach(country => {
    const li = document.createElement('li');
    li.textContent = country;
    li.className = 'px-4 py-2 hover:bg-blue-100 cursor-pointer';
    countryList.appendChild(li);
  });

  // Toggle dropdown
  countryInput.addEventListener('click', () => {
    countryDropdown.classList.toggle('hidden');
    countrySearch.value = '';
    filterCountries('');
  });

  // Filter countries
  countrySearch.addEventListener('keyup', (e) => {
    filterCountries(e.target.value.toLowerCase());
  });

  function filterCountries(search) {
    const items = countryList.querySelectorAll('li');
    items.forEach(li => {
      li.style.display = li.textContent.toLowerCase().includes(search) ? '' : 'none';
    });
  }

  // Select country
  countryList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
      countryInput.value = e.target.textContent.trim();
      countryDropdown.classList.add('hidden');
    }
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('#countryDropdown') && e.target !== countryInput) {
      countryDropdown.classList.add('hidden');
    }
  });



  // Toggle setting
   document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('bg-black');
      btn.classList.toggle('bg-gray-300');
      const circle = btn.querySelector('span');
      circle.classList.toggle('left-0.5');
      circle.classList.toggle('left-5');
    });
  });


/// Tab Selection 
// Tab Selection 
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-bars");
  const tabContents = document.querySelectorAll("#edit-profile, #preference, #security");

  // Hide all contents except the first one
  tabContents.forEach((content, index) => {
    content.classList.toggle("hidden", index !== 0);
  });

  // ✅ Make the first tab active by default
  if (tabs.length > 0) {
    tabs[0].classList.add("text-primary-text", "font-bold", "border-b-2", "border-primary-text");
  }

  // Add event listeners for tab clicks
  tabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();

      // Remove active styles from all tabs
      tabs.forEach(t => t.classList.remove("text-primary-text", "font-bold", "border-b-2", "border-primary-text"));

      // Add active styles to the clicked tab
      tab.classList.add("text-primary-text", "font-bold", "border-b-2", "border-primary-text");

      // Get the target content
      const targetId = tab.getAttribute("data-target");

      // Show only the matching content
      tabContents.forEach(content => {
        content.classList.toggle("hidden", content.id !== targetId);
      });
    });
  });
});

// Tab Selection (Fixed for mobile vs desktop conflict)
document.addEventListener("DOMContentLoaded", () => {
  const mobileContainer = document.querySelector("#mobile-tabs");
  if (!mobileContainer) return;

  const tabs = Array.from(mobileContainer.querySelectorAll(".tab-bars"));
  const tabContents = Array.from(mobileContainer.querySelectorAll("#edit-profile, #preference, #security"));

  if (!tabs.length || !tabContents.length) return;

  // Show only the first tab by default
  tabContents.forEach((content, index) => {
    content.classList.toggle("hidden", index !== 0);
  });

  tabs.forEach((tab, i) => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();

      tabs.forEach(t =>
        t.classList.remove("text-primary-text", "font-bold", "border-b-2", "border-primary-text")
      );
      tab.classList.add("text-primary-text", "font-bold", "border-b-2", "border-primary-text");

      const targetId = tab.dataset.target;
      tabContents.forEach(content =>
        content.classList.toggle("hidden", content.id !== targetId)
      );
    });
  });

  // ✅ Ensure the first tab appears active visually too
  tabs[0].classList.add("text-primary-text", "font-bold", "border-b-2", "border-primary-text");
});
