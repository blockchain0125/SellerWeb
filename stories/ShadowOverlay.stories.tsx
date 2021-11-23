import { Meta, Story } from "@storybook/react/types-6-0";
import { useCallback, useState } from "react";
import { IShadowOverlayerProps, ShadowOverlayer } from "../src/components/shared/ShadowOverlayer";

export default {
  title: "Overlay (modal)",
  component: ShadowOverlayer,
} as Meta;

const Template: Story<IShadowOverlayerProps> = (args) => {
  const [showOverlay, setShowOverlay] = useState<boolean>(false);
  const onShowOverlay = useCallback(() => {
    setShowOverlay(true);
  }, []);

  return (
    <div>
      <button onClick={onShowOverlay}>Open overlay (modal)</button>
      {showOverlay && <ShadowOverlayer {...args} />}
    </div>
  );
};

export const BasicOverlay = Template.bind({});
BasicOverlay.args = {
  children: <div>Modal Content</div>,
} as IShadowOverlayerProps;
