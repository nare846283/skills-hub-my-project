
// docSyntax
var defaultCode = `
// Ek variable declare karna
let greeting = "Hello, World!";

// Console mein greeting print karna
console.log(greeting);

`;

var jsSyntax = CodeMirror(document.getElementById("jsSyntax"), {
    mode: "javascript",
    theme: "monokai"
});

// Set default code in the editor
jsSyntax.setValue(defaultCode);


var copyDocSyntax = document.getElementById("copyJsSyntax");

copyDocSyntax.addEventListener("click", function() {
    copyDocSyntax.innerHTML = `<i class="ri-check-line"></i> Copied !!` ;
    var code = docSyntax.getValue();
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





