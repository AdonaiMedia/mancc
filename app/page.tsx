"use client";

import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import Events from "../src/components/Events";
import About from "../src/components/About";
import Ministries from "../src/components/Ministries";
import Sermons from "../src/components/Sermons";
import ZakaSadaka from "../src/components/ZakaSadaka";
import Giving from "../src/components/Giving";
import MissionsOutreach from "../src/components/MissionsOutreach";
import Contact from "../src/components/Contact";
import { useLanguage } from "../src/i18n/LanguageProvider";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero/mancc-hero-clean.png')] bg-cover bg-center bg-no-repeat" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/70 via-blue-950/45 to-blue-950/15" />

        <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-14 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] lg:px-8">
          {/* Hero Content */}
          <div className="max-w-3xl text-white">
            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-100 backdrop-blur-sm">
              Magomeni • Dar es Salaam • Tanzania
            </div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-100">
              {t("welcomeTo")}
            </p>

            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight drop-shadow-lg sm:text-6xl lg:text-7xl">
              Magomeni All Nations
              <span className="mt-2 block text-blue-100">
                Christian Centre
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/90 sm:text-xl">
              {t("heroDescription")}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#about"
                className="rounded-full bg-white px-7 py-3.5 text-center text-sm font-semibold text-blue-950 shadow-lg transition hover:bg-blue-50"
              >
                {t("discoverOurChurch")}
              </a>

              <a
                href="/ministries/evangelism"
                className="rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-center text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                {t("evangelismMissions")}
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-blue-100">
              <span>{t("faith")}</span>
              <span>•</span>
              <span>{t("fellowship")}</span>
              <span>•</span>
              <span>{t("discipleship")}</span>
              <span>•</span>
              <span>{t("mission")}</span>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-[500px]">
              <div className="rounded-[2rem] border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-md">
                <div className="flex min-h-[440px] flex-col justify-between rounded-[1.5rem] border border-white/15 bg-slate-950/45 p-7">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-200">
                      {t("ourMission")}
                    </p>

                    <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl">
                      {t("takingGospel")}
                    </h2>

                    <p className="mt-5 text-sm leading-7 text-white/80">
                      {t("missionDescription")}
                    </p>
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                      <p className="text-2xl font-bold text-white">01</p>
                      <p className="mt-1 text-xs text-white/70">
                        {t("evangelism")}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                      <p className="text-2xl font-bold text-white">02</p>
                      <p className="mt-1 text-xs text-white/70">
                        {t("missions")}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                      <p className="text-2xl font-bold text-white">03</p>
                      <p className="mt-1 text-xs text-white/70">
                        {t("discipleship")}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                      <p className="text-2xl font-bold text-white">04</p>
                      <p className="mt-1 text-xs text-white/70">
                        {t("community")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* About */}
      <div id="about">
        <About />
      </div>

      {/* Ministries */}
      <div id="ministries">
        <Ministries />
      </div>

      {/* Events */}
      <Events />

      {/* Missions & Outreach */}
      <MissionsOutreach />

      {/* Sermons */}
      <div id="sermons">
        <Sermons />
      </div>

      {/* Zaka na Sadaka */}
      <ZakaSadaka />

      {/* Giving */}
      <Giving />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}




