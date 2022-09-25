export default function Header() {
  return (
    <div className="topnav">
      <a className="logo" href="/">
        Movie Maker
      </a>
      <div className="search-container">
        <form>
          <a href="/">Add Movies</a>
          <input type="text" placeholder="Seach.." name="search" />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  );
}
