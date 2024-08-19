document.getElementById('uploadPic').addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('profilePic').src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
});

document.getElementById('saveProfile').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const hobbies = document.getElementById('hobbies').value;
    const bio = document.getElementById('bio').value;
    const contact = document.getElementById('contact').value;

    // Save the profile data to local storage or send it to a server
    console.log('Profile saved:', { name, hobbies, bio, contact });
    alert('Profile saved successfully!');
});

document.getElementById('saveEntry').addEventListener('click', function() {
    const date = document.getElementById('entryDate').value;
    const text = document.getElementById('entryText').value;
    const tags = document.getElementById('entryTag').value;

    if (date && text) {
        const entryList = document.getElementById('entryList');
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${date}</strong>: ${text} <em>[${tags}]</em>`;
        entryList.appendChild(listItem);

        // Clear the form
        document.getElementById('entryDate').value = '';
        document.getElementById('entryText').value = '';
        document.getElementById('entryTag').value = '';
    } else {
        alert('Please enter a date and a diary entry.');
    }
});

document.getElementById('addTask').addEventListener('click', function() {
    const title = document.getElementById('taskTitle').value;
    const description = document.getElementById('taskDescription').value;
    const dueDate = document.getElementById('taskDueDate').value;
    const priority = document.getElementById('taskPriority').value;

    if (title && description) {
        const taskList = document.getElementById('taskList');
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <div><strong>${title}</strong> - ${description}</div>
            <div>Due: ${dueDate} | Priority: ${priority}</div>
            <div class="task-controls">
                <button class="complete">Complete</button>
                <button class="delete">Delete</button>
            </div>
        `;
        taskList.appendChild(listItem);

        // Add event listeners for task actions
        listItem.querySelector('.complete').addEventListener('click', function() {
            listItem.classList.toggle('completed');
        });

        listItem.querySelector('.delete').addEventListener('click', function() {
            taskList.removeChild(listItem);
        });

        // Clear the form
        document.getElementById('taskTitle').value = '';
        document.getElementById('taskDescription').value = '';
        document.getElementById('taskDueDate').value = '';
    } else {
        alert('Please enter a task title and description.');
    }
});

// Selectors
const saveEntryButton = document.getElementById('saveEntry');
const entryList = document.getElementById('entryList');
const deleteAllEntriesButton = document.getElementById('deleteAllEntries');

// Add event listener to save diary entry
saveEntryButton.addEventListener('click', () => {
  const entryDate = document.getElementById('entryDate').value;
  const entryText = document.getElementById('entryText').value;
  const entryTag = document.getElementById('entryTag').value;

  if (entryDate && entryText) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <div>
        <strong>${entryDate}</strong>: ${entryText} <br>
        <em>Tags: ${entryTag}</em>
      </div>
      <button class="delete-btn">Delete</button>
    `;

    entryList.appendChild(listItem);

    // Add delete functionality to the button
    listItem.querySelector('.delete-btn').addEventListener('click', function() {
      listItem.remove();
    });

    // Clear the input fields
    document.getElementById('entryDate').value = '';
    document.getElementById('entryText').value = '';
    document.getElementById('entryTag').value = '';
  }
});

// Add event listener to delete all diary entries
deleteAllEntriesButton.addEventListener('click', () => {
  entryList.innerHTML = '';  // This clears all the entries in the list
});
