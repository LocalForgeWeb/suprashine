import { FormEvent, useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BadgeCheck,
  CalendarDays,
  CarFront,
  Check,
  ChevronDown,
  Clock3,
  Droplets,
  Gauge,
  Instagram,
  Mail,
  MessageCircle,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

const HERO_IMAGE = "/manus-storage/async-images/pitpPJ8qLLYbn1ed7s34eR/image-1.webp";
const DETAIL_IMAGE = "/manus-storage/async-images/pitpPJ8qLLYbn1ed7s34eR/image-2.webp";
const LOGO_IMAGE = "/manus-storage/async-images/rWmLnLnx8g9jxt9HVqwQ4c/image-1.webp";
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61596005452056&mibextid=wwXIfr&mibextid=wwXIfr";

const services = [
  {
    number: "01",
    name: "The Reset",
    price: "from $95",
    description: "A precise exterior reset for daily drivers that deserve more than a rinse.",
    items: ["Foam wash + two-bucket hand wash", "Wheel face + barrel clean", "Towel-dried finish with tire dressing"],
    accent: "blue",
    icon: Droplets,
  },
  {
    number: "02",
    name: "The Clarity",
    price: "from $275",
    description: "Interior and exterior refinement that restores the feeling of a freshly delivered car.",
    items: ["Full interior vacuum + surface detail", "Paint decontamination", "Machine polish for a deeper gloss"],
    accent: "light",
    icon: Sparkles,
  },
  {
    number: "03",
    name: "The Shield",
    price: "from $850",
    description: "Long-term paint protection for owners who plan to keep their Supra exceptional.",
    items: ["Two-stage paint correction", "5-year ceramic coating", "Glass, trim + wheel-face protection"],
    accent: "blue",
    icon: ShieldCheck,
  },
];

const reasons = [
  { title: "No rushed handoffs", body: "Your car stays with one lead detailer from inspection to final light check.", icon: Gauge },
  { title: "Obsessed with the finish", body: "We chase the small details: emblems, edges, vents, barrels, and the last water spot.", icon: Sparkles },
  { title: "Supra-native care", body: "We know the lines, finishes, and fragile surfaces that make the GR Supra special.", icon: CarFront },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState("The Clarity");

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="site-shell">
      <div className="top-strip">
        <span>GR SUPRA SPECIALISTS</span>
        <span>APPOINTMENTS ONLY · BYRON BAY &amp; GOLD COAST</span>
        <a href="tel:+61412088544">+61 412 088 544 <ArrowUpRight size={12} /></a>
      </div>

      <header className="site-header">
        <a href="#top" className="brand" aria-label="Supra Shine home">
          <img className="brand-logo" src={LOGO_IMAGE} alt="Supra Shine" />
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#approach">Our approach</a>
          <a href="#studio">The studio</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="#contact">Book your detail <ArrowUpRight size={15} /></a>
        <button className="mobile-menu-button" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {menuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <a href="#services" onClick={closeMenu}>Services <ArrowDownRight size={17} /></a>
          <a href="#approach" onClick={closeMenu}>Our approach <ArrowDownRight size={17} /></a>
          <a href="#studio" onClick={closeMenu}>The studio <ArrowDownRight size={17} /></a>
          <a href="#contact" onClick={closeMenu}>Contact <ArrowDownRight size={17} /></a>
        </nav>
      )}

      <main id="top">
        <section className="hero" style={{ backgroundImage: `url(${HERO_IMAGE})` }}>
          <div className="hero-shade" />
          <div className="hero-grid" />
          <div className="hero-content page-width">
            <div className="eyebrow hero-eyebrow"><span className="eyebrow-line" /> Automotive care, tuned differently</div>
            <h1>Make your<br /><span>shine</span> impossible<br />to ignore.</h1>
            <p className="hero-copy">Precision detailing for the GR Supra and the people who refuse to leave anything stock—not even the finish.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">Request a quote <ArrowUpRight size={17} /></a>
              <a className="button button-ghost" href="#services">Explore services <ArrowDownRight size={17} /></a>
            </div>
          </div>
          <div className="hero-meta page-width">
            <div><span>01</span><strong>Paint correction</strong></div>
            <div><span>02</span><strong>Ceramic protection</strong></div>
            <div><span>03</span><strong>Interior restoration</strong></div>
            <div className="scroll-prompt"><span>Scroll to explore</span><ArrowDownRight size={17} /></div>
          </div>
        </section>

        <section className="intro-section page-width" id="approach">
          <div className="section-marker">01 / WHY SUPRA SHINE</div>
          <div className="intro-layout">
            <div className="intro-heading-wrap">
              <p className="kicker">Clean lines. Clear intent.</p>
              <h2>Not just clean.<br /><span>Correct.</span></h2>
            </div>
            <div className="intro-copy-wrap">
              <p className="large-copy">Your Supra is engineered to get attention. We make sure the finish earns it.</p>
              <p className="body-copy">Supra Shine is a boutique detailing studio for owners who notice the difference. Every service is deliberate, every surface gets a second look, and every handoff comes with a finish we are proud to put our name on.</p>
              <a className="text-link" href="#services">See what we do <ArrowUpRight size={16} /></a>
            </div>
          </div>
          <div className="intro-stats">
            <div><strong>250+</strong><span>cars finished</span></div>
            <div><strong>5 yr</strong><span>coating warranty</span></div>
            <div><strong>1:1</strong><span>detailer attention</span></div>
            <div className="stat-note">A higher standard for<br />high-performance paint.</div>
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="page-width">
            <div className="section-heading-row">
              <div>
                <div className="section-marker">02 / THE MENU</div>
                <h2>Pick your<br /><span>finish line.</span></h2>
              </div>
              <p>Every package starts with a walk-around, a paint reading, and an honest conversation about what your car actually needs.</p>
            </div>
            <div className="services-list">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <article className={`service-card ${service.accent}`} key={service.name}>
                    <div className="service-card-top"><span>{service.number}</span><Icon size={22} strokeWidth={1.6} /></div>
                    <div className="service-main">
                      <div className="service-name-row"><h3>{service.name}</h3><span>{service.price}</span></div>
                      <p>{service.description}</p>
                      <ul>{service.items.map((item) => <li key={item}><Check size={15} />{item}</li>)}</ul>
                    </div>
                    <a href="#contact" className="service-link" onClick={() => setSelectedService(service.name)}>Build this detail <ArrowUpRight size={16} /></a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="craft-section page-width" id="studio">
          <div className="craft-image-wrap"><img src={DETAIL_IMAGE} alt="A water bead rolling across a ceramic-coated car hood" /><span className="image-tag">Light tells the truth.</span></div>
          <div className="craft-copy">
            <div className="section-marker">03 / THE CRAFT</div>
            <h2>Built for the<br /><span>double-take.</span></h2>
            <p className="large-copy">A good detail looks clean. A great detail changes the way light moves across the car.</p>
            <p className="body-copy">We combine measured prep, controlled lighting, and a finish-first mindset to make every curve of your Supra read exactly as it should. No shortcuts hidden under gloss. No rushed cure times. Just better work.</p>
            <div className="craft-signature"><span className="signature-line" /><span>Supra Shine standard · est. 2019</span></div>
          </div>
        </section>

        <section className="reasons-section">
          <div className="page-width">
            <div className="section-heading-row reasons-heading">
              <div><div className="section-marker">04 / THE DIFFERENCE</div><h2>Details that<br /><span>stay with you.</span></h2></div>
              <p>Because the best part of a detail is not the reveal. It is the next morning, when you walk back to the car.</p>
            </div>
            <div className="reason-grid">
              {reasons.map((reason) => {
                const Icon = reason.icon;
                return <div className="reason-card" key={reason.title}><Icon size={25} strokeWidth={1.5} /><h3>{reason.title}</h3><p>{reason.body}</p></div>;
              })}
            </div>
          </div>
        </section>

        <section className="testimonial-section page-width">
          <div className="quote-mark">“</div>
          <blockquote>It looked like a new car when I picked it up. Better than new, honestly—the paint has a depth I had never seen before.</blockquote>
          <div className="quote-footer"><span className="quote-rule" /><span>Marcus T. · GR Supra owner</span><span className="quote-stars">★★★★★</span></div>
        </section>

        <section className="contact-section" id="contact">
          <div className="page-width contact-layout">
            <div className="contact-intro">
              <div className="section-marker">05 / START HERE</div>
              <h2>Ready when<br /><span>you are.</span></h2>
              <p>Tell us what you drive, what you want to change, and when you would like it back. We will come back with a considered recommendation—not a generic package list.</p>
              <a className="direct-contact" href="tel:+61412088544"><span className="direct-icon"><Phone size={18} /></span><span><small>Prefer to talk?</small><strong>+61 412 088 544</strong></span><ArrowUpRight size={18} /></a>
              <a className="facebook-contact" href={FACEBOOK_URL} target="_blank" rel="noreferrer"><span className="facebook-icon"><MessageCircle size={18} /></span><span><small>Have a quick question?</small><strong>Message us on Facebook</strong></span><ArrowUpRight size={18} /></a>
              <div className="studio-details"><div><MapPin size={17} /><span>14 Banksia Drive<br />Byron Bay NSW 2481</span></div><div><Clock3 size={17} /><span>Tue–Sat · 8:00–17:00<br />By appointment only</span></div></div>
            </div>
            <div className="inquiry-card">
              {submitted ? (
                <div className="success-state"><div className="success-icon"><Check size={27} /></div><div className="section-marker">ENQUIRY RECEIVED</div><h3>We will be in touch.</h3><p>Thanks for reaching out. We have your details and will come back shortly with next steps for your {selectedService.toLowerCase()}.</p><button className="button button-dark" type="button" onClick={() => setSubmitted(false)}>Send another enquiry <ArrowUpRight size={16} /></button></div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-head"><span>Request a quote</span><span>takes 60 sec</span></div>
                  <label>Your name<input name="name" required placeholder="First and last name" /></label>
                  <div className="form-two-col"><label>Email<input type="email" name="email" required placeholder="you@email.com" /></label><label>Phone<input type="tel" name="phone" required placeholder="04xx xxx xxx" /></label></div>
                  <label>Vehicle<input name="vehicle" required placeholder="e.g. 2023 GR Supra · Absolute Zero" /></label>
                  <label>What are you thinking?<div className="select-wrap"><select value={selectedService} onChange={(event) => setSelectedService(event.target.value)}><option>The Reset</option><option>The Clarity</option><option>The Shield</option><option>Not sure yet — advise me</option></select><ChevronDown size={17} /></div></label>
                  <label>Anything we should know? <span className="optional">optional</span><textarea name="message" rows={3} placeholder="Paint history, timing, specific concerns..." /></label>
                  <button className="button button-dark form-submit" type="submit">Send my enquiry <ArrowUpRight size={17} /></button>
                  <p className="form-note"><BadgeCheck size={14} /> No spam. Just a thoughtful reply from the team.</p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-width footer-top"><a href="#top" className="brand footer-brand"><img className="brand-logo" src={LOGO_IMAGE} alt="Supra Shine" /></a><p>Precision detailing for cars<br />worth looking back at.</p><div className="footer-links"><a href="mailto:hello@suprashine.au"><Mail size={15} /> Email us</a><a href={FACEBOOK_URL} target="_blank" rel="noreferrer"><MessageCircle size={15} /> Message us on Facebook</a><a href="https://www.instagram.com" target="_blank" rel="noreferrer"><Instagram size={15} /> Instagram</a></div></div>
        <div className="page-width footer-bottom"><span>© 2025 Supra Shine Detailing</span><span>Byron Bay · Gold Coast · Australia</span><a href="https://localforgeweb.com" target="_blank" rel="noreferrer">built by Gabe Naim-LocalForgeWeb</a></div>
      </footer>
    </div>
  );
}
