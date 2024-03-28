export default function Header() {
  return (
    <div className="header">
      <Button>Home</Button>
      <Button>Chiropractic Treatment</Button>
      <Button>Test</Button>
      <Button>Testimonials Test</Button>
      <Button>About</Button>
      <Button>FAQ Videos</Button>
      <Button>Testimonials</Button>
      <Button>Contact</Button>
    </div>
  );
}

function Button({ children }) {
  return <button>{children}</button>;
}
