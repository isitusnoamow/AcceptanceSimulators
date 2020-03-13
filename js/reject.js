// Stores all the data for the letters
// Note: Dates are stored in the YYYY, MM, DD format, but javascript is weird so the MM is 0 to 11 where 0 is January
var rejection_letters = [
    {
    	title: "UChicago Deferral Letter - December 2019",
     	description: "This was my own deferral letter.",
     	url: "img/uchicagodef12-18-19.png", 
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
    	title: "MIT Rejection - 2018",
    	description: 'Quora <a href="https://www.quora.com/What-does-your-college-acceptance-or-rejection-letter-looks-like">link</a>.',
    	url: "https://qph.fs.quoracdn.net/main-qimg-c1cec19b1f4def8a7eb7bfae000d2877",
    	schoolName: "Massachusetts Institute of Technology",
    	date: new Date(2018, 0)
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
    }
];



// When DOM is loaded
document.addEventListener('DOMContentLoaded', function () {

	document.getElementById("DateItem").addEventListener('click',function ()
	{
		sortByDate();
	});
	document.getElementById("CollegeNameItem").addEventListener('click',function ()
	{
		sortByName();
	}); 
});

function sortByDate() {
    // Clears cards element
    const myNode = document.getElementById("cards");
    myNode.textContent = '';

	console.log("Sorting by Date...");
	rejection_letters.sort(function(a, b) {
		if (a.date < b.date)
			return -1;
		else if (a.date > b.date)
			return 1;
		else
			return 0;
	});
	console.log(rejection_letters);	

    rejection_letters.forEach(createHTML);

}

function sortByName() {
    // Clears cards element
    const myNode = document.getElementById("cards");
    myNode.textContent = '';

    // Sorts list of letters based on college name
	console.log("Sorting by Name...");
	rejection_letters.sort(function(a, b) {
		return a.schoolName.localeCompare(b.schoolName);
	});
	console.log(rejection_letters);

    rejection_letters.forEach(createHTML);
}

function createHTML(item, index) {

    // Template of what how a letter should be displayed in the DOM
    const template = `
        <div class="col-md-4">
            <div class="card mb-4 box-shadow" >
                <img class="card-img-top" src=${item.url}>
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