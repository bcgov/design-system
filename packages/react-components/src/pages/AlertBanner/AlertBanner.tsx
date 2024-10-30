import { AlertBanner } from "@/components";
import { SvgChevronDownIcon } from "@/components";

export default function AlertBannerPage() {
  return (
    <>
      <AlertBanner>This is an alert banner in its default state</AlertBanner>
      <AlertBanner variant="success">Success state</AlertBanner>
      <AlertBanner variant="warning">Warning state</AlertBanner>
      <AlertBanner variant="danger">Danger state</AlertBanner>
      <AlertBanner variant="dark" customIcon={<SvgChevronDownIcon />}>
        Dark state with a custom icon
      </AlertBanner>
    </>
  );
}
