"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Stack } from "@/components/layout/Stack";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { MapPin, Users, Zap, Clock, ShieldCheck, TrendingUp, X, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

interface Location {
  id: string;
  name: string;
  x: number; // Percentage from left
  y: number; // Percentage from top
  kpi: string;
  description: string;
  icon: LucideIcon;
  painPoint: string;
}

const locations: Location[] = [
  {
    id: "koeln",
    name: "Köln",
    x: 32.0,
    y: 70.3,
    kpi: ">150 Fahrer",
    description: "Hauptstandort & Logistik-Hub.",
    icon: Users,
    painPoint: "24/7 Support für Gastronomie-Spitzenzeiten."
  },
  {
    id: "bonn",
    name: "Bonn / Troisdorf",
    x: 35.6,
    y: 78.3,
    kpi: "<25 Min Zustellung",
    description: "Express-Korridor Köln-Bonn.",
    icon: Zap,
    painPoint: "Hocheffiziente Zustellung in der Metropolregion."
  },
  {
    id: "duesseldorf",
    name: "Düsseldorf / Neuss",
    x: 27.5,
    y: 58.6,
    kpi: "B2B Expertise",
    description: "Wirtschaftszentrum & Kurierdienste.",
    icon: ShieldCheck,
    painPoint: "Sichere Dokumenten- & Warenlogistik."
  },
  {
    id: "aachen",
    name: "Aachen",
    x: 10.0,
    y: 76.8,
    kpi: "E-Flotten Fokus",
    description: "Grenzregion & Nachhaltigkeit.",
    icon: TrendingUp,
    painPoint: "Umweltfreundliche Logistik für die Innenstadt."
  },
  {
    id: "leverkusen",
    name: "Leverkusen",
    x: 32.8,
    y: 66.6,
    kpi: "99.9% Pünktlichkeit",
    description: "Industrielle Anbindung.",
    icon: Clock,
    painPoint: "Präzises Zeitmanagement für Firmenkunden."
  },
  {
    id: "moenchengladbach",
    name: "Mönchengladbach",
    x: 19.1,
    y: 60.1,
    kpi: "Skalierbare Teams",
    description: "Flexible Personal-Logistik.",
    icon: Users,
    painPoint: "Schnelle Reaktionszeiten bei Personalbedarf."
  },
  {
    id: "bergisch-gladbach",
    name: "Bergisch Gladbach",
    x: 36.6,
    y: 68.1,
    kpi: "Lokale Dominanz",
    description: "Nahverdichtung im Umland.",
    icon: MapPin,
    painPoint: "Lokale Präsenz für schnellere Wege."
  },
  {
    id: "frechen",
    name: "Frechen",
    x: 28.6,
    y: 71.1,
    kpi: "Logistik-Tor",
    description: "Westliche Anbindung Köln.",
    icon: Zap,
    painPoint: "Perfekter Knotenpunkt für West-NRW."
  }
];

