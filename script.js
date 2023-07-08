document.getElementById("contentForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    var title = document.getElementById("title").value;
    var content = document.getElementById("content").value;

    // Create content item
    var contentItem = document.createElement("li");
    contentItem.innerHTML = "<h3>" + title + "</h3><p>" + content + "</p>";

    // Append content item to list
    document.getElementById("list").appendChild(contentItem);

    // Reset form fields
    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
});
