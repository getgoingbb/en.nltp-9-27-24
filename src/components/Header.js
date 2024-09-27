import Link from 'next/link';
export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about-me">About Me</Link></li>
          <li><Link href="/more-about">More About</Link></li>
          <li><Link href="/activities">Activities</Link></li>
          <li><Link href="/classic-movie-theater">Classic Movie Theater</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <!-- Add all other links here -->
        </ul>
      </nav>
    </header>
  );
}
