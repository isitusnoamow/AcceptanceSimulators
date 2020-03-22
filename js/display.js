/** Copyright 2020 **/

// Stores all the data for the letters
// Note: Dates are stored in the YYYY, MM, DD format, but Javascript is weird so the MM is 0 to 11 where 0 is January
var rejection_letters = [
    {
    	title: "UChicago Deferral Letter - December 2019",
     	description: "This was my own deferral letter.",
     	url: "/img/uchicagodef12-18-19.png", 
     	schoolName: "University of Chicago",
     	date: new Date(2019, 11, 18)
    }, 
    {
    	title: "UC Hicago Rejection Letter - March 2010",
    	description: 'Obtained from a <a href="https://realityfail.wordpress.com/">blog</a> filled with rejections.',
    	url: "https://realityfail.files.wordpress.com/2011/03/personalized-rejection-letter.jpg?w=407&h=330&zoom=2",
    	schoolName: "University of Chicago",
    	date: new Date(2010, 2)
    },
    {
        title: "UCHicago Rejection Letter - March 2020",
        description: 'This is my own rejection letter :(',
        url: "/img/uchicagorej03-13-20.png",
        schoolName: "University of Chicago",
        date: new Date(2020, 2, 13)
    }, 
    {
    	title: "MIT Rejection - 2018",
    	description: 'Quora <a href="https://www.quora.com/What-does-your-college-acceptance-or-rejection-letter-looks-like">link</a>.',
    	url: "https://qph.fs.quoracdn.net/main-qimg-c1cec19b1f4def8a7eb7bfae000d2877",
    	schoolName: "Massachusetts Institute of Technology",
    	date: new Date(2018, 0)
    },
    {
        title: "MIT Rejection - 2019",
        description: '<a href="https://www.reddit.com/r/ApplyingToCollege/comments/b13iyc/can_someone_send_me_the_mit_rejection_letter_when/">Reddit</a>',
        url: "https://i.imgur.com/vctd8F8.png",
        schoolName: "Massachusetts Institute of Technology",
        date: new Date(2019, 2, 14)
    },
    {
        title: "MIT Rejection - 2020",
        description: 'I got rejected.',
        url: "/img/mitrej03-14-20.png",
        schoolName: "Massachusetts Institute of Technology",
        date: new Date(2020, 2, 14, 1, 59)
    },
    {
        title: "Princeton Rejection - March 2017",
        description: '<a href="https://www.quora.com/What-does-the-rejection-letter-from-Oxbridge-Ivy-league-look-like">Quora</a>',
        url: "https://qph.fs.quoracdn.net/main-qimg-6a8aca72b90caccd148a33bc31930cd9.webp",
        schoolName: "Princeton University",
        date: new Date(2017, 2, 30)
    },
    {
        title: "Columbia Rejection - March 2017",
        description: '<a href="https://www.quora.com/What-does-the-rejection-letter-from-Oxbridge-Ivy-league-look-like">Quora</a>',
        url: "https://qph.fs.quoracdn.net/main-qimg-afe3e175d82169f506616f820b79d1fe.webp",
        schoolName: "Columbia University",
        date: new Date(2017, 2)
    },
    {
        title: "Harvard Rejection - March 2017",
        description: '<a href="https://www.quora.com/What-does-the-rejection-letter-from-Oxbridge-Ivy-league-look-like">Quora</a>',
        url: "https://qph.fs.quoracdn.net/main-qimg-c2c34158d90073b239fd90308d4662f2.webp",
        schoolName: "Harvard University",
        date: new Date(2017, 2)
    },
    {
        title: "Yale Waitlist Rejection - May 2018",
        description: '<a href="https://www.reddit.com/r/ApplyingToCollege/comments/9s3lg2/anyone_have_a_picture_of_a_tufts_rejection_letter/">Reddit</a>',
        url: "https://i.imgur.com/0wLVloR.png",
        schoolName: "Yale University",
        date: new Date(2018, 4, 11)
    },
    {
        title: "Yale Waitlisted - March 2018",
        description: '<a href="https://www.reddit.com/r/ApplyingToCollege/comments/9s3lg2/anyone_have_a_picture_of_a_tufts_rejection_letter/">Reddit</a>',
        url: "https://i.imgur.com/nUics1Z.png",
        schoolName: "Yale University",
        date: new Date(2018, 2, 28)
    },
    {
        title: "Yale Rejection - March 2017",
        description: '<a href="https://www.quora.com/What-does-the-rejection-letter-from-Oxbridge-Ivy-league-look-like">Quora</a>',
        url: "https://qph.fs.quoracdn.net/main-qimg-0fc30fd30402e4f895035d56ac7a29d0.webp",
        schoolName: "Yale University",
        date: new Date(2017, 2)
    },
    {
        title: "Yale Rejection - April 2014",
        description: '<a href="https://www.reddit.com/r/ApplyingToCollege/comments/7h0gzy/looked_up_a_yale_rejection_letter_to_prepare/">Reddit</a>',
        url: "https://i.redd.it/qlzx8tlymf101.jpg",
        schoolName: "Yale University",
        date: new Date(2014, 3, 10)
    },
    {
        title: "Princeton Rejection - March 2007",
        description: 'A <a href="https://idrawsometimes.wordpress.com/tag/princeton/">blog</a>',
        url: "https://idrawsometimes.files.wordpress.com/2011/03/princeton-rejection.jpg",
        schoolName: "Princeton University",
        date: new Date(2007, 2, 29)
    },
    {
        title: "Tufts Rejection - 2018",
        description: '<a href="https://www.reddit.com/r/ApplyingToCollege/comments/9s3lg2/anyone_have_a_picture_of_a_tufts_rejection_letter/">Reddit</a>',
        url: "https://i.imgur.com/Eg48j9T.jpg",
        schoolName: "Tufts University",
        date: new Date(2018, 0)
    },
    {
        title: "Stanford Rejection - March 2010",
        description: 'A <a href="https://theshallots.wordpress.com/page/2/">blog</a>',
        url: "https://t3nsor.files.wordpress.com/2010/03/stanford_rejection1.png",
        schoolName: "Stanford University",
        date: new Date(2010, 2, 26)
    },
    {
        title: "Stanford Rejection - 2018",
        description: '<a href="https://www.reddit.com/r/ApplyingToCollege/comments/9s3lg2/anyone_have_a_picture_of_a_tufts_rejection_letter/">Reddit</a>',
        url: "https://i.imgur.com/1QP5Qt9.png?1",
        schoolName: "Stanford University",
        date: new Date(2018, 0)
    },
    {
        title: "Dartmouth ED Rejection - 2018",
        description: '<a href="https://www.reddit.com/r/ApplyingToCollege/comments/9s3lg2/anyone_have_a_picture_of_a_tufts_rejection_letter/">Reddit</a>',
        url: "https://i.imgur.com/zsPUefD.png",
        schoolName: "Dartmouth College",
        date: new Date(2018, 0)
    },
    {
        title: "Georgia Tech Rejection - 2020",
        description: 'I got rejected',
        url: "/img/gtrej03-14-20.png",
        schoolName: "Georgia Institute of Technology",
        date: new Date(2020, 2, 14, 1, 59)
    },
    {
        title: "Georgia Tech Rejection - 2019",
        description: '<a href="">Reddit</a>',
        url: "https://i.imgur.com/RONOSoO.png",
        schoolName: "Georgia Institute of Technology",
        date: new Date(2019, 0)
    },
    {
    	title: "Cornell Rejection - 2018",
    	description: 'Quora <a href="https://www.quora.com/What-does-your-college-acceptance-or-rejection-letter-looks-like">link</a>.',
    	url: "https://qph.fs.quoracdn.net/main-qimg-80d4f0256c66251b12a7e8c31a7e8433",
    	schoolName: "Cornell University",
    	date: new Date(2018, 0)
    },
    {
    	title: "University of Michigan Rejection - 2018",
    	description: 'Quora <a href="https://www.quora.com/What-does-your-college-acceptance-or-rejection-letter-looks-like">link</a>.',
    	url: "https://qph.fs.quoracdn.net/main-qimg-21054efc7c7bdf2b2d8126ed1fd3f02c",
    	schoolName: "University of Michigan",
    	date: new Date(2018, 0)
    },
    {
    	title: "Harvard Rejection - 2014",
    	description: 'Quora <a href="https://www.quora.com/What-does-your-college-acceptance-or-rejection-letter-looks-like">link</a>.',
    	url: "https://qph.fs.quoracdn.net/main-qimg-0314976bbca2b021962600631bb1a8b3",
    	schoolName: "Harvard University",
    	date: new Date(2014, 0)
    },
    {
        title: "UPenn Rejection - March 2017",
        description: '<a href="https://www.quora.com/What-does-the-rejection-letter-from-Oxbridge-Ivy-league-look-like">Quora</a>',
        url: "https://qph.fs.quoracdn.net/main-qimg-ee6c82ce7bdba4545f4dd574194239c3.webp",
        schoolName: "University of Pennsylvania",
        date: new Date(2017, 2, 30)
    },
    {
        title: "Northwestern ED Rejection - December 2016",
        description: 'From <a href="https://imgur.com/gallery/0tPgx">Imgur.com</a>',
        url: "https://i.imgur.com/YbD2UJm.png",
        schoolName: "Northwestern University",
        date: new Date(2017, 2, 30)
    },
    {
        title: "Caltech Rejection - March 1998",
        description: '<a href="https://www.reddit.com/r/ApplyingToCollege/comments/5y54yi/does_anyone_have_a_copy_of_caltechs_rejection/">Reddit</a>',
        url: "https://c1.staticflickr.com/1/54/169308344_89305f83e0_b.jpg",
        schoolName: "California Institute of Technology",
        date: new Date(1998, 2, 21)
    },
    {
        title: "Rice Deferral - December 2011",
        description: '<a href="https://www.reddit.com/r/riceuniversity/comments/nh6xf/my_incomplete_admission_story/">Reddit</a>',
        url: "https://i.imgur.com/OXHin.jpg",
        schoolName: "Rice University",
        date: new Date(2011, 11, 15)
    },
    {
        title: "Washington University Rejection - March 2020",
        description: 'From a reddit user',
        url: "https://i.imgur.com/4qBFnFl.png",
        schoolName: "Washington University in St. Louis",
        date: new Date(2020, 2, 12)
    },

];

