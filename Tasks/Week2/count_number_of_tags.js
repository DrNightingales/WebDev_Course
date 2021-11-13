
var tags = {};  // maintains object of tags on the page and their count
var c = 0;
var recurse = function (el) {
    // if element node
    if (el.nodeType == 1) {
        if (!tags[el.tagName]) {
            tags[el.tagName] = 0;
            c++;
        }
        tags[el.tagName]++;
    }
    // recurse through the children
    for (var i = 0, children = el.childNodes, len = children.length; i < len; i++) {
        recurse(children[i]);
    }
}

recurse(document);
console.log(tags);
console.log(c);