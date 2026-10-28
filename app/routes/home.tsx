import { Link } from "react-router";
import type { Route } from "./+types/home";
import { PosterButton } from "~/components/brand/PosterButton";
import { PtStar, PtStarInline } from "~/components/brand/PtStar";
import { BlurFade } from "~/components/magicui/blur-fade";
import { BlurText } from "~/components/reactbits/blur-text";
import { capitulos } from "~/data/capitulos";
import { imagePath } from "~/data/image-credits";

const sceneStrip = [
  { src: imagePath("esplanada-2003.jpg"), alt: "Desfile pela Esplanada em 2003" },
  { src: imagePath("indigenas-posse-2003.jpg"), alt: "Indígenas na Esplanada em 2003" },
  { src: imagePath("alemao-2022.jpg"), alt: "Caminhada no Complexo do Alemão, 2022" },
  { src: imagePath("posse-2023-parlatorio.jpg"), alt: "Posse no Parlatório, 2023" },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Trajetória de Lula — uma história que atravessa gerações" },
    {
      name: "description",
      content:
        "Linha do tempo de Luiz Inácio Lula da Silva: do ABC ao Planalto, contada em capítulos.",
    },
  ];
}

export default function Home() {
  return (
    <div className="poster-surface">
      <section
        className="grid items-stretch gap-8 pb-[var(--poster-section)] lg:grid-cols-2 lg:gap-12"
        aria-labelledby="hero-title"
      >
        <BlurFade className="self-start pt-4 lg:pt-8">
          <p className="eyebrow">Memória de um país</p>
          <h1 className="poster-display-title mt-4" id="hero-title">
            <span className="line-small">Uma história</span>
            <span className="line-small">
              que atravessa{" "}
              <span className="poster-title-tab">o tempo</span>
            </span>
            <span className="line-red">
              o Brasi
              <PtStarInline />l
            </span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-snug">
            <span className="block">De Garanhuns, 1945,</span>
            <span className="block">ao Parlatório, 2023,</span>
            <span className="block">e à reeleição de 2026.</span>
          </p>
          <div className="mt-8">
            <PosterButton to="/trajetoria">
              Ler a trajetória <span aria-hidden>→</span>
            </PosterButton>
          </div>
        </BlurFade>

        <BlurFade delay={0.12} className="hero-portrait-wrap">
          <PtStar variant="poster" className="hero-star-bg" rotate={11} />
          <PtStar variant="stamp" className="hero-star-stamp" rotate={-14} />
          <img
            className="hero-cutout"
            src={imagePath("lula-2023-quadrado.jpg")}
            alt="Retrato oficial de Luiz Inácio Lula da Silva, 2023"
            width={2050}
            height={2050}
            fetchPriority="high"
          />
        </BlurFade>
      </section>

      <hr className="section-divider" aria-hidden />

      <section className="py-[var(--poster-section)]" aria-labelledby="capitulos-title">
        <h2 className="poster-display-title max-w-none text-[length:var(--poster-heading)]" id="capitulos-title">
          Seis <span className="text-[var(--poster-red)] italic">capítulos</span>
        </h2>
        <p className="mt-4 max-w-prose text-[var(--poster-body)]">
          Clique em um cartão para abrir a trajetória completa — do berço no
          sertão à eleição presidencial de 2026.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capitulos.map((cap) => (
            <BlurFade key={cap.year} inView>
              <Link to="/trajetoria" className="poster-card h-full">
                <img
                  src={cap.image}
                  alt={cap.imageAlt}
                  className="aspect-[16/10] w-full object-cover"
                  loading="lazy"
                />
                <p className="poster-card__year">{cap.year}</p>
                <h3 className="poster-card__title">{cap.title}</h3>
                <p className="m-0 text-sm leading-snug">{cap.phrase}</p>
              </Link>
            </BlurFade>
          ))}
        </div>
      </section>

      <hr className="section-divider" aria-hidden />

      <section className="grid gap-8 py-[var(--poster-section)] lg:grid-cols-2 lg:gap-16">
        <h2 className="poster-display-title m-0 text-[length:var(--poster-heading)]">
          O que esta
          <br />
          <span className="text-[var(--poster-red)] italic">linha guarda</span>
        </h2>
        <div className="grid gap-4 text-[length:var(--poster-body)] leading-relaxed">
          <p>
            Esta página reúne <strong>fatos, fotos e vozes do povo brasileiro</strong>{" "}
            em torno de uma trajetória que começa na periferia industrial, passa
            pela Praça dos Três Poderes e inclui a disputa presidencial de 2026.
          </p>
          <p>
            Navegue pelos capítulos, filtre fatos como o 1º e o 2º turno de 2026,
            leia o perfil por abas e teste o quiz.
          </p>
        </div>
      </section>

      <section aria-labelledby="cenas-title" className="pb-[var(--poster-section)]">
        <p className="eyebrow text-[var(--poster-red)]" id="cenas-title">
          Brasileiros no Brasil
        </p>
        <h2 className="mt-2 text-2xl font-black uppercase sm:text-3xl">
          <BlurText text="Cenas que marcam a história" />
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
          {sceneStrip.map((scene) => (
            <img
              key={scene.src}
              src={scene.src}
              alt={scene.alt}
              className="aspect-[4/3] w-full border-[3px] border-[var(--poster-ink)] object-cover shadow-[-6px_6px_0_var(--poster-blue)]"
              loading="lazy"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
