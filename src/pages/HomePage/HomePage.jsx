import style from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={style.homepage}>
      <h1>PhoneBook</h1>
      <p>Welcome to PhoneBook.</p>
      <p>PhoneBook is a goit react project.</p>
      <p>This project allows users to access their personal contact list.</p>

      <footer>
        GitHub - <a href="https://github.com/yunsari">yunsari</a>
      </footer>
    </div>
  );
}

export default HomePage;
