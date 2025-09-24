import Container from "../shard/Container";
const Navbar = () => {
  return (
    <nav className="bg-base-100 shadow">
      <Container>
        <div className="flex items-center justify-between py-3 px-0">
          <div className="">
            <h1>ThemeGhar</h1>
          </div>
          <div className="flex items-center gap-4 md:gap-8">
            <ul className="menu-horizontal gap-4 text-base text-gray-500 hidden md:flex">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">Fixture</li>
              <li className="cursor-pointer">Team</li>
              <li className="cursor-pointer">Schedules</li>
            </ul>
            <button className="border px-4 py-1 rounded">+ New Comment</button>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
