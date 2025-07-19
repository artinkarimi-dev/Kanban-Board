# 💫 About the project:

 This project is a Kanban board built entirely with JavaScript and designed with a strong focus on hands-on learning. The main goal behind creating this app was to boost my practical coding skills and add a solid project to my portfolio.

While building it, I learned a lot about JavaScript — especially how to work with the DOM. I faced plenty of errors along the way, but fixing them helped me understand the language more deeply and gave me a lot of real-world experience.

Here’s how the board works:
You start by writing down your goals in the “To Do” section. Once you begin working on a task and feel like it’s in progress but not finalized yet, you just drag it into the “In Progress” column.

You don’t have to delete and re-type anything — simply drag and drop it from “To Do” to “In Progress” using your mouse. It’s fully functional with localStorage, so even after you refresh the page or close the browser, your tasks will stay exactly where you left them.

Each section has its own clean and unique CSS styling with smooth animations to make the user experience more enjoyable.

Also, if you ever want to remove a task, you can just click the delete icon next to it. That will remove the task both from the UI and from localStorage using localStorage.removeItem.

This project helped me understand a lot of DOM manipulation techniques, and it really leveled up my skills in working with JavaScript in real scenarios.

<br>

# ✨ Features

- Full Drag & Drop support for task movement between columns
- Dynamic DOM manipulation using document.createElement, appendChild, querySelector
- Unique task IDs generated with Date.now() and Math.random()
- Persistent storage using localStorage.getItem(), setItem(), removeItem()
- Column-based task saving with separation (tasks1, tasks2, tasks3)
- Real-time task editing and input tracking using input.addEventListener("input", ...)
- Clean task deletion logic synced with localStorage
- Custom keyboard shortcuts (Enter key support for adding tasks)
- Responsive interaction through event listeners (click, keydown, dragstart, drop)
- Animated and styled UI using CSS class switching

<br>

# 💻 Technologies Used:
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)


<br>


# 🚀 Future Plans

My future plan for this project is to rebuild it using React instead of plain JavaScript. 
I also intend to make it fully responsive across all devices.
Currently, the layout is optimized only for desktop screens, but in the next version,
it will be fully responsive and rewritten using modern React practices.
