// Google Maps - Delete All Contributions
// 1. Go to Google Maps, on your desktop
// 2. Open the left tab menu
// 3. Click on "Your contributions"
// 4. Select the tab "Photos" or "Reviews"
// 5. Scroll down until all or most of all pictures (or reviews) are shown in list
// 6. Open the Developer tools (F12, on Firefox or Chrome)
// 7. Open the Console tab
// 8. Copy Paste this script
// 9. Type pleaseDeleteContributionsPlease(), wait for it to be done.
  
var pleaseDeleteContributionsPlease = function () {

    var confirmDeleteContribution = function() {
        [...document.querySelectorAll('button[class~="blue-button-text"]')].forEach( (a) => { 
            a.style.border = "thick solid red";
            a.click(); 
        });
        setTimeout(removeMe, 5000);
    }
        
    var deleteContribution = function() {
        [...document.querySelectorAll('div[role="menuitem"][class="action-menu-entry"] > div[class="action-menu-entry-text"]')].forEach( (a) => { 
            if (a.innerHTML.includes("Delete")
                || a.innerHTML.includes("Elimina")) {
                a.parentElement.style.border = "thick solid red";
                a.parentElement.click(); 
            }
        });
        setTimeout(confirmDeleteContribution, 600);
    }

    var removeMe = function() {
        
        var elem = items[currentIndex];
        if (currentIndex < numberOfItems && elem) {
            
            elem.style.border = "thick solid red"; 
            elem.click();

            // goes to the next item
            currentIndex = currentIndex + 1;
            console.log('task:', currentIndex, 'of', numberOfItems);
            // set to delete the item
            setTimeout(deleteContribution, 600);
        
        } else {
            clearTimeout();
            console.log('DONE. You did a favor to your past and present self. Now, go print one of your favorite pictures and hang it on a wall, please.');
        }  
    };

    // these are used inside the above functions
    var currentIndex = 0; 
    var items = [...document.querySelectorAll('button[class*="action-menu"]')];
    var numberOfItems = [...document.querySelectorAll('button[class*="action-menu"]')].length;
    // start iterating through `items`
    removeMe();
}
