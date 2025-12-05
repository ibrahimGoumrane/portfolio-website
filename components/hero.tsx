"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-foreground">{t("hero.title1")}</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {t("hero.title2")}
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed max-w-xl">
            {t("hero.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="https://www.linkedin.com/in/ibrahim-goumrane"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition text-center"
            >
              {t("hero.getInTouch")}
            </a>
            <a
              href="#software"
              className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition text-center"
            >
              {t("hero.viewWork")}
            </a>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary text-sm">📍</span>
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  {t("hero.location")}
                </p>
                <p>Casablanca, Morocco</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                <span className="text-secondary text-sm">📱</span>
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  {t("hero.contact")}
                </p>
                <p>+212 776 209 303</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="relative w-full aspect-square">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 rounded-2xl blur-3xl"></div>
            <Image
              src="/main.png"
              alt="Ibrahim Goumrane"
              fill
              className="relative rounded-2xl object-cover border-2 border-primary/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