// When DOM is loaded
document.addEventListener('DOMContentLoaded', function () {

    $('.toast').hide();

    loadPreloadScreen();

    sortByName();

	document.getElementById("DateItem").addEventListener('click', function ()
	{
		sortByDate();
        $('.pop').on('click', modalPopUp);

	});

    document.getElementById("acceptButton").addEventListener('click', function ()
    {
        acceptedPolicy();
    }); 

    $('.pop').on('click', modalPopUp);

    //console.log(sessionStorage.getItem('agreePolicy'));

    if (sessionStorage.getItem('agreePolicy') != "true") {
        $('.toast').toast('show');
    }
});

// Shows an enlarged version of image
// Based on https://stackoverflow.com/a/29605535/9512643
function modalPopUp() {   
    $('.imagepreview').attr('src', $(this).attr('src'));
    $('#imagemodal').modal('show');
}

function sortByName() {
    
    console.log("Sorting by Name...");
    rejection_letters.sort(function(a, b) {
        return a.schoolName.localeCompare(b.schoolName);
    });
    //console.log(rejection_letters);
    
    // Make subarrays for each college and then sort each subarray by date
    var sameName = [];

    for (i = 0; i < rejection_letters.length; i++) {
        if (sameName.length < 1)
            sameName.push(rejection_letters[i]);
        
        if (i < rejection_letters.length - 1 && rejection_letters[i].schoolName == rejection_letters[i + 1].schoolName) {
            sameName.push(rejection_letters[i + 1]);
        }
        else {
            if (sameName[0].schoolName != document.title)
            {
                sameName = [];
                continue;
            }

            // Sort each subarray by date
            sameName.sort(function(a, b) {
                if (a.date < b.date)
                    return -1;
                else if (a.date > b.date)
                    return 1;
                else
                    return 0;
            });

            console.log(sameName);

            // Add heading for each college
            createCollegeHeading(sameName[0].schoolName);

            sameName.forEach(createCard);
            sameName = [];
            break;
        }
    }
}

