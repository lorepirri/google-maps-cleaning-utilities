// This script is not really necessary, 
// there is an option "Delete all Location History"
// in the settings of the Location History.

// Google Location History
// 1. Go to Location History https://www.google.com/maps/timeline
// 2. Open the Developer tools (F12, on Firefox or Chrome)
// 3. Open the Console tab
// 4. Copy Paste this script
// 5. Type pleaseDeleteLocationHistoryPlease(), wait for it to be done.

var pleaseDeleteLocationHistoryPlease = function () {

    var goToPreviousDay = function() {
        [...document.querySelectorAll('i[data-tooltip=" Go to the previous day "]')].forEach( (a) => { 
            a.style.border = "thick solid red";
            a.click(); 
        });
        setTimeout(removeMe, 5000);
    }

    var confirmDeleteDay = function() {
        [...document.querySelectorAll('button[name="ok"]')].forEach( (a) => { 
            a.style.border = "thick solid red";
            a.click(); 
        });
        setTimeout(goToPreviousDay, 5000);
    }

    var removeMe = function() {
        
        var elem = [...document.querySelectorAll('i[data-tooltip=" Delete day "]')][0];
        if (elem) {

            elem.style.border = "thick solid red"; 
            elem.click();

            setTimeout(confirmDeleteDay, 600);
        
        } else {
            clearTimeout();
            console.log('DONE. You did a favor to your past and present self. Now, disable all of the Location History from your account, please.');
        }  
    };

    removeMe();
}
