import { Meta, Story } from "@storybook/react/types-6-0";
import { IImageGalleryProps, ImageGallery, ImageOptions } from "../src/components/shared/ImageGallery";
import faker from "faker";

export default {
  title: "Image Gallery",
} as Meta;

const Template: Story<IImageGalleryProps> = (args) => <ImageGallery {...args} />;

const mockData: ImageOptions[] = [];
for (let i = 0; i < 4; i++) {
  mockData.push({
    id: i,
    source: faker.image.image(),
  });
}

export const DefaultImageGallery = Template.bind({});
DefaultImageGallery.args = {
  images: mockData,
  thumbnailPosition: "bottom",
} as IImageGalleryProps;

export const RightImageGallery = Template.bind({});
RightImageGallery.args = {
  images: mockData,
  thumbnailPosition: "right",
} as IImageGalleryProps;
