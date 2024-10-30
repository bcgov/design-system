import { AlertBanner } from "@/components";
import { SvgBcOutlineIcon } from "@/components";
import { useState } from "react";

interface BannerState {
  [key: string]: boolean;
}

export default function AlertBannerPage() {
  const [banners, setBanners] = useState<BannerState>({
    banner1: true,
    banner2: true,
    banner3: true,
    banner4: true,
    banner5: true,
  });

  const handleClose = (bannerId: string) => {
    setBanners((prev) => ({
      ...prev,
      [bannerId]: false,
    }));
  };
  return (
    <>
      {banners.banner1 && (
        <AlertBanner onClose={() => handleClose("banner1")}>
          This is an alert banner in its default configuration
        </AlertBanner>
      )}
      {banners.banner2 && (
        <AlertBanner variant="success" onClose={() => handleClose("banner2")}>
          Success state
        </AlertBanner>
      )}
      {banners.banner3 && (
        <AlertBanner variant="warning" onClose={() => handleClose("banner3")}>
          Warning state
        </AlertBanner>
      )}
      {banners.banner4 && (
        <AlertBanner variant="danger" onClose={() => handleClose("banner4")}>
          Danger state
        </AlertBanner>
      )}
      {banners.banner5 && (
        <AlertBanner
          variant="dark"
          isCloseable={false}
          customIcon={<SvgBcOutlineIcon />}
          onClose={() => handleClose("banner5")}
        >
          Dark state with a custom icon and close function disabled
        </AlertBanner>
      )}
    </>
  );
}
