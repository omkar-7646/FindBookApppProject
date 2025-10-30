# FindBookApppProject
📚 FindBookApppProject

A React-based Book Finder App that lets users search for books using the Open Library API
, view results with pagination, and includes a password-protection popup to access the app.

🚀 Features
🔍 1. Book Search

Search for books by title using the Open Library API.

Real-time search with smooth loading indication.

Displays essential book details (title, author, etc.).

📖 2. Pagination

Paginated results for easier navigation.

Allows browsing through multiple pages of books.

Adjustable number of books per page.

🔐 3. Password Protection (New Feature)

Animated popup appears on app launch asking “Who is the developer?”

Correct answer: OM → grants access to the app.

Wrong answer → shows message: “❌ Sorry user, wrong answer!”

Implemented with Framer Motion for smooth, lively animations.

🧠 Tech Stack

React.js (Class Components)

Bootstrap for layout & styling

Framer Motion for popup animation

Open Library API for book data

🛠️ Installation & Setup
1. Clone the Repository
git clone https://github.com/omkar-7646/FindBookApppProject.git
cd FindBookApppProject

2. Install Dependencies
npm install

3. Run the App
npm start


Open http://localhost:3000
 in your browser to view it.

💡 How It Works

On launch, an animated popup asks:

“Who is the developer?”

Enter OM → popup disappears → Book Finder app unlocks.

Type any book title (e.g., “Harry Potter”) into the search bar.

View matching books with pagination support.

🧩 Project Structure
FindBookApppProject/
│
├── src/
│   ├── components/
│   │   ├── SearchBar.js
│   │   ├── BookList.js
│   │   ├── Pagination.js
│   │   ├── DeveloperPopup.js      # 🔐 Password protection popup
│   │   └── DeveloperPopup.css     # Styling for popup
│   │
│   ├── App.js
│   ├── App.css
│   └── index.js
│
├── public/
│   └── index.html
│
└── package.json

🎨 UI Highlights

Colorful animated verification popup.

Smooth book loading and transitions.

Responsive layout using Bootstrap.

✨ Future Enhancements

Add book cover images and publication details.

Implement dark mode 🌙.

Store recent searches using local storage.

👨‍💻 Developer

Omkar Mane
MERN Stack Developer Trainee @ NxtWave

🔗 LinkedIn: www.linkedin.com/in/om-b-mane