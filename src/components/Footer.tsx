import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Ministries", href: "/#ministries" },
  { name: "Sermons", href: "/sermons" },
  { name: "Events", href: "/events" },
  { name: "Contact", href: "/contact" },
];

const missionLinks = [
  {
    name: "Evangelism & Missions",
    href: "/ministries/evangelism",
  },
  {
    name: "Church Building",
    href: "/church-building",
  },
  {
    name: "Giving",
    href: "/giving",
  },
];

const socialLinks = [
  {
    name: "YouTube",
    href: "https://www.youtube.com/@magomeniallnations",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/magomenitag",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/magomeniallnations",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@magomeniallnations",
  },
  {
    name: "X",
    href: "https://x.com/magomeniallnations",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/255757447493",
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Church */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src="/branding/mancclogo.png"
                alt="Magomeni All Nations Christian Centre"
                width={210}
                height={140}
                className="h-20 w-auto object-contain"
              />
            </Link>

            <p className="mt-6 max-w-lg leading-7 text-gray-400">
              A Christ-centred church committed to evangelism, missions,
              discipleship, fellowship, and serving our community with the
              love of Jesus Christ.
            </p>

            <div className="mt-6 space-y-3 text-sm text-gray-400">
              <p>Magomeni, Dar es Salaam, Tanzania</p>

              <p>
                <a
                  href="tel:+255784477774"
                  className="transition hover:text-white"
                >
                  +255 784 477 774
                </a>
              </p>

              <p>
                <a
                  href="https://wa.me/255757447493"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-green-300"
                >
                  WhatsApp: +255 757 447 493
                </a>
              </p>

              <p>
                <a
                  href="mailto:magomeni,allnations@gmail.com"
                  className="transition hover:text-white"
                >
                  magomeni,allnations@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">
              Quick Links
            </h3>

            <nav className="mt-5 flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Mission */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">
              Our Mission
            </h3>

            <nav className="mt-5 flex flex-col gap-3">
              {missionLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <Link
              href="/giving"
              className="mt-7 inline-block rounded-full bg-blue-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              Give & Support
            </Link>
          </div>
        </div>

        {/* Connect */}
        <div className="mt-14 border-t border-white/10 pt-10 text-center">
          <h3 className="text-sm font-bold uppercase tracking-widest text-white">
            Connect With Us
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-500">
            Stay connected with Magomeni All Nations Christian Centre,
            including worship, ministry, evangelism, missions, and community
            activities.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-gray-400 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>
            Copyright {new Date().getFullYear()} Magomeni All Nations Christian
            Centre. All rights reserved.
          </p>

          <p>Worship • Fellowship • Discipleship • Mission</p>
        </div>
      </div>
    </footer>
  );
}
