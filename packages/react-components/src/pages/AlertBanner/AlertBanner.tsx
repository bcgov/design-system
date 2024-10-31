import { AlertBanner } from "@/components";
import { Button } from "@/components";
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
    banner6: true,
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
          Alert banner in its default configuration
        </AlertBanner>
      )}
      {banners.banner2 && (
        <AlertBanner variant="success" onClose={() => handleClose("banner2")}>
          Success theme
        </AlertBanner>
      )}
      {banners.banner3 && (
        <AlertBanner variant="warning" onClose={() => handleClose("banner3")}>
          Warning theme with an additional call-to-action button
          <Button variant="secondary" size="small">
            Take an action
          </Button>
        </AlertBanner>
      )}
      {banners.banner4 && (
        <AlertBanner
          variant="danger"
          isCloseable={false}
          onClose={() => handleClose("banner4")}
        >
          Danger theme with close button disabled
        </AlertBanner>
      )}
      {banners.banner5 && (
        <AlertBanner
          variant="dark"
          customIcon={<SvgBcOutlineIcon />}
          onClose={() => handleClose("banner5")}
        >
          Dark theme with a custom icon
        </AlertBanner>
      )}
    </>
  );
}
