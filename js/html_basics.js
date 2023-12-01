
// docSyntax
var defaultCode = `
    <!DOCTYPE html>
    <html>
        <head>
            <title>Page Title</title>
        </head>
        <body>

            <h1>My First Heading</h1>
            <p>My first paragraph.</p>

        </body>
    </html>
`;

var docSyntax = CodeMirror(document.getElementById("docSyntax"), {
    mode: "xml",
    theme: "monokai"
});

// Set default code in the editor
docSyntax.setValue(defaultCode);

// docTypeSyntax
var defaultCode = `
    <!DOCTYPE html>
`;

var docTypeSyntax = CodeMirror(document.getElementById("docTypeSyntax"), {
    mode: "xml",
    theme: "monokai"
});

// Set default code in the editor
docTypeSyntax.setValue(defaultCode);

// Html Syntax
var defaultCode = `
    <html>
`;

var htmlSyntax = CodeMirror(document.getElementById("htmlSyntax"), {
    mode: "xml",
    theme: "monokai"
});

// Set default code in the editor
htmlSyntax.setValue(defaultCode);

// Head Syntax
var defaultCode = `
    <head>
        <title> This is Head Tag </title>
    </head>
`;

var headSyntax = CodeMirror(document.getElementById("headSyntax"), {
    mode: "xml",
    theme: "monokai"
});

// Set default code in the editor
headSyntax.setValue(defaultCode);

// title Syntax
var defaultCode = `
    <title> This is Title Tag </title>
`;

var titleSyntax = CodeMirror(document.getElementById("titleSyntax"), {
    mode: "xml",
    theme: "monokai"
});

// Set default code in the editor
titleSyntax.setValue(defaultCode);


// body Syntax
var defaultCode = `
    <body> 
        <h1> This is Body Tag <h1>
    </body>
`;

var bodySyntax = CodeMirror(document.getElementById("bodySyntax"), {
    mode: "xml",
    theme: "monokai"
});

// Set default code in the editor
bodySyntax.setValue(defaultCode);

// heading Syntax
var defaultCode = `
    <h1> This is heading Tag </h1>
    <h2> This is heading Tag </h2>
    <h3> This is heading Tag </h3>
    <h4> This is heading Tag </h4>
    <h5> This is heading Tag </h5>
    <h6> This is heading Tag </h6>
`;

var headingSyntax = CodeMirror(document.getElementById("headingSyntax"), {
    mode: "xml",
    theme: "monokai"
});

// Set default code in the editor
headingSyntax.setValue(defaultCode);

// paragraph Syntax
var defaultCode = `
    <p> This is Paragraph Tag </p>
`;

var paragraphSyntax = CodeMirror(document.getElementById("paragraphSyntax"), {
    mode: "xml",
    theme: "monokai"
});

// Set default code in the editor
paragraphSyntax.setValue(defaultCode);


var copyDocSyntax = document.getElementById("copyDocSyntax");
var copyDocTypeSyntax = document.getElementById("copyDocTypeSyntax");
var copyHtmlSyntax = document.getElementById("copyHtmlSyntax");
var copyHeadSyntax = document.getElementById("copyHeadSyntax");
var copyTitleSyntax = document.getElementById("copyTitleSyntax");
var copyBodySyntax = document.getElementById("copyBodySyntax");
var copyHeadingSyntax = document.getElementById("copyHeadingSyntax");
var copyParagraphSyntax = document.getElementById("copyParagraphSyntax");


copyDocSyntax.addEventListener("click", function() {
    copyDocSyntax.innerHTML = `<i class="ri-check-line"></i> Copied !!` ;
    var code = docSyntax.getValue();
    copyToClipboard(code);
    showToast("Code copied ");
});

copyDocTypeSyntax.addEventListener("click", function() {
    copyDocTypeSyntax.innerHTML = `<i class="ri-check-line"></i> Copied !!` ;
    var code = docTypeSyntax.getValue();
    copyToClipboard(code);
    showToast("Code copied ");
});

copyHtmlSyntax.addEventListener("click", function() {
    copyHtmlSyntax.innerHTML = `<i class="ri-check-line"></i> Copied !!` ;
    var code = htmlSyntax.getValue();
    copyToClipboard(code);
    showToast("Code copied ");
});

copyHeadSyntax.addEventListener("click", function() {
    copyHeadSyntax.innerHTML = `<i class="ri-check-line"></i> Copied !!` ;
    var code = headSyntax.getValue();
    copyToClipboard(code);
    showToast("Code copied ");
});

copyTitleSyntax.addEventListener("click", function() {
    copyTitleSyntax.innerHTML = `<i class="ri-check-line"></i> Copied !!` ;
    var code = titleSyntax.getValue();
    copyToClipboard(code);
    showToast("Code copied ");
});

copyBodySyntax.addEventListener("click", function() {
    copyBodySyntax.innerHTML = `<i class="ri-check-line"></i> Copied !!` ;
    var code = bodySyntax.getValue();
    copyToClipboard(code);
    showToast("Code copied ");
});

copyHeadingSyntax.addEventListener("click", function() {
    copyHeadingSyntax.innerHTML = `<i class="ri-check-line"></i> Copied !!` ;
    var code = headingSyntax.getValue();
    copyToClipboard(code);
    showToast("Code copied ");
});

copyParagraphSyntax.addEventListener("click", function() {
    copyParagraphSyntax.innerHTML = `<i class="ri-check-line"></i> Copied !!` ;
    var code = paragraphSyntax.getValue();
    copyToClipboard(code);
    showToast("Code copied ");
});

function copyToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert("Code copied to clipboard: " + text);
}

toastr.options = {
    "closeButton": true,
    "progressBar": true,
    "positionClass": "toast-top-center",
    "preventDuplicates": true,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": 3000,
    "extendedTimeOut": 1000,
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut",
    "tapToDismiss": false
};

function showToast(message) {
    toastr.success(message); 
   // Use 'toastr.error()' for error messages, 'toastr.info()' for info messages, etc.
};





