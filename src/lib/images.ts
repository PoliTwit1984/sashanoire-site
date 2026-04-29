export type GalleryImage = {
  file: string;
  url: string;
  alt: string;
  category: string;
};

const cdnData: Record<string, { file: string; url: string; alt: string }[]> = {
  fashion: [
    { file: "FS-F02-blazer-sunglasses.jpg", url: "https://v3b.fal.media/files/b/0a945f09/EeABJz-xHUN2LTBMfAKCl_FS-F02-blazer-sunglasses.jpg", alt: "Blazer and sunglasses" },
    { file: "FS-F04-graffiti-alley.jpg", url: "https://v3b.fal.media/files/b/0a945f09/to5SvJ6-mNqnknkOZgJH1_FS-F04-graffiti-alley.jpg", alt: "Graffiti alley" },
    { file: "FS-F06-motorcycle.jpg", url: "https://v3b.fal.media/files/b/0a945f09/8tRkucnt44JdfY7nxs_Uy_FS-F06-motorcycle.jpg", alt: "Motorcycle" },
    { file: "FS-F07-emerald-wrap.jpg", url: "https://v3b.fal.media/files/b/0a945f09/PBuWEfz4NuTvMkT2-eXc-_FS-F07-emerald-wrap.jpg", alt: "Emerald wrap" },
    { file: "FS-F09-velvet-blazer.jpg", url: "https://v3b.fal.media/files/b/0a945f09/bFod2JB-rcHqB3G1o20VV_FS-F09-velvet-blazer.jpg", alt: "Velvet blazer" },
    { file: "FS-F10-museum-dress.jpg", url: "https://v3b.fal.media/files/b/0a945f09/pVQVpkWMFmM4SLCxi8Sq-_FS-F10-museum-dress.jpg", alt: "Museum dress" },
    { file: "FS01-boulevard-walk.jpg", url: "https://v3b.fal.media/files/b/0a945f09/CifBUMEsitdgee72s-e3E_FS01-boulevard-walk.jpg", alt: "Boulevard walk" },
    { file: "FS02-slip-dress-moto.jpg", url: "https://v3b.fal.media/files/b/0a945f0a/nk669cn3J8fJelxqylfeX_FS02-slip-dress-moto.jpg", alt: "Slip dress moto" },
    { file: "D1-P3-evening-bodysuit-final.jpg", url: "https://v3b.fal.media/files/b/0a945f0a/9eVX-1OFrYlONUwqE4rcQ_D1-P3-evening-bodysuit-final.jpg", alt: "Evening bodysuit" },
  ],
  lifestyle: [
    { file: "FS-L04-botanical-garden.jpg", url: "https://v3b.fal.media/files/b/0a945f0a/nSvzy1Ls22JGtSqzM5FqX_FS-L04-botanical-garden.jpg", alt: "Botanical garden" },
    { file: "FS-L05-cooking-kitchen.jpg", url: "https://v3b.fal.media/files/b/0a945f0a/SiDGz5oAUW7ktZTpHDkle_FS-L05-cooking-kitchen.jpg", alt: "Cooking in kitchen" },
    { file: "FS-L07-park-bench-golden.jpg", url: "https://v3b.fal.media/files/b/0a945f0a/T870wXR-yG35zwNe9rmSK_FS-L07-park-bench-golden.jpg", alt: "Park bench golden hour" },
    { file: "FS-L08-flower-market.jpg", url: "https://v3b.fal.media/files/b/0a945f0a/ooRTLK6pdriZVJZMoWcEa_FS-L08-flower-market.jpg", alt: "Flower market" },
    { file: "FS-L09-wine-bar.jpg", url: "https://v3b.fal.media/files/b/0a945f0a/Bp9GRBIncmuTkFpMglFjf_FS-L09-wine-bar.jpg", alt: "Wine bar" },
    { file: "FS-L12-balcony-dawn.jpg", url: "https://v3b.fal.media/files/b/0a945f0a/Rj7VJQ7FgLOX0p0LE1fKr_FS-L12-balcony-dawn.jpg", alt: "Balcony at dawn" },
    { file: "FS01-cafe-matcha.jpg", url: "https://v3b.fal.media/files/b/0a945f0a/y9rpOGDRNyXHwWCNfSPnG_FS01-cafe-matcha.jpg", alt: "Cafe matcha" },
    { file: "FS03-bookshop-records.jpg", url: "https://v3b.fal.media/files/b/0a945f0a/HxaBxcvNVFCHy3qFmsyGO_FS03-bookshop-records.jpg", alt: "Bookshop records" },
    { file: "D1-P1-morning-kitchen-final.jpg", url: "https://v3b.fal.media/files/b/0a945f0a/KplviCNtaU6Qw0w8h4eGe_D1-P1-morning-kitchen-final.jpg", alt: "Morning in kitchen" },
  ],
  portrait: [
    { file: "FS-P03-teal-wall.jpg", url: "https://v3b.fal.media/files/b/0a945f0b/bMaokIwwq9mg6-4KQiNJK_FS-P03-teal-wall.jpg", alt: "Teal wall portrait" },
    { file: "FS-P04-bw-rembrandt.jpg", url: "https://v3b.fal.media/files/b/0a945f0b/HOEcyBAm514mO3JfdtJbl_FS-P04-bw-rembrandt.jpg", alt: "Black and white Rembrandt lighting" },
    { file: "FS01-dewy-beauty.jpg", url: "https://v3b.fal.media/files/b/0a97d23d/5gopByIGfQZEqdLDovglt_f56959c9321740dea720d557e7d06b1f.jpg", alt: "Dewy beauty" },
    { file: "FS02-moody-dramatic.jpg", url: "https://v3b.fal.media/files/b/0a945f0b/0GWcKFv5HUWcjmql8XXvJ_FS02-moody-dramatic.jpg", alt: "Moody dramatic portrait" },
  ],
  travel: [
    { file: "FS-T01-rooftop-skyline.jpg", url: "https://v3b.fal.media/files/b/0a945f0b/jcBEpLLJGog5eQIDG_r4j_FS-T01-rooftop-skyline.jpg", alt: "Rooftop skyline" },
    { file: "FS-T03-italian-coast.jpg", url: "https://v3b.fal.media/files/b/0a945f0b/9NR7ATvomwdzGhu1ZRF6n_FS-T03-italian-coast.jpg", alt: "Italian coast" },
    { file: "FS-T05-bougainvillea-alley.jpg", url: "https://v3b.fal.media/files/b/0a945f0b/rlOBGJb3M0uCeUvSVy3mS_FS-T05-bougainvillea-alley.jpg", alt: "Bougainvillea alley" },
    { file: "FS-T06-desert-redrock.jpg", url: "https://v3b.fal.media/files/b/0a945f0b/VyGijr4aqULzZ2_5qW88P_FS-T06-desert-redrock.jpg", alt: "Desert red rock" },
    { file: "FS01-mediterranean-cliff.jpg", url: "https://v3b.fal.media/files/b/0a945f0b/HuCycrWOfQHRUe4k2a15v_FS01-mediterranean-cliff.jpg", alt: "Mediterranean cliff" },
    { file: "FS02-moroccan-riad.jpg", url: "https://v3b.fal.media/files/b/0a945f0b/osvNxe0JNpn9H4-dmm4P1_FS02-moroccan-riad.jpg", alt: "Moroccan riad" },
    { file: "D2-P5-golden-hour-car-final.jpg", url: "https://v3b.fal.media/files/b/0a945f0b/YVgXUM7j1f2y0y4c-3L3a_D2-P5-golden-hour-car-final.jpg", alt: "Golden hour car" },
  ],
};

export const categories = Object.keys(cdnData);

export function getImages(category?: string): GalleryImage[] {
  if (category && cdnData[category]) {
    return cdnData[category].map((img) => ({ ...img, category }));
  }
  return Object.entries(cdnData).flatMap(([cat, imgs]) =>
    imgs.map((img) => ({ ...img, category: cat }))
  );
}

export const heroImage = cdnData.portrait[2]; // dewy beauty
export const heroFashion = cdnData.fashion[0]; // blazer sunglasses