function createCollegeHeading(collegeName) {
    const heading = `
    <div class="col-md-12 text-center">
        <h3><strong>
            ${collegeName}
        </strong>
        </h3>
    </div>
    `;
    
    // Adds heading to DOM
    var name = document.getElementById('cards');

    name.insertAdjacentHTML('beforeend', heading);


}

// Adds cards to DOM
function createCard(item) {

    // Template of what how a letter should be displayed in the DOM
    const template = `
        <div class="col-md-4">
            <div class="card mb-4 box-shadow" >
                <img class="pop card-img-top" src="${item.url}">
                <div class="card-body">
                    <h4 class="card-title">${item.title}</h4>
                    <p class="card-text">${item.description}</p>
                </div>
            </div>
        </div>
    `;

    // Adds cards to DOM
    var cardDiv = document.getElementById('cards');

    cardDiv.insertAdjacentHTML('beforeend', template);
}

// Keeps track if user agrees to cookie policy
function acceptedPolicy() {
    $(".toast").toast('hide');
    if (typeof(Storage) !== "undefined") {
        sessionStorage.setItem('agreePolicy', 'true');
        console.log("Session Storage is being used.");
    } 
    else {
        console.log("Your browser is too old or doesn't support session storage.")
    }
}

// Keeps track if user already visited the website
function loadedScreenAlready() {
    if (typeof(Storage) !== "undefined") {
        sessionStorage.setItem('loadedAlready', 'true');
        console.log("Session Storage is being used.");
    } 
    else {
        console.log("Your browser is too old or doesn't support session storage.")
    }
}

