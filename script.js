var form_options = document.getElementById("form_options");
var add_more_fields = document.getElementById("add_more_fields");
var remove_fields = document.getElementById("remove_fields");
var submit_button = document.getElementById("submit");

add_more_fields.onclick = () => {
    let projectTitle = document.createElement("input");
    projectTitle.setAttribute("type", "text");
    projectTitle.setAttribute("name", "project_title[]");
    projectTitle.setAttribute("class", "project_title");
    projectTitle.setAttribute("siz", 50);
    projectTitle.setAttribute("placeholder", "Project Title");
    projectTitle.setAttribute("value", "");
    projectTitle.setAttribute("id", "project_title");
    form_options.appendChild(projectTitle);

    let projectDate = document.createElement("input");
    projectDate.setAttribute("type", "date");
    projectDate.setAttribute("name", "project_date[]");
    projectDate.setAttribute("class", "project_date");
    projectDate.setAttribute("siz", 50);
    projectDate.setAttribute("placeholder", "Date");
    projectDate.setAttribute("value", "");
    projectDate.setAttribute("id", "project_date");
    form_options.appendChild(projectDate);

    let projectDesc = document.createElement("input");
    projectDesc.setAttribute("type", "text");
    projectDesc.setAttribute("name", "project_desc[]");
    projectDesc.setAttribute("class", "project_desc");
    projectDesc.setAttribute("siz", 50);
    projectDesc.setAttribute("placeholder", "Project Description");
    projectDesc.setAttribute("value", "");
    projectDesc.setAttribute("id", "project_desc");
    form_options.appendChild(projectDesc);

    let projectLink = document.createElement("input");
    projectLink.setAttribute("type", "url");
    projectLink.setAttribute("name", "project_link[]");
    projectLink.setAttribute("class", "project_link");
    projectLink.setAttribute("siz", 50);
    projectLink.setAttribute("placeholder", "Project Link");
    projectLink.setAttribute("value", "");
    projectLink.setAttribute("id", "project_link");
    form_options.appendChild(projectLink);
};

remove_fields.onclick = () => {
    let input_tags = form_options.getElementsByTagName("input");
    if (input_tags.length > 5) {
        form_options.removeChild(input_tags[input_tags.length - 1]);
        form_options.removeChild(input_tags[input_tags.length - 1]);
        form_options.removeChild(input_tags[input_tags.length - 1]);
        form_options.removeChild(input_tags[input_tags.length - 1]);
    }
};

// Button handler for the `Submit Query` button
function handleFormSubmit(event) {
    // Get the form data from the various DOM elements using a DOM selector
    let formData = {};
    let elements = [
        "project_title",
        "project_date",
        "project_desc",
        "project_link",
    ];

    // For each individual element, apply the following lambda function...
    elements.forEach((ele) => {
        formData[ele] = document.getElementById(ele).value;
    });

    // Send the form data to the server
    // ! TODO: Send to GunJS Cloud, for now it just prints to an alert
    alert(JSON.stringify(formData));
}
