(function () {

  //
  // Variables
  //


  //
  // Methods
  //

  let showTab = function(targetTab, targetContent) {
    // Set the tab as selected
    targetTab.setAttribute('aria-selected', 'true');
    targetTab.setAttribute('tab-index', '0');
    targetTab.focus();
    // Show the associated tab content
    targetContent.removeAttribute('hidden');
  }

  let hideTab = function(targetTab) {
    let tabGroup = targetTab.closest('[role="tablist"]');
    let currentTab = tabGroup.querySelector('[role="tab"][aria-selected="true"]');
    let currentContent = document.querySelector(currentTab.hash);
    // Hide the currently active tab and content
    currentTab.setAttribute('aria-selected', 'false');
    currentTab.setAttribute('tab-index', '-1');
    currentContent.setAttribute('hidden', 'hidden');
  }

  let toggleTab = function(targetTab) {
    // If already selected, bail
    if (targetTab.getAttribute('aria-selected') == 'true') return;
    let targetContent = document.querySelector(targetTab.hash);
    console.log('targetContent', targetContent)
    hideTab(targetTab);
    showTab(targetTab, targetContent);
  }

  let switchTab = function(currentTab, key){
    let tabGroup = currentTab.closest('[role="tablist"]');
    let tabs = tabGroup.querySelectorAll('[role="tab"]');
    let length = tabs.length - 1;
    let currentIndex = Array.prototype.indexOf.call(tabs, currentTab);
    console.log('currentIndex', currentIndex)
    let targetIndex;

    if (['ArrowUp', 'ArrowLeft', 'Up', 'Left'].indexOf(key) > -1) {
			targetIndex = map.index < 1 ? length : map.index - 1;
		}
		// Go to next tab
		else if (['ArrowDown', 'ArrowRight', 'Down', 'Right'].indexOf(key) > -1) {
			targetIndex = map.index === length ? 0 : map.index + 1;
		}
		// Go to home
		else if (key === 'Home') {
			targetIndex = 0;
		}
		// Go to end
		else if (key === 'End') {
			targetIndex = length;
		}
		// Toggle the tab
		toggleTab(tabs[targetIndex]);
  }

  let loadHash = function() {
    // If the url has no hash, bail
    if (window.location.hash.length < 1) return;
    let targetTab = document.querySelector(`[role="tab"][href*="${window.location.hash}"]`);
    console.log(targetTab);
    toggleTab(targetTab);
  }


  //
  // Inits & Event Listeners
  //

  // Hash change event listener
  window.addEventListener('hashchange', function() {
    loadHash();
  })

  // Click event listener
  document.addEventListener('click', function(event){
    if (event.target.matches('[role="tab"]')) {
      console.log(event.target)
      toggleTab(event.target);
    }
  })

  // Keydown event listener
  document.addEventListener('keydown', function(event){
    let currentTab = document.activeElement;
    // If focus is not on a tab, bail
    if (!currentTab.matches('[role="tab"]')) return;
    // If not accepted key, bail
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Up', 'Down', 'Left', 'Right', 'Home', 'End'].indexOf(event.key) < 0) return;
    switchTab(currentTab, event.key);
  })


}());
