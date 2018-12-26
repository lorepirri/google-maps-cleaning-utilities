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

    var confirmDeleteContribution = function(idx) {
        [...document.querySelectorAll('button[class~="blue-button-text"]')].forEach( (a) => { 
            if (a.innerHTML === "Delete") {
                a.style.border = "thick solid red";
                a.click(); 
            }
        });
        setTimeout(removeMe, 5000, idx);
    }
        
    var deleteContribution = function(idx) {
        [...document.querySelectorAll('div[class~="context-menu-entry"] div[class~="context-menu-entry-text"]')].forEach( (a) => { 
            if (a.innerHTML === "Delete this photo" 
                || a.innerHTML === "Delete this video"
                || a.innerHTML === "Delete review") {
                a.parentElement.style.border = "thick solid red";
                a.parentElement.click(); 
            }
        });
        setTimeout(confirmDeleteContribution, 600, idx);
    }

    var removeMe = function(idx) {
        
        var elem = [...document.querySelectorAll('button[aria-label*="actions"]')][0];
        if (idx < items && elem) {

            elem.style.border = "thick solid red"; 
            elem.click();

            console.log('task:', idx+1, 'of', items);

            setTimeout(deleteContribution, 600, idx+1);
        
        } else {
            clearTimeout();
            console.log('DONE. You did a favor to your past and present self. Now, go print one of your favorite pictures and hang it on a wall, please.');
        }  
    };

    var idx=0; 
    var items = [...document.querySelectorAll('button[aria-label*="actions"]')].length;
    removeMe(idx);
}
