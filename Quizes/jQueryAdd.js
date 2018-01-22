var firstArticleItem;

firstArticleItem = $('.article-item').first();

firstArticleItem.append('<img src="http://placepuppy.it/200/300">');
// adds the element as the last child of the selected item

firstArticleItem.prepend('<img src="http://placepuppy.it/200/300">');
// adds the element as the first child of the selected item

//QUIZ

$("<div id='family2'><h1>Family2</h1></div>").insertAfter('#family1');

$('#family2').prepend("<div id='bruce'><h2>Bruce</h2></div>");

$('#bruce').prepend("<div id='madison'><h3>Madison</h3></div>");

$('#bruce').append("<div id='hunter'><h3>Hunter</h3></div>");


// Cam's Answer

var family1, family2, bruce, madison, hunter;

family1 = $('#family');

family2 = $("<div id='family2'><h1>Family2</h1></div>");

bruce = $("<div id='bruce'><h2>Bruce</h2></div>");

madison = $("<div id='madison'><h3>Madison</h3></div>");

hunter = $("<div id='hunter'><h3>Hunter</h3></div>");

family2.insertAfter(family1);

family2.append(bruce);

bruce.append(madison);

bruce.append(hunter);