// Makes the typewriting animation
// Based on https://stackoverflow.com/a/22266737/9512643
function animateTyping() {

    var str =  "Remember, Rejection is just a mindset";
    var i = 0, text; 

    (function type() {
        if (i == str.length) 
        {
            removePreloadScreen();
            return;
        }

        text = str.slice(0, ++i);
        
        document.getElementById('typewriter').innerHTML = text;

        setTimeout(type, 100);
    }());

    

}

// Takes care of loading Preload Screen
function loadPreloadScreen () {
    // Only loads the preload screen if it's the first time visiting the website
    if (sessionStorage.getItem('loadedAlready') != "true") {
        const template = `
        <!-- Preload Screen -->
        <!-- Based on https://codepen.io/petervandenheuvel/pen/ywBxxY -->
        <div class="preload">
            <div class="container-fluid">
                <div class="d-flex flex-row justify-content-center text-center">
                    <h1> Prepare to be Rejected</h1>
                </div>
                <div class="d-flex flex-row justify-content-center text-center">
                    <h2>
                    <span id="typewriter"></span><span class="cursor">&nbsp</span>
                    </h2>
                </div>
            </div>
        </div>`;

        document.body.insertAdjacentHTML('afterbegin', template);
        
        animateTyping();
    }
}

function removePreloadScreen() {
    // Removes Preload Screen
    const preload = document.querySelector(".preload");
    preload.classList.add("preload-finish");

    loadedScreenAlready(); // Sets session storage "loadedAlready" to true
}