export function LocationsMap() {
  const [activeId, setActiveId] = useState<string | null>(locations[0].id);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveId((currentId) => {
        const currentIndex = locations.findIndex((l) => l.id === currentId);
        const nextIndex = (currentIndex + 1) % locations.length;
        return locations[nextIndex].id;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const activeLocation = locations.find((l) => l.id === activeId);

  return (
    <Section id="standorte" className="bg-[#0a0a0a] overflow-hidden py-24 border-y border-white/5 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,222,128,0.05),transparent_70%)] pointer-events-none" />
      
      <Container className="relative z-10">
        <Stack gap={16}>
          <div className="flex flex-col lg:flex-row items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-(--brand-green) font-bold text-sm uppercase tracking-widest block mb-4 glow-green">
                Regionale Präsenz
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
                Ihre Experten für <span className="text-(--brand-green) text-glow-green">NRW</span>
              </h2>
              <p className="text-gray-400 text-lg md:text-xl mt-6 font-medium leading-relaxed">
                Wir decken die wichtigsten Wirtschaftszentren in Nordrhein-Westfalen ab. Mit lokalen Teams garantieren wir maximale Geschwindigkeit und Flexibilität.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="px-8 py-5 bg-white/5 rounded-3xl border border-white/10 ring-4 ring-white/5 transition-all hover:scale-105 hover:bg-white/10">
                <div className="text-5xl font-black text-white tracking-tighter">8+</div>
                <div className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em] mt-2">Standorte</div>
              </div>
              <div className="px-8 py-5 bg-(--brand-green)/10 rounded-3xl border border-(--brand-green)/20 ring-4 ring-(--brand-green)/10 glow-green transition-all hover:scale-105">
                <div className="text-5xl font-black text-(--brand-green) tracking-tighter">24/7</div>
                <div className="text-[10px] text-gray-300 font-black uppercase tracking-[0.2em] mt-2">Einsatzbereit</div>
              </div>
            </div>
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Map Container */}
            <div className="lg:col-span-7 relative aspect-square bg-[#111] rounded-[4rem] p-10 border border-white/10 shadow-2xl ring-8 ring-white/5 overflow-hidden group">
              {/* Subtle Dot Grid Background */}
              <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(#fff_1px,transparent_0)] bg-size-[24px_24px]" />
              
              {/* Realistic NRW SVG Map */}
              <div className="absolute inset-4 sm:inset-6 md:inset-10 flex items-center justify-center opacity-20 pointer-events-none transition-opacity group-hover:opacity-30">
                <svg viewBox="0 0 1000 1000" preserveAspectRatio="none" className="w-full h-full fill-current text-gray-500 drop-shadow-2xl">
                  <path d="M45.5,657.3 L46.9,661.1 L48.2,664.9 L48.5,669.1 L50.8,672.3 L52.8,675.8 L55.1,679.3 L54.6,683.3 L52.9,686.9 L56.9,687.3 L60.5,685.4 L64.4,683.3 L68.4,683.7 L71.9,685.9 L76.4,684.9 L81.3,684.6 L85.7,684.6 L84.8,688.7 L83.3,692.5 L82.9,696.5 L83.4,701.1 L86.2,704.7 L90.3,706.0 L93.1,709.1 L97.1,709.0 L101.2,710.2 L100.0,714.0 L98.9,718.0 L98.5,722.0 L100.3,725.5 L101.1,729.5 L98.9,733.5 L98.0,739.3 L94.4,737.6 L90.4,737.0 L86.7,738.6 L83.6,741.3 L83.7,745.3 L85.4,749.0 L84.7,753.1 L81.9,756.2 L77.7,755.4 L73.7,756.0 L74.2,759.9 L77.9,761.7 L80.6,764.6 L84.0,766.9 L84.9,771.0 L84.3,774.9 L86.2,778.8 L89.3,781.3 L88.1,785.2 L88.6,789.3 L92.3,787.7 L96.3,789.0 L100.6,789.4 L104.5,788.6 L108.5,789.3 L110.4,792.8 L111.7,796.8 L113.9,800.2 L115.5,803.9 L117.7,807.3 L120.3,810.6 L123.7,812.8 L127.7,812.2 L127.5,816.3 L125.8,819.9 L129.6,821.6 L133.6,821.8 L136.4,818.9 L140.1,820.5 L144.2,821.1 L147.5,823.3 L147.7,827.3 L146.7,831.3 L144.3,834.5 L142.2,837.9 L140.6,841.7 L139.7,845.7 L139.0,849.8 L136.8,853.2 L133.4,855.4 L131.7,859.1 L129.4,862.5 L129.5,866.5 L131.6,870.1 L133.5,873.6 L135.5,877.1 L139.4,878.2 L143.0,876.3 L147.1,876.3 L150.9,877.5 L155.0,878.3 L159.3,879.0 L163.0,880.5 L166.8,881.9 L165.5,885.8 L166.0,889.7 L166.5,893.8 L170.3,895.6 L174.1,897.3 L174.7,901.3 L173.9,905.3 L172.0,909.4 L172.8,913.5 L171.0,917.5 L169.4,921.2 L166.5,924.0 L168.6,927.8 L171.6,930.8 L173.7,934.3 L177.2,936.4 L180.2,939.1 L182.3,942.5 L181.9,946.6 L185.8,947.8 L186.5,943.9 L182.8,941.9 L181.2,938.3 L180.0,934.4 L179.7,930.4 L177.7,926.6 L179.3,922.9 L183.2,921.6 L186.0,924.5 L185.6,928.5 L187.9,931.8 L190.6,928.5 L193.1,931.8 L195.4,935.1 L195.1,939.2 L193.4,942.9 L196.6,940.3 L200.4,941.7 L203.6,939.0 L206.8,936.6 L209.9,934.1 L212.6,930.5 L216.3,928.8 L220.3,929.5 L223.1,926.7 L226.8,925.0 L230.4,922.9 L231.7,926.8 L235.7,927.0 L237.5,930.7 L236.4,934.7 L238.9,937.9 L243.1,938.0 L245.5,934.7 L245.2,930.7 L249.3,929.6 L252.7,933.4 L254.2,937.2 L255.4,941.1 L259.3,939.5 L263.0,937.7 L266.4,935.5 L270.4,935.2 L273.9,933.1 L278.2,932.2 L282.0,930.8 L278.8,928.3 L276.4,924.2 L274.1,920.4 L275.3,916.4 L276.3,912.3 L276.7,908.3 L273.9,905.4 L270.1,903.9 L267.2,901.0 L270.6,898.7 L272.2,895.0 L271.1,891.2 L267.3,889.7 L270.6,887.4 L273.5,884.1 L277.3,882.6 L281.5,881.2 L283.4,884.7 L284.6,888.6 L288.0,890.6 L291.8,892.0 L294.7,894.7 L298.8,894.8 L301.2,891.6 L305.1,890.6 L307.6,887.5 L308.1,883.4 L307.0,879.3 L306.6,875.3 L306.0,871.2 L302.7,868.9 L305.3,865.8 L309.0,867.5 L312.3,865.3 L314.3,861.7 L313.0,857.9 L314.0,854.0 L317.8,852.5 L321.1,855.0 L325.1,855.4 L327.3,852.0 L331.4,851.8 L334.4,849.0 L337.0,845.9 L339.6,842.6 L341.8,839.2 L344.5,836.2 L348.8,837.6 L350.9,841.2 L354.2,843.4 L358.1,841.8 L359.6,838.0 L360.4,834.1 L364.2,835.5 L367.9,837.2 L370.2,833.9 L374.3,832.9 L376.8,829.7 L380.1,827.5 L380.4,823.4 L381.9,819.7 L385.7,821.1 L385.7,825.3 L389.3,827.1 L393.4,827.1 L397.3,827.9 L401.3,826.9 L405.3,825.8 L408.7,823.5 L412.5,821.8 L416.5,822.5 L419.6,820.0 L423.0,817.6 L422.2,813.6 L423.8,809.9 L425.1,806.1 L424.9,802.1 L422.6,798.8 L424.9,795.5 L426.1,791.5 L430.1,791.0 L435.0,790.9 L438.2,793.9 L442.5,794.0 L445.6,790.8 L449.6,790.5 L453.7,790.3 L456.8,787.8 L460.4,785.8 L463.4,783.1 L468.3,781.1 L472.2,779.9 L476.2,781.5 L480.1,782.1 L482.1,778.5 L482.0,774.5 L484.0,771.0 L487.9,770.0 L492.0,770.4 L496.1,770.0 L499.2,767.4 L500.4,763.5 L503.9,761.5 L503.4,757.5 L503.0,753.5 L499.7,751.2 L503.6,750.0 L507.3,748.4 L510.6,744.5 L514.6,740.6 L518.3,739.1 L523.0,740.2 L524.5,736.5 L523.1,732.5 L522.4,728.5 L522.9,723.5 L524.3,717.8 L520.5,715.9 L518.9,711.9 L522.4,709.9 L526.1,707.6 L529.1,704.9 L532.4,701.1 L536.3,702.1 L540.2,705.3 L544.0,706.9 L545.2,711.1 L543.1,714.8 L542.8,719.0 L541.3,723.0 L544.3,725.9 L548.4,727.0 L552.6,727.2 L555.9,729.5 L558.2,732.9 L559.8,736.9 L563.1,739.3 L567.1,739.3 L571.1,738.9 L575.4,739.2 L577.0,743.1 L578.6,747.0 L578.3,751.1 L578.4,755.3 L576.6,759.2 L576.9,763.3 L576.9,767.4 L579.1,770.7 L581.8,774.3 L585.3,776.4 L587.7,779.7 L590.4,782.6 L593.3,785.4 L595.3,788.9 L595.8,793.1 L595.0,797.9 L600.0,799.9 L603.8,795.9 L607.8,796.5 L612.0,798.1 L615.3,802.5 L618.2,799.2 L622.0,797.6 L623.1,792.6 L625.0,788.9 L627.0,785.1 L626.5,781.1 L623.8,778.1 L623.5,773.7 L619.8,771.8 L619.1,767.7 L617.4,764.0 L620.4,761.0 L624.3,758.3 L627.5,755.8 L629.1,751.5 L631.2,748.0 L634.4,744.9 L638.0,743.0 L640.9,739.5 L643.6,736.1 L646.4,732.7 L650.0,729.8 L652.2,726.1 L656.2,725.2 L659.2,728.3 L661.4,731.7 L665.7,733.5 L669.6,731.9 L673.8,731.8 L677.8,732.8 L678.5,728.8 L682.3,727.6 L683.2,723.4 L685.4,720.0 L688.0,716.8 L691.0,714.2 L693.9,711.2 L698.3,711.5 L700.1,707.4 L698.9,703.5 L700.3,699.7 L701.3,695.5 L700.7,691.5 L705.1,690.0 L706.3,685.8 L709.6,682.8 L711.7,678.5 L714.9,675.9 L718.0,673.3 L720.5,670.1 L719.3,666.1 L717.7,662.4 L713.3,663.0 L714.1,658.4 L716.8,655.5 L717.2,651.5 L713.9,649.1 L711.8,645.8 L714.7,643.0 L717.6,640.3 L721.8,639.3 L724.3,636.0 L728.2,636.9 L732.4,636.7 L737.0,636.8 L742.0,637.5 L747.2,639.3 L751.2,639.7 L754.6,637.5 L757.6,634.9 L761.6,634.1 L765.6,633.9 L762.5,631.1 L761.2,627.1 L760.5,622.9 L763.5,619.8 L766.4,616.8 L770.8,613.2 L774.1,609.8 L776.5,606.5 L774.6,602.9 L774.5,598.1 L778.2,595.8 L776.1,592.4 L772.3,589.8 L771.6,584.8 L769.7,581.2 L768.9,577.1 L770.8,573.3 L768.0,570.3 L765.5,567.0 L760.9,567.3 L756.9,569.8 L752.7,570.2 L747.1,571.6 L743.8,573.8 L741.1,576.9 L736.9,578.0 L733.3,576.1 L731.9,572.3 L729.1,569.1 L726.0,566.3 L727.8,562.5 L730.5,559.6 L733.3,556.7 L736.0,553.4 L737.6,549.7 L739.6,546.1 L741.9,542.1 L745.3,539.7 L749.4,540.6 L751.2,537.1 L754.4,534.4 L757.3,531.7 L756.5,527.7 L760.3,526.0 L764.5,527.0 L768.9,527.5 L772.8,526.5 L776.8,525.4 L779.8,522.6 L783.8,521.6 L788.3,520.2 L792.5,520.8 L796.6,521.7 L800.2,525.3 L804.2,523.9 L807.5,521.4 L811.0,519.4 L815.8,519.4 L820.3,520.5 L823.4,517.8 L822.9,512.9 L824.3,509.1 L823.6,504.4 L819.6,504.1 L817.3,500.5 L817.4,496.5 L815.9,492.5 L812.6,488.9 L810.2,484.9 L812.2,480.8 L816.1,479.0 L820.2,477.7 L826.2,474.7 L830.3,473.2 L836.4,471.2 L840.5,469.8 L844.1,471.6 L847.2,474.5 L851.6,475.0 L856.1,475.0 L860.6,477.5 L860.6,482.0 L859.0,485.7 L857.5,489.7 L859.2,493.6 L860.4,497.5 L866.1,498.5 L870.1,497.7 L874.7,499.6 L878.8,498.3 L880.3,494.0 L882.5,490.5 L886.6,490.3 L891.3,491.4 L893.1,487.2 L893.0,482.8 L895.6,479.7 L898.5,476.9 L902.8,476.3 L905.7,473.4 L908.8,470.7 L913.0,470.0 L916.5,467.9 L916.6,463.9 L917.2,459.8 L918.2,455.8 L921.2,453.1 L923.3,449.6 L925.5,446.1 L927.8,442.3 L930.9,439.7 L928.5,436.3 L925.4,432.9 L923.0,429.2 L926.7,427.6 L930.8,427.2 L933.6,424.3 L938.0,424.7 L942.4,423.6 L947.2,421.3 L949.7,417.7 L947.5,414.3 L943.8,416.1 L939.6,416.0 L935.5,416.5 L932.9,413.1 L933.6,408.9 L937.2,405.9 L937.5,401.7 L935.6,398.2 L938.7,395.5 L938.3,391.0 L935.9,387.2 L937.3,382.7 L934.6,379.6 L932.9,375.9 L935.2,372.5 L938.8,370.5 L941.3,367.1 L942.9,363.5 L946.1,360.8 L949.1,357.9 L948.2,354.0 L946.6,350.1 L947.0,346.0 L948.5,342.3 L947.6,338.1 L950.0,334.6 L953.3,332.1 L954.0,327.9 L950.0,329.1 L946.1,330.4 L941.8,330.4 L937.8,329.4 L933.8,328.6 L930.0,327.0 L926.2,328.4 L923.1,331.1 L923.4,327.0 L923.8,323.0 L924.4,318.9 L925.3,314.9 L924.2,311.0 L922.5,307.4 L919.0,305.3 L915.5,303.2 L911.4,303.6 L907.9,301.5 L907.3,297.3 L905.2,293.9 L906.5,290.0 L908.3,286.5 L907.0,282.2 L903.3,280.8 L898.7,282.1 L894.6,282.8 L891.2,284.9 L887.6,286.6 L885.4,283.2 L883.0,279.8 L884.2,275.8 L887.4,273.1 L883.8,271.2 L885.7,267.6 L886.0,263.5 L884.3,259.8 L882.1,256.2 L881.4,252.2 L881.9,247.8 L883.7,244.2 L884.6,240.3 L882.5,236.7 L879.1,234.6 L876.7,231.4 L872.7,232.1 L872.1,228.1 L874.8,225.1 L878.1,222.6 L876.7,218.8 L873.8,216.0 L870.0,214.6 L866.2,216.0 L862.2,215.2 L858.4,213.9 L855.6,211.0 L851.1,210.6 L848.9,214.1 L844.9,215.3 L840.8,216.0 L841.8,211.8 L842.2,207.8 L841.3,203.8 L840.6,199.6 L838.3,196.3 L836.3,192.7 L840.4,193.1 L843.3,196.1 L847.5,196.0 L849.4,192.4 L849.0,188.3 L849.0,184.2 L847.1,180.6 L851.2,180.8 L854.5,178.5 L857.2,175.5 L853.4,174.0 L850.0,171.6 L846.9,169.0 L842.9,168.0 L839.3,166.0 L835.6,164.3 L831.6,163.5 L832.4,159.5 L829.2,157.1 L832.9,155.0 L834.2,151.0 L835.2,147.0 L835.0,142.8 L837.1,139.4 L840.0,136.5 L843.3,134.1 L844.4,130.2 L849.8,131.3 L852.8,128.6 L856.6,127.3 L859.4,124.4 L860.4,120.5 L862.8,117.1 L862.2,112.9 L865.0,110.0 L868.3,106.5 L869.4,101.9 L869.0,97.1 L865.0,96.6 L865.9,92.7 L863.0,89.7 L863.9,83.0 L869.5,78.3 L872.8,75.3 L869.2,71.4 L865.1,69.0 L862.3,66.1 L858.1,66.6 L853.9,66.4 L849.8,67.0 L849.0,71.4 L845.2,73.2 L843.3,76.7 L842.1,81.6 L838.1,82.9 L834.8,85.2 L834.1,89.2 L834.6,93.2 L830.9,95.2 L828.0,98.0 L824.4,99.8 L822.7,103.7 L819.4,105.9 L814.9,104.9 L810.8,104.2 L809.8,108.3 L805.4,109.1 L801.4,109.5 L796.7,110.0 L790.6,108.6 L786.0,107.6 L781.2,108.3 L776.6,110.4 L772.5,110.8 L769.9,107.7 L765.7,110.0 L764.1,106.2 L763.9,102.1 L763.6,98.1 L766.4,95.1 L764.1,91.4 L763.1,86.4 L763.7,82.4 L764.6,78.4 L764.2,74.4 L761.7,70.8 L762.3,66.9 L761.6,62.5 L758.4,60.0 L754.7,57.9 L752.3,54.6 L748.1,53.0 L743.6,55.5 L739.1,57.9 L735.3,60.0 L731.4,62.1 L727.2,64.3 L722.6,64.2 L718.7,62.5 L714.7,60.2 L710.3,62.1 L707.6,65.4 L701.3,68.3 L700.9,73.6 L700.2,80.0 L697.7,83.2 L694.6,85.8 L690.6,86.2 L686.5,85.6 L682.6,86.8 L678.7,87.9 L674.2,86.7 L670.4,84.4 L666.4,85.1 L662.5,83.3 L662.0,87.6 L661.8,92.4 L665.5,94.3 L666.3,98.7 L666.7,102.7 L671.7,107.4 L675.1,110.0 L679.1,111.6 L683.4,112.9 L686.3,115.8 L690.5,118.6 L694.4,120.6 L696.6,124.0 L697.8,128.5 L699.0,133.3 L700.9,137.3 L702.4,141.1 L702.8,145.3 L701.5,149.1 L701.3,153.7 L702.0,157.9 L702.4,162.2 L702.0,166.3 L702.9,170.2 L701.2,173.9 L700.7,177.9 L698.9,181.5 L698.7,185.6 L700.0,189.4 L703.9,191.5 L708.5,192.3 L712.2,194.1 L712.6,198.2 L710.5,201.6 L707.4,204.2 L704.6,207.1 L700.5,207.9 L697.0,210.1 L693.4,212.0 L690.0,214.2 L687.6,217.5 L687.9,221.5 L687.2,225.6 L683.5,227.0 L679.4,226.5 L676.9,223.1 L673.0,222.2 L669.3,220.6 L665.3,220.7 L661.6,222.2 L658.1,220.2 L657.7,216.2 L653.9,217.8 L651.8,221.2 L647.8,221.8 L645.1,224.8 L641.9,227.3 L639.4,230.4 L637.4,233.9 L635.5,237.4 L634.4,241.3 L630.4,242.1 L626.3,241.1 L622.2,241.1 L618.3,242.0 L614.8,244.5 L611.3,246.8 L606.9,245.2 L603.0,244.3 L599.0,245.2 L595.0,245.5 L590.9,245.6 L588.3,248.6 L583.8,250.9 L581.9,254.5 L578.2,256.2 L573.8,254.6 L569.3,252.9 L565.4,251.0 L563.8,247.1 L561.4,243.9 L559.1,240.6 L556.9,237.3 L559.6,233.9 L564.0,232.9 L567.7,231.0 L571.6,229.6 L575.2,226.9 L582.1,224.0 L587.0,224.1 L586.4,218.6 L585.7,214.5 L585.7,210.2 L585.4,206.1 L589.4,205.6 L589.3,200.9 L585.5,199.3 L581.4,199.9 L577.4,200.3 L573.7,198.3 L569.4,199.1 L565.9,197.0 L563.0,194.3 L561.4,190.7 L559.8,186.9 L561.3,183.1 L563.9,180.0 L566.6,177.0 L566.6,173.0 L565.5,169.0 L566.1,165.0 L569.0,162.3 L572.9,160.9 L571.4,156.6 L568.4,153.8 L568.0,149.8 L571.2,146.2 L577.2,146.0 L582.2,146.6 L579.9,143.3 L576.6,139.8 L574.2,136.0 L571.7,132.4 L573.2,128.6 L570.5,125.5 L569.0,121.8 L561.8,117.9 L557.6,114.6 L552.5,115.9 L547.7,118.3 L541.9,119.1 L537.8,118.6 L530.9,115.4 L526.6,113.0 L522.6,110.7 L516.2,107.0 L511.8,103.4 L510.4,96.7 L509.6,92.3 L507.9,87.9 L506.1,84.2 L501.2,82.8 L497.2,80.7 L493.5,79.4 L489.7,77.8 L486.1,75.9 L482.6,78.5 L479.5,83.8 L477.6,89.7 L474.8,93.2 L482.6,97.1 L481.4,102.8 L479.4,106.4 L478.3,111.2 L478.3,115.3 L473.7,118.2 L469.4,119.9 L464.5,120.1 L460.2,122.7 L455.6,126.4 L451.1,129.5 L446.4,132.2 L442.9,134.2 L440.9,139.0 L436.4,143.1 L432.8,145.1 L428.8,145.1 L425.9,147.9 L423.6,152.8 L419.6,155.1 L415.4,155.7 L411.6,157.2 L409.2,160.5 L405.0,162.8 L401.0,162.8 L396.8,162.8 L391.1,162.8 L385.5,162.7 L380.6,162.4 L375.9,162.1 L371.5,161.9 L367.4,162.9 L363.2,163.9 L360.4,166.8 L358.8,170.5 L354.7,171.8 L350.6,172.1 L347.7,174.8 L343.9,176.9 L340.1,178.4 L336.1,178.5 L331.4,178.1 L327.8,180.0 L326.8,183.9 L325.1,187.6 L323.0,191.2 L321.1,195.2 L317.2,197.6 L313.0,198.3 L308.9,199.2 L307.0,202.9 L304.0,205.5 L301.9,209.0 L301.0,213.0 L300.1,216.9 L297.4,220.2 L293.6,222.4 L289.3,222.8 L285.0,222.9 L280.7,222.9 L276.0,222.8 L271.6,222.8 L271.3,226.8 L270.8,230.8 L267.7,233.3 L268.6,237.5 L265.7,240.4 L261.3,241.4 L256.8,242.4 L254.7,245.9 L253.0,249.8 L253.2,255.2 L259.6,255.2 L263.3,256.8 L267.0,258.6 L270.5,260.7 L273.0,263.9 L276.5,266.0 L279.8,268.7 L283.3,271.5 L287.0,274.1 L289.2,277.6 L289.4,281.6 L289.0,285.7 L285.0,286.5 L281.2,288.6 L280.7,293.2 L280.3,297.2 L278.4,300.8 L275.8,303.9 L272.3,306.3 L269.4,309.1 L265.6,310.7 L263.0,313.8 L259.2,311.9 L256.8,308.6 L253.5,306.4 L249.4,306.4 L245.5,308.6 L241.6,310.4 L238.0,312.3 L233.5,313.2 L229.3,314.5 L225.1,316.4 L221.8,318.7 L217.8,319.5 L214.2,321.4 L210.3,323.6 L206.8,325.5 L204.2,328.8 L200.4,330.3 L196.3,330.7 L193.8,327.5 L189.4,328.7 L186.2,326.3 L182.4,324.9 L178.6,323.5 L177.1,327.2 L179.8,330.1 L181.7,333.7 L181.9,337.7 L182.2,341.7 L178.4,340.4 L174.5,339.3 L171.1,337.1 L168.9,333.7 L165.0,332.8 L161.0,332.5 L157.1,333.3 L155.6,329.3 L154.0,325.6 L150.2,323.3 L146.4,324.9 L142.2,325.2 L138.1,324.9 L134.2,325.8 L130.5,324.2 L127.2,321.5 L127.3,317.4 L124.6,314.3 L120.5,312.2 L116.5,311.3 L112.7,312.6 L108.6,312.9 L105.5,315.7 L109.5,316.1 L113.0,318.2 L115.2,321.6 L116.5,325.4 L119.9,327.6 L120.6,331.6 L121.3,335.5 L117.1,335.2 L112.9,334.2 L108.8,334.1 L104.8,333.5 L100.8,331.2 L97.4,328.2 L93.8,330.0 L91.4,333.3 L88.4,335.9 L84.4,336.5 L81.5,339.3 L77.7,340.9 L73.7,340.3 L70.0,338.5 L66.7,342.2 L68.4,346.4 L69.7,350.5 L72.6,353.4 L72.5,357.6 L76.2,360.6 L74.8,364.3 L75.7,368.4 L72.3,370.5 L69.2,373.1 L67.2,377.0 L70.9,378.6 L75.1,378.5 L79.1,379.8 L82.7,381.9 L86.6,383.9 L90.0,387.1 L86.7,389.5 L86.4,393.5 L87.3,397.5 L87.0,401.6 L88.4,405.3 L92.0,406.9 L96.0,408.5 L99.7,410.1 L103.7,411.1 L107.7,411.6 L107.3,415.8 L106.1,419.9 L104.9,424.0 L103.1,427.9 L102.5,431.9 L105.2,434.9 L108.9,437.7 L111.7,441.8 L114.9,445.7 L118.0,448.2 L120.4,452.0 L124.0,460.2 L128.0,463.2 L130.8,466.4 L132.9,470.4 L133.4,474.5 L133.1,478.5 L134.7,482.3 L135.8,486.4 L135.4,490.5 L134.9,494.5 L133.4,498.7 L133.3,503.9 L132.5,508.7 L131.8,512.8 L134.0,516.1 L133.5,520.6 L134.5,524.8 L135.6,528.9 L136.0,532.9 L132.9,535.8 L129.8,538.6 L128.0,542.2 L123.9,543.4 L120.8,546.5 L119.6,550.4 L117.9,554.2 L115.9,557.8 L113.3,561.0 L111.3,564.6 L109.7,568.3 L106.9,571.3 L104.2,574.4 L101.2,577.7 L97.6,580.1 L99.3,583.9 L101.0,588.1 L96.4,589.0 L96.9,593.2 L97.2,597.2 L97.5,601.4 L98.5,605.5 L101.4,609.0 L105.4,608.7 L108.6,606.1 L112.0,603.8 L116.0,602.0 L120.0,600.2 L123.7,601.8 L120.7,604.9 L117.0,606.7 L118.2,610.6 L123.2,613.7 L120.5,616.7 L116.7,618.0 L112.9,619.4 L109.4,621.4 L105.6,622.7 L102.1,624.6 L99.5,627.7 L96.3,630.3 L93.2,633.3 L90.9,636.8 L87.8,639.4 L83.8,639.8 L80.6,642.6 L77.4,645.5 L74.6,648.4 L72.9,652.3 L71.7,656.1 L70.9,660.1 L68.6,663.6 L64.5,663.5 L62.0,660.2 L60.1,656.6 L59.0,652.7 L54.7,653.5 L51.7,656.5 L47.7,657.1 Z M121.2,813.2 L124.1,816.0 L128.2,815.6 L125.3,812.7 L121.2,813.2 Z M121.4,820.4 L124.0,823.5 L123.9,827.6 L127.4,825.4 L131.5,825.2 L135.7,825.8 L139.5,827.4 L143.8,827.1 L147.8,827.1 L147.3,823.1 L143.7,821.4 L139.7,820.4 L135.8,821.5 L131.7,822.0 L127.7,822.1 L124.3,820.0 Z M123.3,855.2 L124.3,859.3 L127.2,862.1 L130.6,859.8 L132.3,856.2 L136.4,855.3 L138.3,851.8 L139.4,847.9 L139.8,843.7 L136.4,841.6 L134.5,845.4 L131.4,848.1 L128.7,851.1 L125.3,853.3 Z M126.6,867.2 L130.0,869.2 L128.9,865.3 Z M141.5,838.9 Z" />
                </svg>
              </div>

              {/* Location Markers */}
              <div className="absolute inset-4 sm:inset-6 md:inset-10">
                {locations.map((loc) => (
                  <button
                    key={loc.id}
                    onClick={() => {
                      setActiveId(loc.id);
                      setIsAutoPlaying(false);
                    }}
                    className="absolute group/marker transition-transform hover:scale-110 z-20 cursor-pointer -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                  >
                  <div className="relative">
                    {/* Radar Pulse - Only animate for active or hovered items */}
                    {activeId === loc.id && (
                      <motion.div
                        animate={{ scale: [1, 2.5, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 rounded-full glow-green bg-(--brand-green) will-change-transform"
                      />
                    )}
                    <div
                      className={`relative w-4 h-4 md:w-5 md:h-5 rounded-full border-2 border-[#111] shadow-xl transition-all duration-500 will-change-transform ${
                        activeId === loc.id ? "bg-(--brand-green) scale-125 shadow-[0_0_20px_rgba(74,222,128,0.8)]" : "bg-white group-hover/marker:bg-(--brand-green) group-hover/marker:scale-110"
                      }`}
                    />
                    
                    {/* Label */}
                    <div className={`absolute top-full mt-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/80 backdrop-blur-md px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] text-white shadow-xl border border-white/10 transition-all z-30 ${activeId === loc.id ? 'opacity-100 scale-100' : 'opacity-0 scale-90 group-hover/marker:opacity-100 group-hover/marker:scale-100'}`}>
                      {loc.name}
                    </div>
                  </div>
                </button>
              ))}
              </div>
            </div>

            {/* Info Card Container */}
            <div className={`fixed inset-0 z-[50] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm lg:relative lg:inset-auto lg:bg-transparent lg:backdrop-blur-none lg:p-0 lg:col-span-5 h-full lg:flex lg:flex-col lg:justify-center pointer-events-none lg:pointer-events-auto transition-all ${activeLocation ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0 lg:opacity-100'}`}>
              <AnimatePresence mode="wait">
                {activeLocation && (
                  <motion.div
                    key={activeLocation.id}
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="bg-[#111] w-full max-w-md lg:max-w-none p-10 rounded-[2.5rem] lg:rounded-[3.5rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.8)] text-white relative overflow-hidden border border-white/10 ring-1 lg:ring-8 ring-white/5"
                    onClick={(e) => e.stopPropagation()}
                  >
                     {/* Close Button for Mobile */}
                    <button 
                      onClick={() => setActiveId(null)}
                      aria-label="Standort-Details schließen"
                      className="absolute top-6 right-6 lg:hidden w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-50 pointer-events-auto"
                    >
                      <X className="w-5 h-5" />
                    </button>

                    <div className="absolute top-0 right-0 w-80 h-80 bg-(--brand-green)/10 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    
                    <div className="relative z-10 flex flex-col gap-8 lg:gap-10">
                      <div className="flex items-center justify-between">
                        <div className="p-4 lg:p-5 bg-(--brand-green)/10 rounded-[1.5rem] lg:rounded-[2rem] shadow-xl ring-1 ring-(--brand-green)/20 text-(--brand-green)">
                          <activeLocation.icon className="h-8 w-8 lg:h-10 lg:w-10" />
                        </div>
                        <div className="text-right">
                          <div className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-black">Standort</div>
                          <div className="text-2xl lg:text-3xl font-black tracking-tight text-white">{activeLocation.name}</div>
                        </div>
                      </div>

                      <div className="space-y-3 lg:space-y-4">
                        <div className="text-4xl lg:text-6xl font-black text-transparent bg-clip-text bg-linear-to-r from-white to-gray-500 tracking-tighter">
                          {activeLocation.kpi}
                        </div>
                        <p className="text-lg lg:text-xl text-gray-400 font-medium leading-relaxed">
                          {activeLocation.description}
                        </p>
                      </div>

                      <div className="pt-8 lg:pt-10 border-t border-white/10">
                        <div className="text-[10px] text-(--brand-green) uppercase font-black mb-3 lg:mb-4 tracking-[0.2em] glow-green">
                          Pain Point gelöst:
                        </div>
                        <p className="text-xl lg:text-2xl font-bold leading-relaxed tracking-tight text-white">
                          &quot;{activeLocation.painPoint}&quot;
                        </p>
                      </div>

                      <Button className="w-full bg-(--brand-green) hover:bg-(--brand-green)/90 text-(--brand-dark) font-black h-14 lg:h-16 rounded-2xl glow-green border-none transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(74,222,128,0.3)]" asChild>
                        <a href={siteConfig.links.whatsapp} target="_blank" rel="noopener noreferrer">
                          Jetzt Standort anfragen
                        </a>
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Background click to close on mobile */}
              <div className="absolute inset-0 z-0 lg:hidden" onClick={() => setActiveId(null)} />
            </div>
          </div>
        </Stack>
      </Container>
    </Section>
  );
}

