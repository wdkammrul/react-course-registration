# Course Registration

❓ Question-1: Add at least 3 Project features

⚪ Course Selection: In the project, you can select courses and view their relevant information. This course information is displayed on the current card.

⚪ Cart for Storage: You can save courses in your cart and view the status of storage at any time. This is shown in the "Cart" section.

⚪ Total Credit Hours Calculation: You can calculate the total credit hours instantly as you select courses. This information is displayed in the "Cart" section, providing a clear overview of your course selection and total credit hours.




❓ Question-2: Discuss how you managed the state in your assignment project.

➤ In this project, I have managed state using the following approaches:

⚪ allCourse: I have used the useState hook to initialize the allCourse state, which holds the complete list of courses and their details. During the project's initial load, I fetch course data using the useEffect hook and store it in the allCourse state.

⚪ selectedCourses: The selectedCourses state is used to keep track of the courses selected by the user. When a user selects a course, it is added to the selectedCourses array, and the state is updated accordingly.

⚪ remaining: This is a local state in the project that is used to represent information related to credit hours or time. It depends on the quantity of courses selected, and it is displayed based on the project's state.

⚪ totalCreditHour: This state is used to calculate and display the total credit hours of selected courses. It is updated whenever a course is selected or deselected, and it is displayed based on the project's state.
